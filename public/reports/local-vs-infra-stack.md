# Local vs High-Infra AI Stack — A Deployment-Tier Comparison

> Derived from **kaiser-data**'s 2,925 starred repos (snapshot `2026-11-23T16:50:13.482Z`), cross-referenced with the repo-similarity graph (2,925 nodes / 9,737 edges, 45 communities).
>
> Generated 2026-11-23 by `scripts/reports/local_vs_infra_stack.py` (regenerate any time — no API cost).

![Top tools by stars](assets/local-vs-infra-stack-top-tools.svg)

![Tools per category](assets/local-vs-infra-stack-categories.svg)


## Executive summary

- **40 stack tools** in your stars (**1,903,296★** combined), mapped to every layer of a self-hosted AI stack and tagged by deployment tier:
  - 🟢 **Local / edge** (16) — laptop, single consumer GPU, on-device, zero ops
  - 🟡 **Scales both** (16) — same tool, local *or* cluster, config-dependent
  - 🔴 **High-infra** (8) — multi-GPU / datacenter / high-QPS / k8s
- **The core split is the inference runtime.** Local tier optimizes for *one* of you on *one* box (`ollama`, `llama.cpp`, `llamafile`); high-infra optimizes for *throughput across many GPUs* (`vllm`, `sglang`, `lmdeploy`). Everything else (gateway, vector store, agent logic) is mostly the same code with a different deployment target.
- **Don't pick a runtime per tool — pick a tier, then fill each layer.** The two reference stacks below do exactly that.
- **The 🟡 'scales both' tools are the safe bets** when you'll start local and grow: `litellm` (gateway), `pgvector`/`qdrant`/`chroma` (store), `transformers`/`peft`, the agent frameworks, and `langfuse`/`phoenix` all migrate without a rewrite.

## The two reference stacks

Same job at every layer — different tier. Pick a column and go.

| Layer | 🟢 Fully-local stack | 🔴 High-infra stack |
|---|---|---|
| **Inference runtime** | `ollama/ollama` | `vllm-project/vllm` |
| **Scaling infra** | `— (single node)` | `skypilot-org/skypilot` |
| **Cost optimization** | `GGUF quant (llama.cpp)` | `vllm-project/llm-compressor` |
| **Gateway / UI** | `open-webui/open-webui` | `BerriAI/litellm` |
| **Vector store** | `lancedb / pgvector` | `milvus-io/milvus (or clustered qdrant)` |
| **Fine-tuning** | `unslothai/unsloth` | `axolotl-ai-cloud/axolotl` |
| **Agent logic** | `pydantic/pydantic-ai` | `pydantic/pydantic-ai (same)` |
| **Observability** | `promptfoo/promptfoo` | `langfuse/langfuse` |

**Reading it:** the agent logic and observability *code* is identical across columns — only the runtime, scaling, store, and trainer change as you move from one box to a fleet.

## The stack, layer by layer

### Inference runtime

_Where the model actually executes. This is the layer where the local/high-infra distinction is sharpest._

