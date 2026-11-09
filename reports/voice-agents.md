# Voice AI Agents — Landscape Report

> Derived from **kaiser-data**'s 2,728 starred repos (snapshot `2026-11-09T14:44:53.318Z`), cross-referenced with the repo-similarity graph (2,728 nodes / 9,126 edges, 41 communities).
>
> Generated 2026-11-09 by `scripts/reports/voice_agents.py` (regenerate any time — no API cost).

![Top tools by stars](assets/voice-agents-top-tools.svg)

![Tools per category](assets/voice-agents-categories.svg)


## Executive summary

- **30 voice-AI projects** in your stars (**754,381★** combined), organized along the voice-agent loop:
  - **Realtime voice-agent framework** (5): `pipecat`, `agents`, `ten-framework`, `fastrtc`, `qwen-audio-agent`
  - **Speech-to-text / ASR** (7): `whisper`, `whisper.cpp`, `faster-whisper`, `whisperX`, `RealtimeSTT`, `murmure`, `whisper.unity`
  - **Text-to-speech / TTS** (9): `TTS`, `VoxCPM`, `bark`, `chatterbox`, `Qwen3-TTS`, `neutts`, `RealtimeTTS`, `IMS-Toucan`, `voicebox-pytorch`
  - **Voice cloning / studio** (3): `VoiceStudio`, `voicebox`, `Real-Time-Voice-Cloning`
  - **Speech-LLM / omni model** (1): `Qwen3-Omni`
  - **Voice-capable runtime / serving** (5): `LocalAI`, `cognitive-services-speech-sdk`, `foundry-local`, `Dot`, `picollm`
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
| [openai/whisper](https://github.com/openai/whisper) | Speech-to-text / ASR | Python | MIT | 112,285 (▲515) | Mature | 36 | slowing | 2mo ago | 4.2y | 1 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Voice cloning / studio | Python | AGPL-3.0 | 105,688 (▲7,086) | Rising | 79 | very active | 0d ago | 7mo | 2 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | Voice cloning / studio | Python | MIT | 60,239 (▲984) | Hot | 72 | active | 1mo ago | 9mo | 15 |
| [CorentinJ/Real-Time-Voice-Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning) | Voice cloning / studio | Python | NOASSERTION | 60,238 (▲11) | Declining | 18 | stale | 8mo ago | 7.5y | 0 |
| [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Speech-to-text / ASR | C++ | MIT | 55,039 (▲176) | Classic | 99 | very active | 0d ago | 4.1y | 60 |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | Voice-capable runtime / serving | Go | MIT | 50,273 (▲140) | Classic | 79 | very active | 0d ago | 3.6y | 5 |
| [coqui-ai/TTS](https://github.com/coqui-ai/TTS) | Text-to-speech / TTS | Python | MPL-2.0 | 46,195 (▲20) | Abandoned | 10 | stale | 2.2y ago | 6.5y | 0 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | Text-to-speech / TTS | Python | Apache-2.0 | 42,047 (▲1,073) | Mature | 63 | very active | 0d ago | 1.1y | 5 |
| [suno-ai/bark](https://github.com/suno-ai/bark) | Text-to-speech / TTS | Jupyter Notebook | MIT | 39,332 (▲48) | Abandoned | 5 | stale | 2.2y ago | 3.6y | 0 |
| [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | Text-to-speech / TTS | Python | MIT | 27,703 (▲193) | Declining | 38 | active | 5d ago | 1.5y | 1 |
| [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | Speech-to-text / ASR | Python | MIT | 26,617 (▲214) | Classic | 58 | active | 3d ago | 3.7y | 8 |
| [m-bain/whisperX](https://github.com/m-bain/whisperX) | Speech-to-text / ASR | Python | BSD-2-Clause | 25,167 (▲156) | Mature | 69 | active | 18d ago | 3.9y | 4 |
| [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) | Realtime voice-agent framework | Python | BSD-2-Clause | 17,152 (▲154) | Mature | 84 | very active | 0d ago | 2.9y | 11 |
| [livekit/agents](https://github.com/livekit/agents) | Realtime voice-agent framework | Python | Apache-2.0 | 15,156 (▲99) | Classic | 99 | very active | 0d ago | 3.1y | 56 |
| [QwenLM/Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) | Text-to-speech / TTS | Python | Apache-2.0 | 14,311 (▲143) | Declining | 19 | stale | 7mo ago | 9mo | 0 |
| [TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework) | Realtime voice-agent framework | Python | NOASSERTION | 11,224 (▲4) | Mature | 77 | very active | 0d ago | 2.4y | 15 |
| [KoljaB/RealtimeSTT](https://github.com/KoljaB/RealtimeSTT) | Speech-to-text / ASR | Python | MIT | 10,237 (▲10) | Classic | 68 | very active | 10d ago | 3.2y | 6 |
| [neuphonic/neutts](https://github.com/neuphonic/neutts) | Text-to-speech / TTS | Python | NOASSERTION | 6,340 (▲1) | Declining | 27 | slowing | 3mo ago | 1.1y | 0 |
| [gradio-app/fastrtc](https://github.com/gradio-app/fastrtc) | Realtime voice-agent framework | JavaScript | MIT | 4,636 (▼1) | Mature | 44 | active | 19d ago | 2.1y | 1 |
| [QwenLM/Qwen3-Omni](https://github.com/QwenLM/Qwen3-Omni) | Speech-LLM / omni model | Jupyter Notebook | Apache-2.0 | 4,096 (▲2) | Declining | 23 | stale | 6mo ago | 1.1y | 0 |
| [KoljaB/RealtimeTTS](https://github.com/KoljaB/RealtimeTTS) | Text-to-speech / TTS | Python | MIT | 4,052 (▲2) | Classic | 72 | very active | 2d ago | 3.2y | 6 |
| [Azure-Samples/cognitive-services-speech-sdk](https://github.com/Azure-Samples/cognitive-services-speech-sdk) | Voice-capable runtime / serving | C# | MIT | 3,457 | Classic | 59 | active | 10d ago | 8.5y | 5 |
| [QwenAudio/qwen-audio-agent](https://github.com/QwenAudio/qwen-audio-agent) | Realtime voice-agent framework | JavaScript | Apache-2.0 | 3,188 (▲84) | Hot | 78 | very active | 2d ago | 3mo | 16 |
| [microsoft/foundry-local](https://github.com/microsoft/foundry-local) | Voice-capable runtime / serving | C++ | NOASSERTION | 2,645 (▲40) | Hot | 83 | very active | 0d ago | 1.6y | 15 |
| [DigitalPhonetics/IMS-Toucan](https://github.com/DigitalPhonetics/IMS-Toucan) | Text-to-speech / TTS | Python | Apache-2.0 | 2,212 (▲1) | Declining | 16 | stale | 9mo ago | 5.3y | 0 |
| [alexpinel/Dot](https://github.com/alexpinel/Dot) | Voice-capable runtime / serving | JavaScript | GPL-3.0 | 1,916 (▲1) | Abandoned | 1 | stale | 1.9y ago | 2.7y | 0 |
| [Kieirra/murmure](https://github.com/Kieirra/murmure) | Speech-to-text / ASR | TypeScript | AGPL-3.0 | 1,152 (▲7) | Hot | 78 | very active | 3d ago | 1.1y | 5 |
| [Macoron/whisper.unity](https://github.com/Macoron/whisper.unity) | Speech-to-text / ASR | C# | MIT | 760 (▲1) | Abandoned | 5 | stale | 1.6y ago | 3.6y | 0 |
| [lucidrains/voicebox-pytorch](https://github.com/lucidrains/voicebox-pytorch) | Text-to-speech / TTS | Python | MIT | 705 | Abandoned | 6 | stale | 2.1y ago | 3.3y | 0 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Voice-capable runtime / serving | Python | Apache-2.0 | 319 (▲1) | Mature | 58 | active | 3d ago | 2.6y | 2 |

## By category

### Realtime voice-agent framework

_The orchestrators — they own the real-time loop, turn-taking, barge-in, and transport. This is where you actually *build* a voice agent._

- **[pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat)** · 17,152★ · Python · Mature  
  Open-source framework for voice & multimodal conversational AI; wires STT→LLM→TTS with interruptions, VAD, and pluggable vendors.  
  <sub>topics: ai, real-time, voice, voice-assistant, chatbot-framework, chatbots</sub>
- **[livekit/agents](https://github.com/livekit/agents)** · 15,156★ · Python · Classic  
  Realtime voice-AI agent framework on LiveKit's WebRTC transport — turn detection, telephony (SIP), and tool calling built in.  
  <sub>topics: ai, real-time, voice, video, agents, openai</sub>
- **[TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework)** · 11,224★ · Python · Mature  
  Low-latency framework for conversational voice-AI agents; graph of multimodal extensions for real-time pipelines.  
  <sub>topics: ai, multi-modal, real-time, video, voice</sub>
- **[gradio-app/fastrtc](https://github.com/gradio-app/fastrtc)** · 4,636★ · JavaScript · Mature  
  Python real-time audio/video (WebRTC) library — the browser transport layer that turns a model into a live voice app.  
  <sub>topics: artificial-intelligence, llm, python, real-time, speech-to-text, text-to-speech, hacktoberfest, hacktoberfest2025</sub>
- **[QwenAudio/qwen-audio-agent](https://github.com/QwenAudio/qwen-audio-agent)** · 3,188★ · JavaScript · Hot  
  Qwen's realtime voice runtime — keeps an agent talking while it works, with interruption and tool calls in the loop.  
  <sub>topics: agent, agentic-ai, voice-agent, voice-ai, voice-chat, acp, ai-coding, claude-code</sub>

### Speech-to-text / ASR

_The ears. Streaming + word timestamps + diarization matter more than raw accuracy once you're in a live conversation._

- **[openai/whisper](https://github.com/openai/whisper)** · 112,285★ · Python · Mature  
  The reference open ASR model — robust multilingual transcription via large-scale weak supervision.  
  <sub>topics: —</sub>
- **[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)** · 55,039★ · C++ · Classic  
  C/C++ port of Whisper — runs on CPU/edge/mobile with no Python; the embeddable ASR workhorse.  
  <sub>topics: openai, speech-to-text, transformer, whisper, inference, speech-recognition</sub>
- **[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)** · 26,617★ · Python · Classic  
  CTranslate2 reimplementation of Whisper — up to 4× faster, lower memory; the production STT default.  
  <sub>topics: deep-learning, inference, quantization, speech-recognition, speech-to-text, transformer, whisper, openai</sub>
- **[m-bain/whisperX](https://github.com/m-bain/whisperX)** · 25,167★ · Python · Mature  
  Whisper + word-level timestamps + speaker diarization — adds the 'who said what, when' a transcript agent needs.  
  <sub>topics: asr, speech, speech-recognition, speech-to-text, whisper</sub>
- **[KoljaB/RealtimeSTT](https://github.com/KoljaB/RealtimeSTT)** · 10,237★ · Python · Classic  
  Low-latency streaming STT with built-in voice-activity detection and wake-word — purpose-built for live voice agents.  
  <sub>topics: python, realtime, speech-to-text</sub>
- **[Kieirra/murmure](https://github.com/Kieirra/murmure)** · 1,152★ · TypeScript · Hot  
  Fully local cross-platform dictation with LLM post-processing — private speech-to-text as a desktop app.  
  <sub>topics: privacy, speech-to-text, asr, asr-model, debian-packages, linux, macos, windows</sub>
- **[Macoron/whisper.unity](https://github.com/Macoron/whisper.unity)** · 760★ · C# · Abandoned  
  whisper.cpp bindings for Unity — on-device speech-to-text inside games/XR.  
  <sub>topics: asr, stt, speech-to-text, openai, speech-recognition, whisper, unity3d</sub>

### Text-to-speech / TTS

_The voice. The trade-off is naturalness vs. latency vs. on-device footprint; streaming (first-audio-chunk time) beats total render time for agents._

- **[coqui-ai/TTS](https://github.com/coqui-ai/TTS)** · 46,195★ · Python · Abandoned  
  Battle-tested deep-learning TTS toolkit — many models, voice cloning, 1000+ languages; the OSS TTS staple.  
  <sub>topics: python, text-to-speech, deep-learning, speech, pytorch, tts, vocoder, tacotron</sub>
- **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** · 42,047★ · Python · Mature  
  Tokenizer-free multilingual TTS with creative voice design and strong zero-shot cloning.  
  <sub>topics: audio, deeplearning, minicpm, python, pytorch, speech, speech-synthesis, text-to-speech</sub>
- **[suno-ai/bark](https://github.com/suno-ai/bark)** · 39,332★ · Jupyter Notebook · Abandoned  
  Generative audio model — expressive, prompt-driven speech (laughs, music, SFX), not just plain narration.  
  <sub>topics: —</sub>
- **[resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox)** · 27,703★ · Python · Declining  
  SoTA open-source TTS with emotion/exaggeration control — a credible ElevenLabs-class voice.  
  <sub>topics: —</sub>
- **[QwenLM/Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS)** · 14,311★ · Python · Declining  
  Qwen team's open TTS series — high-quality multilingual synthesis from a frontier-model lab.  
  <sub>topics: —</sub>
- **[neuphonic/neutts](https://github.com/neuphonic/neutts)** · 6,340★ · Python · Declining  
  Compact on-device TTS model focused on natural, low-footprint speech.  
  <sub>topics: —</sub>
- **[KoljaB/RealtimeTTS](https://github.com/KoljaB/RealtimeTTS)** · 4,052★ · Python · Classic  
  Streaming TTS wrapper over many engines (Coqui, Kokoro, OpenAI, Azure, …) — starts speaking from the first LLM tokens.  
  <sub>topics: python, realtime, speech-synthesis, text-to-speech</sub>
- **[DigitalPhonetics/IMS-Toucan](https://github.com/DigitalPhonetics/IMS-Toucan)** · 2,212★ · Python · Declining  
  Controllable, fast TTS covering 7000+ languages — breadth-first multilingual synthesis.  
  <sub>topics: text-to-speech, toolkit, speech-synthesis, deep-learning, speech-processing, tts, pytorch, speech</sub>
- **[lucidrains/voicebox-pytorch](https://github.com/lucidrains/voicebox-pytorch)** · 705★ · Python · Abandoned  
  Clean PyTorch implementation of Meta's Voicebox — non-autoregressive flow-matching TTS research base.  
  <sub>topics: artificial-intelligence, deep-learning, text-to-speech</sub>

### Voice cloning / studio

_Give the agent a specific identity — clone a reference voice or design a new one. Mind consent/ethics here._

- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** · 105,688★ · Python · Rising  
  Local ElevenLabs alternative — voice cloning, design, and generation without the cloud.  
  <sub>topics: tts, voice-cloning, voice-generation, voice-ai, ai, cuda, mlx, huggingface</sub>
- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** · 60,239★ · Python · Hot  
  Open-source AI voice studio — clone, dictate, and create voices through a polished app.  
  <sub>topics: ai, voice-clone, qwen3-tts, voice-ai, whisper, qwen3-tts-ui, cuda, mlx</sub>
- **[CorentinJ/Real-Time-Voice-Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning)** · 60,238★ · Python · Declining  
  The classic 5-second voice-cloning demo (SV2TTS) — the repo that popularized OSS voice cloning.  
  <sub>topics: deep-learning, pytorch, tensorflow, tts, voice-cloning, python</sub>

### Speech-LLM / omni model

_The brain that natively hears and speaks — one model instead of a cascade, trading swappability for lower latency and better prosody._

- **[QwenLM/Qwen3-Omni](https://github.com/QwenLM/Qwen3-Omni)** · 4,096★ · Jupyter Notebook · Declining  
  Natively end-to-end omni-modal LLM (text/audio/vision) — collapses STT+LLM+TTS into one speech-native model.  
  <sub>topics: —</sub>

### Voice-capable runtime / serving

_Where the models actually run — local OpenAI-compatible servers or hosted SDKs that expose STT/TTS endpoints._

- **[mudler/LocalAI](https://github.com/mudler/LocalAI)** · 50,273★ · Go · Classic  
  Drop-in local AI engine exposing OpenAI-compatible TTS/STT/LLM endpoints — self-host the whole voice stack.  
  <sub>topics: llama, ai, llm, stable-diffusion, api, tts, musicgen, mamba</sub>
- **[Azure-Samples/cognitive-services-speech-sdk](https://github.com/Azure-Samples/cognitive-services-speech-sdk)** · 3,457★ · C# · Classic  
  Reference samples for Azure's hosted Speech SDK — STT/TTS/translation if you prefer a managed cloud.  
  <sub>topics: —</sub>
- **[microsoft/foundry-local](https://github.com/microsoft/foundry-local)** · 2,645★ · C++ · Hot  
  Microsoft's local model runtime bundling speech-to-text (Whisper) for offline, on-device voice.  
  <sub>topics: ai-sdk, chat-completions, foundry-local, gpu-acceleration, local-ai, microsoft, on-device-inference, onnx-runtime</sub>
- **[alexpinel/Dot](https://github.com/alexpinel/Dot)** · 1,916★ · JavaScript · Abandoned  
  Self-contained local app combining TTS, RAG, and LLMs — an all-local talking assistant.  
  <sub>topics: embeddings, llm, local, rag, standalone, standalone-app, document-chat, faiss</sub>
- **[Picovoice/picollm](https://github.com/Picovoice/picollm)** · 319★ · Python · Mature  
  On-device LLM inference from the Picovoice (Porcupine/Cheetah wake-word & STT) voice stack.  
  <sub>topics: llm, compression, efficient-inference, gemma, generative-ai, language-model, language-models, large-language-model</sub>

## Spotlight: the orchestration frameworks

These are the projects that make something a *voice agent* rather than a model. They sequence ears→brain→voice, cut latency, and — critically — handle **barge-in** so a user can interrupt the bot mid-sentence. Pick the framework first, then slot in STT/TTS.

- **[pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat)** · 17,152★ · Python — Open-source framework for voice & multimodal conversational AI; wires STT→LLM→TTS with interruptions, VAD, and pluggable vendors.
- **[livekit/agents](https://github.com/livekit/agents)** · 15,156★ · Python — Realtime voice-AI agent framework on LiveKit's WebRTC transport — turn detection, telephony (SIP), and tool calling built in.
- **[TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework)** · 11,224★ · Python — Low-latency framework for conversational voice-AI agents; graph of multimodal extensions for real-time pipelines.
- **[gradio-app/fastrtc](https://github.com/gradio-app/fastrtc)** · 4,636★ · JavaScript — Python real-time audio/video (WebRTC) library — the browser transport layer that turns a model into a live voice app.

## Graph analysis — how they relate

**Community clustering.** These 30 tools span **11 of the graph's 41 communities** — voice work is spread across the speech-model, agent-framework, and local-runtime neighborhoods rather than forming one tidy cluster.

- **Community 26** (9): `QwenAudio/qwen-audio-agent`, `ggml-org/whisper.cpp`, `SYSTRAN/faster-whisper`, `m-bain/whisperX`, `KoljaB/RealtimeSTT`, `Macoron/whisper.unity`, `KoljaB/RealtimeTTS`, `jamiepine/voicebox`, `debpalash/VoiceStudio`
- **Community 12** (6): `gradio-app/fastrtc`, `coqui-ai/TTS`, `OpenBMB/VoxCPM`, `DigitalPhonetics/IMS-Toucan`, `lucidrains/voicebox-pytorch`, `CorentinJ/Real-Time-Voice-Cloning`
- **Community 20** (3): `pipecat-ai/pipecat`, `livekit/agents`, `TEN-framework/ten-framework`
- **Community 7** (3): `Kieirra/murmure`, `QwenLM/Qwen3-TTS`, `QwenLM/Qwen3-Omni`
- **Community 1** (2): `resemble-ai/chatterbox`, `neuphonic/neutts`
- **Community 23** (2): `microsoft/foundry-local`, `Azure-Samples/cognitive-services-speech-sdk`

**Centrality (PageRank in the full 2,728-repo graph)** — most 'hub-like' voice tools in your ecosystem:

- `m-bain/whisperX` — PageRank 0.0010
- `ggml-org/whisper.cpp` — PageRank 0.0007
- `Picovoice/picollm` — PageRank 0.0006
- `CorentinJ/Real-Time-Voice-Cloning` — PageRank 0.0006
- `Macoron/whisper.unity` — PageRank 0.0005
- `KoljaB/RealtimeTTS` — PageRank 0.0005
- `DigitalPhonetics/IMS-Toucan` — PageRank 0.0005
- `KoljaB/RealtimeSTT` — PageRank 0.0005
- `microsoft/foundry-local` — PageRank 0.0005
- `mudler/LocalAI` — PageRank 0.0005

**Direct links between voice tools** (top similarity edges where both endpoints are in this report):

- `KoljaB/RealtimeTTS` ⇄ `KoljaB/RealtimeSTT` (w=1.617) — topics: python, realtime; authors: KoljaB, ANDROIDHASSAN, abaichuan1017
- `ggml-org/whisper.cpp` ⇄ `SYSTRAN/faster-whisper` (w=0.750) — topics: openai, speech-to-text, transformer, whisper
- `livekit/agents` ⇄ `TEN-framework/ten-framework` (w=0.621) — topics: ai, real-time, voice, video
- `m-bain/whisperX` ⇄ `Macoron/whisper.unity` (w=0.500) — topics: asr, speech-recognition, speech-to-text, whisper
- `TEN-framework/ten-framework` ⇄ `pipecat-ai/pipecat` (w=0.425) — topics: ai, real-time, voice
- `livekit/agents` ⇄ `pipecat-ai/pipecat` (w=0.414) — topics: ai, real-time, voice; authors: github-actions[bot]
- `OpenBMB/VoxCPM` ⇄ `coqui-ai/TTS` (w=0.370) — topics: python, pytorch, speech, speech-synthesis
- `SYSTRAN/faster-whisper` ⇄ `Macoron/whisper.unity` (w=0.364) — topics: speech-recognition, speech-to-text, whisper, openai
- `m-bain/whisperX` ⇄ `SYSTRAN/faster-whisper` (w=0.350) — topics: speech-recognition, speech-to-text, whisper
- `OpenBMB/VoxCPM` ⇄ `DigitalPhonetics/IMS-Toucan` (w=0.344) — topics: pytorch, speech, speech-synthesis, text-to-speech
- `coqui-ai/TTS` ⇄ `DigitalPhonetics/IMS-Toucan` (w=0.336) — topics: text-to-speech, deep-learning, speech, pytorch
- `CorentinJ/Real-Time-Voice-Cloning` ⇄ `DigitalPhonetics/IMS-Toucan` (w=0.323) — topics: deep-learning, pytorch, tts
- `OpenBMB/VoxCPM` ⇄ `CorentinJ/Real-Time-Voice-Cloning` (w=0.300) — topics: python, pytorch, tts, voice-cloning
- `CorentinJ/Real-Time-Voice-Cloning` ⇄ `coqui-ai/TTS` (w=0.300) — topics: deep-learning, pytorch, tts, voice-cloning
- `lucidrains/voicebox-pytorch` ⇄ `DigitalPhonetics/IMS-Toucan` (w=0.272) — topics: deep-learning, text-to-speech
- …and 4 more.

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). Pair with lifecycle + activity before adopting — voice models in particular churn fast.

| Tool | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|
| livekit/agents | 99 | Classic | very active | 11 | 12% | 382 |
| ggml-org/whisper.cpp | 99 | Classic | very active | 14 | 8% | 45 |
| pipecat-ai/pipecat | 84 | Mature | very active | 2 | 42% | 125 |
| microsoft/foundry-local | 83 | Hot | very active | 2 | 35% | 31 |
| debpalash/VoiceStudio | 79 | Rising | very active | 1 | 84% | 49 |
| mudler/LocalAI | 79 | Classic | very active | 1 | 80% | 140 |
| QwenAudio/qwen-audio-agent | 78 | Hot | very active | 1 | 51% | 29 |
| Kieirra/murmure | 78 | Hot | very active | 1 | 91% | 18 |
| TEN-framework/ten-framework | 77 | Mature | very active | 2 | 34% | 125 |
| KoljaB/RealtimeTTS | 72 | Classic | very active | 1 | 85% | 72 |
| jamiepine/voicebox | 72 | Hot | active | 1 | 60% | 25 |
| m-bain/whisperX | 69 | Mature | active | 2 | 44% | 44 |
| KoljaB/RealtimeSTT | 68 | Classic | very active | 1 | 75% | 47 |
| OpenBMB/VoxCPM | 63 | Mature | very active | 1 | 59% | 14 |
| Azure-Samples/cognitive-services-speech-sdk | 59 | Classic | active | 2 | 27% | 107 |
| SYSTRAN/faster-whisper | 58 | Classic | active | 2 | 46% | 21 |
| Picovoice/picollm | 58 | Mature | active | 1 | 93% | 6 |
| gradio-app/fastrtc | 44 | Mature | active | 1 | 100% | 22 |
| resemble-ai/chatterbox | 38 | Declining | active | 1 | 100% | 1 |
| openai/whisper | 36 | Mature | slowing | 1 | 100% | 13 |
| neuphonic/neutts | 27 | Declining | slowing | 0 | 0% | 0 |
| QwenLM/Qwen3-Omni | 23 | Declining | stale | 0 | 0% | 0 |
| QwenLM/Qwen3-TTS | 19 | Declining | stale | 0 | 0% | 0 |
| CorentinJ/Real-Time-Voice-Cloning | 18 | Declining | stale | 0 | 0% | 0 |
| DigitalPhonetics/IMS-Toucan | 16 | Declining | stale | 0 | 0% | 14 |
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
- **mastra-ai/mastra** (29,430★) — general TS agent framework with a TTS module — covered by the agent-orchestration report
- **VoltAgent/voltagent** (10,935★) — general TS agent platform that *can* do TTS — not voice-specific
- **Fosowl/agenticSeek** (27,645★) — autonomous local agent with an optional voice front-end — general agent, not a voice stack
- **mozilla-ai/llamafile** (26,591★) — single-file LLM runner that bundles whisper.cpp — general runtime, see inference reports
- **huggingface/transformers** (168,687★) — hosts most of these speech models, but far too broad to list as a 'voice' tool
- **unslothai/unsloth** (79,234★) — fine-tunes TTS/audio models among many others — a training tool, not a voice agent

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

<sub>Tools covered: 30 · Snapshot: 2026-11-09T14:44:53.318Z</sub>
