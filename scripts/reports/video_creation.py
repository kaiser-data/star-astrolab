#!/usr/bin/env python3
"""
Generate a landscape report on making videos with open tools, from the
starred-repos dataset: real-footage capture, generated b-roll, narration,
music and sound, listening/QA, and code-driven editing, ranked per task with
Hugging Face adoption evidence and lessons measured on our own promo films.

Inputs:
  data/classified.json
  public/data/graph.json

Output:
  reports/video-creation.md   (+ reports/video-creation.meta.json)

Run: python3 scripts/reports/video_creation.py
"""
import json
import os
from datetime import datetime, timezone

from lib import fmt_stars, CLASSIFIED, GRAPH, fmt_int, days_to_human, activity_label, make_node_for

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SLUG = "video-creation"
TITLE = "How the Best Videos Are Made — The Open Video-Creation Stack"
OUT = os.path.join(ROOT, f"reports/{SLUG}.md")
META_OUT = os.path.join(ROOT, f"reports/{SLUG}.meta.json")

# ---- Curated taxonomy --------------------------------------------------------
TAXONOMY = {
    # Real footage: the product itself, never drawn by AI
    "microsoft/playwright": ("Real footage", "Drives a real browser; its CDP screencast gives crisp 30 fps product footage (its built-in record_video is too soft for UI text)."),
    "btahir/reelbird": ("Real footage", "Free macOS screen recorder with auto-zoom and an instant share link — the quickest honest demo."),
    "unhappychoice/gitlogue": ("Real footage", "Replays a Git history as a cinematic terminal scene — footage for projects that have no UI."),
    "Genymobile/scrcpy": ("Real footage", "Mirrors and records an Android phone from the desktop — real mobile-app footage."),

    # Generated b-roll: mood shots, never the product
    "Lightricks/LTX-2": ("Generated b-roll", "Inference + LoRA trainer for the LTX-2.x audio-video models; LTX-2.5 is the most-downloaded open video model on Hugging Face."),
    "Lightricks/LTX-Desktop": ("Generated b-roll", "Desktop app for LTX models — generate shots locally without writing code."),
    "Wan-Video/Wan2.2": ("Generated b-roll", "Alibaba's Apache-2.0 video models (T2V/I2V/TI2V); quiet on GitHub, still heavily used through ComfyUI."),
    "deepbeepmeep/WanGP": ("Generated b-roll", "'Video generator for the GPU poor' — one runner for Wan, LTX-2.x, MiniMax H3, Hunyuan and more on consumer cards."),
    "hao-ai-lab/FastVideo": ("Generated b-roll", "Unified inference + post-training framework for accelerated (sparse-attention, distilled) video generation."),
    "ModelTC/LightX2V": ("Generated b-roll", "Lightweight inference framework; its 4-step Lightning LoRAs turn a 25-minute Wan shot into ~85 s."),
    "huggingface/diffusers": ("Generated b-roll", "The PyTorch library most open video/image/audio diffusion models ship through."),
    "Comfy-Org/ComfyUI": ("Generated b-roll", "Node-graph GUI and backend for diffusion models — where most open video workflows are shared."),
    "Emily2040/seedance-2.0": ("Generated b-roll", "A prompt-and-shot production pipeline for Seedance 2.0 (a paid, closed model) — useful as a shot-writing method."),

    # Narration
    "OpenBMB/VoxCPM": ("Narration (TTS)", "VoxCPM2: tokenizer-free multilingual TTS with voice design and cloning; Apache-2.0. Our calm-documentary default."),
    "QwenLM/Qwen3-TTS": ("Narration (TTS)", "Apache-2.0 TTS with VoiceDesign (describe a voice in words) and Base cloning; the steadiest loudness across takes we measured."),
    "microsoft/VibeVoice": ("Narration (TTS)", "Microsoft's open voice models (MIT); long-form TTS was withdrawn, Realtime-0.5B with preset voices remains."),
    "resemble-ai/chatterbox": ("Narration (TTS)", "MIT TTS with an emotion/exaggeration knob — a warm alternative take."),
    "fishaudio/fish-speech": ("Narration (TTS)", "Strong expressive TTS; weights are CC-BY-NC-SA — research and personal films only."),
    "SWivid/F5-TTS": ("Narration (TTS)", "Flow-matching TTS with fast zero-shot cloning; weights CC-BY-NC — not for commercial promos."),
    "index-tts/index-tts": ("Narration (TTS)", "Industrial zero-shot TTS with duration control — useful when a line must fit an exact scene length."),
    "kyutai-labs/pocket-tts": ("Narration (TTS)", "Small TTS that runs on a CPU — drafts and scratch narration without a GPU."),
    "jamiepine/voicebox": ("Narration (TTS)", "Open voice studio app: clone, dictate, create — a GUI around open TTS models."),
    "debpalash/VoiceStudio": ("Narration (TTS)", "Fully local ElevenLabs-style studio (cloning, voice design); AGPL-3.0."),
    "Blaizzy/mlx-audio": ("Narration (TTS)", "TTS/STT/STS on Apple Silicon via MLX — narration drafts on a Mac."),

    # Music & sound
    "ace-step/ACE-Step-1.5": ("Music & sound", "MIT music model: a full instrumental take in seconds; section tags in the lyrics field shape the arc. Our score engine."),
    "HeartMuLa/heartlib": ("Music & sound", "Apache-2.0 music-generation family (model, codec, lyric transcriber) — the main open rival in ACE-Step's own benchmark."),
    "WordPress/openverse": ("Music & sound", "Search engine for openly licensed images and audio (CC0/CC-BY) — music and effects with a licence trail."),

    # Listening & checking
    "Leonxlnx/earshot": ("Listening & QA", "'Ears for coding agents': describes audio in words, checks whether music cuts land on the beat, critiques a mix, and renders sound effects in code."),
    "SYSTRAN/faster-whisper": ("Listening & QA", "Fast Whisper transcription — the WER and product-name check on every narration take."),
    "m-bain/whisperX": ("Listening & QA", "Whisper with word-level timestamps — exact caption timing and line lengths."),
    "bradautomates/claude-video": ("Listening & QA", "Lets Claude 'watch' a video: frames + transcript — a second pair of eyes on a render."),

    # Edit, motion & render
    "remotion-dev/remotion": ("Edit & render", "Videos as React components: titles, counters and cuts in code, rendered headless (on Modal for us)."),
    "heygen-com/hyperframes": ("Edit & render", "Write HTML, render video — a composition format built for agents."),
    "ManimCommunity/manim": ("Edit & render", "Precise animated diagrams and math — the explainer engine."),
    "HarleyCoops/Math-To-Manim": ("Edit & render", "Turns a prompt or image into manim scenes and study notes."),
    "motiondivision/motion": ("Edit & render", "React/JS animation library — the motion inside a coded scene."),
    "juliangarnier/anime": ("Edit & render", "Light JS animation engine for SVG/DOM — logo and title motion."),
    "storytold/filmcraft": ("Edit & render", "Open non-linear video editor written in Rust — a timeline when you want hands-on cutting."),
    "OpenCut-app/OpenCut": ("Edit & render", "The open-source CapCut alternative — quick manual edits."),

    # Agentic, end-to-end
    "calesthio/OpenMontage": ("Agentic pipeline", "Agentic video production system: 12 pipelines from brief to finished film."),
    "harry0703/MoneyPrinterTurbo": ("Agentic pipeline", "Topic or keyword → short video with stock footage, TTS and subtitles in one click."),
    "dramaclaw/dramaclaw": ("Agentic pipeline", "Script-to-film engine for dramas, ads and explainers."),
    "HKUDS/ViMax": ("Agentic pipeline", "Director, screenwriter and producer agents around a video generator."),
    "mutonby/openshorts": ("Agentic pipeline", "Finds the strongest moments in a long video and cuts 9:16 shorts."),
    "nateherkai/herk-edit-kit": ("Agentic pipeline", "Edit reels and YouTube Shorts from Claude Code or Codex."),
}