| Tool | Tier | ★ Stars | Lang | Lifecycle | What it's for |
|---|---|---|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 🟢 Local | 187,903 (▲695) | Go | Classic | The zero-config local default — `ollama run`, model registry, OpenAI-compatible API. Laptop-to-server, but single-node. |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | 🟢 Local | 136,160 (▲891) | C++ | Classic | The CPU/edge engine under everything — GGUF quantization, runs on a Raspberry Pi to a Mac; the embeddable substrate. |
| [nomic-ai/gpt4all](https://github.com/nomic-ai/gpt4all) | 🟢 Local | 77,330 (▼14) | C++ | Abandoned | Desktop-first local LLM app + bindings; privacy-focused, runs on plain CPUs. |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | 🟢 Local | 50,513 (▲121) | Go | Classic | Self-hosted, OpenAI-drop-in engine for LLM/TTS/STT/image on commodity hardware — the all-in-one local server. |
| [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | 🟢 Local | 26,703 (▲51) | C++ | Classic | One file = one runnable model. Maximum portability for shipping a local model with no install. |
| [withcatai/node-llama-cpp](https://github.com/withcatai/node-llama-cpp) | 🟢 Local | 2,211 (▲4) | TypeScript | Classic | llama.cpp bindings for Node.js — run GGUF models in-process with JSON-schema-constrained output; the JS-native local path. |
| [StayLameBro/backburner](https://github.com/StayLameBro/backburner) | 🟢 Local | 1,199 (▲9) | Python | Hot | Pairs an iPhone with a Mac over USB-C to run a 27B model with faster prefill and more context — a novel local-only scaling trick. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 🟡 Both | 169,373 (▲350) | Python | Classic | The model-definition library every runtime builds on; runs a notebook locally or a training cluster — the common denominator. |
| [exo-explore/exo](https://github.com/exo-explore/exo) | 🟡 Both | 48,569 (▲115) | Python | Mature | Stitches a *cluster out of your local devices* (phones, Macs, PCs) to run big models — distributed but home-grown. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 🔴 Infra | 97,409 (▲381) | Python | Classic | The production serving standard — PagedAttention, continuous batching, tensor/pipeline parallelism for high QPS on GPU fleets. |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 🔴 Infra | 38,983 (▲41) | Python | Mature | High-throughput serving with RadixAttention prefix caching — excels at structured/agentic workloads at scale. |
| [InternLM/lmdeploy](https://github.com/InternLM/lmdeploy) | 🔴 Infra | 8,155 (▲8) | Python | Classic | Toolkit for compressing + serving LLMs at scale (TurboMind engine); quantization-aware high-throughput inference. |

### Scaling / serving infra

_How you get a runtime onto many machines, cheaply. Only relevant once you outgrow a single node._

| Tool | Tier | ★ Stars | Lang | Lifecycle | What it's for |
|---|---|---|---|---|---|
| [skypilot-org/skypilot](https://github.com/skypilot-org/skypilot) | 🔴 Infra | 10,874 (▲28) | Python | Classic | Run/serve LLMs across any cloud or k8s with cost-aware scheduling & spot recovery — the multi-cloud orchestration layer. |
| [vllm-project/llm-compressor](https://github.com/vllm-project/llm-compressor) | 🔴 Infra | 3,986 (▲16) | Python | Mature | Quantize/sparsify models (GPTQ/AWQ/SmoothQuant) so they serve cheaper on vLLM — the cost-optimization step. |

### Model gateway & UI

_What sits in front of the model(s) — a chat UI for one user, or a proxy that fans out across providers for a whole org._

| Tool | Tier | ★ Stars | Lang | Lifecycle | What it's for |
|---|---|---|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 🟢 Local | 159,345 (▲527) | Svelte | Classic | The self-hosted ChatGPT-style UI for local models (pairs with Ollama) — RAG, users, tools, fully offline. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 🟢 Local | 68,548 (▲210) | JavaScript | Classic | All-in-one desktop/self-host app: chat + RAG + agents over local or API models. |
| [janhq/jan](https://github.com/janhq/jan) | 🟢 Local | 46,044 (▲303) | Rust | Classic | Open-source desktop ChatGPT alternative that runs models 100% on your machine. |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 🟡 Both | 63,771 (▲428) | Python | Classic | One OpenAI-compatible API over 100+ providers + a self-hostable proxy with keys/budgets/routing — local or enterprise gateway. |
| [Portkey-AI/gateway](https://github.com/Portkey-AI/gateway) | 🟡 Both | 13,433 (▲45) | TypeScript | Mature | Fast AI gateway with routing, fallbacks, caching, and guardrails — drop in front of any tier. |

### Vector store

_Where embeddings live for RAG. Many of these span tiers — start embedded, cluster later._

| Tool | Tier | ★ Stars | Lang | Lifecycle | What it's for |
|---|---|---|---|---|---|
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | 🟢 Local | 41,887 (▲157) | C++ | Classic | The in-process ANN library — no server, embed it in your app; the index inside many of the DBs below. |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 🟢 Local | 16,279 (▲30) | C++ | Hot | Lightweight, lightning-fast in-process vector database for embedded use. |
| [neuml/txtai](https://github.com/neuml/txtai) | 🟢 Local | 13,722 (▲295) | Python | Classic | All-in-one embeddings DB + RAG + workflows in one local package. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 🟢 Local | 11,972 (▲60) | Rust | Classic | Embedded, serverless vector DB (Lance columnar format) — zero-ops local RAG that still handles large on-disk sets. |
| [redis/redis](https://github.com/redis/redis) | 🟡 Both | 77,717 (▲241) | C | Classic | The in-memory store you already run, now with vector search — local cache to HA cluster. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 🟡 Both | 35,675 (▲83) | Rust | Classic | Rust vector DB — single-binary local, but clusters with sharding/replication for billions of vectors. |
| [chroma-core/chroma](https://github.com/chroma-core/chroma) | 🟡 Both | 29,733 (▲38) | Rust | Classic | AI-native store that runs embedded for prototyping and client/server for production — the easy on-ramp. |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 🟡 Both | 23,786 (▲92) | C | Mature | Vector search inside the Postgres you already run — scales from a laptop to a managed cluster with no new infra. |
| [marqo-ai/marqo](https://github.com/marqo-ai/marqo) | 🟡 Both | 5,025 (▲1) | Python | Mature | End-to-end vector search that bundles embedding inference; deploys local or distributed. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 🔴 Infra | 46,725 (▲51) | Go | Classic | The billion-scale, distributed OSS vector DB — heavy ops footprint, built for datacenter scale. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 🔴 Infra | 16,959 (▲7) | Go | Classic | Cloud-native vector DB with hybrid search & modules — designed for clustered, multi-tenant deployments. |

### Fine-tuning

_Adapting a model. LoRA on one GPU vs. multi-node full fine-tunes._

| Tool | Tier | ★ Stars | Lang | Lifecycle | What it's for |
|---|---|---|---|---|---|
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 🟢 Local | 80,066 (▲465) | Python | Mature | 2× faster, lower-VRAM fine-tuning — train a LoRA on a single consumer GPU (even Colab). |
| [huggingface/peft](https://github.com/huggingface/peft) | 🟡 Both | 21,919 (▲22) | Python | Classic | Parameter-efficient fine-tuning (LoRA/QLoRA/adapters) — one consumer GPU or a multi-node run. |
| [axolotl-ai-cloud/axolotl](https://github.com/axolotl-ai-cloud/axolotl) | 🔴 Infra | 12,747 (▲19) | Python | Classic | Config-driven fine-tuning that scales to multi-GPU/multi-node (DeepSpeed/FSDP) — the cluster-grade trainer. |

### Agent framework

_The orchestration logic — deliberately tier-agnostic; it targets whatever endpoint you give it._

| Tool | Tier | ★ Stars | Lang | Lifecycle | What it's for |
|---|---|---|---|---|---|
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 🟡 Both | 61,201 (▲213) | Python | Classic | Role-based multi-agent framework — runs against any model backend, local or hosted. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 🟡 Both | 52,987 (▲66) | Python | Classic | Data/agent framework — point it at a local Ollama or a cloud endpoint; tier-agnostic. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 🟡 Both | 45,310 (▲286) | Python | Classic | Graph/stateful agent runtime — the orchestration logic is independent of where the model runs. |
| [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) | 🟡 Both | 21,351 (▲113) | Python | Mature | Type-safe agent framework; model-agnostic, so the same code targets either tier. |

### Observability & eval

_Tracing, metrics, and evals. Most self-host locally and also offer managed cloud._

| Tool | Tier | ★ Stars | Lang | Lifecycle | What it's for |
|---|---|---|---|---|---|
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | 🟢 Local | 27,588 (▲285) | TypeScript | Classic | CLI-first prompt/model eval that runs entirely on your machine in CI — no backend needed. |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | 🟡 Both | 37,754 (▲265) | TypeScript | Classic | Self-hostable LLM tracing/eval/metrics — runs in Docker locally or as managed cloud. |
| [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | 🟡 Both | 12,384 (▲70) | Python | Classic | Open-source LLM observability you can run locally; OTel-native tracing + evals. |

## Which tier should you use?

| Your situation | Tier | Runtime to start with |
|---|---|---|
| Laptop / Mac, privacy, one user | 🟢 Local | `ollama` (+ `open-webui`) |
| Single consumer GPU (e.g. 1×4090) | 🟢 Local | `ollama` or `llama.cpp` w/ GGUF |
| CPU-only / edge / air-gapped | 🟢 Local | `llama.cpp` / `llamafile` / `LocalAI` |
| Prototype now, scale later | 🟡 Both | `vllm` behind `litellm`; `pgvector` store |
| Many users, steady traffic | 🔴 Infra | `vllm` (continuous batching) |
| Agentic / structured-output at scale | 🔴 Infra | `sglang` (RadixAttention) |
| Multi-cloud / spot-GPU cost control | 🔴 Infra | `vllm` orchestrated by `skypilot` |
| Pool several home devices | 🟡 Both | `exo-explore/exo` |

## Master comparison (operational metrics)

Sorted by tier then stars. `Health`/`Lifecycle` are the dataset's computed metrics; `Activity` is derived from days-since-push + 90-day commits.

| Tool | Layer | Tier | Lang | License | ★ Stars | Lifecycle | Health | Activity | Last push | Contrib(90d) |
|---|---|---|---|---|---|---|---|---|---|---|
| [ollama](https://github.com/ollama/ollama) | Inference runtime | Local | Go | MIT | 187,903 (▲695) | Classic | 83 | very active | 1d ago | 13 |
| [open-webui](https://github.com/open-webui/open-webui) | Model gateway & UI | Local | Svelte | NOASSERTION | 159,345 (▲527) | Classic | 80 | very active | 0d ago | 4 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | Inference runtime | Local | C++ | MIT | 136,160 (▲891) | Classic | 99 | very active | 0d ago | 47 |
| [unsloth](https://github.com/unslothai/unsloth) | Fine-tuning | Local | Python | Apache-2.0 | 80,066 (▲465) | Mature | 80 | very active | 0d ago | 10 |
| [gpt4all](https://github.com/nomic-ai/gpt4all) | Inference runtime | Local | C++ | MIT | 77,330 (▼14) | Abandoned | 7 | stale | 1.5y ago | 0 |
| [anything-llm](https://github.com/Mintplex-Labs/anything-llm) | Model gateway & UI | Local | JavaScript | MIT | 68,548 (▲210) | Classic | 84 | very active | 3d ago | 18 |
| [LocalAI](https://github.com/mudler/LocalAI) | Inference runtime | Local | Go | MIT | 50,513 (▲121) | Classic | 79 | very active | 0d ago | 8 |
| [jan](https://github.com/janhq/jan) | Model gateway & UI | Local | Rust | NOASSERTION | 46,044 (▲303) | Classic | 79 | very active | 0d ago | 5 |
| [faiss](https://github.com/facebookresearch/faiss) | Vector store | Local | C++ | MIT | 41,887 (▲157) | Classic | 94 | very active | 0d ago | 35 |
| [promptfoo](https://github.com/promptfoo/promptfoo) | Observability & eval | Local | TypeScript | MIT | 27,588 (▲285) | Classic | 79 | very active | 0d ago | 14 |
| [llamafile](https://github.com/mozilla-ai/llamafile) | Inference runtime | Local | C++ | NOASSERTION | 26,703 (▲51) | Classic | 65 | very active | 15d ago | 8 |
| [zvec](https://github.com/alibaba/zvec) | Vector store | Local | C++ | Apache-2.0 | 16,279 (▲30) | Hot | 87 | very active | 0d ago | 19 |
| [txtai](https://github.com/neuml/txtai) | Vector store | Local | Python | Apache-2.0 | 13,722 (▲295) | Classic | 95 | very active | 0d ago | 37 |
| [lancedb](https://github.com/lancedb/lancedb) | Vector store | Local | Rust | Apache-2.0 | 11,972 (▲60) | Classic | 82 | very active | 0d ago | 13 |
| [node-llama-cpp](https://github.com/withcatai/node-llama-cpp) | Inference runtime | Local | TypeScript | MIT | 2,211 (▲4) | Classic | 69 | very active | 1d ago | 7 |
| [backburner](https://github.com/StayLameBro/backburner) | Inference runtime | Local | Python | MIT | 1,199 (▲9) | Hot | 63 | very active | 17d ago | 5 |
| [transformers](https://github.com/huggingface/transformers) | Inference runtime | Both | Python | Apache-2.0 | 169,373 (▲350) | Classic | 100 | very active | 0d ago | 43 |
| [redis](https://github.com/redis/redis) | Vector store | Both | C | NOASSERTION | 77,717 (▲241) | Classic | 97 | very active | 0d ago | 41 |
| [litellm](https://github.com/BerriAI/litellm) | Model gateway & UI | Both | Python | NOASSERTION | 63,771 (▲428) | Classic | 99 | very active | 0d ago | 29 |
| [crewAI](https://github.com/crewAIInc/crewAI) | Agent framework | Both | Python | MIT | 61,201 (▲213) | Classic | 93 | very active | 0d ago | 37 |
| [llama_index](https://github.com/run-llama/llama_index) | Agent framework | Both | Python | MIT | 52,987 (▲66) | Classic | 96 | very active | 4d ago | 36 |
| [exo](https://github.com/exo-explore/exo) | Inference runtime | Both | Python | Apache-2.0 | 48,569 (▲115) | Mature | 76 | very active | 17d ago | 1 |
| [langgraph](https://github.com/langchain-ai/langgraph) | Agent framework | Both | Python | MIT | 45,310 (▲286) | Classic | 78 | very active | 2d ago | 16 |
| [langfuse](https://github.com/langfuse/langfuse) | Observability & eval | Both | TypeScript | NOASSERTION | 37,754 (▲265) | Classic | 94 | very active | 0d ago | 17 |
| [qdrant](https://github.com/qdrant/qdrant) | Vector store | Both | Rust | Apache-2.0 | 35,675 (▲83) | Classic | 88 | very active | 0d ago | 15 |
| [chroma](https://github.com/chroma-core/chroma) | Vector store | Both | Rust | Apache-2.0 | 29,733 (▲38) | Classic | 79 | very active | 3d ago | 6 |
| [pgvector](https://github.com/pgvector/pgvector) | Vector store | Both | C | NOASSERTION | 23,786 (▲92) | Mature | 64 | very active | 0d ago | 1 |
| [peft](https://github.com/huggingface/peft) | Fine-tuning | Both | Python | Apache-2.0 | 21,919 (▲22) | Classic | 99 | very active | 3d ago | 47 |
| [pydantic-ai](https://github.com/pydantic/pydantic-ai) | Agent framework | Both | Python | MIT | 21,351 (▲113) | Mature | 82 | very active | 0d ago | 5 |
| [gateway](https://github.com/Portkey-AI/gateway) | Model gateway & UI | Both | TypeScript | MIT | 13,433 (▲45) | Mature | 46 | active | 4d ago | 0 |
| [phoenix](https://github.com/Arize-ai/phoenix) | Observability & eval | Both | Python | NOASSERTION | 12,384 (▲70) | Classic | 83 | very active | 0d ago | 14 |
| [marqo](https://github.com/marqo-ai/marqo) | Vector store | Both | Python | Apache-2.0 | 5,025 (▲1) | Mature | 42 | slowing | 2mo ago | 0 |
| [vllm](https://github.com/vllm-project/vllm) | Inference runtime | Infra | Python | Apache-2.0 | 97,409 (▲381) | Classic | 99 | very active | 0d ago | 68 |
| [milvus](https://github.com/milvus-io/milvus) | Vector store | Infra | Go | Apache-2.0 | 46,725 (▲51) | Classic | 99 | very active | 0d ago | 39 |
| [sglang](https://github.com/sgl-project/sglang) | Inference runtime | Infra | Python | Apache-2.0 | 38,983 (▲41) | Mature | 99 | very active | 0d ago | 53 |
| [weaviate](https://github.com/weaviate/weaviate) | Vector store | Infra | Go | NOASSERTION | 16,959 (▲7) | Classic | 78 | very active | 0d ago | 5 |
| [axolotl](https://github.com/axolotl-ai-cloud/axolotl) | Fine-tuning | Infra | Python | Apache-2.0 | 12,747 (▲19) | Classic | 79 | very active | 3d ago | 9 |
| [skypilot](https://github.com/skypilot-org/skypilot) | Scaling / serving infra | Infra | Python | Apache-2.0 | 10,874 (▲28) | Classic | 85 | very active | 0d ago | 17 |
| [lmdeploy](https://github.com/InternLM/lmdeploy) | Inference runtime | Infra | Python | Apache-2.0 | 8,155 (▲8) | Classic | 93 | very active | 0d ago | 28 |
| [llm-compressor](https://github.com/vllm-project/llm-compressor) | Scaling / serving infra | Infra | Python | Apache-2.0 | 3,986 (▲16) | Mature | 89 | very active | 3d ago | 30 |

## Graph analysis — how the stack hangs together

**Community clustering.** These 40 tools span **13 of the graph's 45 communities** — the stack cuts across the inference, RAG/vector, and agent neighborhoods rather than forming one cluster.

- **Community 30** (10): `StayLameBro/backburner`, `janhq/jan`, `Mintplex-Labs/anything-llm`, `lancedb/lancedb`, `pgvector/pgvector`, `alibaba/zvec`, `neuml/txtai`, `qdrant/qdrant`, `weaviate/weaviate`, `milvus-io/milvus`
- **Community 8** (6): `mozilla-ai/llamafile`, `BerriAI/litellm`, `Portkey-AI/gateway`, `langfuse/langfuse`, `Arize-ai/phoenix`, `promptfoo/promptfoo`
- **Community 11** (5): `open-webui/open-webui`, `chroma-core/chroma`, `langchain-ai/langgraph`, `crewAIInc/crewAI`, `pydantic/pydantic-ai`
- **Community 31** (4): `ollama/ollama`, `huggingface/transformers`, `unslothai/unsloth`, `huggingface/peft`
- **Community 35** (4): `vllm-project/vllm`, `sgl-project/sglang`, `vllm-project/llm-compressor`, `run-llama/llama_index`
- **Community 6** (2): `ggml-org/llama.cpp`, `marqo-ai/marqo`
- **Community 22** (2): `nomic-ai/gpt4all`, `InternLM/lmdeploy`
- **Community 28** (2): `facebookresearch/faiss`, `redis/redis`

**Centrality (PageRank in the full 2,925-repo graph)** — the 'hub' tools your other stars cluster around:

- `nomic-ai/gpt4all` — PageRank 0.0011 (🟢 Local)
- `langchain-ai/langgraph` — PageRank 0.0010 (🟡 Both)
- `neuml/txtai` — PageRank 0.0007 (🟢 Local)
- `qdrant/qdrant` — PageRank 0.0007 (🟡 Both)
- `langfuse/langfuse` — PageRank 0.0006 (🟡 Both)
- `huggingface/transformers` — PageRank 0.0006 (🟡 Both)
- `huggingface/peft` — PageRank 0.0006 (🟡 Both)
- `vllm-project/vllm` — PageRank 0.0005 (🔴 Infra)
- `axolotl-ai-cloud/axolotl` — PageRank 0.0005 (🔴 Infra)
- `crewAIInc/crewAI` — PageRank 0.0005 (🟡 Both)

**Direct links between stack tools** (top similarity edges where both endpoints are in this report):

- `huggingface/peft` ⇄ `huggingface/transformers` (w=0.711) — topics: llm, python, pytorch; authors: albertvillanova, rtrompier
- `vllm-project/llm-compressor` ⇄ `vllm-project/vllm` (w=0.571) — authors: nvisional
- `lancedb/lancedb` ⇄ `qdrant/qdrant` (w=0.477) — topics: image-search, nearest-neighbor-search, recommender-system, search-engine; authors: xixi-box, dependabot[bot]
- `weaviate/weaviate` ⇄ `qdrant/qdrant` (w=0.429) — topics: search-engine, vector-search, vector-search-engine, vector-database
- `vllm-project/vllm` ⇄ `sgl-project/sglang` (w=0.424) — topics: llm, transformer, inference, llama; authors: ankitgala007
- `lancedb/lancedb` ⇄ `weaviate/weaviate` (w=0.400) — topics: approximate-nearest-neighbor-search, image-search, nearest-neighbor-search, recommender-system
- `BerriAI/litellm` ⇄ `Portkey-AI/gateway` (w=0.348) — topics: langchain, llm, llmops, openai
- `langfuse/langfuse` ⇄ `Portkey-AI/gateway` (w=0.300) — topics: llm, llmops, openai, langchain
- `neuml/txtai` ⇄ `Mintplex-Labs/anything-llm` (w=0.286) — topics: llm, vector-database, rag, ai-agents; authors: MohammadHijjawi97, Fahmid-Arman, nurlanmnn
- `sgl-project/sglang` ⇄ `ollama/ollama` (w=0.280) — topics: llama, llm, deepseek, gpt-oss
- `lancedb/lancedb` ⇄ `alibaba/zvec` (w=0.275) — topics: search-engine, semantic-search, similarity-search, vector-database; authors: dependabot[bot]
- `promptfoo/promptfoo` ⇄ `langfuse/langfuse` (w=0.268) — topics: llm, prompt-engineering, llmops, evaluation; authors: dependabot[bot]
- `lancedb/lancedb` ⇄ `pgvector/pgvector` (w=0.250) — topics: approximate-nearest-neighbor-search, nearest-neighbor-search
- `langfuse/langfuse` ⇄ `BerriAI/litellm` (w=0.241) — topics: llm, llmops, openai, langchain
- `unslothai/unsloth` ⇄ `ollama/ollama` (w=0.214) — topics: llama, llms, gemma, llm
- …and 2 more.

## Maintenance & risk signal

Bus factor = commit concentration (1 = single-maintainer risk). For infra you'll depend on, weight health + activity heavily.

| Tool | Tier | Health | Lifecycle | Activity | Bus factor | Top-author share | Releases |
|---|---|---|---|---|---|---|---|
| transformers | Both | 100 | Classic | very active | 5 | 16% | 285 |
| llama.cpp | Local | 99 | Classic | very active | 7 | 19% | 8321 |
| vllm | Infra | 99 | Classic | very active | 19 | 7% | 110 |
| sglang | Infra | 99 | Mature | very active | 8 | 18% | 64 |
| litellm | Both | 99 | Classic | very active | 6 | 16% | 1591 |
| milvus | Infra | 99 | Classic | very active | 8 | 11% | 183 |
| peft | Both | 99 | Classic | very active | 7 | 20% | 38 |
| redis | Both | 97 | Classic | very active | 8 | 12% | 166 |
| llama_index | Both | 96 | Classic | very active | 6 | 19% | 498 |
| txtai | Local | 95 | Classic | very active | 4 | 26% | 69 |
| faiss | Local | 94 | Classic | very active | 4 | 18% | 30 |
| langfuse | Both | 94 | Classic | very active | 4 | 19% | 746 |
| lmdeploy | Infra | 93 | Classic | very active | 4 | 17% | 71 |
| crewAI | Both | 93 | Classic | very active | 4 | 21% | 258 |
| llm-compressor | Infra | 89 | Mature | very active | 3 | 23% | 42 |
| qdrant | Both | 88 | Classic | very active | 3 | 26% | 121 |
| zvec | Local | 87 | Hot | very active | 3 | 24% | 16 |
| skypilot | Infra | 85 | Classic | very active | 2 | 34% | 48 |
| anything-llm | Local | 84 | Classic | very active | 2 | 33% | 40 |
| ollama | Local | 83 | Classic | very active | 2 | 47% | 275 |
| phoenix | Both | 83 | Classic | very active | 2 | 28% | 925 |
| lancedb | Local | 82 | Classic | very active | 2 | 45% | 561 |
| pydantic-ai | Both | 82 | Mature | very active | 2 | 45% | 360 |
| open-webui | Local | 80 | Classic | very active | 1 | 57% | 182 |
| unsloth | Local | 80 | Mature | very active | 1 | 57% | 93 |
| LocalAI | Local | 79 | Classic | very active | 1 | 58% | 143 |
| jan | Local | 79 | Classic | very active | 1 | 59% | 108 |
| chroma | Both | 79 | Classic | very active | 2 | 30% | 137 |
| axolotl | Infra | 79 | Classic | very active | 1 | 69% | 36 |
| promptfoo | Local | 79 | Classic | very active | 1 | 72% | 434 |
| weaviate | Infra | 78 | Classic | very active | 1 | 83% | 620 |
| langgraph | Both | 78 | Classic | very active | 1 | 50% | 608 |
| exo | Both | 76 | Mature | very active | 1 | 100% | 16 |
| node-llama-cpp | Local | 69 | Classic | very active | 1 | 64% | 143 |
| llamafile | Local | 65 | Classic | very active | 1 | 55% | 43 |
| pgvector | Both | 64 | Mature | very active | 1 | 100% | 0 |
| backburner | Local | 63 | Hot | very active | 1 | 72% | 4 |
| gateway | Both | 46 | Mature | active | 0 | 0% | 81 |
| marqo | Both | 42 | Mature | slowing | 0 | 0% | 113 |
| gpt4all | Local | 7 | Abandoned | stale | 0 | 0% | 38 |

## Adjacent (covered elsewhere)

- **ggml-org/whisper.cpp** (55,445★) — speech runtime — covered in the *voice-agents* report
- **comet-ml/opik** (23,491★) — eval/observability — see the *LLM-evaluation* report
- **confident-ai/deepeval** (19,607★) — eval framework — see the *LLM-evaluation* report
- **langchain-ai/langchain** (149,958★) — broad agent toolkit — see the *agent-orchestration* report
- **microsoft/autogen** — multi-agent framework — see the *agent-orchestration* report

## Methodology & caveats

- **Source**: `data/classified.json` + `public/data/graph.json`. No external calls; fully reproducible.
- **Tiering** is an editorial judgment about each tool's *sweet spot*, not a hard limit — many 🟢 tools can be pushed onto servers and some 🔴 tools run (slowly) on a laptop. The tag reflects what the project is *optimized and typically used* for.
- **Selection**: keyword scan (inference / serving / vllm / ollama / vector db / gateway / fine-tune / quantize) + manual curation into stack layers. Speech runtimes, pure eval frameworks, and broad agent toolkits were routed to adjacent reports.
- **Metrics** (health, lifecycle, bus_factor) are precomputed at snapshot time and may lag GitHub's current state.
- Re-run after a fresh `classified.json` to refresh stars/activity.

<sub>Tools covered: 40 · Tiers: 16 local / 16 both / 8 infra · Snapshot: 2026-11-23T16:50:13.482Z</sub>
