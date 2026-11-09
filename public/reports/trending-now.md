# Trending Now — What's Actually Moving in Your Stars

> Derived from **kaiser-data**'s 2,728 starred repos (snapshot `2026-11-09T14:44:53.318Z`), cross-referenced with the repo-similarity graph (2,728 nodes / 9,126 edges, 41 communities).
>
> Generated 2026-11-09 by `scripts/reports/trending_now.py` (regenerate any time — no API cost).

![Biggest star gains (7d)](assets/trending-now-top-tools.svg)

![Repos by movement type](assets/trending-now-categories.svg)


## Executive summary

- **This is the only report here that measures *change* rather than describing a landscape.** Every other report curates a taxonomy and renders it against the current vintage; this one diffs archived snapshots to show what actually moved.
- **Window**: `2026-11-02` → `2026-11-09` (**7 days**), covering the **2,574 repos** present in both snapshots. Long-run comparisons use `2026-06-11` → `2026-11-09` (**151 days**).
- **1,898 repos gained stars** in the recent window, adding **384,585★** between them.
- **154 repos are new to the dataset** since the last refresh — newly starred, so they have no baseline to diff and are listed separately.
- **Measured, not estimated.** `classified.json` carries a `momentum` field, but it is a lifetime-stars/day proxy (its own source comment calls it "a serviceable proxy"). Everything below is observed snapshot-to-snapshot movement over a known number of days.

## How to read this

| Board | Question it answers | Bias to watch |
|---|---|---|
| **Fastest risers** | What gained the most stars outright? | Favours repos that are already huge — a 1% move on 100k stars beats a doubling at 500. |
| **Breakouts** | What grew fastest *relative to its size*? | Favours small repos; floored at 300★ baseline so noise doesn't win. |
| **Sustained climbers** | What has compounded over the long window? | Smooths out one-off spikes (a HN front page, a launch). |
| **New entrants** | What did you just start following? | Not growth at all — these have no baseline. |
| **Cooling off** | What is still growing, but much slower than it was? | Deceleration usually means a launch spike ending, not a project dying. |

## Fastest risers — absolute (2026-11-02 → 2026-11-09, 7d)

Raw star gain over the window. `Stars/day` normalizes for window length so this stays comparable across refreshes of different spacing.

