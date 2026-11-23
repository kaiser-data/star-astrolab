# How the Best Videos Are Made — The Open Video-Creation Stack

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities). Model choices are backed by Hugging Face adoption numbers and licences, and the craft rules by measurements from our own promo films — see Methodology.
>
> Generated 2026-11-23 by `scripts/reports/video_creation.py` (regenerate any time — no API cost).

![Top tools by stars](assets/video-creation-top-tools.svg)

![Tools per category](assets/video-creation-categories.svg)


## Executive summary

- **43 video-making tools** in your stars (**1,627,264★** combined), arranged along the way a film is made:
  - **Real footage** (4): `scrcpy`, `playwright`, `gitlogue`, `reelbird`
  - **Generated b-roll** (9): `ComfyUI`, `diffusers`, `Wan2.2`, `WanGP`, `LTX-2`, `seedance-2.0`, `FastVideo`, `LightX2V`, `LTX-Desktop`
  - **Narration (TTS)** (10): `VoiceStudio`, `voicebox`, `VibeVoice`, `VoxCPM`, `fish-speech`, `chatterbox`, `index-tts`, `F5-TTS`, `Qwen3-TTS`, `pocket-tts`
  - **Music & sound** (3): `ACE-Step-1.5`, `heartlib`, `openverse`
  - **Listening & QA** (4): `faster-whisper`, `whisperX`, `claude-video`, `earshot`
  - **Edit & render** (8): `OpenCut`, `hyperframes`, `remotion`, `anime`, `manim`, `motion`, `filmcraft`, `Math-To-Manim`
  - **Agentic pipeline** (5): `MoneyPrinterTurbo`, `ViMax`, `openshorts`, `dramaclaw`, `herk-edit-kit`
- **A good video is mostly not generated.** The best results here came from real screen footage of the product, a calm voice, music written to the finished cut and a mix checked on a phone. Generated video only adds mood between the true parts.
- **Every stage now has a strong open option you can run yourself**: `LTX-2` and `Wan2.2` for b-roll, `VoxCPM` and `Qwen3-TTS` for the voice, `ACE-Step-1.5` for the score, `remotion` for the edit.
- **New this month: tools that listen.** `earshot` gives an agent ears: it can tell whether the music's beat matches the cuts and whether the mix will hold up. Until now only a person could check that.
- **Licences matter more than benchmarks.** Several of the strongest models cannot go in a commercial film: `F5-TTS` and `fish-speech` weights are non-commercial, and MiniMax H3 excludes the EU entirely. Read the licence on the model card before the first render.
- **GitHub health under-rates model repos.** `Wan2.2`, `Qwen3-TTS` and `chatterbox` read *Declining* below because a model repo goes quiet once the weights ship, yet their weights are downloaded millions of times a month. Judge models on the Hugging Face table.

## How a film is made — and which tool does each step

| Step | What happens | Tools in your stars |
|---|---|---|
| **1. Script** | 6–9 calm lines, one idea per scene, 60–75 s | a person (and `OpenMontage`, `dramaclaw` for drafts) |
| **2. Real footage** | Record the product doing the thing the line says | `playwright`, `reelbird`, `gitlogue`, `scrcpy` |
| **3. Voice** | Cast 2–3 voices on two lines, then render every line | `VoxCPM`, `Qwen3-TTS`, `VibeVoice`, `chatterbox` |
| **4. B-roll** | Mood shots between the true parts | `LTX-2`, `Wan2.2`, `WanGP`, `LightX2V`, `FastVideo`, `ComfyUI` |
| **5. Edit** | Titles, counters, cuts, captions in code | `remotion`, `hyperframes`, `manim`, `motion` |
| **6. Score** | Music written to the locked cut, scenes on whole bars | `ACE-Step-1.5`, `heartlib`, `openverse` |
| **7. Sound effects** | Soft accents where the picture changes | `earshot` (sfx, kits), `openverse` |
| **8. Listen & check** | Beat fit, mix, phone band, names read right | `earshot`, `faster-whisper`, `whisperX`, `claude-video` |
| **9. Deliver** | 16:9 master + 4:5 feed cut with burned-in captions | `remotion` render |

## Eight rules from our own films

Each rule below came from a cut that didn't work. The numbers are measured, not estimated.

1. **Never let AI draw the product.** Product UI, numbers and charts come from a real screen recording. Generated video is only for mood: sky, light, objects. A generated 'UI' is a fabricated feature.
2. **Every narrated claim is true on screen.** Run every live feature you show before locking the script. If the output is wrong, change the shot or the line, never the truth.
3. **Write for someone who has never heard of it.** Name the 3–4 words the film can't avoid and give each an everyday picture: 'a star is a public vote of trust'.
4. **A calm voice, not an advert.** Exclamation marks and short imperatives make TTS shout. Full, gentle sentences read as a storyteller. Offer 2–3 voices and let the ear decide.
5. **Score to the locked cut.** Music written before the edit is final never fits. Make every scene a whole number of bars and give the score an arc and a real ending.
6. **Mix for a phone in a noisy room.** Phone speakers drop everything under ~200 Hz. EQ the music around the voice, duck it under speech and master to −14 LUFS. On the Astrolab promo the phone-band loudness rose from −17.4 to −14.6 LUFS.
7. **Let a machine listen first, then a person.** earshot measures whether cuts land on the beat and whether the genre drifts; Whisper catches a misread product name. Then a person listens around every cut.
8. **Label what is synthetic.** End card: which voice and which shots are AI-generated, and that the app footage is a real recording (EU AI Act Art. 50).

## Master comparison

Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits. For model repos, read the Hugging Face table further down instead.