# Adjacent but deliberately excluded (kept honest in the report)
ADJACENT = [
    ("MiniMax-AI/MiniMax-H3", "not starred, but the most-downloaded open video model of 2026 (6.3M downloads/30 days, native stereo audio, 2K). Its licence **excludes the EU, the UK, the USA and South Korea** — outputs may not even be used there. Out for us"),
    ("Lightricks/LTX-Video", "the first LTX generation, superseded by `LTX-2`"),
    ("lllyasviel/FramePack", "influential long-video trick, unmaintained since 2025"),
    ("NVIDIA/cosmos-framework", "world-model framework for robotics and physical AI, not film b-roll"),
    ("SamurAIGPT/seedance-2-generator", "a SaaS shell around a paid reseller API — no model inside"),
    ("SamurAIGPT/muapi-comfyui", "ComfyUI nodes that call a paid API (muapi.ai), not open weights"),
    ("Anil-matcha/Open-Generative-AI", "front-end for many hosted image/video models"),
    ("duixcom/Duix-Avatar", "talking-head avatars: a generated person presenting is out of scope (and needs clear labelling)"),
    ("Nutlope/hallmark", "anti-AI-slop *design* skill for web UIs — good for the product you film, not for the film"),
    ("yt-dlp/yt-dlp", "downloads other people's videos — fine for study, not as footage without a licence"),
    ("pipecat-ai/pipecat", "real-time voice agents — see the *Voice agents* report"),
]

