# Voice AI Agents — Landscape Report

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities).
>
> Generated 2026-11-23 by `scripts/reports/voice_agents.py` (regenerate any time — no API cost).

![Top tools by stars](assets/voice-agents-top-tools.svg)

![Tools per category](assets/voice-agents-categories.svg)


## Executive summary

- **29 voice-AI projects** in your stars (**768,883★** combined), organized along the voice-agent loop:
  - **Realtime voice-agent framework** (5): `pipecat`, `agents`, `ten-framework`, `fastrtc`, `qwen-audio-agent`
  - **Speech-to-text / ASR** (7): `whisper`, `whisper.cpp`, `faster-whisper`, `whisperX`, `RealtimeSTT`, `murmure`, `whisper.unity`
  - **Text-to-speech / TTS** (9): `TTS`, `VoxCPM`, `bark`, `chatterbox`, `Qwen3-TTS`, `neutts`, `RealtimeTTS`, `IMS-Toucan`, `voicebox-pytorch`
  - **Voice cloning / studio** (3): `VoiceStudio`, `voicebox`, `Real-Time-Voice-Cloning`
  - **Speech-LLM / omni model** (1): `Qwen3-Omni`
  - **Voice-capable runtime / serving** (4): `LocalAI`, `cognitive-services-speech-sdk`, `Dot`, `picollm`
- **Mental model** — a voice agent is a real-time loop: **capture → VAD/turn-taking → STT (ears) → LLM/agent (brain) → TTS (voice) → stream back**. Latency budget is the whole game: every stage must be streaming, and total round-trip should land under ~800ms to feel conversational.
- **The orchestrators are the agents.** `pipecat`, `livekit/agents`, and `ten-framework` don't transcribe or synthesize themselves — they sequence the stages, handle barge-in (user interrupting the bot), and manage the WebRTC/telephony transport.
- **Two model trends.** (1) *Cascade* stacks (STT→LLM→TTS) still dominate because each piece is swappable and best-of-breed; (2) *omni / speech-native* models like `Qwen3-Omni` collapse the stack into one model for lower latency and richer prosody.
- **Whisper is the gravitational center of the ears.** Four of your STT picks (`whisper`, `whisper.cpp`, `faster-whisper`, `whisperX`) are Whisper or derivatives.

## The voice-agent loop at a glance

| Stage | What happens | Tools in your stars |
|---|---|---|
| **Transport / capture** | Stream mic audio in & speech out (WebRTC/SIP) | `pipecat`, `livekit/agents`, `fastrtc`, `ten-framework` |
| **VAD / turn-taking** | Detect speech, endpointing, barge-in | `RealtimeSTT` (built-in VAD); handled inside the frameworks |
| **STT — ears** | Audio → text, ideally streaming + timestamps | `whisper`, `whisper.cpp`, `faster-whisper`, `whisperX`, `RealtimeSTT` |
| **LLM / agent — brain** | Decide what to say / which tool to call | your LLM + agent frameworks (see agent-orchestration report) |
| **TTS — voice** | Text → natural, low-latency speech | `coqui-TTS`, `chatterbox`, `bark`, `VoxCPM`, `Qwen3-TTS`, `supertonic`, `neutts` |
| **Voice identity** | Clone / design a specific voice | `Real-Time-Voice-Cloning`, `voicebox`, `VoiceStudio` |
| **Collapse the stack** | One speech-native model for all of it | `Qwen3-Omni` |
| **Host it** | Serve the models locally / in cloud | `LocalAI`, `Foundry-Local`, `Azure speech-sdk`, `picollm`, `Dot` |

## Master comparison

Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits.

