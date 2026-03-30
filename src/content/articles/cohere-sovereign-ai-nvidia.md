---
title: "Cohere and NVIDIA Are Building the Case for Sovereign AI"
subtitle: "What the partnership actually means for regulated industries handling sensitive data."
image: "/images/cohere-orange.png"
imageAlt: "Secure on-premise AI server"
readTime: 3
date: 2026-03-16
category: ai-news
popular: false
---

"Sovereign AI" carries a lot of political weight. When people hear the term, they often think of trade policy or national innovation strategies. But in enterprise contexts, the conversation is simpler and more operational: who has custody of your data, and where does it actually run?

That is the framing behind [Cohere's announcement](https://cohere.com/blog/cohere-sovereign-ai-nvidia) that it will develop custom AI models and deploy its [North](https://cohere.com/north) agentic platform on [NVIDIA DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/), a compact desktop workstation capable of running models up to 200 billion parameters entirely on-premise.

Toronto-born Cohere has historically positioned itself as the enterprise alternative to OpenAI, with a deployment model that prioritizes private cloud and on-premise options over consumer-facing services. This partnership leans harder into that positioning.

## What Is Being Built

The technical deliverable is a set of Cohere models optimized for NVIDIA's Grace Blackwell architecture, the same chip powering DGX Spark. The idea is not just compatibility but native performance: models tuned to the hardware they will run on, rather than general-purpose models squeezed onto local compute.

Alongside the models, Cohere's North platform will ship a local instance on DGX Spark. North handles enterprise agentic workflows, search, and reasoning on internal documents. Running it off a desktop workstation means teams can work agents against sensitive internal data without any of that data leaving the local environment.

The hardware is not modest. NVIDIA DGX Spark delivers up to one petaFLOP of FP4 AI performance and 128 GB of unified system memory in a form factor that sits on a desk rather than in a data center. That changes the deployment conversation significantly. You are not provisioning cloud compute or waiting on infrastructure approvals. You are plugging in a workstation.

## Why Finance, Healthcare, and Government Are the Target

Cohere explicitly named finance, healthcare, and public sector as the target markets for an obvious reason: these sectors face the same structural problem. The data they work with is tightly regulated and cannot leave controlled environments, but the intelligence required to use that data productively needs to be enterprise-grade.

The [Government of Canada's own guidance](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html) on generative AI makes this plain. Federal institutions are advised not to enter protected or sensitive information into publicly accessible AI tools, and to ensure AI infrastructure matches the security classification of the information it handles. That standard rules out most cloud-deployed large language models for anything that touches protected data.

On-premise deployment is not a workaround. For a significant class of workloads in regulated industries, it is the only viable architecture.

## The Canadian Angle

Cohere was founded in Toronto and continues to be one of Canada's most prominent AI companies. They have been at the center of Canada's AI sector, which has been of national focus lately. Canada, and Toronto in particular, has been home to many of the worlds top AI researchers and academics. Cohere's North platform and this NVIDIA partnership extend a story the company has been building for years: enterprise AI that does not require handing your data to a third-party cloud.

Cohere describes the approach as treating "security as a strategic necessity." For the sectors they are targeting, that framing is not marketing copy. It is the condition of entry.