# Task-ranked picks: (task, [(repo, note) x3], evidence)
TASK_RANKINGS = [
    ("Product footage (the part that must be true)",
     [("microsoft/playwright", "scripted, repeatable, sharp UI text"),
      ("btahir/reelbird", "fastest honest screen demo on a Mac"),
      ("unhappychoice/gitlogue", "terminal/repo projects with no UI")],
     "Rule: AI never draws the product. CDP screencast at JPEG q95 → 30 fps stayed readable where record_video blurred text."),
    ("Mood b-roll, self-hosted, usable in the EU",
     [("Lightricks/LTX-2", "LTX-2.5: ♥10.5k, 2.49M downloads/30 d, native 1080p + audio"),
      ("Wan-Video/Wan2.2", "Apache-2.0; Comfy-Org/Wan-2.2 9.5M downloads/30 d"),
      ("deepbeepmeep/WanGP", "one runner for both on a consumer GPU")],
     "LTX-2.x licence is free under $10M revenue. MiniMax H3 leads on downloads but excludes the EU/UK/US/KR."),
    ("Extra takes fast (iterate on a shot)",
     [("ModelTC/LightX2V", "4-step Lightning LoRA: ~85 s vs ~25 min per Wan shot (H200, measured)"),
      ("hao-ai-lab/FastVideo", "sparse attention + distilled checkpoints"),
      ("deepbeepmeep/WanGP", "low-VRAM profiles for every model")],
     "Fast takes look busier and more stylised — they add options, not a free upgrade."),
    ("Calm narrator for a commercial film",
     [("OpenBMB/VoxCPM", "VoxCPM2 Apache-2.0, 965k downloads/30 d; best hushed storyteller"),
      ("QwenLM/Qwen3-TTS", "Apache-2.0, 3.45M downloads/30 d; cloned takes stayed within 2 LU"),
      ("resemble-ai/chatterbox", "MIT, 2.24M downloads/30 d; warm alternative")],
     "Licence decides first: F5-TTS (CC-BY-NC) and fish-speech (CC-BY-NC-SA) are non-commercial."),
    ("Narration without cloning or a GPU",
     [("microsoft/VibeVoice", "MIT Realtime-0.5B, preset voices, streams"),
      ("kyutai-labs/pocket-tts", "runs on a CPU"),
      ("Blaizzy/mlx-audio", "Apple Silicon")],
     "Good for scratch narration while the cut is still moving; cast the final voice later."),
    ("A score that fits the picture",
     [("ace-step/ACE-Step-1.5", "MIT; 4 takes of ~80 s in ~2 min on an L40S (measured)"),
      ("HeartMuLa/heartlib", "Apache-2.0 alternative, strongest open rival in ACE-Step's paper"),
      ("WordPress/openverse", "licensed human-made tracks when generation won't do")],
     "Score after picture lock, whole bars per scene, generate exact length + 2 bars — never time-stretch."),
    ("Sound effects on the cuts",
     [("Leonxlnx/earshot", "renders whooshes, pops and ticks in code, aimed at a frame; no licence questions"),
      ("WordPress/openverse", "CC0/CC-BY effects with attribution data"),
      ("Lightricks/LTX-2", "generates synced ambience with the shot (audio-video model)")],
     "Crossfades hide cuts; a soft accent under the voice, out of 1–4 kHz, makes them land."),
    ("Checking the sound before anyone hears it",
     [("Leonxlnx/earshot", "beat clarity, % of cuts on an onset, genre drift, mix critique"),
      ("SYSTRAN/faster-whisper", "WER + exact product-name check per take"),
      ("bradautomates/claude-video", "frames + transcript of the finished render")],
     "On one promo, earshot's `critique` scored the mix 22/22 while `timeline` showed only 38 % of cuts on the beat — the music did not fit."),
    ("Edit and render in code",
     [("remotion-dev/remotion", "React scenes, exact frames, headless render"),
      ("heygen-com/hyperframes", "HTML-to-video, agent-friendly"),
      ("ManimCommunity/manim", "diagrams and math explainers")],
     "Code edits are re-runnable: a script change re-renders both formats (16:9 + 4:5) in minutes."),
    ("Topic to finished short in one go",
     [("calesthio/OpenMontage", "most complete agentic pipeline"),
      ("harry0703/MoneyPrinterTurbo", "simplest: topic → short with subtitles"),
      ("dramaclaw/dramaclaw", "story-driven ads and dramas")],
     "Fast drafts; nobody checks that the claims on screen are true — keep a human truth pass."),
    ("Turning long videos into shorts",
     [("mutonby/openshorts", "AI moment detection → 9:16 clips"),
      ("nateherkai/herk-edit-kit", "agent-driven reels from Claude Code"),
      ("OpenCut-app/OpenCut", "manual polish on the timeline")],
     "Feeds play muted: burn in captions and put one claim per scene on screen."),
]