| Tool | Category | Lang | License | ★ Stars | Lifecycle | Health | Activity | Last push | Age | Contrib(90d) |
|---|---|---|---|---|---|---|---|---|---|---|
| [Genymobile/scrcpy](https://github.com/Genymobile/scrcpy) | Real footage | C | Apache-2.0 | 155,481 (▲523) | Classic | 67 | very active | 1d ago | 9.0y | 11 |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Generated b-roll | Python | GPL-3.0 | 148,264 (▲1,112) | Classic | 80 | very active | 0d ago | 3.9y | 17 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Agentic pipeline | Python | MIT | 145,203 (▲1,249) | Mature | 100 | very active | 0d ago | 2.7y | 39 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Narration (TTS) | Python | AGPL-3.0 | 117,019 (▲5,311) | Hot | 80 | very active | 0d ago | 7mo | 5 |
| [microsoft/playwright](https://github.com/microsoft/playwright) | Real footage | TypeScript | Apache-2.0 | 100,899 (▲582) | Classic | 85 | very active | 0d ago | 7.0y | 11 |
| [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | Edit & render | TypeScript | MIT | 99,239 (▲602) | Declining | 42 | active | 2mo ago | 1.4y | 1 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Edit & render | TypeScript | Apache-2.0 | 88,750 (▲3,716) | Hot | 78 | very active | 0d ago | 8mo | 4 |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | Edit & render | TypeScript | NOASSERTION | 75,157 (▲1,555) | Classic | 80 | very active | 0d ago | 6.4y | 3 |
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | Edit & render | JavaScript | MIT | 75,002 (▲199) | Mature | 52 | active | 21d ago | 10.7y | 0 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | Narration (TTS) | Python | MIT | 61,198 (▲450) | Hot | 74 | very active | 2d ago | 10mo | 15 |
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Narration (TTS) | Python | MIT | 57,511 (▲304) | Mature | 47 | active | 1mo ago | 1.2y | 2 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | Narration (TTS) | Python | Apache-2.0 | 42,907 (▲362) | Mature | 61 | active | 14d ago | 1.2y | 5 |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim) | Edit & render | Python | MIT | 42,846 (▲241) | Classic | 86 | very active | 0d ago | 6.5y | 32 |
| [motiondivision/motion](https://github.com/motiondivision/motion) | Edit & render | TypeScript | MIT | 35,485 (▲232) | Classic | 65 | very active | 0d ago | 8.0y | 3 |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | Generated b-roll | Python | Apache-2.0 | 34,969 (▲46) | Classic | 88 | very active | 0d ago | 4.5y | 41 |
| [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | Narration (TTS) | Python | NOASSERTION | 33,841 (▲89) | Mature | 60 | active | 9d ago | 3.1y | 6 |
| [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | Narration (TTS) | Python | MIT | 28,057 (▲193) | Declining | 37 | active | 19d ago | 1.6y | 1 |
| [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | Listening & QA | Python | MIT | 26,961 (▲166) | Classic | 59 | active | 11d ago | 3.8y | 10 |
| [m-bain/whisperX](https://github.com/m-bain/whisperX) | Listening & QA | Python | BSD-2-Clause | 25,621 (▲249) | Classic | 67 | active | 2d ago | 4.0y | 4 |
| [index-tts/index-tts](https://github.com/index-tts/index-tts) | Narration (TTS) | Python | NOASSERTION | 25,254 (▲130) | Mature | 50 | active | 1mo ago | 1.8y | 6 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Listening & QA | Python | MIT | 21,613 (▲637) | Rising | 58 | active | 2mo ago | 7mo | 1 |
| [storytold/filmcraft](https://github.com/storytold/filmcraft) | Edit & render | Rust | Apache-2.0 | 18,897 (▲507) | Hot | 74 | very active | 0d ago | 1mo | 13 |
| [Wan-Video/Wan2.2](https://github.com/Wan-Video/Wan2.2) | Generated b-roll | Python | Apache-2.0 | 18,858 (▲163) | Declining | 34 | slowing | 2mo ago | 1.3y | 2 |
| [SWivid/F5-TTS](https://github.com/SWivid/F5-TTS) | Narration (TTS) | Python | MIT | 15,641 (▲38) | Mature | 69 | active | 20d ago | 2.1y | 3 |
| [ace-step/ACE-Step-1.5](https://github.com/ace-step/ACE-Step-1.5) | Music & sound | Python | MIT | 15,106 (▲260) | Mature | 75 | active | 15d ago | 1.2y | 8 |
| [QwenLM/Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) | Narration (TTS) | Python | Apache-2.0 | 14,607 (▲157) | Declining | 18 | stale | 8mo ago | 10mo | 0 |
| [HKUDS/ViMax](https://github.com/HKUDS/ViMax) | Agentic pipeline | Python | MIT | 13,003 (▲67) | Declining | 38 | active | 1mo ago | 1.7y | 1 |
| [deepbeepmeep/WanGP](https://github.com/deepbeepmeep/WanGP) | Generated b-roll | Python | NOASSERTION | 12,172 (▲259) | Hot | 74 | very active | 1d ago | 1.7y | 3 |
| [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) | Narration (TTS) | Python | MIT | 10,389 (▲74) | Hot | 76 | very active | 0d ago | 10mo | 31 |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Generated b-roll | Python | Apache-2.0 | 10,366 (▲99) | Rising | 67 | active | 4d ago | 10mo | 4 |
| [mutonby/openshorts](https://github.com/mutonby/openshorts) | Agentic pipeline | Python | MIT | 9,774 (▲1,175) | Hot | 60 | very active | 0d ago | 11mo | 3 |
| [Emily2040/seedance-2.0](https://github.com/Emily2040/seedance-2.0) | Generated b-roll | Python | MIT | 8,285 (▲83) | Rising | 58 | active | 1mo ago | 9mo | 1 |
| [dramaclaw/dramaclaw](https://github.com/dramaclaw/dramaclaw) | Agentic pipeline | TypeScript | NOASSERTION | 7,166 (▼562) | Hot | 78 | very active | 0d ago | 8mo | 13 |
| [Leonxlnx/earshot](https://github.com/Leonxlnx/earshot) | Listening & QA | Python | MIT | 5,619 (▲651) | Rising | 75 | very active | 2d ago | 1mo | 1 |
| [unhappychoice/gitlogue](https://github.com/unhappychoice/gitlogue) | Real footage | Rust | ISC | 5,283 (▲10) | Hot | 76 | very active | 0d ago | 1.0y | 3 |
| [hao-ai-lab/FastVideo](https://github.com/hao-ai-lab/FastVideo) | Generated b-roll | Python | Apache-2.0 | 4,849 (▲29) | Mature | 73 | very active | 0d ago | 2.1y | 28 |
| [HeartMuLa/heartlib](https://github.com/HeartMuLa/heartlib) | Music & sound | Python | Apache-2.0 | 3,812 (▲13) | Rising | 48 | very active | 4d ago | 10mo | 4 |
| [nateherkai/herk-edit-kit](https://github.com/nateherkai/herk-edit-kit) | Agentic pipeline | HTML | NOASSERTION | 3,090 (▲210) | Rising | 40 | active | 1mo ago | 7mo | 1 |
| [ModelTC/LightX2V](https://github.com/ModelTC/LightX2V) | Generated b-roll | Python | Apache-2.0 | 3,020 (▲11) | Hot | 70 | very active | 0d ago | 1.7y | 16 |
| [HarleyCoops/Math-To-Manim](https://github.com/HarleyCoops/Math-To-Manim) | Edit & render | Python | MIT | 2,897 (▲18) | Hot | 75 | very active | 1d ago | 1.8y | 5 |
| [Lightricks/LTX-Desktop](https://github.com/Lightricks/LTX-Desktop) | Generated b-roll | Python | Apache-2.0 | 2,328 (▲48) | Rising | 63 | active | 0d ago | 8mo | 3 |
| [WordPress/openverse](https://github.com/WordPress/openverse) | Music & sound | Python | MIT | 773 (▲113) | Classic | 77 | very active | 2d ago | 5.6y | 13 |
| [btahir/reelbird](https://github.com/btahir/reelbird) | Real footage | Swift | MIT | 52 (▲3) | Rising | 75 | very active | 0d ago | 1mo | 1 |

## Task rankings — which tool for which job

Ranked picks per task. Dataset metrics say who is *maintained*; Hugging Face adoption, licences and our own measured runs say who is *worth using* (evidence per row, sources in Methodology).

| Task | 🥇 First pick | 🥈 Second | 🥉 Third | Evidence / note |
|---|---|---|---|---|
| **Product footage (the part that must be true)** | `playwright` — scripted, repeatable, sharp UI text | `reelbird` — fastest honest screen demo on a Mac | `gitlogue` — terminal/repo projects with no UI | Rule: AI never draws the product. CDP screencast at JPEG q95 → 30 fps stayed readable where record_video blurred text. |
| **Mood b-roll, self-hosted, usable in the EU** | `LTX-2` — LTX-2.5: ♥10.5k, 2.49M downloads/30 d, native 1080p + audio | `Wan2.2` — Apache-2.0; Comfy-Org/Wan-2.2 9.5M downloads/30 d | `WanGP` — one runner for both on a consumer GPU | LTX-2.x licence is free under $10M revenue. MiniMax H3 leads on downloads but excludes the EU/UK/US/KR. |
| **Extra takes fast (iterate on a shot)** | `LightX2V` — 4-step Lightning LoRA: ~85 s vs ~25 min per Wan shot (H200, measured) | `FastVideo` — sparse attention + distilled checkpoints | `WanGP` — low-VRAM profiles for every model | Fast takes look busier and more stylised — they add options, not a free upgrade. |
| **Calm narrator for a commercial film** | `VoxCPM` — VoxCPM2 Apache-2.0, 965k downloads/30 d; best hushed storyteller | `Qwen3-TTS` — Apache-2.0, 3.45M downloads/30 d; cloned takes stayed within 2 LU | `chatterbox` — MIT, 2.24M downloads/30 d; warm alternative | Licence decides first: F5-TTS (CC-BY-NC) and fish-speech (CC-BY-NC-SA) are non-commercial. |
| **Narration without cloning or a GPU** | `VibeVoice` — MIT Realtime-0.5B, preset voices, streams | `pocket-tts` — runs on a CPU | `mlx-audio` — Apple Silicon | Good for scratch narration while the cut is still moving; cast the final voice later. |
| **A score that fits the picture** | `ACE-Step-1.5` — MIT; 4 takes of ~80 s in ~2 min on an L40S (measured) | `heartlib` — Apache-2.0 alternative, strongest open rival in ACE-Step's paper | `openverse` — licensed human-made tracks when generation won't do | Score after picture lock, whole bars per scene, generate exact length + 2 bars — never time-stretch. |
| **Sound effects on the cuts** | `earshot` — renders whooshes, pops and ticks in code, aimed at a frame; no licence questions | `openverse` — CC0/CC-BY effects with attribution data | `LTX-2` — generates synced ambience with the shot (audio-video model) | Crossfades hide cuts; a soft accent under the voice, out of 1–4 kHz, makes them land. |
| **Checking the sound before anyone hears it** | `earshot` — beat clarity, % of cuts on an onset, genre drift, mix critique | `faster-whisper` — WER + exact product-name check per take | `claude-video` — frames + transcript of the finished render | On one promo, earshot's `critique` scored the mix 22/22 while `timeline` showed only 38 % of cuts on the beat — the music did not fit. |
| **Edit and render in code** | `remotion` — React scenes, exact frames, headless render | `hyperframes` — HTML-to-video, agent-friendly | `manim` — diagrams and math explainers | Code edits are re-runnable: a script change re-renders both formats (16:9 + 4:5) in minutes. |
| **Topic to finished short in one go** | `OpenMontage` — most complete agentic pipeline | `MoneyPrinterTurbo` — simplest: topic → short with subtitles | `dramaclaw` — story-driven ads and dramas | Fast drafts; nobody checks that the claims on screen are true — keep a human truth pass. |
| **Turning long videos into shorts** | `openshorts` — AI moment detection → 9:16 clips | `herk-edit-kit` — agent-driven reels from Claude Code | `OpenCut` — manual polish on the timeline | Feeds play muted: burn in captions and put one claim per scene on screen. |

## The models behind the repos (Hugging Face, 2026-11-04)

A model's GitHub repo goes quiet once the weights ship, so commit-based health calls good models *Declining*. Downloads and hearts on Hugging Face show what people actually run; the licence decides whether you may use it.

| Model | ♥ Hearts | Downloads (30 d) | Licence | Commercial film in the EU? |
|---|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | 10,495 | 2,488,128 | LTX-2.x community (free < $10M revenue, gated) | Yes |
| [Comfy-Org/Wan-2.2](https://huggingface.co/Comfy-Org/Wan-2.2) | 995 | 9,489,939 | Apache-2.0 | Yes |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | 6,548 | 6,335,317 | MiniMax H3 community (excludes EU/UK/US/KR) | **No** |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | 1,750 | 965,306 | Apache-2.0 | Yes |
| [Qwen/Qwen3-TTS-12Hz-1.7B-Base](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base) | 586 | 3,453,075 | Apache-2.0 | Yes |
| [ResembleAI/chatterbox](https://huggingface.co/ResembleAI/chatterbox) | 1,887 | 2,239,938 | MIT | Yes |
| [microsoft/VibeVoice-Realtime-0.5B](https://huggingface.co/microsoft/VibeVoice-Realtime-0.5B) | 1,309 | 233,005 | MIT | Yes |
| [SWivid/F5-TTS](https://huggingface.co/SWivid/F5-TTS) | 1,226 | 1,275,416 | CC-BY-NC-4.0 | **No** (non-commercial) |
| [fishaudio/openaudio-s1-mini](https://huggingface.co/fishaudio/openaudio-s1-mini) | 789 | 2,160 | CC-BY-NC-SA-4.0 | **No** (non-commercial) |
| [ACE-Step/Ace-Step1.5](https://huggingface.co/ACE-Step/Ace-Step1.5) | 937 | 93,349 | MIT | Yes |
| [HeartMuLa/HeartMuLa-oss-3B](https://huggingface.co/HeartMuLa/HeartMuLa-oss-3B) | 262 | 775 | Apache-2.0 | Yes |

## By category

### Real footage

_The part of the film that must be true. Record the product doing exactly what the narration says — these tools make that repeatable and sharp._

- **[Genymobile/scrcpy](https://github.com/Genymobile/scrcpy)** · 155,481★ · C · Classic  
  Mirrors and records an Android phone from the desktop — real mobile-app footage.  
  <sub>topics: android, c, sdl2, libav, ffmpeg, screen, mirroring, recording</sub>
- **[microsoft/playwright](https://github.com/microsoft/playwright)** · 100,899★ · TypeScript · Classic  
  Drives a real browser; its CDP screencast gives crisp 30 fps product footage (its built-in record_video is too soft for UI text).  
  <sub>topics: playwright, testing, automation, webkit, firefox, e2e-testing, web, chrome</sub>
- **[unhappychoice/gitlogue](https://github.com/unhappychoice/gitlogue)** · 5,283★ · Rust · Hot  
  Replays a Git history as a cinematic terminal scene — footage for projects that have no UI.  
  <sub>topics: cli-tool, code-animation, developer-tools, git, git-history, git-visualization, productivity, ratatui</sub>
- **[btahir/reelbird](https://github.com/btahir/reelbird)** · 52★ · Swift · Rising  
  Free macOS screen recorder with auto-zoom and an instant share link — the quickest honest demo.  
  <sub>topics: auto-zoom, captions, cloudflare-r2, loom-alternative, macos, macos-app, mcp, mcp-server</sub>

### Generated b-roll

_Open video models and the runners around them. Use them for mood (light, sky, objects), never for the product itself._

- **[Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)** · 148,264★ · Python · Classic  
  Node-graph GUI and backend for diffusion models — where most open video workflows are shared.  
  <sub>topics: stable-diffusion, pytorch, ai, python, comfy, comfyui</sub>
- **[huggingface/diffusers](https://github.com/huggingface/diffusers)** · 34,969★ · Python · Classic  
  The PyTorch library most open video/image/audio diffusion models ship through.  
  <sub>topics: deep-learning, diffusion, image-generation, pytorch, score-based-generative-modeling, image2image, text2image, stable-diffusion</sub>
- **[Wan-Video/Wan2.2](https://github.com/Wan-Video/Wan2.2)** · 18,858★ · Python · Declining  
  Alibaba's Apache-2.0 video models (T2V/I2V/TI2V); quiet on GitHub, still heavily used through ComfyUI.  
  <sub>topics: aigc, video-generation</sub>
- **[deepbeepmeep/WanGP](https://github.com/deepbeepmeep/WanGP)** · 12,172★ · Python · Hot  
  'Video generator for the GPU poor' — one runner for Wan, LTX-2.x, MiniMax H3, Hunyuan and more on consumer cards.  
  <sub>topics: ai, flux, generative-ai, hunyuan-video, ltx-video, video, wan, flux2</sub>
- **[Lightricks/LTX-2](https://github.com/Lightricks/LTX-2)** · 10,366★ · Python · Rising  
  Inference + LoRA trainer for the LTX-2.x audio-video models; LTX-2.5 is the most-downloaded open video model on Hugging Face.  
  <sub>topics: generative-ai, ltx, ltx-2</sub>
- **[Emily2040/seedance-2.0](https://github.com/Emily2040/seedance-2.0)** · 8,285★ · Python · Rising  
  A prompt-and-shot production pipeline for Seedance 2.0 (a paid, closed model) — useful as a shot-writing method.  
  <sub>topics: —</sub>
- **[hao-ai-lab/FastVideo](https://github.com/hao-ai-lab/FastVideo)** · 4,849★ · Python · Mature  
  Unified inference + post-training framework for accelerated (sparse-attention, distilled) video generation.  
  <sub>topics: diffusers, diffusion-models, video-generation, distillation, inference, post-training</sub>
- **[ModelTC/LightX2V](https://github.com/ModelTC/LightX2V)** · 3,020★ · Python · Hot  
  Lightweight inference framework; its 4-step Lightning LoRAs turn a 25-minute Wan shot into ~85 s.  
  <sub>topics: video-generation, wan-video, diffusion-models, auto-regressive-diffusion-model, world-models, qwen-image, ltx-video, hunyuan-video</sub>
- **[Lightricks/LTX-Desktop](https://github.com/Lightricks/LTX-Desktop)** · 2,328★ · Python · Rising  
  Desktop app for LTX models — generate shots locally without writing code.  
  <sub>topics: generative-ai, ltx, ltx-2, non-linear-editing</sub>

### Narration (TTS)

_Open voices. Pick by licence first, then by ear: cast two lines in several voices before rendering the script._

- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** · 117,019★ · Python · Hot  
  Fully local ElevenLabs-style studio (cloning, voice design); AGPL-3.0.  
  <sub>topics: tts, voice-cloning, voice-generation, voice-ai, ai, cuda, mlx, huggingface</sub>
- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** · 61,198★ · Python · Hot  
  Open voice studio app: clone, dictate, create — a GUI around open TTS models.  
  <sub>topics: ai, voice-clone, qwen3-tts, voice-ai, whisper, qwen3-tts-ui, cuda, mlx</sub>
- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** · 57,511★ · Python · Mature  
  Microsoft's open voice models (MIT); long-form TTS was withdrawn, Realtime-0.5B with preset voices remains.  
  <sub>topics: —</sub>
- **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** · 42,907★ · Python · Mature  
  VoxCPM2: tokenizer-free multilingual TTS with voice design and cloning; Apache-2.0. Our calm-documentary default.  
  <sub>topics: audio, deeplearning, minicpm, python, pytorch, speech, speech-synthesis, text-to-speech</sub>
- **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)** · 33,841★ · Python · Mature  
  Strong expressive TTS; weights are CC-BY-NC-SA — research and personal films only.  
  <sub>topics: llama, transformer, tts, valle, vits, vqgan, vqvae</sub>
- **[resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox)** · 28,057★ · Python · Declining  
  MIT TTS with an emotion/exaggeration knob — a warm alternative take.  
  <sub>topics: —</sub>
- **[index-tts/index-tts](https://github.com/index-tts/index-tts)** · 25,254★ · Python · Mature  
  Industrial zero-shot TTS with duration control — useful when a line must fit an exact scene length.  
  <sub>topics: bigvgan, cross-lingual, indextts, text-to-speech, tts, voice-clone, zero-shot-tts</sub>
- **[SWivid/F5-TTS](https://github.com/SWivid/F5-TTS)** · 15,641★ · Python · Mature  
  Flow-matching TTS with fast zero-shot cloning; weights CC-BY-NC — not for commercial promos.  
  <sub>topics: —</sub>
- **[QwenLM/Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS)** · 14,607★ · Python · Declining  
  Apache-2.0 TTS with VoiceDesign (describe a voice in words) and Base cloning; the steadiest loudness across takes we measured.  
  <sub>topics: —</sub>
- **[kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts)** · 10,389★ · Python · Hot  
  Small TTS that runs on a CPU — drafts and scratch narration without a GPU.  
  <sub>topics: —</sub>

### Music & sound

_The score and the sound around the voice — generated to the cut, or found with a licence attached._

- **[ace-step/ACE-Step-1.5](https://github.com/ace-step/ACE-Step-1.5)** · 15,106★ · Python · Mature  
  MIT music model: a full instrumental take in seconds; section tags in the lyrics field shape the arc. Our score engine.  
  <sub>topics: text2music</sub>
- **[HeartMuLa/heartlib](https://github.com/HeartMuLa/heartlib)** · 3,812★ · Python · Rising  
  Apache-2.0 music-generation family (model, codec, lyric transcriber) — the main open rival in ACE-Step's own benchmark.  
  <sub>topics: ai-music, audio-codec, cover-song, music-ai, music-generation, music-remix, pytorch, text-to-music</sub>
- **[WordPress/openverse](https://github.com/WordPress/openverse)** · 773★ · Python · Classic  
  Search engine for openly licensed images and audio (CC0/CC-BY) — music and effects with a licence trail.  
  <sub>topics: openverse, creative-commons, search-engine, python, javascript, hacktoberfest, typescript</sub>

### Listening & QA

_Tools that hear and read the result, so problems are caught before a person has to listen to every take._

- **[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)** · 26,961★ · Python · Classic  
  Fast Whisper transcription — the WER and product-name check on every narration take.  
  <sub>topics: deep-learning, inference, quantization, speech-recognition, speech-to-text, transformer, whisper, openai</sub>
- **[m-bain/whisperX](https://github.com/m-bain/whisperX)** · 25,621★ · Python · Classic  
  Whisper with word-level timestamps — exact caption timing and line lengths.  
  <sub>topics: asr, speech, speech-recognition, speech-to-text, whisper</sub>
- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** · 21,613★ · Python · Rising  
  Lets Claude 'watch' a video: frames + transcript — a second pair of eyes on a render.  
  <sub>topics: —</sub>
- **[Leonxlnx/earshot](https://github.com/Leonxlnx/earshot)** · 5,619★ · Python · Rising  
  'Ears for coding agents': describes audio in words, checks whether music cuts land on the beat, critiques a mix, and renders sound effects in code.  
  <sub>topics: ai-agents, audio, claude-code, mcp, sound-design, sfx, sound-effects</sub>

### Edit & render

_Where the film is assembled. Code-based editors make every change re-runnable in both formats._

- **[OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)** · 99,239★ · TypeScript · Declining  
  The open-source CapCut alternative — quick manual edits.  
  <sub>topics: editor, oss, videoeditor</sub>
- **[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** · 88,750★ · TypeScript · Hot  
  Write HTML, render video — a composition format built for agents.  
  <sub>topics: ai, animation, ffmpeg, gsap, html, mcp, puppeteer, rendering</sub>
- **[remotion-dev/remotion](https://github.com/remotion-dev/remotion)** · 75,157★ · TypeScript · Classic  
  Videos as React components: titles, counters and cuts in code, rendered headless (on Modal for us).  
  <sub>topics: react, video, javascript</sub>
- **[juliangarnier/anime](https://github.com/juliangarnier/anime)** · 75,002★ · JavaScript · Mature  
  Light JS animation engine for SVG/DOM — logo and title motion.  
  <sub>topics: animation, anime, javascript-library, svg, canvas, css, javascript</sub>
- **[ManimCommunity/manim](https://github.com/ManimCommunity/manim)** · 42,846★ · Python · Classic  
  Precise animated diagrams and math — the explainer engine.  
  <sub>topics: math, python, manim, animations, hacktoberfest</sub>
- **[motiondivision/motion](https://github.com/motiondivision/motion)** · 35,485★ · TypeScript · Classic  
  React/JS animation library — the motion inside a coded scene.  
  <sub>topics: animation, animation-js, motion, react, reactanimations, spring</sub>
- **[storytold/filmcraft](https://github.com/storytold/filmcraft)** · 18,897★ · Rust · Hot  
  Open non-linear video editor written in Rust — a timeline when you want hands-on cutting.  
  <sub>topics: art, rust, video, video-editing, video-editor, video-processing</sub>
- **[HarleyCoops/Math-To-Manim](https://github.com/HarleyCoops/Math-To-Manim)** · 2,897★ · Python · Hot  
  Turns a prompt or image into manim scenes and study notes.  
  <sub>topics: —</sub>

### Agentic pipeline

_Brief-to-film systems. Fast for drafts and shorts; none of them checks that what the film claims is true._

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** · 145,203★ · Python · Mature  
  Topic or keyword → short video with stock footage, TTS and subtitles in one click.  
  <sub>topics: python, tiktok, ai-video-generator, content-creation, ffmpeg, instagram-reels, llm, short-video</sub>
- **[HKUDS/ViMax](https://github.com/HKUDS/ViMax)** · 13,003★ · Python · Declining  
  Director, screenwriter and producer agents around a video generator.  
  <sub>topics: agentic-aigc, video-generation</sub>
- **[mutonby/openshorts](https://github.com/mutonby/openshorts)** · 9,774★ · Python · Hot  
  Finds the strongest moments in a long video and cuts 9:16 shorts.  
  <sub>topics: clip-generator, open-source, shorts, tiktok, ugc-platform, video-editing, video-generation, ai-clip-generator</sub>
- **[dramaclaw/dramaclaw](https://github.com/dramaclaw/dramaclaw)** · 7,166★ · TypeScript · Hot  
  Script-to-film engine for dramas, ads and explainers.  
  <sub>topics: ai-agent, ai-filmmaking, ai-video, aigc, content-creation, fastapi, generative-ai, image-to-video</sub>
- **[nateherkai/herk-edit-kit](https://github.com/nateherkai/herk-edit-kit)** · 3,090★ · HTML · Rising  
  Edit reels and YouTube Shorts from Claude Code or Codex.  
  <sub>topics: claude-code, codex, hyperframes, motion-graphics, reels, video-editing, herk-edit-kit, nate-herk</sub>

## Spotlight: giving the agent ears

Until recently an agent making a film could check the picture (screenshots, contact sheets) but not the sound: whether the music fits, whether a cut lands on the beat, whether the voice still reads on a phone. `earshot` (MIT, CPU-only) closes that gap:

- **`earshot timeline film.mp4 --cues …`** — beat clarity, which share of scene cuts land on a musical onset, and the genre of each section. On one promo it showed beat clarity 0.18 and 38 % of cuts on the grid, with the style drifting into house and vocal chops: exactly what the listener had complained about.
- **`earshot critique`** is a mastering gate, not a fit test: the same promo scored 22/22 there. Use both.
- **`earshot kit` / `sfx render`** draws soft pops, ticks and whooshes in code, aimed at a frame, so every cut can get its own small accent with no sample licences.
- Paired with **`ACE-Step-1.5`** (score written to the cue sheet) and **Whisper** (narration check), the whole soundtrack can be checked by numbers before a person listens around the cuts.

## Graph analysis — how they relate

**Community clustering.** These 43 tools span **19 of the graph's 45 communities** — video making borrows from many neighbourhoods of the collection.

- **Community 6** (6): `hao-ai-lab/FastVideo`, `fishaudio/fish-speech`, `SWivid/F5-TTS`, `kyutai-labs/pocket-tts`, `SYSTRAN/faster-whisper`, `m-bain/whisperX`
- **Community 9** (5): `microsoft/playwright`, `microsoft/VibeVoice`, `HeartMuLa/heartlib`, `WordPress/openverse`, `OpenCut-app/OpenCut`
- **Community 33** (4): `Lightricks/LTX-2`, `Lightricks/LTX-Desktop`, `deepbeepmeep/WanGP`, `QwenLM/Qwen3-TTS`
- **Community 2** (4): `Emily2040/seedance-2.0`, `resemble-ai/chatterbox`, `ace-step/ACE-Step-1.5`, `bradautomates/claude-video`
- **Community 28** (3): `Comfy-Org/ComfyUI`, `OpenBMB/VoxCPM`, `index-tts/index-tts`
- **Community 1** (3): `heygen-com/hyperframes`, `mutonby/openshorts`, `nateherkai/herk-edit-kit`
- **Community 14** (3): `ManimCommunity/manim`, `HarleyCoops/Math-To-Manim`, `motiondivision/motion`
- **Community 13** (2): `unhappychoice/gitlogue`, `debpalash/VoiceStudio`
- **Community 23** (2): `Wan-Video/Wan2.2`, `HKUDS/ViMax`
- **Community 31** (2): `huggingface/diffusers`, `jamiepine/voicebox`

**Centrality (PageRank in the full 2,925-repo graph)** — the most connected video tools in your collection:

- `m-bain/whisperX` — PageRank 0.0009
- `motiondivision/motion` — PageRank 0.0008
- `microsoft/playwright` — PageRank 0.0007
- `Lightricks/LTX-2` — PageRank 0.0006
- `Emily2040/seedance-2.0` — PageRank 0.0006
- `nateherkai/herk-edit-kit` — PageRank 0.0005
- `remotion-dev/remotion` — PageRank 0.0005
- `huggingface/diffusers` — PageRank 0.0005
- `storytold/filmcraft` — PageRank 0.0005
- `Leonxlnx/earshot` — PageRank 0.0005

**Direct links between video tools** (top similarity edges where both endpoints are in this report):

- `Lightricks/LTX-Desktop` ⇄ `Lightricks/LTX-2` (w=1.300) — topics: generative-ai, ltx, ltx-2
- `motiondivision/motion` ⇄ `HarleyCoops/Math-To-Manim` (w=0.667) — authors: claude, dependabot[bot]
- `SWivid/F5-TTS` ⇄ `m-bain/whisperX` (w=0.383) — authors: li-lizhe
- `HKUDS/ViMax` ⇄ `Wan-Video/Wan2.2` (w=0.383) — topics: video-generation
- `m-bain/whisperX` ⇄ `SYSTRAN/faster-whisper` (w=0.350) — topics: speech-recognition, speech-to-text, whisper
- `SWivid/F5-TTS` ⇄ `fishaudio/fish-speech` (w=0.300) — authors: li-lizhe
- `fishaudio/fish-speech` ⇄ `m-bain/whisperX` (w=0.272) — authors: li-lizhe
- `jamiepine/voicebox` ⇄ `debpalash/VoiceStudio` (w=0.224) — topics: ai, voice-ai, cuda, mlx
- `Lightricks/LTX-2` ⇄ `deepbeepmeep/WanGP` (w=0.193) — topics: generative-ai, ltx-2
- `hao-ai-lab/FastVideo` ⇄ `ModelTC/LightX2V` (w=0.193) — topics: diffusion-models, video-generation
- `hao-ai-lab/FastVideo` ⇄ `HKUDS/ViMax` (w=0.193) — topics: video-generation
- `Lightricks/LTX-Desktop` ⇄ `deepbeepmeep/WanGP` (w=0.183) — topics: generative-ai, ltx-2
- `ModelTC/LightX2V` ⇄ `deepbeepmeep/WanGP` (w=0.145) — topics: ltx-video, hunyuan-video
- `mutonby/openshorts` ⇄ `harry0703/MoneyPrinterTurbo` (w=0.113) — topics: tiktok, youtube-shorts
- `fishaudio/fish-speech` ⇄ `kyutai-labs/pocket-tts` (w=0.106) — authors: pratikgx

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). Pair with lifecycle + activity before adopting a *tool*; for *model* repos see the Hugging Face table.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| harry0703/MoneyPrinterTurbo | 100 | Mature | very active | 5 | 24% | 24 |
| huggingface/diffusers | 88 | Classic | very active | 3 | 29% | 97 |
| ManimCommunity/manim | 86 | Classic | very active | 3 | 27% | 37 |
| microsoft/playwright | 85 | Classic | very active | 2 | 39% | 170 |
| Comfy-Org/ComfyUI | 80 | Classic | very active | 2 | 42% | 167 |
| debpalash/VoiceStudio | 80 | Hot | very active | 1 | 58% | 60 |
| remotion-dev/remotion | 80 | Classic | very active | 1 | 64% | 705 |
| heygen-com/hyperframes | 78 | Hot | very active | 1 | 94% | 668 |
| dramaclaw/dramaclaw | 78 | Hot | very active | 1 | 50% | 31 |
| WordPress/openverse | 77 | Classic | very active | 1 | 57% | 312 |
| unhappychoice/gitlogue | 76 | Hot | very active | 1 | 65% | 18 |
| kyutai-labs/pocket-tts | 76 | Hot | very active | 1 | 50% | 16 |
| btahir/reelbird | 75 | Rising | very active | 1 | 100% | 11 |
| ace-step/ACE-Step-1.5 | 75 | Mature | active | 3 | 27% | 13 |
| Leonxlnx/earshot | 75 | Rising | very active | 1 | 100% | 5 |
| HarleyCoops/Math-To-Manim | 75 | Hot | very active | 1 | 80% | 5 |
| deepbeepmeep/WanGP | 74 | Hot | very active | 1 | 97% | 11 |
| jamiepine/voicebox | 74 | Hot | very active | 1 | 60% | 26 |
| storytold/filmcraft | 74 | Hot | very active | 1 | 52% | 23 |
| hao-ai-lab/FastVideo | 73 | Mature | very active | 2 | 43% | 8 |
| ModelTC/LightX2V | 70 | Hot | very active | 2 | 30% | 3 |
| SWivid/F5-TTS | 69 | Mature | active | 2 | 43% | 22 |
| Genymobile/scrcpy | 67 | Classic | very active | 1 | 79% | 54 |
| Lightricks/LTX-2 | 67 | Rising | active | 1 | 67% | 9 |
| m-bain/whisperX | 67 | Classic | active | 1 | 50% | 44 |
| motiondivision/motion | 65 | Classic | very active | 1 | 58% | 0 |
| Lightricks/LTX-Desktop | 63 | Rising | active | 1 | 50% | 16 |
| OpenBMB/VoxCPM | 61 | Mature | active | 1 | 53% | 14 |
| fishaudio/fish-speech | 60 | Mature | active | 2 | 38% | 15 |
| mutonby/openshorts | 60 | Hot | very active | 1 | 56% | 0 |
| SYSTRAN/faster-whisper | 59 | Classic | active | 2 | 38% | 21 |
| Emily2040/seedance-2.0 | 58 | Rising | active | 1 | 100% | 2 |
| bradautomates/claude-video | 58 | Rising | active | 1 | 100% | 8 |
| juliangarnier/anime | 52 | Mature | active | 0 | 0% | 37 |
| index-tts/index-tts | 50 | Mature | active | 2 | 25% | 3 |
| HeartMuLa/heartlib | 48 | Rising | very active | 1 | 83% | 0 |
| microsoft/VibeVoice | 47 | Mature | active | 1 | 57% | 0 |
| OpenCut-app/OpenCut | 42 | Declining | active | 1 | 100% | 4 |
| nateherkai/herk-edit-kit | 40 | Rising | active | 1 | 100% | 0 |
| HKUDS/ViMax | 38 | Declining | active | 1 | 100% | 1 |
| resemble-ai/chatterbox | 37 | Declining | active | 1 | 100% | 1 |
| Wan-Video/Wan2.2 | 34 | Declining | slowing | 1 | 50% | 0 |
| QwenLM/Qwen3-TTS | 18 | Declining | stale | 0 | 0% | 0 |

Watch items: `ViMax` and `OpenCut` read *Declining* as tools (not models) — check recent commits before building on them; `VoiceStudio` and `OpenMontage` are AGPL-3.0, which matters if you ship them inside a product; GitHub detects no standard licence for `herk-edit-kit`, `dramaclaw` or `index-tts` — read their terms before commercial use.

## Adjacent (deliberately not listed as video tools)

- **MiniMax-AI/MiniMax-H3** — not starred, but the most-downloaded open video model of 2026 (6.3M downloads/30 days, native stereo audio, 2K). Its licence **excludes the EU, the UK, the USA and South Korea** — outputs may not even be used there. Out for us
- **Lightricks/LTX-Video** (11,472★) — the first LTX generation, superseded by `LTX-2`
- **lllyasviel/FramePack** (17,382★) — influential long-video trick, unmaintained since 2025
- **NVIDIA/cosmos-framework** (660★) — world-model framework for robotics and physical AI, not film b-roll
- **SamurAIGPT/seedance-2-generator** (109★) — a SaaS shell around a paid reseller API — no model inside
- **SamurAIGPT/muapi-comfyui** (85★) — ComfyUI nodes that call a paid API (muapi.ai), not open weights
- **Anil-matcha/Open-Generative-AI** (35,917★) — front-end for many hosted image/video models
- **duixcom/Duix-Avatar** (16,428★) — talking-head avatars: a generated person presenting is out of scope (and needs clear labelling)
- **Nutlope/hallmark** (59,925★) — anti-AI-slop *design* skill for web UIs — good for the product you film, not for the film
- **yt-dlp/yt-dlp** (210,167★) — downloads other people's videos — fine for study, not as footage without a licence
- **pipecat-ai/pipecat** (17,397★) — real-time voice agents — see the *Voice agents* report

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json` for all repo metrics and graph structure. No API calls at generation time; fully reproducible.
- **Selection**: keyword scan (video / tts / voice / music / audio / sound / remotion / animation / diffusion / subtitle) + manual curation into film-making steps. Voice agents, transcription apps, avatars and paid-API wrappers were routed to adjacent reports or excluded (see above).
- **Model evidence**: Hugging Face model API (`likes`, 30-day `downloads`, `trendingScore`, card licence), retrieved 2026-11-04. Licences read from each model card / LICENSE file (MiniMax H3 community licence, LTX-2.x community licence). Public leaderboards (Artificial Analysis, TTS Arena) disagreed across snapshots and rank mostly closed models, so they were not used for the rankings.
- **Craft rules and timings** come from our own productions (Astrolab promo, 2026-11): Modal run logs, ffmpeg `ebur128` loudness measurements and `earshot` reports. ACE-Step 1.5 benchmark claims are vendor-reported ([paper](https://arxiv.org/abs/2602.00744)).
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state. Model numbers and licences are frozen text — re-check them when a major model ships.

<sub>Tools covered: 43 · Snapshot: 2026-11-23T16:50:13.482Z</sub>
