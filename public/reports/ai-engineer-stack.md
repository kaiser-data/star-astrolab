# The AI Engineer's Stack — What's Fundamental, Must-Have, and Trending

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities) and the 2026 AI-engineering landscape.
>
> Generated 2026-11-23 by `scripts/reports/ai_engineer_stack.py` (regenerate any time — no API cost).

![Top tools by stars](assets/ai-engineer-stack-top-tools.svg)

![Tools per category](assets/ai-engineer-stack-categories.svg)


## The one thing to understand first

In 2026 the **model layer is commoditizing** — model differences matter less each quarter, and the infrastructure beneath your app (serving, vector search, basic RAG, tracing) is **largely solved**. The value has moved *up the stack*: to **reliability, evaluation, context engineering, and memory** for agentic systems. So this report does two jobs at once — it tells you **which repos to know** (Fundamental / Must-have / Trending) *and* **which problems are already solved** (integrate, don't rebuild) **vs. still frontier** (where you actually add value).

> **Rule of thumb:** if a capability is ✅ *Solved* below, your job is to *integrate the best repo well*. If it's 🔴 *Frontier*, that's where a portfolio project or a job actually gets you noticed.

## The three tiers

### Fundamental (13)

**Bedrock you must understand.** Long-lived base libraries and learning resources. Tools change; these don't. If you can't explain these, you're assembling black boxes.

- **[huggingface/transformers](https://github.com/huggingface/transformers)** · 169,373★ · _Base & training_  
  The model-definition framework — the de-facto way to load/run almost any open model. Know it cold.
- **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)** · 136,160★ · _Inference & serving_  
  Inference in C/C++ — the primitive behind on-device/edge LLMs; teaches you what quantization actually costs.
- **[microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners)** · 124,074★ · _Learning_  
  21-lesson on-ramp to building with generative AI — the gentle starting point.
- **[openai/whisper](https://github.com/openai/whisper)** · 113,430★ · _Voice & multimodal_  
  The reference open ASR model — the baseline for any speech-in pipeline.
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** · 108,908★ · _Learning_  
  Build a GPT in PyTorch step by step — the single best way to actually understand what you're orchestrating.
- **[mlabonne/llm-course](https://github.com/mlabonne/llm-course)** · 85,189★ · _Learning_  
  Roadmap + notebooks from fundamentals to deployment — the structured curriculum.
- **[dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)** · 80,313★ · _Learning_  
  The canonical prompt-engineering reference — still load-bearing in an agentic world.
- **[labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations)** · 67,788★ · _Learning_  
  60+ annotated paper implementations — read the architectures, don't just import them.
- **[deepspeedai/DeepSpeed](https://github.com/deepspeedai/DeepSpeed)** · 43,354★ · _Base & training_  
  Training-optimization library (ZeRO, offload) — how large models actually get trained on real hardware.
- **[facebookresearch/faiss](https://github.com/facebookresearch/faiss)** · 41,887★ · _Vector store_  
  The original similarity-search library — the math under every vector DB; understand it before reaching for one.
- **[karpathy/llm.c](https://github.com/karpathy/llm.c)** · 31,529★ · _Learning_  
  LLM training in raw C/CUDA — strips away the framework to show the actual compute.
- **[Lightning-AI/pytorch-lightning](https://github.com/Lightning-AI/pytorch-lightning)** · 31,467★ · _Base & training_  
  Structured PyTorch training — the bridge between research code and reproducible training runs.
- **[NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques)** · 30,516★ · _RAG & retrieval_  
  A catalog of advanced RAG techniques with code — the reference when naive RAG isn't enough.

### Must-have (20)

**Your default production toolkit.** The repos you reach for on basically every project — the boring, load-bearing choices. Master integration, not novelty.

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** · 207,626★ · _Data & ingestion_  
  Search/scrape/crawl the web into LLM-ready data — the ingestion default for RAG & agents.
- **[ollama/ollama](https://github.com/ollama/ollama)** · 187,903★ · _Inference & serving_  
  One command to run open models locally — the dev-loop and prototyping default.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** · 149,958★ · _Orchestration & agents_  
  The most-deployed agent/LLM framework — the lingua franca; you'll read code that uses it even if you don't.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** · 97,409★ · _Inference & serving_  
  High-throughput serving engine (PagedAttention) — the production answer for self-hosting at scale.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** · 94,593★ · _RAG & retrieval_  
  Batteries-included RAG engine with deep document understanding — RAG as a deployable product.
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** · 87,718★ · _Data & ingestion_  
  LLM-friendly open crawler/scraper — self-hosted ingestion when you don't want an API.
- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** · 80,066★ · _Fine-tuning_  
  2× faster, lower-memory LoRA/QLoRA fine-tuning — the practical fine-tuning default.
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** · 76,242★ · _Fine-tuning_  
  Unified fine-tuning UI/CLI for 100+ models — the no-code-ish path to a tuned model.
- **[BerriAI/litellm](https://github.com/BerriAI/litellm)** · 63,771★ · _Inference & serving_  
  OpenAI-compatible gateway to 100+ LLMs — swap/route/budget models from one endpoint. Non-negotiable glue.
- **[crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)** · 61,201★ · _Orchestration & agents_  
  Role-playing multi-agent orchestration — the popular 'team of agents' framework.
- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** · 52,987★ · _RAG & retrieval_  
  The leading data/RAG framework — connectors, indexing, query engines; the RAG default alongside LangChain.
- **[mudler/LocalAI](https://github.com/mudler/LocalAI)** · 50,513★ · _Inference & serving_  
  OpenAI-compatible local engine (LLM/vision/voice) — self-host the whole API surface.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** · 46,725★ · _Vector store_  
  Cloud-native vector DB built for massive scale — when you outgrow a single box.
- **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** · 45,310★ · _Orchestration & agents_  
  Explicit graphs over implicit chains — the 2026 standard for *production-grade* agent control flow.
- **[stanfordnlp/dspy](https://github.com/stanfordnlp/dspy)** · 39,194★ · _Orchestration & agents_  
  Program — don't prompt — LLMs; compile prompts against metrics. The antidote to prompt-spaghetti.
- **[sgl-project/sglang](https://github.com/sgl-project/sglang)** · 38,983★ · _Inference & serving_  
  Fast serving with structured-output + prefix-cache wins — vLLM's main rival; learn both.
- **[langfuse/langfuse](https://github.com/langfuse/langfuse)** · 37,754★ · _Eval & observability_  
  Open-source LLM tracing/evals/prompts — you can't ship what you can't see (you run this).
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** · 35,675★ · _Vector store_  
  High-performance Rust vector DB — the popular standalone choice; great filtering.
- **[huggingface/smolagents](https://github.com/huggingface/smolagents)** · 30,500★ · _Orchestration & agents_  
  Barebones code-writing agents — the minimal mental model of what an agent loop *is*.
- **[chroma-core/chroma](https://github.com/chroma-core/chroma)** · 29,733★ · _Vector store_  
  The 'just works' embedded vector store — fastest path from zero to a working RAG.

### Trending (24)

**Where the energy is right now (2026).** Fast-moving, high-upside, often unstable. Learn these to stay current and to find differentiated things to build.

- **[obra/superpowers](https://github.com/obra/superpowers)** · 324,803★ · _Coding agents & MCP_  
  The headline agentic-skills framework — the most-starred repo in this whole set.
- **[anthropics/skills](https://github.com/anthropics/skills)** · 199,342★ · _Coding agents & MCP_  
  Agent Skills — on-demand capability that's displacing always-on prompt bloat.
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** · 156,795★ · _Coding agents & MCP_  
  The agentic coding CLI — the flagship of the coding-agent wave (full ecosystem in the cc-setups report).
- **[github/spec-kit](https://github.com/github/spec-kit)** · 151,130★ · _Coding agents & MCP_  
  Spec-driven development toolkit — the 'write the spec, let the agent build' workflow.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** · 123,575★ · _Orchestration & agents_  
  Multi-agent trading framework — the template for *vertical* agent systems with real domain logic.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** · 121,843★ · _Orchestration & agents_  
  Let agents drive real browsers — the computer-use frontier; high promise, still flaky.
- **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)** · 109,023★ · _Coding agents & MCP_  
  Gemini's terminal agent — the third major CLI harness; useful for model-shopping.
- **[punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)** · 98,418★ · _Coding agents & MCP_  
  The community MCP index — discovery for the fastest-growing integration ecosystem.
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** · 94,149★ · _Coding agents & MCP_  
  Open autonomous software-engineering agent — the OSS face of the SWE-agent race.
- **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)** · 92,190★ · _Coding agents & MCP_  
  Reference MCP servers — MCP is the emerging standard for wiring tools/data into any agent.
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** · 85,675★ · _Orchestration & agents_  
  Long-horizon research+code SuperAgent — the 'deep research' pattern as a harness.
- **[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)** · 75,547★ · _Coding agents & MCP_  
  Lighter-weight spec-driven development — agree on a change spec with the agent before it writes code.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** · 69,376★ · _Memory_  
  Universal memory layer for agents — the most-adopted bet on the unsolved memory problem.
- **[MemPalace/mempalace](https://github.com/MemPalace/mempalace)** · 60,672★ · _Memory_  
  Best-benchmarked open memory system — a strong contender in a still-open race.
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** · 53,568★ · _Orchestration & agents_  
  Browser-automation CLI for agents — the lighter, scriptable take on web agents.
- **[Aider-AI/aider](https://github.com/Aider-AI/aider)** · 50,228★ · _Coding agents & MCP_  
  AI pair-programming in the terminal with tight git integration — a beloved daily driver.
- **[agno-agi/agno](https://github.com/agno-agi/agno)** · 43,268★ · _Orchestration & agents_  
  Build/run/manage agent platforms — a fast-rising full-stack agent framework.
- **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** · 40,834★ · _RAG & retrieval_  
  Graph-augmented RAG that's simple and fast — the practical face of 'RAG beyond chunks'.
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** · 40,761★ · _RAG & retrieval_  
  Vectorless, reasoning-based retrieval — a bet that reasoning can replace embeddings.
- **[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)** · 40,058★ · _Coding agents & MCP_  
  Playwright as an MCP server — reliable, structured web control for agents.
- **[google/langextract](https://github.com/google/langextract)** · 39,351★ · _Data & ingestion_  
  Structured extraction from unstructured text — turning documents into typed data.
- **[microsoft/graphrag](https://github.com/microsoft/graphrag)** · 36,727★ · _RAG & retrieval_  
  Graph-based RAG — structure-aware retrieval for global/whole-corpus questions.
- **[comet-ml/opik](https://github.com/comet-ml/opik)** · 23,491★ · _Eval & observability_  
  Eval-first LLM/agent observability — measuring agents, not just logging them.
- **[Arize-ai/phoenix](https://github.com/Arize-ai/phoenix)** · 12,384★ · _Eval & observability_  
  OpenTelemetry-based AI observability & eval — standards-based tracing for agents.

## What's solved vs. what's still frontier

The most useful map an AI engineer can carry: where to **stop building and integrate**, and where **building is still worth it**.

| Layer | Status | What that means for you | Your repos here |
|---|---|---|---|
| **Base & training** | ✅ Solved (for users) | HF Transformers + PyTorch are the substrate. Training *frontier* models isn't your job; using them is. | `transformers`, `DeepSpeed`, `pytorch-lightning` |
| **Inference & serving** | ✅ Solved | vLLM / SGLang / Ollama / llama.cpp cover edge→datacenter. Never write your own serving layer; pick by scale. | `ollama`, `llama.cpp`, `vllm`, `litellm`, `LocalAI` |
| **Vector store** | ✅ Solved | faiss/qdrant/milvus/chroma (+pgvector) are mature. Choose on ops + filtering needs, not capability. | `milvus`, `faiss`, `qdrant`, `chroma` |
| **RAG & retrieval** | 🟡 Split | Naive RAG (chunk→embed→retrieve→stuff) is commoditized. Advanced/agentic/graph retrieval (LightRAG, graphrag, PageIndex) is still frontier. | `ragflow`, `llama_index`, `LightRAG`, `PageIndex`, `graphrag` |
| **Orchestration & agents** | 🔴 Frontier | Frameworks are mature (langgraph). Reliable long-horizon autonomy is NOT — open agents trail humans badly on real workflows. | `langchain`, `TradingAgents`, `browser-use`, `deer-flow`, `crewAI` |
| **Memory** | 🔴 Open problem | mem0/mempalace are bets, not settled answers. Durable, selective, cheap long-term memory is unsolved. | `mem0`, `mempalace` |
| **Eval & observability** | 🟡 Split | Tracing is solved (langfuse/phoenix). Agent *evaluation* is frontier — SWE-bench is saturated; reliable eval harnesses are unsolved. | `langfuse`, `opik`, `phoenix` |
| **Fine-tuning** | 🟢 Mechanics solved | LoRA/QLoRA via unsloth/LlamaFactory is push-button. The real skill is knowing *when* to fine-tune vs RAG vs prompt. | `unsloth`, `LlamaFactory` |
| **Data & ingestion** | 🟡 Tooling solved | Crawling/OCR/extraction (firecrawl, crawl4ai, langextract) is solved. *Clean domain data* is still the real bottleneck. | `firecrawl`, `crawl4ai`, `langextract` |
| **Coding agents & MCP** | 🔴 Trending / unstable | Exploding fast; MCP is becoming the integration standard but the surface changes monthly. Learn now, expect churn. | `superpowers`, `skills`, `claude-code`, `spec-kit`, `gemini-cli` |
| **Voice & multimodal** | 🟡 Split | STT/TTS are solved (whisper et al.). Low-latency full-duplex voice agents are still hard — see the voice-agents report. | `whisper` |
| **Learning** | 📚 Reference | Bedrock knowledge — these don't go stale the way tools do. | `generative-ai-for-beginners`, `LLMs-from-scratch`, `llm-course`, `Prompt-Engineering-Guide`, `annotated_deep_learning_paper_implementations` |

**The short version:**

- ✅ **Solved — integrate, never rebuild:** inference & serving, vector search, the base model/runtime layer. Picking *well* is the skill; building it yourself is wasted effort.
- 🟡 **Split — solved at the bottom, frontier at the top:** RAG (naive=solved, graph/agentic=open), evaluation (tracing=solved, agent-evals=open), data (tools=solved, clean domain data=hard).
- 🔴 **Frontier — where to actually add value:** agent reliability & long-horizon autonomy, durable memory, trustworthy agent evaluation, and the still-churning coding-agent / MCP ecosystem. Open agents still trail humans badly on real-world workflows — that gap *is* the opportunity.

## What people are actually building right now

By 2026 a majority of organizations have agents in production. The application types that dominate, most-built first:

1. **RAG over private/domain data** — still the single most common production pattern. The bar has risen from 'it answers' to 'it answers *with good retrieval + evals*'.
2. **Task & research agents** — `langgraph`-style explicit-graph agents with tools, web access (`browser-use`/`firecrawl`), and memory (`mem0`).
3. **Coding agents & dev tools** — `claude-code`/`aider`/`OpenHands` + **MCP** servers; the fastest-growing category (full breakdown in the Claude-Code-setups report).
4. **Voice agents** — speech-in/speech-out; low latency is the moat (see voice-agents report).
5. **Vertical agent systems** — domain logic + multi-agent (e.g. `TradingAgents`); the highest-value, highest-difficulty class.

### Trending right now (by dataset momentum)

Ranked by a momentum signal (Hot/Rising lifecycle + recent age + 90-day commit velocity). This is *velocity*, not size — small fast-movers beat large mature repos here.

| Repo | Tier | ★ Stars | Age | 90d commits | Last push | Momentum |
|---|---|---|---|---|---|---|
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Trending | 60,672 | 7mo | 805 | 0d ago | 7 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Trending | 53,568 | 10mo | 231 | 0d ago | 7 |
| [github/spec-kit](https://github.com/github/spec-kit) | Trending | 151,130 | 1.3y | 620 | 0d ago | 5 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Trending | 109,023 | 1.6y | 253 | 1d ago | 5 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Trending | 98,418 | 2.0y | 4488 | 0d ago | 5 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Trending | 85,675 | 1.6y | 1955 | 0d ago | 5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | Trending | 75,547 | 1.3y | 266 | 0d ago | 5 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Trending | 40,761 | 1.6y | 216 | 2d ago | 5 |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Trending | 40,058 | 1.7y | 64 | 5d ago | 5 |
| [google/langextract](https://github.com/google/langextract) | Trending | 39,351 | 1.4y | 37 | 0d ago | 4 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Must-have | 207,626 | 2.6y | 779 | 0d ago | 2 |
| [ollama/ollama](https://github.com/ollama/ollama) | Must-have | 187,903 | 3.4y | 343 | 1d ago | 2 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Fundamental | 169,373 | 8.1y | 1224 | 0d ago | 2 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Trending | 156,795 | 1.8y | 372 | 0d ago | 2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Must-have | 149,958 | 4.1y | 600 | 0d ago | 2 |

## Projects to build (with the repos)

Tagged by *territory* — **Solved** = ship fast, low risk, great for a portfolio; **Frontier** = harder, but where you differentiate.

| Project | Stack | Territory | Level | Notes |
|---|---|---|---|---|
| **RAG assistant over your own docs** | llama_index + qdrant + litellm + langfuse (+ a reranker) | Solved territory | Beginner | Best first portfolio project. Everything exists — the value is doing retrieval quality + evals properly. |
| **Local-first private ChatGPT** | ollama + open-webui + chroma + whisper | Solved territory | Beginner | Cost/privacy play. 100% offline. Great for learning the full loop with zero API spend. |
| **Document → structured data pipeline** | firecrawl/MinerU + langextract + a vector store | Solved territory | Intermediate | High business value, low novelty risk. Turns messy PDFs/web into typed records. |
| **Agentic research assistant** | langgraph + browser-use + firecrawl + mem0 + langfuse | Frontier | Intermediate | The hard part is *reliability*, not wiring. This is where you differentiate. |
| **Graph-RAG knowledge base** | microsoft/graphrag or LightRAG + qdrant | Frontier | Intermediate | For global/whole-corpus questions naive RAG fails. Active research — a real edge if you nail it. |
| **Domain copilot with a tuned model** | unsloth (QLoRA) + llama_index RAG + opik evals | Mixed | Advanced | Decide fine-tune-vs-RAG with evidence (opik). The decision *is* the skill. |
| **Vertical multi-agent system** | crewAI/langgraph + TauricResearch/TradingAgents as a template + langfuse | Frontier | Advanced | Real domain logic + many agents = the highest-value, highest-difficulty class of project. |
| **Coding agent / dev tool** | claude-code + MCP servers (playwright-mcp, github-mcp) + codegraph | Trending | Intermediate | Build a tool for your own workflow. See the Claude-Code-setups report for the full ecosystem. |
| **Your own agent-eval harness** | phoenix/opik + a task suite + langgraph runner | Frontier | Advanced | Few good ones exist. Building trustworthy agent evals is genuinely unsolved — and very employable. |

## Master comparison

Sorted by stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits.

| Repo | Tier | Layer | Lang | ★ Stars | Lifecycle | Health | Activity | Last push | Age |
|---|---|---|---|---|---|---|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | Trending | Coding agents & MCP | Shell | 324,803 (▲6,434) | Mature | 62 | active | 20d ago | 1.1y |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Must-have | Data & ingestion | TypeScript | 207,626 (▲5,392) | Mature | 89 | very active | 0d ago | 2.6y |
| [anthropics/skills](https://github.com/anthropics/skills) | Trending | Coding agents & MCP | Python | 199,342 (▲3,622) | Mature | 49 | active | 7d ago | 1.2y |
| [ollama/ollama](https://github.com/ollama/ollama) | Must-have | Inference & serving | Go | 187,903 (▲695) | Classic | 83 | very active | 1d ago | 3.4y |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Fundamental | Base & training | Python | 169,373 (▲350) | Classic | 100 | very active | 0d ago | 8.1y |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Trending | Coding agents & MCP | TypeScript | 156,795 (▲924) | Mature | 79 | very active | 0d ago | 1.8y |
| [github/spec-kit](https://github.com/github/spec-kit) | Trending | Coding agents & MCP | Python | 151,130 (▲1,084) | Hot | 84 | very active | 0d ago | 1.3y |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Must-have | Orchestration & agents | Python | 149,958 (▲313) | Classic | 89 | very active | 0d ago | 4.1y |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | Fundamental | Inference & serving | C++ | 136,160 (▲891) | Classic | 99 | very active | 0d ago | 3.7y |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Fundamental | Learning | Jupyter Notebook | 124,074 (▲408) | Classic | 70 | very active | 5d ago | 3.4y |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Trending | Orchestration & agents | Python | 123,575 (▲769) | Mature | 78 | very active | 7d ago | 1.9y |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Trending | Orchestration & agents | Python | 121,843 (▲650) | Mature | 79 | very active | 2d ago | 2.1y |
| [openai/whisper](https://github.com/openai/whisper) | Fundamental | Voice & multimodal | Python | 113,430 (▲636) | Mature | 35 | slowing | 2mo ago | 4.2y |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Trending | Coding agents & MCP | TypeScript | 109,023 (▲157) | Hot | 95 | very active | 1d ago | 1.6y |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Fundamental | Learning | Jupyter Notebook | 108,908 (▲405) | Classic | 63 | very active | 1d ago | 3.3y |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Trending | Coding agents & MCP | — | 98,418 (▲659) | Hot | 60 | very active | 0d ago | 2.0y |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Must-have | Inference & serving | Python | 97,409 (▲381) | Classic | 99 | very active | 0d ago | 3.8y |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Must-have | RAG & retrieval | Go | 94,593 (▲349) | Mature | 99 | very active | 0d ago | 3.0y |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | Trending | Coding agents & MCP | TypeScript | 94,149 (▲567) | Mature | 84 | very active | 0d ago | 2.7y |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Trending | Coding agents & MCP | TypeScript | 92,190 (▲149) | Mature | 80 | very active | 4d ago | 2.0y |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Must-have | Data & ingestion | Python | 87,718 (▲284) | Mature | 79 | very active | 0d ago | 2.5y |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Trending | Orchestration & agents | Python | 85,675 (▲280) | Hot | 89 | very active | 0d ago | 1.6y |
| [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | Fundamental | Learning | — | 85,189 (▲64) | Declining | 9 | stale | 9mo ago | 3.4y |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | Fundamental | Learning | MDX | 80,313 (▲192) | Declining | 11 | stale | 8mo ago | 3.9y |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Must-have | Fine-tuning | Python | 80,066 (▲465) | Mature | 80 | very active | 0d ago | 3.0y |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | Must-have | Fine-tuning | Python | 76,242 (▲175) | Classic | 77 | very active | 0d ago | 3.5y |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | Trending | Coding agents & MCP | TypeScript | 75,547 (▲579) | Hot | 78 | very active | 0d ago | 1.3y |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Trending | Memory | Python | 69,376 (▲314) | Classic | 89 | very active | 0d ago | 3.4y |
| [labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations) | Fundamental | Learning | Python | 67,788 (▲34) | Mature | 46 | active | 21d ago | 6.3y |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | Must-have | Inference & serving | Python | 63,771 (▲428) | Classic | 99 | very active | 0d ago | 3.3y |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | Must-have | Orchestration & agents | Python | 61,201 (▲213) | Classic | 93 | very active | 0d ago | 3.1y |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Trending | Memory | Python | 60,672 (▲96) | Hot | 76 | very active | 0d ago | 7mo |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Trending | Orchestration & agents | Rust | 53,568 (▲1,699) | Hot | 83 | very active | 0d ago | 10mo |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Must-have | RAG & retrieval | Python | 52,987 (▲66) | Classic | 96 | very active | 4d ago | 4.1y |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | Must-have | Inference & serving | Go | 50,513 (▲121) | Classic | 79 | very active | 0d ago | 3.7y |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | Trending | Coding agents & MCP | Python | 50,228 (▲87) | Declining | 21 | stale | 6mo ago | 3.5y |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Must-have | Vector store | Go | 46,725 (▲51) | Classic | 99 | very active | 0d ago | 7.2y |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Must-have | Orchestration & agents | Python | 45,310 (▲286) | Classic | 78 | very active | 2d ago | 3.3y |
| [deepspeedai/DeepSpeed](https://github.com/deepspeedai/DeepSpeed) | Fundamental | Base & training | Python | 43,354 (▲23) | Classic | 97 | very active | 0d ago | 6.8y |
| [agno-agi/agno](https://github.com/agno-agi/agno) | Trending | Orchestration & agents | Python | 43,268 (▲61) | Classic | 97 | very active | 0d ago | 4.6y |
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | Fundamental | Vector store | C++ | 41,887 (▲157) | Classic | 94 | very active | 0d ago | 9.8y |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | Trending | RAG & retrieval | Python | 40,834 (▲115) | Mature | 79 | very active | 0d ago | 2.1y |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Trending | RAG & retrieval | Python | 40,761 (▲309) | Hot | 76 | very active | 2d ago | 1.6y |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Trending | Coding agents & MCP | TypeScript | 40,058 (▲326) | Hot | 81 | very active | 5d ago | 1.7y |
| [google/langextract](https://github.com/google/langextract) | Trending | Data & ingestion | Python | 39,351 (▲29) | Hot | 70 | very active | 0d ago | 1.4y |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | Must-have | Orchestration & agents | Python | 39,194 (▲103) | Classic | 78 | very active | 2d ago | 3.9y |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | Must-have | Inference & serving | Python | 38,983 (▲41) | Mature | 99 | very active | 0d ago | 2.9y |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | Must-have | Eval & observability | TypeScript | 37,754 (▲265) | Classic | 94 | very active | 0d ago | 3.5y |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | Trending | RAG & retrieval | Python | 36,727 (▲71) | Mature | 66 | active | 0d ago | 2.7y |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Must-have | Vector store | Rust | 35,675 (▲83) | Classic | 88 | very active | 0d ago | 6.5y |
| [karpathy/llm.c](https://github.com/karpathy/llm.c) | Fundamental | Learning | Cuda | 31,529 (▲39) | Abandoned | 4 | stale | 1.4y ago | 2.6y |
| [Lightning-AI/pytorch-lightning](https://github.com/Lightning-AI/pytorch-lightning) | Fundamental | Base & training | Python | 31,467 (▲17) | Classic | 69 | active | 0d ago | 7.7y |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Fundamental | RAG & retrieval | Jupyter Notebook | 30,516 (▲136) | Mature | 60 | very active | 22d ago | 2.4y |
| [huggingface/smolagents](https://github.com/huggingface/smolagents) | Must-have | Orchestration & agents | Python | 30,500 (▲110) | Mature | 68 | very active | 0d ago | 2.0y |
| [chroma-core/chroma](https://github.com/chroma-core/chroma) | Must-have | Vector store | Rust | 29,733 (▲38) | Classic | 79 | very active | 3d ago | 4.1y |
| [comet-ml/opik](https://github.com/comet-ml/opik) | Trending | Eval & observability | Java | 23,491 (▲49) | Classic | 94 | very active | 0d ago | 3.5y |
| [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | Trending | Eval & observability | Python | 12,384 (▲70) | Classic | 83 | very active | 0d ago | 4.0y |

## Graph analysis — how they relate

**Community clustering.** These 57 repos span **20 of the graph's 45 communities** — the AI-engineering stack is genuinely cross-cutting, not one tidy neighborhood.

- **Community 30** (9): `firecrawl/firecrawl`, `infiniflow/ragflow`, `OpenHands/OpenHands`, `unclecode/crawl4ai`, `MemPalace/mempalace`, `milvus-io/milvus`, `VectifyAI/PageIndex`, `qdrant/qdrant`, `NirDiamant/RAG_Techniques`
- **Community 11** (8): `langchain-ai/langchain`, `dair-ai/Prompt-Engineering-Guide`, `Fission-AI/OpenSpec`, `mem0ai/mem0`, `crewAIInc/crewAI`, `langchain-ai/langgraph`, `agno-agi/agno`, `chroma-core/chroma`
- **Community 28** (6): `openai/whisper`, `rasbt/LLMs-from-scratch`, `labmlai/annotated_deep_learning_paper_implementations`, `deepspeedai/DeepSpeed`, `facebookresearch/faiss`, `Lightning-AI/pytorch-lightning`
- **Community 31** (5): `ollama/ollama`, `huggingface/transformers`, `unslothai/unsloth`, `hiyouga/LlamaFactory`, `huggingface/smolagents`
- **Community 35** (5): `TauricResearch/TradingAgents`, `vllm-project/vllm`, `bytedance/deer-flow`, `run-llama/llama_index`, `sgl-project/sglang`
- **Community 8** (4): `BerriAI/litellm`, `langfuse/langfuse`, `comet-ml/opik`, `Arize-ai/phoenix`
- **Community 9** (3): `microsoft/generative-ai-for-beginners`, `microsoft/playwright-mcp`, `microsoft/graphrag`
- **Community 24** (3): `github/spec-kit`, `google-gemini/gemini-cli`, `punkpeye/awesome-mcp-servers`

**Centrality (PageRank in the full 2,925-repo graph)** — the most 'hub-like' AI-eng repos in your stars (good signal for *foundational*):

- `Lightning-AI/pytorch-lightning` — PageRank 0.0013 (Fundamental)
- `langchain-ai/langchain` — PageRank 0.0011 (Must-have)
- `punkpeye/awesome-mcp-servers` — PageRank 0.0011 (Trending)
- `microsoft/generative-ai-for-beginners` — PageRank 0.0010 (Fundamental)
- `langchain-ai/langgraph` — PageRank 0.0010 (Must-have)
- `agno-agi/agno` — PageRank 0.0009 (Trending)
- `VectifyAI/PageIndex` — PageRank 0.0008 (Trending)
- `MemPalace/mempalace` — PageRank 0.0007 (Trending)
- `NirDiamant/RAG_Techniques` — PageRank 0.0007 (Fundamental)
- `microsoft/playwright-mcp` — PageRank 0.0007 (Trending)

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). For *production* picks, prefer mature lifecycle + low single-author share; for *trending* picks, expect churn.

| Repo | Tier | Health | Lifecycle | Activity | Bus factor | Top-author share |
|---|---|---|---|---|---|---|
| huggingface/transformers | Fundamental | 100 | Classic | very active | 5 | 16% |
| ggml-org/llama.cpp | Fundamental | 99 | Classic | very active | 7 | 19% |
| vllm-project/vllm | Must-have | 99 | Classic | very active | 19 | 7% |
| sgl-project/sglang | Must-have | 99 | Mature | very active | 8 | 18% |
| BerriAI/litellm | Must-have | 99 | Classic | very active | 6 | 16% |
| milvus-io/milvus | Must-have | 99 | Classic | very active | 8 | 11% |
| infiniflow/ragflow | Must-have | 99 | Mature | very active | 8 | 9% |
| deepspeedai/DeepSpeed | Fundamental | 97 | Classic | very active | 6 | 15% |
| agno-agi/agno | Trending | 97 | Classic | very active | 5 | 15% |
| run-llama/llama_index | Must-have | 96 | Classic | very active | 6 | 19% |
| google-gemini/gemini-cli | Trending | 95 | Hot | very active | 4 | 16% |
| facebookresearch/faiss | Fundamental | 94 | Classic | very active | 4 | 18% |
| langfuse/langfuse | Must-have | 94 | Classic | very active | 4 | 19% |
| comet-ml/opik | Trending | 94 | Classic | very active | 4 | 19% |
| crewAIInc/crewAI | Must-have | 93 | Classic | very active | 4 | 21% |
| langchain-ai/langchain | Must-have | 89 | Classic | very active | 3 | 24% |
| firecrawl/firecrawl | Must-have | 89 | Mature | very active | 4 | 28% |
| mem0ai/mem0 | Trending | 89 | Classic | very active | 4 | 26% |
| bytedance/deer-flow | Trending | 89 | Hot | very active | 11 | 10% |
| qdrant/qdrant | Must-have | 88 | Classic | very active | 3 | 26% |
| github/spec-kit | Trending | 84 | Hot | very active | 2 | 30% |
| OpenHands/OpenHands | Trending | 84 | Mature | very active | 2 | 43% |
| ollama/ollama | Must-have | 83 | Classic | very active | 2 | 47% |
| vercel-labs/agent-browser | Trending | 83 | Hot | very active | 2 | 40% |
| Arize-ai/phoenix | Trending | 83 | Classic | very active | 2 | 28% |
| microsoft/playwright-mcp | Trending | 81 | Hot | very active | 2 | 33% |
| unslothai/unsloth | Must-have | 80 | Mature | very active | 1 | 57% |
| modelcontextprotocol/servers | Trending | 80 | Mature | very active | 1 | 95% |
| mudler/LocalAI | Must-have | 79 | Classic | very active | 1 | 58% |
| chroma-core/chroma | Must-have | 79 | Classic | very active | 2 | 30% |
| unclecode/crawl4ai | Must-have | 79 | Mature | very active | 1 | 57% |
| anthropics/claude-code | Trending | 79 | Mature | very active | 1 | 99% |
| browser-use/browser-use | Trending | 79 | Mature | very active | 1 | 63% |
| HKUDS/LightRAG | Trending | 79 | Mature | very active | 1 | 88% |
| langchain-ai/langgraph | Must-have | 78 | Classic | very active | 1 | 50% |
| stanfordnlp/dspy | Must-have | 78 | Classic | very active | 1 | 77% |
| Fission-AI/OpenSpec | Trending | 78 | Hot | very active | 1 | 55% |
| TauricResearch/TradingAgents | Trending | 78 | Mature | very active | 1 | 96% |
| hiyouga/LlamaFactory | Must-have | 77 | Classic | very active | 4 | 21% |
| MemPalace/mempalace | Trending | 76 | Hot | very active | 1 | 90% |
| VectifyAI/PageIndex | Trending | 76 | Hot | very active | 1 | 54% |
| microsoft/generative-ai-for-beginners | Fundamental | 70 | Classic | very active | 2 | 47% |
| google/langextract | Trending | 70 | Hot | very active | 1 | 70% |
| Lightning-AI/pytorch-lightning | Fundamental | 69 | Classic | active | 2 | 41% |
| huggingface/smolagents | Must-have | 68 | Mature | very active | 3 | 26% |
| microsoft/graphrag | Trending | 66 | Mature | active | 1 | 63% |
| rasbt/LLMs-from-scratch | Fundamental | 63 | Classic | very active | 2 | 48% |
| obra/superpowers | Trending | 62 | Mature | active | 1 | 100% |
| NirDiamant/RAG_Techniques | Fundamental | 60 | Mature | very active | 1 | 88% |
| punkpeye/awesome-mcp-servers | Trending | 60 | Hot | very active | 1 | 96% |
| anthropics/skills | Trending | 49 | Mature | active | 2 | 33% |
| labmlai/annotated_deep_learning_paper_implementations | Fundamental | 46 | Mature | active | 1 | 80% |
| openai/whisper | Fundamental | 35 | Mature | slowing | 1 | 100% |
| Aider-AI/aider | Trending | 21 | Declining | stale | 0 | 0% |
| dair-ai/Prompt-Engineering-Guide | Fundamental | 11 | Declining | stale | 0 | 0% |
| mlabonne/llm-course | Fundamental | 9 | Declining | stale | 0 | 0% |
| karpathy/llm.c | Fundamental | 4 | Abandoned | stale | 0 | 0% |

## Adjacent (deliberately not in the core list)

- **Comfy-Org/ComfyUI** (148,264★) — image/diffusion tooling — a different (creative) AI discipline, out of scope here
- **PaddlePaddle/PaddleOCR** (93,073★) — OCR engine — a data-ingestion building block, folded into 'Data & ingestion'
- **n8n-io/n8n** (211,911★) — workflow automation — orchestrates agents but isn't core AI-eng tooling (see agent-orchestration report)
- **microsoft/autogen** — multi-agent framework — slipping in activity; crewAI/langgraph lead the must-have slot now
- **nomic-ai/gpt4all** (77,330★) — local-LLM app — superseded for most by ollama; kept off the must-have list

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`, cross-checked against 2026 AI-engineering landscape reporting. No private calls; fully reproducible.
- **Tiers and the solved/frontier verdicts are opinionated** — a synthesis of dataset signal (stars, lifecycle, commit velocity) and the current state of the field, not a benchmark. Treat 'Trending' as *volatile by definition*.
- **Selection** favors recognizable, broadly-applicable AI-engineering tooling. The coding-agent/harness ecosystem and voice stack are summarized here but detailed in the Claude-Code-setups and voice-agents reports respectively.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.

<sub>Repos covered: 57 · Snapshot: 2026-11-23T16:50:13.482Z</sub>
