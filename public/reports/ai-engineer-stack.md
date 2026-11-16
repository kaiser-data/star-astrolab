# The AI Engineer's Stack — What's Fundamental, Must-Have, and Trending

> Derived from **kaiser-data**'s 2,896 starred repos (snapshot `2026-11-16T14:38:50.632Z`), cross-referenced with the repo-similarity graph (2,896 nodes / 9,609 edges, 48 communities) and the 2026 AI-engineering landscape.
>
> Generated 2026-11-16 by `scripts/reports/ai_engineer_stack.py` (regenerate any time — no API cost).

![Top tools by stars](assets/ai-engineer-stack-top-tools.svg)

![Tools per category](assets/ai-engineer-stack-categories.svg)


## The one thing to understand first

In 2026 the **model layer is commoditizing** — model differences matter less each quarter, and the infrastructure beneath your app (serving, vector search, basic RAG, tracing) is **largely solved**. The value has moved *up the stack*: to **reliability, evaluation, context engineering, and memory** for agentic systems. So this report does two jobs at once — it tells you **which repos to know** (Fundamental / Must-have / Trending) *and* **which problems are already solved** (integrate, don't rebuild) **vs. still frontier** (where you actually add value).

> **Rule of thumb:** if a capability is ✅ *Solved* below, your job is to *integrate the best repo well*. If it's 🔴 *Frontier*, that's where a portfolio project or a job actually gets you noticed.

## The three tiers

### Fundamental (13)

**Bedrock you must understand.** Long-lived base libraries and learning resources. Tools change; these don't. If you can't explain these, you're assembling black boxes.

- **[huggingface/transformers](https://github.com/huggingface/transformers)** · 169,023★ · _Base & training_  
  The model-definition framework — the de-facto way to load/run almost any open model. Know it cold.
- **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)** · 135,269★ · _Inference & serving_  
  Inference in C/C++ — the primitive behind on-device/edge LLMs; teaches you what quantization actually costs.
- **[microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners)** · 123,666★ · _Learning_  
  21-lesson on-ramp to building with generative AI — the gentle starting point.
- **[openai/whisper](https://github.com/openai/whisper)** · 112,794★ · _Voice & multimodal_  
  The reference open ASR model — the baseline for any speech-in pipeline.
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** · 108,503★ · _Learning_  
  Build a GPT in PyTorch step by step — the single best way to actually understand what you're orchestrating.
- **[mlabonne/llm-course](https://github.com/mlabonne/llm-course)** · 85,125★ · _Learning_  
  Roadmap + notebooks from fundamentals to deployment — the structured curriculum.
- **[dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)** · 80,121★ · _Learning_  
  The canonical prompt-engineering reference — still load-bearing in an agentic world.
- **[labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations)** · 67,754★ · _Learning_  
  60+ annotated paper implementations — read the architectures, don't just import them.
- **[deepspeedai/DeepSpeed](https://github.com/deepspeedai/DeepSpeed)** · 43,331★ · _Base & training_  
  Training-optimization library (ZeRO, offload) — how large models actually get trained on real hardware.
- **[facebookresearch/faiss](https://github.com/facebookresearch/faiss)** · 41,730★ · _Vector store_  
  The original similarity-search library — the math under every vector DB; understand it before reaching for one.
- **[karpathy/llm.c](https://github.com/karpathy/llm.c)** · 31,490★ · _Learning_  
  LLM training in raw C/CUDA — strips away the framework to show the actual compute.
- **[Lightning-AI/pytorch-lightning](https://github.com/Lightning-AI/pytorch-lightning)** · 31,450★ · _Base & training_  
  Structured PyTorch training — the bridge between research code and reproducible training runs.
- **[NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques)** · 30,380★ · _RAG & retrieval_  
  A catalog of advanced RAG techniques with code — the reference when naive RAG isn't enough.

### Must-have (20)

**Your default production toolkit.** The repos you reach for on basically every project — the boring, load-bearing choices. Master integration, not novelty.

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** · 202,234★ · _Data & ingestion_  
  Search/scrape/crawl the web into LLM-ready data — the ingestion default for RAG & agents.
- **[ollama/ollama](https://github.com/ollama/ollama)** · 187,208★ · _Inference & serving_  
  One command to run open models locally — the dev-loop and prototyping default.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** · 149,645★ · _Orchestration & agents_  
  The most-deployed agent/LLM framework — the lingua franca; you'll read code that uses it even if you don't.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** · 97,028★ · _Inference & serving_  
  High-throughput serving engine (PagedAttention) — the production answer for self-hosting at scale.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** · 94,244★ · _RAG & retrieval_  
  Batteries-included RAG engine with deep document understanding — RAG as a deployable product.
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** · 87,434★ · _Data & ingestion_  
  LLM-friendly open crawler/scraper — self-hosted ingestion when you don't want an API.
- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** · 79,601★ · _Fine-tuning_  
  2× faster, lower-memory LoRA/QLoRA fine-tuning — the practical fine-tuning default.
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** · 76,067★ · _Fine-tuning_  
  Unified fine-tuning UI/CLI for 100+ models — the no-code-ish path to a tuned model.
- **[BerriAI/litellm](https://github.com/BerriAI/litellm)** · 63,343★ · _Inference & serving_  
  OpenAI-compatible gateway to 100+ LLMs — swap/route/budget models from one endpoint. Non-negotiable glue.
- **[crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)** · 60,988★ · _Orchestration & agents_  
  Role-playing multi-agent orchestration — the popular 'team of agents' framework.
- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** · 52,921★ · _RAG & retrieval_  
  The leading data/RAG framework — connectors, indexing, query engines; the RAG default alongside LangChain.
- **[mudler/LocalAI](https://github.com/mudler/LocalAI)** · 50,392★ · _Inference & serving_  
  OpenAI-compatible local engine (LLM/vision/voice) — self-host the whole API surface.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** · 46,674★ · _Vector store_  
  Cloud-native vector DB built for massive scale — when you outgrow a single box.
- **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** · 45,024★ · _Orchestration & agents_  
  Explicit graphs over implicit chains — the 2026 standard for *production-grade* agent control flow.
- **[stanfordnlp/dspy](https://github.com/stanfordnlp/dspy)** · 39,091★ · _Orchestration & agents_  
  Program — don't prompt — LLMs; compile prompts against metrics. The antidote to prompt-spaghetti.
- **[sgl-project/sglang](https://github.com/sgl-project/sglang)** · 38,942★ · _Inference & serving_  
  Fast serving with structured-output + prefix-cache wins — vLLM's main rival; learn both.
- **[langfuse/langfuse](https://github.com/langfuse/langfuse)** · 37,489★ · _Eval & observability_  
  Open-source LLM tracing/evals/prompts — you can't ship what you can't see (you run this).
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** · 35,592★ · _Vector store_  
  High-performance Rust vector DB — the popular standalone choice; great filtering.
- **[huggingface/smolagents](https://github.com/huggingface/smolagents)** · 30,390★ · _Orchestration & agents_  
  Barebones code-writing agents — the minimal mental model of what an agent loop *is*.
- **[chroma-core/chroma](https://github.com/chroma-core/chroma)** · 29,695★ · _Vector store_  
  The 'just works' embedded vector store — fastest path from zero to a working RAG.

### Trending (24)

**Where the energy is right now (2026).** Fast-moving, high-upside, often unstable. Learn these to stay current and to find differentiated things to build.

- **[obra/superpowers](https://github.com/obra/superpowers)** · 318,369★ · _Coding agents & MCP_  
  The headline agentic-skills framework — the most-starred repo in this whole set.
- **[anthropics/skills](https://github.com/anthropics/skills)** · 195,720★ · _Coding agents & MCP_  
  Agent Skills — on-demand capability that's displacing always-on prompt bloat.
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** · 155,871★ · _Coding agents & MCP_  
  The agentic coding CLI — the flagship of the coding-agent wave (full ecosystem in the cc-setups report).
- **[github/spec-kit](https://github.com/github/spec-kit)** · 150,046★ · _Coding agents & MCP_  
  Spec-driven development toolkit — the 'write the spec, let the agent build' workflow.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** · 122,806★ · _Orchestration & agents_  
  Multi-agent trading framework — the template for *vertical* agent systems with real domain logic.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** · 121,193★ · _Orchestration & agents_  
  Let agents drive real browsers — the computer-use frontier; high promise, still flaky.
- **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)** · 108,866★ · _Coding agents & MCP_  
  Gemini's terminal agent — the third major CLI harness; useful for model-shopping.
- **[punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)** · 97,759★ · _Coding agents & MCP_  
  The community MCP index — discovery for the fastest-growing integration ecosystem.
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** · 93,582★ · _Coding agents & MCP_  
  Open autonomous software-engineering agent — the OSS face of the SWE-agent race.
- **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)** · 92,041★ · _Coding agents & MCP_  
  Reference MCP servers — MCP is the emerging standard for wiring tools/data into any agent.
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** · 85,395★ · _Orchestration & agents_  
  Long-horizon research+code SuperAgent — the 'deep research' pattern as a harness.
- **[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)** · 74,968★ · _Coding agents & MCP_  
  Lighter-weight spec-driven development — agree on a change spec with the agent before it writes code.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** · 69,062★ · _Memory_  
  Universal memory layer for agents — the most-adopted bet on the unsolved memory problem.
- **[MemPalace/mempalace](https://github.com/MemPalace/mempalace)** · 60,576★ · _Memory_  
  Best-benchmarked open memory system — a strong contender in a still-open race.
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** · 51,869★ · _Orchestration & agents_  
  Browser-automation CLI for agents — the lighter, scriptable take on web agents.
- **[Aider-AI/aider](https://github.com/Aider-AI/aider)** · 50,141★ · _Coding agents & MCP_  
  AI pair-programming in the terminal with tight git integration — a beloved daily driver.
- **[agno-agi/agno](https://github.com/agno-agi/agno)** · 43,207★ · _Orchestration & agents_  
  Build/run/manage agent platforms — a fast-rising full-stack agent framework.
- **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** · 40,719★ · _RAG & retrieval_  
  Graph-augmented RAG that's simple and fast — the practical face of 'RAG beyond chunks'.
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** · 40,452★ · _RAG & retrieval_  
  Vectorless, reasoning-based retrieval — a bet that reasoning can replace embeddings.
- **[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)** · 39,732★ · _Coding agents & MCP_  
  Playwright as an MCP server — reliable, structured web control for agents.
- **[google/langextract](https://github.com/google/langextract)** · 39,322★ · _Data & ingestion_  
  Structured extraction from unstructured text — turning documents into typed data.
- **[microsoft/graphrag](https://github.com/microsoft/graphrag)** · 36,656★ · _RAG & retrieval_  
  Graph-based RAG — structure-aware retrieval for global/whole-corpus questions.
- **[comet-ml/opik](https://github.com/comet-ml/opik)** · 23,442★ · _Eval & observability_  
  Eval-first LLM/agent observability — measuring agents, not just logging them.
- **[Arize-ai/phoenix](https://github.com/Arize-ai/phoenix)** · 12,314★ · _Eval & observability_  
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
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Trending | 60,576 | 7mo | 821 | 2d ago | 7 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Trending | 51,869 | 10mo | 206 | 1d ago | 7 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Trending | 155,871 | 1.7y | 299 | 1d ago | 5 |
| [github/spec-kit](https://github.com/github/spec-kit) | Trending | 150,046 | 1.2y | 621 | 0d ago | 5 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Trending | 108,866 | 1.6y | 243 | 1d ago | 5 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Trending | 97,759 | 2.0y | 3682 | 10d ago | 5 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Trending | 85,395 | 1.5y | 1861 | 0d ago | 5 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | Trending | 74,968 | 1.3y | 270 | 0d ago | 5 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Trending | 40,452 | 1.6y | 211 | 1d ago | 5 |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Trending | 39,732 | 1.7y | 54 | 1d ago | 5 |
| [google/langextract](https://github.com/google/langextract) | Trending | 39,322 | 1.4y | 35 | 7d ago | 4 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Must-have | 202,234 | 2.6y | 752 | 0d ago | 2 |
| [ollama/ollama](https://github.com/ollama/ollama) | Must-have | 187,208 | 3.4y | 356 | 0d ago | 2 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Fundamental | 169,023 | 8.1y | 1130 | 0d ago | 2 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Must-have | 149,645 | 4.1y | 601 | 0d ago | 2 |

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
| [obra/superpowers](https://github.com/obra/superpowers) | Trending | Coding agents & MCP | Shell | 318,369 (▲3,481) | Mature | 63 | active | 13d ago | 1.1y |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Must-have | Data & ingestion | TypeScript | 202,234 (▲2,233) | Mature | 89 | very active | 0d ago | 2.6y |
| [anthropics/skills](https://github.com/anthropics/skills) | Trending | Coding agents & MCP | Python | 195,720 (▲5,378) | Mature | 50 | active | 0d ago | 1.2y |
| [ollama/ollama](https://github.com/ollama/ollama) | Must-have | Inference & serving | Go | 187,208 (▲752) | Classic | 83 | very active | 0d ago | 3.4y |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Fundamental | Base & training | Python | 169,023 (▲336) | Classic | 100 | very active | 0d ago | 8.1y |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Trending | Coding agents & MCP | TypeScript | 155,871 (▲792) | Hot | 78 | very active | 1d ago | 1.7y |
| [github/spec-kit](https://github.com/github/spec-kit) | Trending | Coding agents & MCP | Python | 150,046 (▲1,131) | Hot | 84 | very active | 0d ago | 1.2y |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Must-have | Orchestration & agents | Python | 149,645 (▲384) | Classic | 89 | very active | 0d ago | 4.1y |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | Fundamental | Inference & serving | C++ | 135,269 (▲1,452) | Classic | 99 | very active | 0d ago | 3.7y |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Fundamental | Learning | Jupyter Notebook | 123,666 (▲446) | Classic | 70 | very active | 4d ago | 3.4y |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Trending | Orchestration & agents | Python | 122,806 (▲1,299) | Mature | 78 | very active | 12d ago | 1.9y |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Trending | Orchestration & agents | Python | 121,193 (▲777) | Mature | 79 | very active | 0d ago | 2.0y |
| [openai/whisper](https://github.com/openai/whisper) | Fundamental | Voice & multimodal | Python | 112,794 (▲509) | Mature | 35 | slowing | 2mo ago | 4.2y |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Trending | Coding agents & MCP | TypeScript | 108,866 (▲63) | Hot | 100 | very active | 1d ago | 1.6y |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Fundamental | Learning | Jupyter Notebook | 108,503 (▲425) | Classic | 62 | very active | 7d ago | 3.3y |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Trending | Coding agents & MCP | — | 97,759 (▲240) | Hot | 59 | very active | 10d ago | 2.0y |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Must-have | Inference & serving | Python | 97,028 (▲427) | Classic | 99 | very active | 0d ago | 3.8y |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Must-have | RAG & retrieval | Go | 94,244 (▲381) | Mature | 94 | very active | 0d ago | 2.9y |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | Trending | Coding agents & MCP | TypeScript | 93,582 (▲552) | Mature | 84 | very active | 0d ago | 2.7y |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Trending | Coding agents & MCP | TypeScript | 92,041 (▲153) | Mature | 80 | very active | 4d ago | 2.0y |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Must-have | Data & ingestion | Python | 87,434 (▲296) | Mature | 84 | very active | 3d ago | 2.5y |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Trending | Orchestration & agents | Python | 85,395 (▲212) | Hot | 89 | very active | 0d ago | 1.5y |
| [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | Fundamental | Learning | — | 85,125 (▲163) | Declining | 10 | stale | 9mo ago | 3.4y |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | Fundamental | Learning | MDX | 80,121 (▲176) | Declining | 12 | stale | 8mo ago | 3.9y |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Must-have | Fine-tuning | Python | 79,601 (▲367) | Mature | 80 | very active | 0d ago | 3.0y |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | Must-have | Fine-tuning | Python | 76,067 (▲111) | Classic | 76 | very active | 0d ago | 3.5y |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | Trending | Coding agents & MCP | TypeScript | 74,968 (▲576) | Hot | 83 | very active | 0d ago | 1.3y |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Trending | Memory | Python | 69,062 (▲374) | Classic | 90 | very active | 10d ago | 3.4y |
| [labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations) | Fundamental | Learning | Python | 67,754 (▲22) | Mature | 47 | active | 14d ago | 6.2y |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | Must-have | Inference & serving | Python | 63,343 (▲375) | Classic | 99 | very active | 0d ago | 3.3y |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | Must-have | Orchestration & agents | Python | 60,988 (▲301) | Classic | 83 | very active | 0d ago | 3.1y |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Trending | Memory | Python | 60,576 (▲89) | Hot | 76 | very active | 2d ago | 7mo |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Must-have | RAG & retrieval | Python | 52,921 (▲65) | Classic | 96 | very active | 3d ago | 4.0y |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Trending | Orchestration & agents | Rust | 51,869 (▲3,684) | Hot | 78 | very active | 1d ago | 10mo |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | Must-have | Inference & serving | Go | 50,392 (▲119) | Classic | 79 | very active | 0d ago | 3.7y |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | Trending | Coding agents & MCP | Python | 50,141 (▲109) | Mature | 22 | slowing | 5mo ago | 3.5y |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Must-have | Vector store | Go | 46,674 (▲58) | Classic | 99 | very active | 0d ago | 7.2y |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Must-have | Orchestration & agents | Python | 45,024 (▲333) | Classic | 78 | very active | 0d ago | 3.3y |
| [deepspeedai/DeepSpeed](https://github.com/deepspeedai/DeepSpeed) | Fundamental | Base & training | Python | 43,331 (▲16) | Classic | 97 | very active | 0d ago | 6.8y |
| [agno-agi/agno](https://github.com/agno-agi/agno) | Trending | Orchestration & agents | Python | 43,207 (▲89) | Classic | 92 | very active | 0d ago | 4.5y |
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | Fundamental | Vector store | C++ | 41,730 (▲462) | Classic | 89 | very active | 0d ago | 9.8y |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | Trending | RAG & retrieval | Python | 40,719 (▲96) | Mature | 79 | very active | 0d ago | 2.1y |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Trending | RAG & retrieval | Python | 40,452 (▲159) | Hot | 76 | very active | 1d ago | 1.6y |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Trending | Coding agents & MCP | TypeScript | 39,732 (▲359) | Hot | 80 | very active | 1d ago | 1.7y |
| [google/langextract](https://github.com/google/langextract) | Trending | Data & ingestion | Python | 39,322 (▲30) | Hot | 69 | very active | 7d ago | 1.4y |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | Must-have | Orchestration & agents | Python | 39,091 (▲108) | Classic | 78 | very active | 3d ago | 3.9y |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | Must-have | Inference & serving | Python | 38,942 (▲323) | Mature | 99 | very active | 0d ago | 2.9y |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | Must-have | Eval & observability | TypeScript | 37,489 (▲290) | Classic | 89 | very active | 0d ago | 3.5y |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | Trending | RAG & retrieval | Python | 36,656 (▲48) | Mature | 74 | active | 0d ago | 2.6y |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Must-have | Vector store | Rust | 35,592 (▲112) | Classic | 88 | very active | 0d ago | 6.5y |
| [karpathy/llm.c](https://github.com/karpathy/llm.c) | Fundamental | Learning | Cuda | 31,490 (▲79) | Abandoned | 4 | stale | 1.4y ago | 2.6y |
| [Lightning-AI/pytorch-lightning](https://github.com/Lightning-AI/pytorch-lightning) | Fundamental | Base & training | Python | 31,450 (▲3) | Classic | 68 | active | 1d ago | 7.6y |
| [huggingface/smolagents](https://github.com/huggingface/smolagents) | Must-have | Orchestration & agents | Python | 30,390 (▲112) | Mature | 58 | active | 1d ago | 1.9y |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Fundamental | RAG & retrieval | Jupyter Notebook | 30,380 (▲102) | Mature | 60 | very active | 15d ago | 2.3y |
| [chroma-core/chroma](https://github.com/chroma-core/chroma) | Must-have | Vector store | Rust | 29,695 (▲35) | Classic | 79 | very active | 3d ago | 4.1y |
| [comet-ml/opik](https://github.com/comet-ml/opik) | Trending | Eval & observability | Python | 23,442 (▲160) | Classic | 99 | very active | 0d ago | 3.5y |
| [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | Trending | Eval & observability | Python | 12,314 (▲99) | Classic | 83 | very active | 0d ago | 4.0y |

## Graph analysis — how they relate

**Community clustering.** These 57 repos span **22 of the graph's 48 communities** — the AI-engineering stack is genuinely cross-cutting, not one tidy neighborhood.

- **Community 27** (8): `ollama/ollama`, `ggml-org/llama.cpp`, `TauricResearch/TradingAgents`, `mlabonne/llm-course`, `unslothai/unsloth`, `hiyouga/LlamaFactory`, `labmlai/annotated_deep_learning_paper_implementations`, `Aider-AI/aider`
- **Community 20** (8): `Fission-AI/OpenSpec`, `mem0ai/mem0`, `crewAIInc/crewAI`, `MemPalace/mempalace`, `agno-agi/agno`, `VectifyAI/PageIndex`, `NirDiamant/RAG_Techniques`, `chroma-core/chroma`
- **Community 25** (4): `rasbt/LLMs-from-scratch`, `deepspeedai/DeepSpeed`, `facebookresearch/faiss`, `Lightning-AI/pytorch-lightning`
- **Community 33** (4): `BerriAI/litellm`, `langfuse/langfuse`, `comet-ml/opik`, `Arize-ai/phoenix`
- **Community 19** (3): `langchain-ai/langchain`, `dair-ai/Prompt-Engineering-Guide`, `langchain-ai/langgraph`
- **Community 21** (3): `microsoft/generative-ai-for-beginners`, `microsoft/playwright-mcp`, `microsoft/graphrag`
- **Community 23** (3): `infiniflow/ragflow`, `milvus-io/milvus`, `qdrant/qdrant`
- **Community 40** (3): `firecrawl/firecrawl`, `browser-use/browser-use`, `unclecode/crawl4ai`

**Centrality (PageRank in the full 2,896-repo graph)** — the most 'hub-like' AI-eng repos in your stars (good signal for *foundational*):

- `Lightning-AI/pytorch-lightning` — PageRank 0.0013 (Fundamental)
- `punkpeye/awesome-mcp-servers` — PageRank 0.0010 (Trending)
- `langchain-ai/langgraph` — PageRank 0.0010 (Must-have)
- `microsoft/playwright-mcp` — PageRank 0.0010 (Trending)
- `langchain-ai/langchain` — PageRank 0.0009 (Must-have)
- `agno-agi/agno` — PageRank 0.0009 (Trending)
- `microsoft/generative-ai-for-beginners` — PageRank 0.0008 (Fundamental)
- `huggingface/smolagents` — PageRank 0.0008 (Must-have)
- `modelcontextprotocol/servers` — PageRank 0.0008 (Trending)
- `VectifyAI/PageIndex` — PageRank 0.0008 (Trending)

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). For *production* picks, prefer mature lifecycle + low single-author share; for *trending* picks, expect churn.

| Repo | Tier | Health | Lifecycle | Activity | Bus factor | Top-author share |
|---|---|---|---|---|---|---|
| huggingface/transformers | Fundamental | 100 | Classic | very active | 8 | 10% |
| google-gemini/gemini-cli | Trending | 100 | Hot | very active | 5 | 14% |
| ggml-org/llama.cpp | Fundamental | 99 | Classic | very active | 12 | 12% |
| vllm-project/vllm | Must-have | 99 | Classic | very active | 18 | 8% |
| sgl-project/sglang | Must-have | 99 | Mature | very active | 7 | 15% |
| BerriAI/litellm | Must-have | 99 | Classic | very active | 5 | 16% |
| milvus-io/milvus | Must-have | 99 | Classic | very active | 7 | 9% |
| comet-ml/opik | Trending | 99 | Classic | very active | 5 | 15% |
| deepspeedai/DeepSpeed | Fundamental | 97 | Classic | very active | 6 | 16% |
| run-llama/llama_index | Must-have | 96 | Classic | very active | 7 | 19% |
| infiniflow/ragflow | Must-have | 94 | Mature | very active | 4 | 27% |
| agno-agi/agno | Trending | 92 | Classic | very active | 4 | 19% |
| mem0ai/mem0 | Trending | 90 | Classic | very active | 4 | 33% |
| facebookresearch/faiss | Fundamental | 89 | Classic | very active | 3 | 19% |
| langchain-ai/langchain | Must-have | 89 | Classic | very active | 3 | 29% |
| langfuse/langfuse | Must-have | 89 | Classic | very active | 3 | 18% |
| firecrawl/firecrawl | Must-have | 89 | Mature | very active | 4 | 25% |
| bytedance/deer-flow | Trending | 89 | Hot | very active | 12 | 8% |
| qdrant/qdrant | Must-have | 88 | Classic | very active | 3 | 26% |
| unclecode/crawl4ai | Must-have | 84 | Mature | very active | 2 | 49% |
| github/spec-kit | Trending | 84 | Hot | very active | 2 | 38% |
| OpenHands/OpenHands | Trending | 84 | Mature | very active | 2 | 44% |
| ollama/ollama | Must-have | 83 | Classic | very active | 2 | 41% |
| crewAIInc/crewAI | Must-have | 83 | Classic | very active | 2 | 49% |
| Fission-AI/OpenSpec | Trending | 83 | Hot | very active | 2 | 48% |
| Arize-ai/phoenix | Trending | 83 | Classic | very active | 2 | 31% |
| unslothai/unsloth | Must-have | 80 | Mature | very active | 1 | 75% |
| modelcontextprotocol/servers | Trending | 80 | Mature | very active | 1 | 96% |
| microsoft/playwright-mcp | Trending | 80 | Hot | very active | 2 | 33% |
| mudler/LocalAI | Must-have | 79 | Classic | very active | 1 | 84% |
| chroma-core/chroma | Must-have | 79 | Classic | very active | 2 | 30% |
| browser-use/browser-use | Trending | 79 | Mature | very active | 1 | 74% |
| HKUDS/LightRAG | Trending | 79 | Mature | very active | 1 | 97% |
| langchain-ai/langgraph | Must-have | 78 | Classic | very active | 1 | 51% |
| stanfordnlp/dspy | Must-have | 78 | Classic | very active | 1 | 75% |
| anthropics/claude-code | Trending | 78 | Hot | very active | 1 | 92% |
| vercel-labs/agent-browser | Trending | 78 | Hot | very active | 1 | 53% |
| TauricResearch/TradingAgents | Trending | 78 | Mature | very active | 1 | 96% |
| hiyouga/LlamaFactory | Must-have | 76 | Classic | very active | 4 | 26% |
| MemPalace/mempalace | Trending | 76 | Hot | very active | 1 | 78% |
| VectifyAI/PageIndex | Trending | 76 | Hot | very active | 1 | 54% |
| microsoft/graphrag | Trending | 74 | Mature | active | 2 | 36% |
| microsoft/generative-ai-for-beginners | Fundamental | 70 | Classic | very active | 2 | 29% |
| google/langextract | Trending | 69 | Hot | very active | 1 | 66% |
| Lightning-AI/pytorch-lightning | Fundamental | 68 | Classic | active | 2 | 43% |
| obra/superpowers | Trending | 63 | Mature | active | 1 | 100% |
| rasbt/LLMs-from-scratch | Fundamental | 62 | Classic | very active | 2 | 48% |
| NirDiamant/RAG_Techniques | Fundamental | 60 | Mature | very active | 1 | 88% |
| punkpeye/awesome-mcp-servers | Trending | 59 | Hot | very active | 1 | 96% |
| huggingface/smolagents | Must-have | 58 | Mature | active | 1 | 50% |
| anthropics/skills | Trending | 50 | Mature | active | 2 | 36% |
| labmlai/annotated_deep_learning_paper_implementations | Fundamental | 47 | Mature | active | 1 | 80% |
| openai/whisper | Fundamental | 35 | Mature | slowing | 1 | 100% |
| Aider-AI/aider | Trending | 22 | Mature | slowing | 0 | 0% |
| dair-ai/Prompt-Engineering-Guide | Fundamental | 12 | Declining | stale | 0 | 0% |
| mlabonne/llm-course | Fundamental | 10 | Declining | stale | 0 | 0% |
| karpathy/llm.c | Fundamental | 4 | Abandoned | stale | 0 | 0% |

## Adjacent (deliberately not in the core list)

- **Comfy-Org/ComfyUI** (147,152★) — image/diffusion tooling — a different (creative) AI discipline, out of scope here
- **PaddlePaddle/PaddleOCR** (92,763★) — OCR engine — a data-ingestion building block, folded into 'Data & ingestion'
- **n8n-io/n8n** (210,607★) — workflow automation — orchestrates agents but isn't core AI-eng tooling (see agent-orchestration report)
- **microsoft/autogen** (61,871★) — multi-agent framework — slipping in activity; crewAI/langgraph lead the must-have slot now
- **nomic-ai/gpt4all** (77,344★) — local-LLM app — superseded for most by ollama; kept off the must-have list

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`, cross-checked against 2026 AI-engineering landscape reporting. No private calls; fully reproducible.
- **Tiers and the solved/frontier verdicts are opinionated** — a synthesis of dataset signal (stars, lifecycle, commit velocity) and the current state of the field, not a benchmark. Treat 'Trending' as *volatile by definition*.
- **Selection** favors recognizable, broadly-applicable AI-engineering tooling. The coding-agent/harness ecosystem and voice stack are summarized here but detailed in the Claude-Code-setups and voice-agents reports respectively.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.

<sub>Repos covered: 57 · Snapshot: 2026-11-16T14:38:50.632Z</sub>