# Hugging Face adoption evidence, retrieved 2026-11-04 (frozen text).
# (model id, hearts, downloads last 30 days, licence, usable for a commercial EU film?)
HF_EVIDENCE = [
    ("Lightricks/LTX-2.5", "10,495", "2,488,128", "LTX-2.x community (free < $10M revenue, gated)", "Yes"),
    ("Comfy-Org/Wan-2.2", "995", "9,489,939", "Apache-2.0", "Yes"),
    ("MiniMaxAI/MiniMax-H3", "6,548", "6,335,317", "MiniMax H3 community (excludes EU/UK/US/KR)", "**No**"),
    ("openbmb/VoxCPM2", "1,750", "965,306", "Apache-2.0", "Yes"),
    ("Qwen/Qwen3-TTS-12Hz-1.7B-Base", "586", "3,453,075", "Apache-2.0", "Yes"),
    ("ResembleAI/chatterbox", "1,887", "2,239,938", "MIT", "Yes"),
    ("microsoft/VibeVoice-Realtime-0.5B", "1,309", "233,005", "MIT", "Yes"),
    ("SWivid/F5-TTS", "1,226", "1,275,416", "CC-BY-NC-4.0", "**No** (non-commercial)"),
    ("fishaudio/openaudio-s1-mini", "789", "2,160", "CC-BY-NC-SA-4.0", "**No** (non-commercial)"),
    ("ACE-Step/Ace-Step1.5", "937", "93,349", "MIT", "Yes"),
    ("HeartMuLa/HeartMuLa-oss-3B", "262", "775", "Apache-2.0", "Yes"),
]

# Lessons measured on our own films (frozen text; numbers from the production logs).
CRAFT_RULES = [
    ("Never let AI draw the product",
     "Product UI, numbers and charts come from a real screen recording. Generated video is only for mood: sky, light, objects. A generated 'UI' is a fabricated feature."),
    ("Every narrated claim is true on screen",
     "Run every live feature you show before locking the script. If the output is wrong, change the shot or the line, never the truth."),
    ("Write for someone who has never heard of it",
     "Name the 3–4 words the film can't avoid and give each an everyday picture: 'a star is a public vote of trust'."),
    ("A calm voice, not an advert",
     "Exclamation marks and short imperatives make TTS shout. Full, gentle sentences read as a storyteller. Offer 2–3 voices and let the ear decide."),
    ("Score to the locked cut",
     "Music written before the edit is final never fits. Make every scene a whole number of bars and give the score an arc and a real ending."),
    ("Mix for a phone in a noisy room",
     "Phone speakers drop everything under ~200 Hz. EQ the music around the voice, duck it under speech and master to −14 LUFS. On the Astrolab promo the phone-band loudness rose from −17.4 to −14.6 LUFS."),
    ("Let a machine listen first, then a person",
     "earshot measures whether cuts land on the beat and whether the genre drifts; Whisper catches a misread product name. Then a person listens around every cut."),
    ("Label what is synthetic",
     "End card: which voice and which shots are AI-generated, and that the app footage is a real recording (EU AI Act Art. 50)."),
]