| Tool | Category | Lang | License | ★ Stars | Lifecycle | Health | Activity | Last push | Age | Contrib(90d) |
|---|---|---|---|---|---|---|---|---|---|---|
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Voice cloning / studio | Python | AGPL-3.0 | 117,019 (▲5,311) | Hot | 80 | very active | 0d ago | 7mo | 5 |
| [openai/whisper](https://github.com/openai/whisper) | Speech-to-text / ASR | Python | MIT | 113,430 (▲636) | Mature | 35 | slowing | 2mo ago | 4.2y | 1 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | Voice cloning / studio | Python | MIT | 61,198 (▲450) | Hot | 74 | very active | 2d ago | 10mo | 15 |
| [CorentinJ/Real-Time-Voice-Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning) | Voice cloning / studio | Python | NOASSERTION | 60,248 (▲3) | Declining | 17 | stale | 8mo ago | 7.5y | 0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Speech-to-text / ASR | C++ | MIT | 55,445 (▲203) | Classic | 99 | very active | 0d ago | 4.2y | 60 |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | Voice-capable runtime / serving | Go | MIT | 50,513 (▲121) | Classic | 79 | very active | 0d ago | 3.7y | 8 |
| [coqui-ai/TTS](https://github.com/coqui-ai/TTS) | Text-to-speech / TTS | Python | MPL-2.0 | 46,270 (▲36) | Abandoned | 10 | stale | 2.3y ago | 6.5y | 0 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | Text-to-speech / TTS | Python | Apache-2.0 | 42,907 (▲362) | Mature | 61 | active | 14d ago | 1.2y | 5 |
| [suno-ai/bark](https://github.com/suno-ai/bark) | Text-to-speech / TTS | Jupyter Notebook | MIT | 39,410 (▲39) | Abandoned | 5 | stale | 2.3y ago | 3.6y | 0 |
| [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | Text-to-speech / TTS | Python | MIT | 28,057 (▲193) | Declining | 37 | active | 19d ago | 1.6y | 1 |
| [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | Speech-to-text / ASR | Python | MIT | 26,961 (▲166) | Classic | 59 | active | 11d ago | 3.8y | 10 |
| [m-bain/whisperX](https://github.com/m-bain/whisperX) | Speech-to-text / ASR | Python | BSD-2-Clause | 25,621 (▲249) | Classic | 67 | active | 2d ago | 4.0y | 4 |
| [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) | Realtime voice-agent framework | Python | BSD-2-Clause | 17,397 (▲110) | Mature | 84 | very active | 1d ago | 2.9y | 6 |
| [livekit/agents](https://github.com/livekit/agents) | Realtime voice-agent framework | Python | Apache-2.0 | 15,315 (▲69) | Classic | 99 | very active | 0d ago | 3.1y | 51 |
| [QwenLM/Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) | Text-to-speech / TTS | Python | Apache-2.0 | 14,607 (▲157) | Declining | 18 | stale | 8mo ago | 10mo | 0 |
| [TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework) | Realtime voice-agent framework | Python | NOASSERTION | 11,242 (▲10) | Mature | 78 | very active | 0d ago | 2.4y | 16 |
| [KoljaB/RealtimeSTT](https://github.com/KoljaB/RealtimeSTT) | Speech-to-text / ASR | Python | Apache-2.0 | 10,263 (▲12) | Classic | 69 | very active | 12d ago | 3.2y | 6 |
| [neuphonic/neutts](https://github.com/neuphonic/neutts) | Text-to-speech / TTS | Python | NOASSERTION | 6,343 (▲3) | Declining | 26 | slowing | 3mo ago | 1.1y | 0 |
| [gradio-app/fastrtc](https://github.com/gradio-app/fastrtc) | Realtime voice-agent framework | JavaScript | MIT | 4,641 (▲2) | Mature | 43 | active | 1mo ago | 2.2y | 1 |
| [QwenLM/Qwen3-Omni](https://github.com/QwenLM/Qwen3-Omni) | Speech-LLM / omni model | Jupyter Notebook | Apache-2.0 | 4,122 (▲10) | Declining | 22 | stale | 7mo ago | 1.2y | 0 |
| [KoljaB/RealtimeTTS](https://github.com/KoljaB/RealtimeTTS) | Text-to-speech / TTS | Python | Apache-2.0 | 4,060 (▲2) | Classic | 71 | very active | 5d ago | 3.2y | 6 |
| [Azure-Samples/cognitive-services-speech-sdk](https://github.com/Azure-Samples/cognitive-services-speech-sdk) | Voice-capable runtime / serving | C# | MIT | 3,456 (▲1) | Classic | 61 | active | 6d ago | 8.6y | 6 |
| [QwenAudio/qwen-audio-agent](https://github.com/QwenAudio/qwen-audio-agent) | Realtime voice-agent framework | JavaScript | Apache-2.0 | 3,269 (▲33) | Hot | 89 | very active | 0d ago | 3mo | 20 |
| [DigitalPhonetics/IMS-Toucan](https://github.com/DigitalPhonetics/IMS-Toucan) | Text-to-speech / TTS | Python | Apache-2.0 | 2,212 | Declining | 15 | stale | 10mo ago | 5.3y | 0 |
| [alexpinel/Dot](https://github.com/alexpinel/Dot) | Voice-capable runtime / serving | JavaScript | GPL-3.0 | 1,915 (▼2) | Abandoned | 1 | stale | 2.0y ago | 2.7y | 0 |
| [Kieirra/murmure](https://github.com/Kieirra/murmure) | Speech-to-text / ASR | TypeScript | AGPL-3.0 | 1,173 (▲7) | Hot | 77 | very active | 0d ago | 1.1y | 4 |
| [Macoron/whisper.unity](https://github.com/Macoron/whisper.unity) | Speech-to-text / ASR | C# | MIT | 763 (▲1) | Abandoned | 5 | stale | 1.6y ago | 3.7y | 0 |
| [lucidrains/voicebox-pytorch](https://github.com/lucidrains/voicebox-pytorch) | Text-to-speech / TTS | Python | MIT | 707 | Abandoned | 6 | stale | 2.1y ago | 3.3y | 0 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Voice-capable runtime / serving | Python | Apache-2.0 | 319 (▼1) | Mature | 58 | active | 11d ago | 2.6y | 3 |

## By category

### Realtime voice-agent framework

_The orchestrators — they own the real-time loop, turn-taking, barge-in, and transport. This is where you actually *build* a voice agent._

- **[pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat)** · 17,397★ · Python · Mature  
  Open-source framework for voice & multimodal conversational AI; wires STT→LLM→TTS with interruptions, VAD, and pluggable vendors.  
  <sub>topics: ai, real-time, voice, voice-assistant, chatbot-framework, chatbots</sub>
- **[livekit/agents](https://github.com/livekit/agents)** · 15,315★ · Python · Classic  
  Realtime voice-AI agent framework on LiveKit's WebRTC transport — turn detection, telephony (SIP), and tool calling built in.  
  <sub>topics: ai, real-time, voice, video, agents, openai</sub>
- **[TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework)** · 11,242★ · Python · Mature  
  Low-latency framework for conversational voice-AI agents; graph of multimodal extensions for real-time pipelines.  
  <sub>topics: ai, multi-modal, real-time, video, voice</sub>
- **[gradio-app/fastrtc](https://github.com/gradio-app/fastrtc)** · 4,641★ · JavaScript · Mature  
  Python real-time audio/video (WebRTC) library — the browser transport layer that turns a model into a live voice app.  
  <sub>topics: artificial-intelligence, llm, python, real-time, speech-to-text, text-to-speech, hacktoberfest, hacktoberfest2025</sub>
- **[QwenAudio/qwen-audio-agent](https://github.com/QwenAudio/qwen-audio-agent)** · 3,269★ · JavaScript · Hot  
  Qwen's realtime voice runtime — keeps an agent talking while it works, with interruption and tool calls in the loop.  
  <sub>topics: agent, agentic-ai, voice-agent, voice-ai, voice-chat, acp, ai-coding, claude-code</sub>

### Speech-to-text / ASR

_The ears. Streaming + word timestamps + diarization matter more than raw accuracy once you're in a live conversation._

- **[openai/whisper](https://github.com/openai/whisper)** · 113,430★ · Python · Mature  
  The reference open ASR model — robust multilingual transcription via large-scale weak supervision.  
  <sub>topics: —</sub>
- **[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)** · 55,445★ · C++ · Classic  
  C/C++ port of Whisper — runs on CPU/edge/mobile with no Python; the embeddable ASR workhorse.  
  <sub>topics: openai, speech-to-text, transformer, whisper, inference, speech-recognition</sub>
- **[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)** · 26,961★ · Python · Classic  
  CTranslate2 reimplementation of Whisper — up to 4× faster, lower memory; the production STT default.  
  <sub>topics: deep-learning, inference, quantization, speech-recognition, speech-to-text, transformer, whisper, openai</sub>
- **[m-bain/whisperX](https://github.com/m-bain/whisperX)** · 25,621★ · Python · Classic  
  Whisper + word-level timestamps + speaker diarization — adds the 'who said what, when' a transcript agent needs.  
  <sub>topics: asr, speech, speech-recognition, speech-to-text, whisper</sub>
- **[KoljaB/RealtimeSTT](https://github.com/KoljaB/RealtimeSTT)** · 10,263★ · Python · Classic  
  Low-latency streaming STT with built-in voice-activity detection and wake-word — purpose-built for live voice agents.  
  <sub>topics: python, realtime, speech-to-text</sub>
- **[Kieirra/murmure](https://github.com/Kieirra/murmure)** · 1,173★ · TypeScript · Hot  
  Fully local cross-platform dictation with LLM post-processing — private speech-to-text as a desktop app.  
  <sub>topics: privacy, speech-to-text, asr, asr-model, debian-packages, linux, macos, windows</sub>
- **[Macoron/whisper.unity](https://github.com/Macoron/whisper.unity)** · 763★ · C# · Abandoned  
  whisper.cpp bindings for Unity — on-device speech-to-text inside games/XR.  
  <sub>topics: asr, stt, speech-to-text, openai, speech-recognition, whisper, unity3d</sub>

### Text-to-speech / TTS

_The voice. The trade-off is naturalness vs. latency vs. on-device footprint; streaming (first-audio-chunk time) beats total render time for agents._

- **[coqui-ai/TTS](https://github.com/coqui-ai/TTS)** · 46,270★ · Python · Abandoned  
  Battle-tested deep-learning TTS toolkit — many models, voice cloning, 1000+ languages; the OSS TTS staple.  
  <sub>topics: python, text-to-speech, deep-learning, speech, pytorch, tts, vocoder, tacotron</sub>
- **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** · 42,907★ · Python · Mature  
  Tokenizer-free multilingual TTS with creative voice design and strong zero-shot cloning.  
  <sub>topics: audio, deeplearning, minicpm, python, pytorch, speech, speech-synthesis, text-to-speech</sub>
- **[suno-ai/bark](https://github.com/suno-ai/bark)** · 39,410★ · Jupyter Notebook · Abandoned  
  Generative audio model — expressive, prompt-driven speech (laughs, music, SFX), not just plain narration.  
  <sub>topics: —</sub>
- **[resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox)** · 28,057★ · Python · Declining  
  SoTA open-source TTS with emotion/exaggeration control — a credible ElevenLabs-class voice.  
  <sub>topics: —</sub>
- **[QwenLM/Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS)** · 14,607★ · Python · Declining  
  Qwen team's open TTS series — high-quality multilingual synthesis from a frontier-model lab.  
  <sub>topics: —</sub>
- **[neuphonic/neutts](https://github.com/neuphonic/neutts)** · 6,343★ · Python · Declining  
  Compact on-device TTS model focused on natural, low-footprint speech.  
  <sub>topics: —</sub>
- **[KoljaB/RealtimeTTS](https://github.com/KoljaB/RealtimeTTS)** · 4,060★ · Python · Classic  
  Streaming TTS wrapper over many engines (Coqui, Kokoro, OpenAI, Azure, …) — starts speaking from the first LLM tokens.  
  <sub>topics: python, realtime, speech-synthesis, text-to-speech</sub>
- **[DigitalPhonetics/IMS-Toucan](https://github.com/DigitalPhonetics/IMS-Toucan)** · 2,212★ · Python · Declining  
  Controllable, fast TTS covering 7000+ languages — breadth-first multilingual synthesis.  
  <sub>topics: text-to-speech, toolkit, speech-synthesis, deep-learning, speech-processing, tts, pytorch, speech</sub>
- **[lucidrains/voicebox-pytorch](https://github.com/lucidrains/voicebox-pytorch)** · 707★ · Python · Abandoned  
  Clean PyTorch implementation of Meta's Voicebox — non-autoregressive flow-matching TTS research base.  
  <sub>topics: artificial-intelligence, deep-learning, text-to-speech</sub>

### Voice cloning / studio

_Give the agent a specific identity — clone a reference voice or design a new one. Mind consent/ethics here._

- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** · 117,019★ · Python · Hot  
  Local ElevenLabs alternative — voice cloning, design, and generation without the cloud.  
  <sub>topics: tts, voice-cloning, voice-generation, voice-ai, ai, cuda, mlx, huggingface</sub>
- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** · 61,198★ · Python · Hot  
  Open-source AI voice studio — clone, dictate, and create voices through a polished app.  
  <sub>topics: ai, voice-clone, qwen3-tts, voice-ai, whisper, qwen3-tts-ui, cuda, mlx</sub>
- **[CorentinJ/Real-Time-Voice-Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning)** · 60,248★ · Python · Declining  
  The classic 5-second voice-cloning demo (SV2TTS) — the repo that popularized OSS voice cloning.  
  <sub>topics: deep-learning, pytorch, tensorflow, tts, voice-cloning, python</sub>

### Speech-LLM / omni model

_The brain that natively hears and speaks — one model instead of a cascade, trading swappability for lower latency and better prosody._

- **[QwenLM/Qwen3-Omni](https://github.com/QwenLM/Qwen3-Omni)** · 4,122★ · Jupyter Notebook · Declining  
  Natively end-to-end omni-modal LLM (text/audio/vision) — collapses STT+LLM+TTS into one speech-native model.  
  <sub>topics: —</sub>

### Voice-capable runtime / serving

_Where the models actually run — local OpenAI-compatible servers or hosted SDKs that expose STT/TTS endpoints._

- **[mudler/LocalAI](https://github.com/mudler/LocalAI)** · 50,513★ · Go · Classic  
  Drop-in local AI engine exposing OpenAI-compatible TTS/STT/LLM endpoints — self-host the whole voice stack.  
  <sub>topics: llama, ai, llm, stable-diffusion, api, tts, musicgen, mamba</sub>
- **[Azure-Samples/cognitive-services-speech-sdk](https://github.com/Azure-Samples/cognitive-services-speech-sdk)** · 3,456★ · C# · Classic  
  Reference samples for Azure's hosted Speech SDK — STT/TTS/translation if you prefer a managed cloud.  
  <sub>topics: —</sub>
- **[alexpinel/Dot](https://github.com/alexpinel/Dot)** · 1,915★ · JavaScript · Abandoned  
  Self-contained local app combining TTS, RAG, and LLMs — an all-local talking assistant.  
  <sub>topics: embeddings, llm, local, rag, standalone, standalone-app, document-chat, faiss</sub>
- **[Picovoice/picollm](https://github.com/Picovoice/picollm)** · 319★ · Python · Mature  
  On-device LLM inference from the Picovoice (Porcupine/Cheetah wake-word & STT) voice stack.  
  <sub>topics: llm, compression, efficient-inference, gemma, generative-ai, language-model, language-models, large-language-model</sub>

## Spotlight: the orchestration frameworks

These are the projects that make something a *voice agent* rather than a model. They sequence ears→brain→voice, cut latency, and — critically — handle **barge-in** so a user can interrupt the bot mid-sentence. Pick the framework first, then slot in STT/TTS.

- **[pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat)** · 17,397★ · Python — Open-source framework for voice & multimodal conversational AI; wires STT→LLM→TTS with interruptions, VAD, and pluggable vendors.
- **[livekit/agents](https://github.com/livekit/agents)** · 15,315★ · Python — Realtime voice-AI agent framework on LiveKit's WebRTC transport — turn detection, telephony (SIP), and tool calling built in.
- **[TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework)** · 11,242★ · Python — Low-latency framework for conversational voice-AI agents; graph of multimodal extensions for real-time pipelines.
- **[gradio-app/fastrtc](https://github.com/gradio-app/fastrtc)** · 4,641★ · JavaScript — Python real-time audio/video (WebRTC) library — the browser transport layer that turns a model into a live voice app.

## Graph analysis — how they relate

**Community clustering.** These 29 tools span **12 of the graph's 45 communities** — voice work is spread across the speech-model, agent-framework, and local-runtime neighborhoods rather than forming one tidy cluster.

- **Community 28** (9): `gradio-app/fastrtc`, `openai/whisper`, `KoljaB/RealtimeSTT`, `coqui-ai/TTS`, `OpenBMB/VoxCPM`, `DigitalPhonetics/IMS-Toucan`, `lucidrains/voicebox-pytorch`, `KoljaB/RealtimeTTS`, `CorentinJ/Real-Time-Voice-Cloning`
- **Community 6** (4): `ggml-org/whisper.cpp`, `SYSTRAN/faster-whisper`, `m-bain/whisperX`, `Macoron/whisper.unity`
- **Community 11** (3): `pipecat-ai/pipecat`, `livekit/agents`, `TEN-framework/ten-framework`
- **Community 33** (3): `QwenLM/Qwen3-TTS`, `QwenLM/Qwen3-Omni`, `mudler/LocalAI`
- **Community 2** (2): `resemble-ai/chatterbox`, `neuphonic/neutts`
- **Community 13** (2): `debpalash/VoiceStudio`, `Picovoice/picollm`

**Centrality (PageRank in the full 2,925-repo graph)** — most 'hub-like' voice tools in your ecosystem:

- `m-bain/whisperX` — PageRank 0.0009
- `ggml-org/whisper.cpp` — PageRank 0.0007
- `CorentinJ/Real-Time-Voice-Cloning` — PageRank 0.0006
- `Macoron/whisper.unity` — PageRank 0.0005
- `KoljaB/RealtimeSTT` — PageRank 0.0005
- `KoljaB/RealtimeTTS` — PageRank 0.0005
- `DigitalPhonetics/IMS-Toucan` — PageRank 0.0004
- `lucidrains/voicebox-pytorch` — PageRank 0.0004
- `mudler/LocalAI` — PageRank 0.0004
- `openai/whisper` — PageRank 0.0004

**Direct links between voice tools** (top similarity edges where both endpoints are in this report):

- `KoljaB/RealtimeTTS` ⇄ `KoljaB/RealtimeSTT` (w=1.617) — topics: python, realtime; authors: KoljaB, ANDROIDHASSAN, abaichuan1017
- `ggml-org/whisper.cpp` ⇄ `SYSTRAN/faster-whisper` (w=0.750) — topics: openai, speech-to-text, transformer, whisper
- `livekit/agents` ⇄ `TEN-framework/ten-framework` (w=0.621) — topics: ai, real-time, voice, video
- `m-bain/whisperX` ⇄ `Macoron/whisper.unity` (w=0.500) — topics: asr, speech-recognition, speech-to-text, whisper
- `ggml-org/whisper.cpp` ⇄ `Macoron/whisper.unity` (w=0.444) — topics: openai, speech-to-text, whisper, speech-recognition
- `TEN-framework/ten-framework` ⇄ `pipecat-ai/pipecat` (w=0.425) — topics: ai, real-time, voice
- `livekit/agents` ⇄ `pipecat-ai/pipecat` (w=0.383) — topics: ai, real-time, voice
- `OpenBMB/VoxCPM` ⇄ `coqui-ai/TTS` (w=0.370) — topics: python, pytorch, speech, speech-synthesis
- `SYSTRAN/faster-whisper` ⇄ `Macoron/whisper.unity` (w=0.364) — topics: speech-recognition, speech-to-text, whisper, openai
- `m-bain/whisperX` ⇄ `SYSTRAN/faster-whisper` (w=0.350) — topics: speech-recognition, speech-to-text, whisper
- `OpenBMB/VoxCPM` ⇄ `DigitalPhonetics/IMS-Toucan` (w=0.344) — topics: pytorch, speech, speech-synthesis, text-to-speech
- `coqui-ai/TTS` ⇄ `DigitalPhonetics/IMS-Toucan` (w=0.336) — topics: text-to-speech, deep-learning, speech, pytorch
- `CorentinJ/Real-Time-Voice-Cloning` ⇄ `DigitalPhonetics/IMS-Toucan` (w=0.323) — topics: deep-learning, pytorch, tts
- `OpenBMB/VoxCPM` ⇄ `CorentinJ/Real-Time-Voice-Cloning` (w=0.300) — topics: python, pytorch, tts, voice-cloning
- `CorentinJ/Real-Time-Voice-Cloning` ⇄ `coqui-ai/TTS` (w=0.300) — topics: deep-learning, pytorch, tts, voice-cloning
- …and 5 more.

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). Pair with lifecycle + activity before adopting — voice models in particular churn fast.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| livekit/agents | 99 | Classic | very active | 10 | 9% | 384 |
| ggml-org/whisper.cpp | 99 | Classic | very active | 14 | 12% | 46 |
| QwenAudio/qwen-audio-agent | 89 | Hot | very active | 3 | 39% | 30 |
| pipecat-ai/pipecat | 84 | Mature | very active | 2 | 35% | 127 |
| debpalash/VoiceStudio | 80 | Hot | very active | 1 | 58% | 60 |
| mudler/LocalAI | 79 | Classic | very active | 1 | 58% | 143 |
| TEN-framework/ten-framework | 78 | Mature | very active | 2 | 35% | 126 |
| Kieirra/murmure | 77 | Hot | very active | 1 | 91% | 18 |
| jamiepine/voicebox | 74 | Hot | very active | 1 | 60% | 26 |
| KoljaB/RealtimeTTS | 71 | Classic | very active | 1 | 84% | 72 |
| KoljaB/RealtimeSTT | 69 | Classic | very active | 1 | 80% | 48 |
| m-bain/whisperX | 67 | Classic | active | 1 | 50% | 44 |
| OpenBMB/VoxCPM | 61 | Mature | active | 1 | 53% | 14 |
| Azure-Samples/cognitive-services-speech-sdk | 61 | Classic | active | 2 | 40% | 107 |
| SYSTRAN/faster-whisper | 59 | Classic | active | 2 | 38% | 21 |
| Picovoice/picollm | 58 | Mature | active | 1 | 89% | 6 |
| gradio-app/fastrtc | 43 | Mature | active | 1 | 100% | 22 |
| resemble-ai/chatterbox | 37 | Declining | active | 1 | 100% | 1 |
| openai/whisper | 35 | Mature | slowing | 1 | 100% | 13 |
| neuphonic/neutts | 26 | Declining | slowing | 0 | 0% | 0 |
| QwenLM/Qwen3-Omni | 22 | Declining | stale | 0 | 0% | 0 |
| QwenLM/Qwen3-TTS | 18 | Declining | stale | 0 | 0% | 0 |
| CorentinJ/Real-Time-Voice-Cloning | 17 | Declining | stale | 0 | 0% | 0 |
| DigitalPhonetics/IMS-Toucan | 15 | Declining | stale | 0 | 0% | 14 |
| coqui-ai/TTS | 10 | Abandoned | stale | 0 | 0% | 98 |
| lucidrains/voicebox-pytorch | 6 | Abandoned | stale | 0 | 0% | 65 |
| Macoron/whisper.unity | 5 | Abandoned | stale | 0 | 0% | 12 |
| suno-ai/bark | 5 | Abandoned | stale | 0 | 0% | 0 |
| alexpinel/Dot | 1 | Abandoned | stale | 0 | 0% | 4 |

## Which one should you use?

| If you want… | Start with | Why |
|---|---|---|
| To build a phone/web voice agent fast | `pipecat-ai/pipecat` or `livekit/agents` | Purpose-built orchestrators with STT/LLM/TTS plugins, barge-in, and SIP/WebRTC transport. |
| Production STT at low cost/latency | `SYSTRAN/faster-whisper` | 4× faster Whisper via CTranslate2; the default server-side ASR. |
| On-device / embedded STT | `ggml-org/whisper.cpp` | No Python, runs on CPU/edge/mobile; pairs with `RealtimeSTT` for streaming + VAD. |
| Transcripts with speakers & timestamps | `m-bain/whisperX` | Word-level alignment + diarization — 'who said what, when'. |
| Best-quality open TTS voice | `resemble-ai/chatterbox` or `coqui-ai/TTS` | SoTA naturalness with emotion control (chatterbox); broad model zoo + cloning (coqui). |
| Fast on-device TTS | `neuphonic/neutts` | Compact, low-footprint synthesis for low-latency offline voice. (`supertonic` held this slot until it was archived upstream — see *Retired from the scored set*.) |
| To clone a specific voice | `VoiceStudio` or `coqui-ai/TTS` | Local ElevenLabs-style cloning — mind consent/ethics. |
| Lowest latency / richest prosody | `QwenLM/Qwen3-Omni` | Speech-native omni model collapses STT+LLM+TTS into one — fewer hops. |
| Self-host the whole stack with one API | `mudler/LocalAI` | OpenAI-compatible TTS/STT/LLM endpoints; swap it under any framework above. |

## Adjacent (deliberately not listed as voice-AI tools)

- **Chainlit/chainlit** — conversational-AI *chat UI* (audio is secondary) — not a voice-pipeline framework
- **mastra-ai/mastra** (29,762★) — general TS agent framework with a TTS module — covered by the agent-orchestration report
- **VoltAgent/voltagent** (11,004★) — general TS agent platform that *can* do TTS — not voice-specific
- **Fosowl/agenticSeek** (27,692★) — autonomous local agent with an optional voice front-end — general agent, not a voice stack
- **mozilla-ai/llamafile** (26,703★) — single-file LLM runner that bundles whisper.cpp — general runtime, see inference reports
- **huggingface/transformers** (169,373★) — hosts most of these speech models, but far too broad to list as a 'voice' tool
- **unslothai/unsloth** (80,066★) — fine-tunes TTS/audio models among many others — a training tool, not a voice agent

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`. No external calls; fully reproducible.
- **Selection**: keyword scan (voice / speech / tts / stt / asr / whisper / transcribe / diarization / vad / wake-word / realtime-voice / conversational) + manual curation into the voice-agent loop. General agent frameworks, chat UIs, and broad training/runtime tools were routed to adjacent reports or excluded (see above).
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.
- Re-run after a fresh `classified.json` to refresh stars/activity.

### Retired from the scored set

Archived upstream, so they no longer appear in this report's tables — `sample.mjs` excludes archived repos. Metrics are frozen at the date shown and are not refreshed.

| Project | Category | Why it left | Metrics as of |
|---|---|---|---|
| [`supertone-inc/supertonic`](https://github.com/supertone-inc/supertonic) | Text-to-speech / TTS | Archived upstream 2026-09 and renamed to `supertone-oss-archive/supertonic`; last in the dataset 2026-09-06. Lightning-fast on-device multilingual TTS via ONNX — still usable, no longer developed. | 2026-09-06 |

<sub>Tools covered: 29 · Snapshot: 2026-11-23T16:50:13.482Z</sub>