| # | Repo | Gain | Stars/day | Stars now | Lang | Lifecycle | Activity |
|---|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | **+24,532** | 3504.6 | 445,673 | TypeScript | Hot | very active |
| 2 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | **+10,571** | 1510.1 | 67,543 | JavaScript | Declining | active |
| 3 | [cactus-compute/cactus](https://github.com/cactus-compute/cactus) | **+8,445** | 1206.4 | 14,616 | Python | Hot | very active |
| 4 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | **+8,054** | 1150.6 | 277,214 | TypeScript | Hot | very active |
| 5 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | **+8,017** | 1145.3 | 100,302 | Python | Mature | very active |
| 6 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | **+7,086** | 1012.3 | 105,688 | Python | Rising | very active |
| 7 | [stablyai/orca](https://github.com/stablyai/orca) | **+6,795** | 970.7 | 120,005 | TypeScript | Hot | very active |
| 8 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | **+6,548** | 935.4 | 106,584 | Rust | Hot | very active |
| 9 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) | **+5,312** | 758.9 | 55,157 | Python | Hot | very active |
| 10 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | **+4,919** | 702.7 | 115,227 | TypeScript | Hot | very active |
| 11 | [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | **+4,889** | 698.4 | 534,241 | — | Mature | slowing |
| 12 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | **+4,748** | 678.3 | 187,328 | JavaScript | Hot | very active |
| 13 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | **+4,744** | 677.7 | 299,980 | JavaScript | Hot | very active |
| 14 | [Niko1221/Strata](https://github.com/Niko1221/Strata) | **+4,203** | 600.4 | 42,331 | C++ | Rising | very active |
| 15 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | **+4,090** | 584.3 | 141,404 | Python | Mature | very active |
| 16 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | **+3,987** | 569.6 | 112,329 | JavaScript | Hot | very active |
| 17 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | **+3,975** | 567.9 | 81,445 | TypeScript | Hot | very active |
| 18 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | **+3,948** | 564.0 | 144,848 | Python | Hot | very active |
| 19 | [obra/superpowers](https://github.com/obra/superpowers) | **+3,897** | 556.7 | 314,888 | Shell | Mature | active |
| 20 | [anthropics/skills](https://github.com/anthropics/skills) | **+3,726** | 532.3 | 190,342 | Python | Mature | active |

## Breakouts — fastest relative growth (≥300★ baseline)

Percent growth over the same 7-day window. The baseline floor keeps small-number noise off the board — a repo going 8★ → 20★ is not a trend.

| # | Repo | Growth | Gain | Stars now | What it is |
|---|---|---|---|---|---|
| 1 | [cactus-compute/cactus](https://github.com/cactus-compute/cactus) | **+137%** | +8,445 | 14,616 | Sub-50mb agentic, voice and vision intelligence for consumer devices. |
| 2 | [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) | **+60%** | +1,240 | 3,303 | See how your app actually fits together. An interactive, plain-English map of your codeb… |
| 3 | [deeplethe/sandstorm](https://github.com/deeplethe/sandstorm) | **+48%** | +1,944 | 5,954 | Run thousands of AI agent sandboxes on the cheapest machines. |
| 4 | [Jakeschincariol/day-trader-skill](https://github.com/Jakeschincariol/day-trader-skill) | **+41%** | +1,840 | 6,304 | 11 Claude skills for day trading: scan thousands of charts, track breaking news, time ev… |
| 5 | [yalongwastaken/git-koi](https://github.com/yalongwastaken/git-koi) | **+38%** | +175 | 641 | Draw a pixel-art koi from a GitHub account's public activity, as a looping GIF for a pro… |
| 6 | [udhaykumarbala/cleanyourtv-app](https://github.com/udhaykumarbala/cleanyourtv-app) | **+33%** | +467 | 1,875 | A community-built phone app for Clean Your TV: clean up an Android TV from your phone. N… |
| 7 | [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | **+23%** | +2,107 | 11,386 | A 2.78-trillion-parameter Kimi K3 running inference on a single CPU in 8.24 GB of RAM. P… |
| 8 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | **+19%** | +10,571 | 67,543 | A coding-agent skill for multi-phase security audits with independently verified, machin… |
| 9 | [punkpeye/awesome-remote-mcp-servers](https://github.com/punkpeye/awesome-remote-mcp-servers) | **+17%** | +417 | 2,851 | A collection of remote MCP servers. |
| 10 | [unclebob/ub-mode](https://github.com/unclebob/ub-mode) | **+15%** | +950 | 7,409 | — |
| 11 | [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon) | **+14%** | +405 | 3,400 | The cross-harness, self-improving memory layer for AI agents. Join our community: https:… |
| 12 | [spotify/portal-ai-plugins](https://github.com/spotify/portal-ai-plugins) | **+13%** | +366 | 3,189 | — |
| 13 | [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | **+13%** | +1,789 | 15,679 | 🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier… |
| 14 | [floci-io/floci](https://github.com/floci-io/floci) | **+13%** | +3,494 | 31,173 | Light, fluffy, and always free - The AWS Local Emulator alternative |
| 15 | [Manavarya09/design-extract](https://github.com/Manavarya09/design-extract) | **+12%** | +513 | 4,973 | Extract any website's complete design system with one command. DTCG tokens, semantic+pri… |
| 16 | [HarnessRouter/harnessrouter](https://github.com/HarnessRouter/harnessrouter) | **+11%** | +437 | 4,314 | HarnessRouter Community Edition: the self-hosted, Apache-2.0 edition of the unified inte… |
| 17 | [Niko1221/Strata](https://github.com/Niko1221/Strata) | **+11%** | +4,203 | 42,331 | Qwen3.8-Flash-Next on any consumer hardware: one-click install for Windows / Linux. Stra… |
| 18 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) | **+11%** | +5,312 | 55,157 | Debloat any Android or Google TV over Wi-Fi and get an Apple TV-style home. |
| 19 | [wesbos/3d-model-anything](https://github.com/wesbos/3d-model-anything) | **+10%** | +271 | 2,904 | Capture iPhone LiDAR and photos, reconstruct editable Three.js rooms, and explore them i… |
| 20 | [achetronic/parakeet](https://github.com/achetronic/parakeet) | **+10%** | +33 | 372 | OpenAI Whisper-compatible ASR server using NVIDIA Parakeet TDT 0.6B (ONNX). Super fast C… |

## Sustained climbers — long run (2026-06-11 → 2026-11-09, 151d)

Averaged over the full snapshot history, so a single viral week doesn't dominate. Repos high here *and* in the recent board are compounding, not spiking.

| # | Repo | Stars/day | Total gain | Stars now | Lang | Health |
|---|---|---|---|---|---|---|
| 1 | [obra/superpowers](https://github.com/obra/superpowers) | **597.0** | +90,154 | 314,888 | Shell | 64 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | **573.2** | +86,546 | 299,980 | JavaScript | 79 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | **470.4** | +71,033 | 261,966 | Python | 85 |
| 4 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | **453.5** | +68,474 | 200,001 | TypeScript | 86 |
| 5 | [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | **393.1** | +59,360 | 534,241 | — | 47 |
| 6 | [earendil-works/pi](https://github.com/earendil-works/pi) | **392.3** | +59,241 | 121,019 | TypeScript | 80 |
| 7 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | **382.2** | +57,707 | 231,187 | — | 18 |
| 8 | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | **376.0** | +56,769 | 147,207 | Python | 95 |
| 9 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | **375.1** | +56,636 | 497,497 | Python | 64 |
| 10 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | **370.8** | +55,986 | 167,439 | Shell | 63 |
| 11 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | **366.3** | +55,307 | 141,404 | Python | 90 |
| 12 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | **361.8** | +54,632 | 81,445 | TypeScript | 79 |
| 13 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | **361.2** | +54,534 | 153,013 | Rust | 79 |
| 14 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | **347.5** | +52,475 | 225,675 | TypeScript | 94 |
| 15 | [usestrix/strix](https://github.com/usestrix/strix) | **322.2** | +48,651 | 74,597 | Python | 80 |
| 16 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | **311.4** | +47,016 | 118,531 | Go | 79 |
| 17 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | **310.1** | +46,818 | 561,247 | Markdown | 45 |
| 18 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | **298.6** | +45,084 | 48,401 | C | 76 |
| 19 | [openai/codex](https://github.com/openai/codex) | **290.0** | +43,789 | 134,247 | Rust | 93 |
| 20 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | **287.5** | +43,410 | 194,553 | Python | 89 |

## Emerging themes

The boards above are computed; this section is interpretation. Each theme groups movers that are rising for the same underlying reason.

### Skills as the packaging format for agent behaviour

_The single loudest signal in this dataset. A year ago you configured an agent with a prompt; now behaviour ships as a versioned, installable *skill* bundle — and the repos distributing those bundles are growing faster than the agents that consume them. Note what this implies: the moat is moving from the model to the instruction layer._

- **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** · 187,328★ · +4,748★ in 7d  
  Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** · 299,980★ · +4,744★ in 7d  
  The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- **[obra/superpowers](https://github.com/obra/superpowers)** · 314,888★ · +3,897★ in 7d  
  An agentic skills framework & software development methodology that works.
- **[anthropics/skills](https://github.com/anthropics/skills)** · 190,342★ · +3,726★ in 7d  
  Public repository for Agent Skills
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** · 147,207★ · +3,097★ in 7d  
  An AI skill that provides design intelligence for building professional UI/UX across multiple platforms.
- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** · 231,187★ · +2,841★ in 7d  
  A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls.
- **[garrytan/gstack](https://github.com/garrytan/gstack)** · 140,897★ · +2,258★ in 7d  
  Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA
- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** · 167,439★ · +1,403★ in 7d  
  A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables.
- **[ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)** · 60,596★ · +825★ in 7d  
  A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** · 57,592★ · +500★ in 7d  
  A hand-picked collection of the finest of resources for the most awesome of agents, Claude Code, the undisputed champion of coding companions, from the unstoppable team at Anthropic PBC (no affiliation). A delectable showcase of top tier skills, ambidextrous agents, scintillating status lines, top notch developer tooling, and also we have plugins
- **[shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)** · 68,875★ · +417★ in 7d  
  from vibe coding to agentic engineering - practice makes claude perfect

### Giving agents a memory of the codebase

_Retrieval over a codebase is being replaced by *pre-indexed structure* — graphs and persistent stores an agent can consult instead of re-reading files every session. This is the same insight the graph in this repo is built on, and it is now one of the fastest-moving categories in your stars._

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** · 115,227★ · +4,919★ in 7d  
  Persistent Context Across Sessions for Every Agent –  Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** · 144,848★ · +3,948★ in 7d  
  Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.
- **[Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything)** · 91,707★ · +1,938★ in 7d  
  Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.
- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** · 77,167★ · +947★ in 7d  
  Pre-indexed code knowledge graph, auto syncs on code changes, for Claude Code, Codex, Gemini, Cursor, OpenCode, AntiGravity, Kiro, CoPilot, and Hermes Agent — fewer tokens, fewer tool calls, 100% local
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** · 48,401★ · +409★ in 7d  
  Local code intelligence for developers and AI agents. Connect code, docs and infrastructure in a persistent graph, with CBM Lens, MCP tools, agent integrations and change-aware test selection.
- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** · 30,686★ · +336★ in 7d  
  TencentDB Agent Memory is a team-level memory hub for AI Agents — turning conversations, docs, and code into four reusable memory assets (Chat Memory, Skill, LLM-Wiki, Code-Graph) that are governed, shared, and equipped across agents and frameworks.
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** · 33,177★ · +174★ in 7d  
  Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory with small models for free
- **[langchain-ai/openwiki](https://github.com/langchain-ai/openwiki)** · 17,839★ · +163★ in 7d  
  OpenWiki is a CLI that writes and maintains agent documentation for your codebase.
- **[semantica-agi/semantica](https://github.com/semantica-agi/semantica)** · 14,493★ · +98★ in 7d  
  Graph-Native Infrastructure for Context and Accountable AI Systems
- **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)** · 12,678★ · +15★ in 7d  
  Code search MCP for Claude Code. Make entire codebase the context for any coding agent.
- **[repowise-dev/repowise](https://github.com/repowise-dev/repowise)** · 8,095★ · +-7★ in 7d  
  Codebase intelligence for AI and humans: code health scores, auto-generated docs, git analytics, dead code detection, and architectural decisions via MCP.

### Frontier models on hardware you already own

_The counter-current to everything above: instead of making API calls cheaper, remove them. Big mixture-of-experts models are being squeezed onto consumer machines, and the repos doing it are among the fastest relative movers in the dataset._

- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** · 49,269★ · +3,043★ in 7d  
  A hierarchical inference engine for frontier MoE models: hot experts on the GPU (CUDA, Vulkan), warm ones in RAM, cold ones streamed from NVMe. Written in C, runs on the hardware you already own.
- **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)** · 133,817★ · +671★ in 7d  
  LLM inference in C/C++
- **[lyogavin/airllm](https://github.com/lyogavin/airllm)** · 42,048★ · +464★ in 7d  
  AirLLM 2.8T LLM inference with single 4GB GPU
- **[Mesh-LLM/mesh-llm](https://github.com/Mesh-LLM/mesh-llm)** · 3,997★ · +196★ in 7d  
  Distributed AI/LLM for the people. Share compute privately or publicly to power your agents and chat.
- **[microsoft/foundry-local](https://github.com/microsoft/foundry-local)** · 2,645★ · +40★ in 7d  
  —

### Token economics became a product category

_Context windows got bigger and people started paying for them. These repos exist purely to make agents cheaper to run — compressing tool output, trimming prompts, proxying calls. That a compression layer can add tens of thousands of stars in weeks says the cost pressure is real, not theoretical._

- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** · 49,269★ · +3,043★ in 7d  
  A hierarchical inference engine for frontier MoE models: hot experts on the GPU (CUDA, Vulkan), warm ones in RAM, cold ones streamed from NVMe. Written in C, runs on the hardware you already own.
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** · 118,531★ · +1,675★ in 7d  
  🪨 why use many token when few token do trick. Viral skill + proxy for coding agents that cuts 65% of tokens by talking like a caveman.
- **[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)** · 67,516★ · +1,667★ in 7d  
  Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)
- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** · 85,981★ · +681★ in 7d  
  CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** · 79,211★ · +580★ in 7d  
  Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, same answers. Library, proxy, MCP server.

### The coding-agent harness field is still splitting, not consolidating

_Terminal coding agents keep multiplying rather than converging on a winner, and a second layer has appeared above them: switchers, meta-harnesses, and orchestrators whose job is to manage the agents themselves._

- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** · 112,510★ · +2,366★ in 7d  
  The open-source app everyone uses to manage agents at work
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** · 261,966★ · +2,276★ in 7d  
  The agent that grows with you
- **[farion1231/cc-switch](https://github.com/farion1231/cc-switch)** · 153,013★ · +1,841★ in 7d  
  A cross-platform desktop All-in-One assistant for Claude Code, Codex, OpenCode,DeepSeek Harness and more. Only official website: ccswitch.io
- **[anomalyco/opencode](https://github.com/anomalyco/opencode)** · 225,675★ · +1,671★ in 7d  
  The open source coding agent.
- **[earendil-works/pi](https://github.com/earendil-works/pi)** · 121,019★ · +1,483★ in 7d  
  AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI
- **[openai/codex](https://github.com/openai/codex)** · 134,247★ · +1,393★ in 7d  
  Lightweight coding agent that runs in your terminal
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** · 155,079★ · +822★ in 7d  
  Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.
- **[getpaseo/paseo](https://github.com/getpaseo/paseo)** · 23,617★ · +815★ in 7d  
  Orchestrate multiple coding agents from desktop and mobile
- **[multica-ai/multica](https://github.com/multica-ai/multica)** · 55,404★ · +775★ in 7d  
  Make humans and AI agents work as one team — open-source and self-hostable.
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** · 81,326★ · +725★ in 7d  
  🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** · 93,030★ · +537★ in 7d  
  🙌 OpenHands: AI-Driven Development
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** · 85,183★ · +304★ in 7d  
  An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.
- **[1jehuang/jcode](https://github.com/1jehuang/jcode)** · 21,637★ · +223★ in 7d  
  High performance coding agent harness written in Rust, built for heavy multi-agent dev workflows
- **[code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)** · 70,798★ · +186★ in 7d  
  OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of graph engineering.
- **[vercel/eve](https://github.com/vercel/eve)** · 5,830★ · +59★ in 7d  
  The Open Framework for Building Agents

### Agents are leaving the terminal for specific jobs

_The generalist assistant is being joined by vertical agents pointed at one domain — pentesting, trading, tutoring, job hunting, video. These grow on usefulness to a specific audience rather than on developer-tool hype._

- **[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** · 81,445★ · +3,975★ in 7d  
  Write HTML. Render video. Built for agents.
- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** · 57,457★ · +3,338★ in 7d  
  DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** · 81,371★ · +1,915★ in 7d  
  Open-source AI job search agent and job finder: scan job boards, score each job 1-5 against your CV before you apply, tailor an ATS-friendly resume and cover letter, get interview prep and an application tracker. It helps you fill in each application; you press Submit. Runs locally in Codex, OpenCode and other AI CLIs, or as a Claude Code plugin.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** · 121,507★ · +1,687★ in 7d  
  TradingAgents: Multi-Agents LLM Financial Trading Framework
- **[usestrix/strix](https://github.com/usestrix/strix)** · 74,597★ · +1,265★ in 7d  
  Open-source AI penetration testing tool to find and fix your app’s vulnerabilities.
- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** · 60,239★ · +984★ in 7d  
  The open-source AI voice studio. Clone, dictate, create.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** · 120,416★ · +590★ in 7d  
  Open-source Python library for AI browser agents, plus Browser Use Cloud: stealth browsers and a hosted agent API.
- **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** · 37,948★ · +506★ in 7d  
  "Vibe-Trading: Your Personal Trading Agent"
- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** · 32,556★ · +175★ in 7d  
  Privacy-first AI meeting note taker for Windows and macOS. Free, open source (MIT). On-device Whisper/Parakeet transcription and speaker diarization, no meeting bot. Open-source alternative to Granola, Otter and Fireflies. https://meetily.ai
- **[Canner/WrenAI](https://github.com/Canner/WrenAI)** · 18,115★ · +75★ in 7d  
  GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL through an open context layer that turns natural-language questions into trusted dashboards, charts, and SQL across 20+ data sources, such as BigQuery, Snowflake, PostgreSQL, ClickHouse, Amazon Redshift, Databricks and more.

### Design and spec as agent-readable artifacts

_If an agent writes the code, the leverage moves upstream to the spec and the design system. These repos turn intent into something an agent can consume directly._

- **[github/spec-kit](https://github.com/github/spec-kit)** · 148,915★ · +3,667★ in 7d  
  💫 Toolkit to help you get started with SDD or any other process!
- **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** · 147,207★ · +3,097★ in 7d  
  An AI skill that provides design intelligence for building professional UI/UX across multiple platforms.
- **[nexu-io/open-design](https://github.com/nexu-io/open-design)** · 106,762★ · +1,294★ in 7d  
  The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Create motion, prototypes, websites, apps, dashboards, presentations, images, and videos with your team and AI agents. Share work, exchange feedback, and iterate together in one workspace.
- **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** · 126,263★ · +1,068★ in 7d  
  A collection of DESIGN.md files analysis by popular brand design systems. Drop one into your project and let coding agents generate a matching UI.

## New entrants — newly starred since the last refresh

These joined the dataset during this window, so they have no baseline to diff. They are what *you* just found interesting, which is its own kind of trend signal.

| Repo | Stars | Lang | Lifecycle | What it is |
|---|---|---|---|---|
| [mattpocock/skills](https://github.com/mattpocock/skills) | 319,223 | Shell | Hot | Skills for Real Engineers. Straight from my .agents directory. |
| [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 78,936 | Python | Hot | World's first open-source, agentic video production system. 12 production pipelines,… |
| [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter) | 68,845 | Rust | Classic | A coding agent for open models like Kimi K3 and GLM 5.3 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | 51,451 | CSS | Hot | Anti-AI-slop design skill for Claude Code, Cursor, and Codex. |
| [harness/harness](https://github.com/harness/harness) | 38,865 | Go | Classic | Harness Open Source is an end-to-end developer platform with Source Control Manageme… |
| [Cinnamon/kotaemon](https://github.com/Cinnamon/kotaemon) | 25,895 | Python | Mature | An open-source RAG-based tool for chatting with your documents. |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 25,884 | Python | Hot | Design physical products with AI |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 25,409 | TypeScript | Hot | Open-source 3D architecture software for AECO, scan-to-BIM. Agent-friendly, browser-… |
| [anderspitman/awesome-tunneling](https://github.com/anderspitman/awesome-tunneling) | 22,034 | Python | Classic | List of ngrok, Cloudflare Tunnel, Tailscale, and ZeroTier alternatives and other tun… |
| [bluenviron/mediamtx](https://github.com/bluenviron/mediamtx) | 20,650 | Go | Classic | Ready-to-use Media-over-QUIC / SRT / WebRTC / RTSP / RTMP / LL-HLS / MPEG-TS / RTP l… |
| [kortix-ai/CompanyOS](https://github.com/kortix-ai/CompanyOS) | 20,589 | TypeScript | Mature | Kortix CompanyOS – the open-source operating system for your company. Multiplayer AI… |
| [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | 20,483 | TypeScript | Hot | Desktop app to manage markdown knowledge bases |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18,956 | Python | Hot | SkillOpt is a text-space optimizer that trains reusable natural-language skills for … |
| [williamfiset/algorithms](https://github.com/williamfiset/algorithms) | 18,889 | Java | Mature | A collection of algorithms and data structures |
| [nicbarker/clay](https://github.com/nicbarker/clay) | 18,393 | C | Mature | High performance UI layout library in C. |
| [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | 15,962 | Python | Hot | Open-source plugin for designing and reviewing software with agents |
| [apify/apify-mcp-server](https://github.com/apify/apify-mcp-server) | 15,387 | TypeScript | Hot | The Apify MCP server enables your AI agents to extract data from social media, searc… |
| [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) | 15,180 | Rust | Hot | SolidCraft: an open-source parametric 3D CAD application built in pure Rust. Desktop… |
| [open-jarvis/OpenJarvis](https://github.com/open-jarvis/OpenJarvis) | 14,049 | Python | Hot | Personal AI, On Personal Devices |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | 10,825 | Python | Hot | Auto Ontology is a Python framework for building semantic, graph-based reasoning lay… |
| [wader/fq](https://github.com/wader/fq) | 10,630 | Go | Classic | fq - jq for binary formats. Tool, language and decoders for working with binary form… |
| [deepseek-ai/3FS](https://github.com/deepseek-ai/3FS) | 10,441 | C++ | Declining | A high-performance distributed file system designed to address the challenges of AI … |
| [ClickHouse/ClickStack](https://github.com/ClickHouse/ClickStack) | 10,003 | TypeScript | Classic | Resolve production issues, fast. An open source observability platform unifying sess… |
| [lepoco/wpfui](https://github.com/lepoco/wpfui) | 9,747 | C# | Mature | WPF UI provides the Fluent experience in your known and loved WPF framework. Intuiti… |
| [revfactory/harness](https://github.com/revfactory/harness) | 9,342 | — | Declining | A meta-skill that designs domain-specific agent teams, defines specialized agents, a… |
| [everywall/ladder](https://github.com/everywall/ladder) | 9,303 | Go | Mature | Selfhosted alternative to 12ft.io. and 1ft.io. Proxy to remove CORS headers and modi… |
| [deepseek-ai/DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) | 9,177 | Cuda | Mature | DeepGEMM: clean and efficient BLAS kernel library on GPU |
| [Neywa-Labs/mlx-audio](https://github.com/Neywa-Labs/mlx-audio) | 8,219 | Python | Hot | A text-to-speech (TTS), speech-to-text (STT) and speech-to-speech (STS) library buil… |
| [HeyPuter/everything](https://github.com/HeyPuter/everything) | 7,761 | JavaScript | Hot | We're rebuilding and open-sourcing the world’s software from scratch. |
| [withmarbleapp/os-taxonomy](https://github.com/withmarbleapp/os-taxonomy) | 7,649 | JavaScript | Rising | — |
| [cosmos/cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 7,089 | Go | Classic | Framework for building performant, customizable blockchains with native interoperabi… |
| [proxifly/free-proxy-list](https://github.com/proxifly/free-proxy-list) | 7,026 | — | Mature | 🚀 Free HTTP, SOCKS4, & SOCKS5 proxy list * Updated every 5 minutes * and rotating pr… |
| [graphhopper/graphhopper](https://github.com/graphhopper/graphhopper) | 6,796 | Java | Classic | Open source routing engine for OpenStreetMap. Use it as Java library or standalone w… |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,571 | C++ | Classic | LibreCAD is a cross-platform 2D CAD program. It can read DXF/DWG, and write DXF/DWG/… |
| [tianocore/edk2](https://github.com/tianocore/edk2) | 6,407 | C | Classic | EDK II |
| [cactus-compute/engine](https://github.com/cactus-compute/engine) | 6,188 | C++ | Mature | 2bit quants, kernels and runtime for consumer devices. |
| [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows) | 5,971 | TypeScript | Hot | AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents |
| [Neywa-Labs/mlx-vlm](https://github.com/Neywa-Labs/mlx-vlm) | 5,825 | Python | Mature | MLX-VLM is a package for inference and fine-tuning of Vision Language Models (VLMs) … |
| [tummychow/git-absorb](https://github.com/tummychow/git-absorb) | 5,761 | Rust | Declining | git commit --fixup, but automatic |
| [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 5,682 | Python | Declining | ⚒ Evolutionary self-improvement for Hermes Agent — optimize skills, prompts, and cod… |
| _…and 114 more_ | | | | |

## Cooling off

Deceleration, not decline. These averaged ≥1★/day across the 151-day long window but are now running below 40% of that rate. Most are still gaining — just far more slowly than they were, which is usually the tail of a launch spike rather than a problem.

| Repo | Long-run ★/day | Recent ★/day | Now at | Last push | Lifecycle |
|---|---|---|---|---|---|
| [meta-llama/prompt-ops](https://github.com/meta-llama/prompt-ops) | 1.1 | -5.7 | **-511%** of prior pace | 6mo ago | Declining |
| [axios/axios](https://github.com/axios/axios) | 1.5 | -1.9 | **-125%** of prior pace | 0d ago | Classic |
| [ultraworkers/claw-code](https://github.com/ultraworkers/claw-code) | 8.5 | -8.0 | **-94%** of prior pace | 0d ago | Hot |
| [hesamsheikh/awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases) | 2.0 | -1.3 | **-66%** of prior pace | 7mo ago | Declining |
| [flyteorg/flyte](https://github.com/flyteorg/flyte) | 5.0 | -2.1 | **-43%** of prior pace | 0d ago | Classic |
| [haotian-liu/LLaVA](https://github.com/haotian-liu/LLaVA) | 1.4 | -0.4 | **-31%** of prior pace | 2.2y ago | Abandoned |
| [Gen-Verse/OpenClaw-RL](https://github.com/Gen-Verse/OpenClaw-RL) | 1.7 | -0.4 | **-25%** of prior pace | 5mo ago | Declining |
| [andrewyng/context-hub](https://github.com/andrewyng/context-hub) | 2.8 | -0.1 | **-5%** of prior pace | 5mo ago | Declining |
| [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) | 39.4 | -1.6 | **-4%** of prior pace | 0d ago | Classic |
| [repowise-dev/repowise](https://github.com/repowise-dev/repowise) | 38.6 | -1.0 | **-3%** of prior pace | 0d ago | Hot |
| [phoenixframework/phoenix](https://github.com/phoenixframework/phoenix) | 1.3 | 0.0 | **0%** of prior pace | 0d ago | Classic |
| [microsoft/magentic-ui](https://github.com/microsoft/magentic-ui) | 1.4 | 0.0 | **0%** of prior pace | 1mo ago | Declining |
| [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) | 2.9 | 0.0 | **0%** of prior pace | 4mo ago | Declining |
| [JohnMwendwa/free-ai-resources](https://github.com/JohnMwendwa/free-ai-resources) | 1.1 | 0.0 | **0%** of prior pace | 1.5y ago | Abandoned |
| [allenai/olmocr](https://github.com/allenai/olmocr) | 16.1 | 0.7 | **4%** of prior pace | 7mo ago | Declining |

## Graph analysis — where the movement clusters

**Community clustering.** The top 40 risers span **17 of the graph's 41 communities** — the more concentrated they are, the more this looks like one trend rather than broad drift.

- **Community 0** (7): `cloudflare/security-audit-skill`, `stablyai/orca`, `pbakaus/impeccable`, `DietrichGebert/ponytail`, `affaan-m/ECC`, `awesome-selfhosted/awesome-selfhosted`, `herdrdev/herdr`
- **Community 10** (6): `sindresorhus/awesome`, `Leonxlnx/taste-skill`, `anthropics/skills`, `multica-ai/andrej-karpathy-skills`, `codecrafters-io/build-your-own-x`, `public-apis/public-apis`
- **Community 9** (5): `thedotmack/claude-mem`, `harry0703/MoneyPrinterTurbo`, `nextlevelbuilder/ui-ux-pro-max-skill`, `paperclipai/paperclip`, `NousResearch/hermes-agent`
- **Community 11** (4): `cactus-compute/cactus`, `D4Vinci/Scrapling`, `heygen-com/hyperframes`, `firecrawl/firecrawl`
- **Community 14** (3): `morluto/rea`, `tashfeenahmed/freellmapi`, `JustVugg/colibri`
- **Community 5** (2): `deepseek-ai/deepseek-harness`, `Niko1221/Strata`
- **Community 26** (2): `debpalash/VoiceStudio`, `FareedKhan-dev/kimi-k3-in-c`
- **Community 34** (2): `vercel-labs/agent-browser`, `garrytan/gstack`

**Direct links between risers** (similarity edges where both endpoints are climbing) — co-movement suggests a shared driver:

- `DietrichGebert/ponytail` ⇄ `affaan-m/ECC` (w=0.435) — topics: ai-agents, claude, claude-code, developer-tools
- `D4Vinci/Scrapling` ⇄ `firecrawl/firecrawl` (w=0.258) — topics: crawler, scraping, web-scraper, web-scraping
- `morluto/rea` ⇄ `heygen-com/hyperframes` (w=0.217) — topics: mcp, claude-code, typescript, ai
- `public-apis/public-apis` ⇄ `sindresorhus/awesome` (w=0.125) — topics: resources, lists

**What the risers are written in** — language mix of the top 40 movers:

- **Python** — 14
- **TypeScript** — 9
- **JavaScript** — 4
- **Rust** — 4
- **—** — 3
- **C** — 2
- **C++** — 1
- **Shell** — 1

## Methodology & caveats

- **Source**: `data/snapshots/*.json` diffed against `data/classified.json` + `public/data/graph.json`. No external calls; fully reproducible.
- **Snapshots available**: 2026-06-11, 2026-07-13, 2026-07-19, 2026-07-20, 2026-07-27, 2026-08-07, 2026-08-11, 2026-08-28, 2026-08-29, 2026-08-31, 2026-09-06, 2026-09-07, 2026-09-12, 2026-09-14, 2026-09-21, 2026-09-25, 2026-09-28, 2026-09-29, 2026-10-05, 2026-10-10, 2026-10-11, 2026-10-19, 2026-10-24, 2026-10-26, 2026-11-01, 2026-11-02, 2026-11-09 (27 vintages). `build_index.py` archives one per refresh, keyed by the dataset's `generatedAt` date.
- **Windows are uneven.** Snapshots are taken when the data is refreshed, not on a fixed cadence — consecutive vintages here range from 1 day to several weeks apart. The recent window therefore does not always use the immediately preceding snapshot: it uses the newest one at least 7 days back, because a 1-day window amplifies noise far more than it reveals movement. Per-day normalization keeps the boards comparable across refreshes either way.
- **Star counts are a popularity signal, not a quality one.** A launch post, a conference talk, or a newsletter mention moves stars without anything changing in the code.
- **Only repos present in both snapshots are diffed.** Newly starred repos appear under *New entrants* with no growth figure; unstarred repos silently drop out.
- **The theme layer is hand-written** against the computed boards and does not refresh itself. Re-curate it when the movers change shape.
- Re-run after a fresh `classified.json` to refresh every board.

<sub>Repos tracked: 2,574 · Window: 2026-11-02 → 2026-11-09 (7d) · Snapshot: 2026-11-09T14:44:53.318Z</sub>