# ---- Load --------------------------------------------------------------------
with open(CLASSIFIED) as f:
    cl = json.load(f)
with open(GRAPH) as f:
    gr = json.load(f)

by_name = {r["full_name"]: r for r in cl["repos"]}
nodes_by_id = {n["id"]: n for n in gr["nodes"]}
name_to_nodeid = {n["full_name"]: n["id"] for n in gr["nodes"]}

sel_names = list(TAXONOMY.keys())
sel_node_ids = {name_to_nodeid[n] for n in sel_names if n in name_to_nodeid}
inter_edges = [l for l in gr["links"]
               if l["source"] in sel_node_ids and l["target"] in sel_node_ids]

node_for = make_node_for(nodes_by_id, name_to_nodeid)

# ---- Build -------------------------------------------------------------------
gen = cl.get("generatedAt", "")
user = cl.get("username", "")
lines = []
A = lines.append

A(f"# {TITLE}")
A("")
A(f"> Derived from **{user}**'s {fmt_int(cl['total'])} starred repos "
  f"(snapshot `{gen}`), cross-referenced with the repo-similarity graph "
  f"({fmt_int(len(gr['nodes']))} nodes / {fmt_int(len(gr['links']))} edges, "
  f"{len(gr['communities'])} communities). Model choices are backed by "
  f"Hugging Face adoption numbers and licences, and the craft rules by "
  f"measurements from our own promo films — see Methodology.")
A(">")
A(f"> Generated {datetime.now(timezone.utc).strftime('%Y-%m-%d')} by "
  f"`scripts/reports/video_creation.py` (regenerate any time — no API cost).")
A("")

present = [n for n in sel_names if n in by_name]
total_stars = sum(by_name[n]["stars"] for n in present)
cats = {}
for n in present:
    cats.setdefault(TAXONOMY[n][0], []).append(n)
order = ["Real footage", "Generated b-roll", "Narration (TTS)", "Music & sound",
         "Listening & QA", "Edit & render", "Agentic pipeline"]

# --- Executive summary
A("## Executive summary")
A("")
A(f"- **{len(present)} video-making tools** in your stars "
  f"(**{fmt_int(total_stars)}★** combined), arranged along the way a film is made:")
for c in order:
    if cats.get(c):
        A(f"  - **{c}** ({len(cats[c])}): "
          + ", ".join(f"`{x.split('/')[-1]}`" for x in sorted(cats[c], key=lambda x: -by_name[x]['stars'])))
A("- **A good video is mostly not generated.** The best results here came from real "
  "screen footage of the product, a calm voice, music written to the finished cut and a "
  "mix checked on a phone. Generated video only adds mood between the true parts.")
A("- **Every stage now has a strong open option you can run yourself**: `LTX-2` and "
  "`Wan2.2` for b-roll, `VoxCPM` and `Qwen3-TTS` for the voice, `ACE-Step-1.5` for the "
  "score, `remotion` for the edit.")
A("- **New this month: tools that listen.** `earshot` gives an agent ears: it can tell "
  "whether the music's beat matches the cuts and whether the mix will hold up. Until now "
  "only a person could check that.")
A("- **Licences matter more than benchmarks.** Several of the strongest models cannot go in "
  "a commercial film: `F5-TTS` and `fish-speech` weights are non-commercial, and MiniMax H3 "
  "excludes the EU entirely. Read the licence on the model card before the first render.")
A("- **GitHub health under-rates model repos.** `Wan2.2`, `Qwen3-TTS` and `chatterbox` read "
  "*Declining* below because a model repo goes quiet once the weights ship, yet their "
  "weights are downloaded millions of times a month. Judge models on the Hugging Face table.")
A("")

# --- Pipeline table
A("## How a film is made — and which tool does each step")
A("")
A("| Step | What happens | Tools in your stars |")
A("|---|---|---|")
A("| **1. Script** | 6–9 calm lines, one idea per scene, 60–75 s | a person (and `OpenMontage`, `dramaclaw` for drafts) |")
A("| **2. Real footage** | Record the product doing the thing the line says | `playwright`, `reelbird`, `gitlogue`, `scrcpy` |")
A("| **3. Voice** | Cast 2–3 voices on two lines, then render every line | `VoxCPM`, `Qwen3-TTS`, `VibeVoice`, `chatterbox` |")
A("| **4. B-roll** | Mood shots between the true parts | `LTX-2`, `Wan2.2`, `WanGP`, `LightX2V`, `FastVideo`, `ComfyUI` |")
A("| **5. Edit** | Titles, counters, cuts, captions in code | `remotion`, `hyperframes`, `manim`, `motion` |")
A("| **6. Score** | Music written to the locked cut, scenes on whole bars | `ACE-Step-1.5`, `heartlib`, `openverse` |")
A("| **7. Sound effects** | Soft accents where the picture changes | `earshot` (sfx, kits), `openverse` |")
A("| **8. Listen & check** | Beat fit, mix, phone band, names read right | `earshot`, `faster-whisper`, `whisperX`, `claude-video` |")
A("| **9. Deliver** | 16:9 master + 4:5 feed cut with burned-in captions | `remotion` render |")
A("")

# --- Craft rules
A("## Eight rules from our own films")
A("")
A("Each rule below came from a cut that didn't work. The numbers are measured, not estimated.")
A("")
for i, (rule, body) in enumerate(CRAFT_RULES, 1):
    A(f"{i}. **{rule}.** {body}")
A("")

# --- Master comparison
A("## Master comparison")
A("")
A("Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; "
  "`Activity` is derived from days-since-push + 90-day commits. For model repos, "
  "read the Hugging Face table further down instead.")
A("")
A("| Tool | Category | Lang | License | ★ Stars | Lifecycle | Health | "
  "Activity | Last push | Age | Contrib(90d) |")
A("|" + "---|" * 11)
for n in sorted(present, key=lambda x: -by_name[x]["stars"]):
    r = by_name[n]
    A("| [{name}]({url}) | {cat} | {lang} | {lic} | {stars} | {lc} | {hs} | "
      "{act} | {push} | {age} | {auth} |".format(
        name=n, url=r["url"], cat=TAXONOMY[n][0],
        lang=r.get("primary_language") or "—",
        lic=(r.get("license") or "—"),
        stars=fmt_stars(r),
        lc=r.get("lifecycle_stage") or "—",
        hs=r.get("health_score") if r.get("health_score") is not None else "—",
        act=activity_label(r),
        push=days_to_human(r.get("days_since_push")) + " ago",
        age=days_to_human(r.get("age_days")),
        auth=r.get("unique_authors_90d") if r.get("unique_authors_90d") is not None else "—",
    ))
A("")

# --- Task rankings
A("## Task rankings — which tool for which job")
A("")
A("Ranked picks per task. Dataset metrics say who is *maintained*; Hugging Face "
  "adoption, licences and our own measured runs say who is *worth using* "
  "(evidence per row, sources in Methodology).")
A("")
A("| Task | 🥇 First pick | 🥈 Second | 🥉 Third | Evidence / note |")
A("|" + "---|" * 5)
for task, picks, evidence in TASK_RANKINGS:
    cells = [f"`{repo.split('/')[-1]}` — {note}" for repo, note in picks]
    A(f"| **{task}** | {cells[0]} | {cells[1]} | {cells[2]} | {evidence} |")
A("")

# --- HF evidence
A("## The models behind the repos (Hugging Face, 2026-11-04)")
A("")
A("A model's GitHub repo goes quiet once the weights ship, so commit-based health "
  "calls good models *Declining*. Downloads and hearts on Hugging Face show what "
  "people actually run; the licence decides whether you may use it.")
A("")
A("| Model | ♥ Hearts | Downloads (30 d) | Licence | Commercial film in the EU? |")
A("|" + "---|" * 5)
for mid, likes, dl, lic, ok in HF_EVIDENCE:
    A(f"| [{mid}](https://huggingface.co/{mid}) | {likes} | {dl} | {lic} | {ok} |")
A("")

# --- Category deep dives
A("## By category")
A("")
cat_blurb = {
    "Real footage": "The part of the film that must be true. Record the product doing exactly "
        "what the narration says — these tools make that repeatable and sharp.",
    "Generated b-roll": "Open video models and the runners around them. Use them for mood "
        "(light, sky, objects), never for the product itself.",
    "Narration (TTS)": "Open voices. Pick by licence first, then by ear: cast two lines in "
        "several voices before rendering the script.",
    "Music & sound": "The score and the sound around the voice — generated to the cut, or "
        "found with a licence attached.",
    "Listening & QA": "Tools that hear and read the result, so problems are caught before "
        "a person has to listen to every take.",
    "Edit & render": "Where the film is assembled. Code-based editors make every change "
        "re-runnable in both formats.",
    "Agentic pipeline": "Brief-to-film systems. Fast for drafts and shorts; none of them "
        "checks that what the film claims is true.",
}
for cat in order:
    members = cats.get(cat) or []
    if not members:
        continue
    A(f"### {cat}")
    A("")
    A(f"_{cat_blurb[cat]}_")
    A("")
    for n in sorted(members, key=lambda x: -by_name[x]["stars"]):
        r = by_name[n]
        topics = ", ".join((r.get("topics") or [])[:8]) or "—"
        A(f"- **[{n}]({r['url']})** · {fmt_int(r['stars'])}★ · {r.get('primary_language') or '—'} · "
          f"{r.get('lifecycle_stage','—')}  ")
        A(f"  {TAXONOMY[n][1]}  ")
        A(f"  <sub>topics: {topics}</sub>")
    A("")

# --- Spotlight
A("## Spotlight: giving the agent ears")
A("")
A("Until recently an agent making a film could check the picture (screenshots, contact "
  "sheets) but not the sound: whether the music fits, whether a cut lands on the beat, "
  "whether the voice still reads on a phone. `earshot` (MIT, CPU-only) closes that gap:")
A("")
A("- **`earshot timeline film.mp4 --cues …`** — beat clarity, which share of scene cuts land "
  "on a musical onset, and the genre of each section. On one promo it showed beat clarity "
  "0.18 and 38 % of cuts on the grid, with the style drifting into house and vocal chops: "
  "exactly what the listener had complained about.")
A("- **`earshot critique`** is a mastering gate, not a fit test: the same promo scored "
  "22/22 there. Use both.")
A("- **`earshot kit` / `sfx render`** draws soft pops, ticks and whooshes in code, aimed at "
  "a frame, so every cut can get its own small accent with no sample licences.")
A("- Paired with **`ACE-Step-1.5`** (score written to the cue sheet) and **Whisper** "
  "(narration check), the whole soundtrack can be checked by numbers before a person "
  "listens around the cuts.")
A("")

# --- Graph analysis
A("## Graph analysis — how they relate")
A("")
comm = {}
for n in present:
    nd = node_for(n)
    if nd is not None:
        comm.setdefault(nd.get("community"), []).append(n)
A(f"**Community clustering.** These {len(present)} tools span "
  f"**{len(comm)} of the graph's {len(gr['communities'])} communities** — video "
  f"making borrows from many neighbourhoods of the collection.")
A("")
for c, names in sorted(comm.items(), key=lambda x: -len(x[1])):
    if len(names) >= 2:
        A(f"- **Community {c}** ({len(names)}): " + ", ".join(f"`{x}`" for x in names))
A("")

ranked = sorted(
    [(node_for(n).get("pagerank", 0) if node_for(n) else 0, n) for n in present],
    key=lambda x: -x[0],
)
A(f"**Centrality (PageRank in the full {fmt_int(len(gr['nodes']))}-repo graph)** — "
  "the most connected video tools in your collection:")
A("")
for pr, n in ranked[:10]:
    A(f"- `{n}` — PageRank {pr:.4f}")
A("")

A("**Direct links between video tools** (top similarity edges where both endpoints "
  "are in this report):")
A("")
if inter_edges:
    id_to_name = {v: k for k, v in name_to_nodeid.items()}
    shown = sorted(inter_edges, key=lambda x: -x["weight"])[:15]
    for e in shown:
        a = id_to_name.get(e["source"], e["source"])
        b = id_to_name.get(e["target"], e["target"])
        why = []
        if e.get("shared_topics"):
            why.append("topics: " + ", ".join(e["shared_topics"][:4]))
        if e.get("shared_authors"):
            why.append("authors: " + ", ".join(e["shared_authors"][:3]))
        A(f"- `{a}` ⇄ `{b}` (w={e['weight']:.3f})" + (f" — {'; '.join(why)}" if why else ""))
    if len(inter_edges) > 15:
        A(f"- …and {len(inter_edges) - 15} more.")
else:
    A("- _None._")
A("")

# --- Maintenance / risk
A("## Maintenance & risk signal")
A("")
A("Bus factor = commit concentration (1 = single-maintainer risk). Pair with lifecycle "
  "+ activity before adopting a *tool*; for *model* repos see the Hugging Face table.")
A("")
A("| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |")
A("|---|---|---|---|---|---|---|")
for n in sorted(present, key=lambda x: -(by_name[x].get("health_score") or 0)):
    r = by_name[n]
    tas = r.get("top_author_share")
    A("| {n} | {h} | {lc} | {act} | {bf} | {tas} | {rel} |".format(
        n=n, h=r.get("health_score", "—"), lc=r.get("lifecycle_stage", "—"),
        act=activity_label(r), bf=r.get("bus_factor", "—"),
        tas=f"{tas:.0%}" if isinstance(tas, (int, float)) else "—",
        rel=r.get("releases_total", "—")))
A("")
A("Watch items: `ViMax` and `OpenCut` read *Declining* as tools (not models) — check "
  "recent commits before building on them; `VoiceStudio` and `OpenMontage` are AGPL-3.0, "
  "which matters if you ship them inside a product; GitHub detects no standard licence for `herk-edit-kit`, `dramaclaw` or `index-tts` — read "
  "their terms before commercial use.")
A("")

# --- Adjacent
A("## Adjacent (deliberately not listed as video tools)")
A("")
for name, why in ADJACENT:
    r = by_name.get(name)
    star = f" ({fmt_int(r['stars'])}★)" if r else ""
    A(f"- **{name}**{star} — {why}")
A("")

# --- Methodology
A("## Methodology & caveats")
A("")
A("- **Source**: `data/classified.json` + `public/data/graph.json` for all repo "
  "metrics and graph structure. No API calls at generation time; fully reproducible.")
A("- **Selection**: keyword scan (video / tts / voice / music / audio / sound / remotion / "
  "animation / diffusion / subtitle) + manual curation into film-making steps. Voice agents, "
  "transcription apps, avatars and paid-API wrappers were routed to adjacent reports or "
  "excluded (see above).")
A("- **Model evidence**: Hugging Face model API (`likes`, 30-day `downloads`, `trendingScore`, "
  "card licence), retrieved 2026-11-04. Licences read from each model card / LICENSE file "
  "(MiniMax H3 community licence, LTX-2.x community licence). Public leaderboards "
  "(Artificial Analysis, TTS Arena) disagreed across snapshots and rank mostly closed "
  "models, so they were not used for the rankings.")
A("- **Craft rules and timings** come from our own productions (Astrolab promo, 2026-11): "
  "Modal run logs, ffmpeg `ebur128` loudness measurements and `earshot` reports. "
  "ACE-Step 1.5 benchmark claims are vendor-reported ([paper](https://arxiv.org/abs/2602.00744)).")
A("- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and "
  "may lag GitHub's current state. Model numbers and licences are frozen text — re-check "
  "them when a major model ships.")
A("")
A(f"<sub>Tools covered: {len(present)} · Snapshot: {gen}</sub>")

with open(OUT, "w") as f:
    f.write("\n".join(lines) + "\n")

# --- Sidecar meta (consumed by build_index.py) --------------------------------
top = sorted(present, key=lambda x: -by_name[x]["stars"])[:5]
meta = {
    "slug": SLUG,
    "title": TITLE,
    "file": f"{SLUG}.md",
    "category": "AI / Apps",
    "summary": (f"{len(present)} open tools ({fmt_int(total_stars)}★) for making a film, "
                "step by step: real footage, generated b-roll, narration, music, sound "
                "checks and code editing — ranked per task with Hugging Face evidence, "
                "licences, and eight rules measured on our own promo films."),
    "tool_count": len(present),
    "total_stars": total_stars,
    "categories": {c: len(cats.get(c, [])) for c in order},
    "top_tools": [{"name": n, "stars": by_name[n]["stars"]} for n in top],
    "snapshot": gen,
    "generated": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
    "generator": "scripts/reports/video_creation.py",
}
with open(META_OUT, "w") as f:
    json.dump(meta, f, indent=2)

print(f"Wrote {OUT}")
print(f"Wrote {META_OUT}")
print(f"  tools: {len(present)} / {len(sel_names)} curated")
missing = [n for n in sel_names if n not in by_name]
if missing:
    print("  WARNING missing:", missing)
