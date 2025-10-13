# Introduction | <mark>介绍</mark>

## Preface | <mark>前言</mark>

Welcome to "Agentic Design Patterns: A Hands-On Guide to Building Intelligent Systems." As we look across the landscape of modern artificial intelligence, we see a clear evolution from simple, reactive programs to sophisticated, autonomous entities capable of understanding context, making decisions, and interacting dynamically with their environment and other systems. These are the intelligent agents and the agentic systems they comprise.

<mark>欢迎阅读《智能体设计模式：构建智能系统的实战指南》。纵观当今人工智能领域，我们能清晰地看到一条演进路线：从简单的响应式程序，到复杂的自主实体，后者能够理解上下文、做出决策，并与所处环境及其他系统进行动态交互。这些，便是智能体以及由它们构成的智能体系统。</mark>

The advent of powerful large language models (LLMs) has provided unprecedented capabilities for understanding and generating human-like content such as text and media, serving as the cognitive engine for many of these agents. However, orchestrating these capabilities into systems that can reliably achieve complex goals requires more than just a powerful model. It requires structure, design, and a thoughtful approach to how the agent perceives, plans, acts, and interacts.

<mark>强大的大语言模型的问世，为理解和生成类人内容（如文本和媒体）提供了前所未有的能力，并担当了许多这类智能体的认知引擎。然而，要将这些能力编排成能够可靠达成复杂目标的系统，仅仅拥有一个强大的模型是远远不够的。它还需要结构、设计，以及一套经过深思熟虑的方法，来指导智能体如何感知、规划、行动和交互。</mark>

Think of building intelligent systems as creating a complex work of art or engineering on a canvas. This canvas isn't a blank visual space, but rather the underlying infrastructure and frameworks that provide the environment and tools for your agents to exist and operate. It's the foundation upon which you'll build your intelligent application, managing state, communication, tool access, and the flow of logic.

<mark>不妨将构建智能系统想象成在一块画布上创作复杂的艺术品或工程作品。这块画布并非一块空白的视觉空间，而是指那些为智能体提供生存和操作环境的底层技术设施和框架。它是您构建智能应用所依赖的基石，负责管理状态、通信、工具访问和逻辑流。</mark>

Building effectively on this agentic canvas demands more than just throwing components together. It requires understanding proven techniques – **patterns** – that address common challenges in designing and implementing agent behavior. Just as architectural patterns guide the construction of a building, or design patterns structure software, agentic design patterns provide reusable solutions for the recurring problems you'll face when bringing intelligent agents to life on your chosen canvas.

<mark>想在这块智能体的画布上高效构建，简单地堆砌组件是远远不够的。我们需要掌握一套行之有效的技术，也就是<strong>模式</strong>。这些模式，是专门为了解决智能体设计与实现过程中的常见挑战而存在的。这就像建筑有建筑模式，软件有设计模式一样。最终，智能体设计模式的作用，就是为那些反复出现的老问题提供一套经过验证、可复用的解决方案，帮助你将智能体成功地构建出来。</mark>

---

## What are Agentic Systems? | <mark>什么是智能体系统？</mark>

At its core, an agentic system is a computational entity designed to perceive its environment (both digital and potentially physical), make informed decisions based on those perceptions and a set of predefined or learned goals, and execute actions to achieve those goals autonomously. Unlike traditional software, which follows rigid, step-by-step instructions, agents exhibit a degree of flexibility and initiative.

<mark>从本质上讲，智能体系统是一种计算实体，它能够感知环境（包括数字环境和可能的物理环境），根据感知结果以及预设或学习到的目标做出决策，并自主执行行动以实现目标。与遵循严格逐步指令的传统软件不同，智能体展现出一定的灵活性和主动性。</mark>

Imagine you need a system to manage customer inquiries. A traditional system might follow a fixed script. An agentic system, however, could perceive the nuances of a customer's query, access knowledge bases, interact with other internal systems (like order management), potentially ask clarifying questions, and proactively resolve the issue, perhaps even anticipating future needs. These agents operate on the canvas of your application's infrastructure, utilizing the services and data available to them.

<mark>想象一下，你需要一个系统来管理客户咨询。传统系统可能会遵循固定的脚本。而一个智能体系统则能够感知客户提问的细微差别，访问知识库，与公司其他内部系统（如订单管理系统）交互，还可能提出澄清性问题，并主动解决问题，甚至可能预测客户未来的需求。这些智能体就在您应用程序基础设施这块画布上运行，利用提供给它们的服务和数据。</mark>

Agentic systems are often characterized by features like **autonomy**, allowing them to act without constant human oversight; **proactiveness**, initiating actions towards their goals; and **reactiveness**, responding effectively to changes in their environment. They are fundamentally **goal-oriented**, constantly working towards objectives. A critical capability is **tool use**, enabling them to interact with external APIs, databases, or services – effectively reaching out beyond their immediate canvas. They possess **memory**, retain information across interactions, and can engage in **communication** with users, other systems, or even other agents operating on the same or connected canvases.

<mark>智能体系统通常具备以下特征：<strong>自主性（Autonomy）</strong>，使其无需持续的人工监督即可行动；<strong>主动性（Proactiveness）</strong>，能主动发起行动以实现其目标；<strong>反应性（Reactiveness）</strong>，能有效应对环境变化。它们以<strong>目标</strong>为导向，持续推进任务。关键能力还包括<strong>工具使用（Tool Use）</strong>，使之能够与外部 API、数据库或服务交互，将触角伸出自身运行环境；它们拥有<strong>记忆（Memory）</strong>，能在多次交互中保留信息，并能与用户、其他系统、乃至在相同或互联的画布上运行的其他智能体进行<strong>通信（Communication）</strong>。</mark>

Effectively realizing these characteristics introduces significant complexity. How does the agent maintain state across multiple steps on its canvas? How does it decide *when* and *how* to use a tool? How is communication between different agents managed? How do you build resilience into the system to handle unexpected outcomes or errors?

<mark>要有效地实现这些特性，会带来巨大的复杂性。智能体如何在它的画布上跨越多个步骤来维持状态？它如何决定何时以及如何使用某个工具？不同智能体之间的通信如何管理？你又该如何在系统中确保可靠性，以处理意外结果或错误？</mark>

---

## Why Patterns Matter in Agent Development | <mark>为什么模式在智能体开发中很重要</mark>

This complexity is precisely why agentic design patterns are indispensable. They are not rigid rules, but rather battle-tested templates or blueprints that offer proven approaches to standard design and implementation challenges in the agentic domain. By recognizing and applying these design patterns, you gain access to solutions that enhance the structure, maintainability, reliability, and efficiency of the agents you build on your canvas.

<mark>这种复杂性，恰恰凸显了智能体设计模式的不可或缺。它们并非僵化的规则，而是久经沙场的模板或蓝图，为智能体领域中标准的设计和实现挑战提供了经过验证的方法。通过识别并应用这些设计模式，你将获得一套成熟的解决方案，从而提升你在画布上所构建智能体的结构性、可维护性、可靠性和效率。</mark>

Using design patterns helps you avoid reinventing fundamental solutions for tasks like managing conversational flow, integrating external capabilities, or coordinating multiple agent actions. They provide a common language and structure that makes your agent's logic clearer and easier for others (and yourself in the future) to understand and maintain. Implementing patterns designed for error handling or state management directly contributes to building more robust and reliable systems. Leveraging these established approaches accelerates your development process, allowing you to focus on the unique aspects of your application rather than the foundational mechanics of agent behavior.

<mark>使用设计模式可以帮助你避免为管理对话流、集成外部能力或协调多智能体行动等任务「重新发明轮子」。它们提供了一种通用语言和结构，使你的智能体逻辑更清晰，也便于他人（以及未来的你自己）理解和维护。应用专为错误处理或状态管理而设计的模式，能直接帮助你构建更具鲁棒性、更可靠的系统。利用这些成熟的方法可以加速你的开发进程，让你能专注于应用程序的独有之处，而不是智能体行为的基础机制。</mark>

This book extracts 21 key design patterns that represent fundamental building blocks and techniques for constructing sophisticated agents on various technical canvases. Understanding and applying these patterns will significantly elevate your ability to design and implement intelligent systems effectively.

<mark>本书提炼出 21 个关键设计模式，它们代表了在各种技术画布上构建复杂智能体的基本构建模块和技术。理解并应用这些模式，将极大提升你有效设计和实现智能系统的能力。</mark>

---

## Overview of the Book and How to Use It | <mark>本书概览与使用指南</mark>

This book, "Agentic Design Patterns: A Hands-On Guide to Building Intelligent Systems," is crafted to be a practical and accessible resource. Its primary focus is on clearly explaining each agentic pattern and providing concrete, runnable code examples to demonstrate its implementation. Across 21 dedicated chapters, we will explore a diverse range of design patterns, from foundational concepts like structuring sequential operations (Prompt Chaining) and external interaction (Tool Use) to more advanced topics like collaborative work (Multi-Agent Collaboration) and self-improvement (Self-Correction).

<mark>本书《智能体设计模式：构建智能系统的实战指南》旨在成为一本实用且易于上手的资源。其核心重点在于清晰地解释每一种智能体模式，并提供具体、可运行的代码示例来演示其实现。全书用 21 个专章覆盖多种设计模式：从结构化顺序操作（提示链）、外部交互（工具使用）等基础概念，到协同工作（多智能体协作）、自我改进（反思）等进阶主题。</mark>

The book is organized chapter by chapter, with each chapter delving into a single agentic pattern. Within each chapter, you will find:

<mark>本书按章节组织，每章聚焦一种智能体模式。在每一章中，你都会看到：</mark>

- A detailed **Pattern Overview** providing a clear explanation of the pattern and its role in agentic design.

- <mark>详细的<strong>模式概述</strong>，清晰解释模式及其在智能体设计中的作用。</mark>

- A section on **Practical Applications & Use Cases** illustrating real-world scenarios where the pattern is invaluable and the benefits it brings.

- <mark><strong>实际应用和用例</strong>部分，说明模式发挥重要作用的实际场景及其带来的好处。</mark>

- A **Hands-On Code Example** offering practical, runnable code that demonstrates the pattern's implementation using prominent agent development frameworks. This is where you'll see how to apply the pattern within the context of a technical canvas.

- <mark><strong>实践代码示例</strong>：提供实用的、可运行的代码，演示如何使用主流的智能体开发框架来实现该模式。在这里，你将看到如何在一个技术框架下应用该模式。</mark>

- **Key Takeaways** summarizing the most crucial points for quick review.

- <mark><strong>核心要点</strong>，总结最关键的内容以便快速回顾。</mark>

- **References** for further exploration, providing resources for deeper learning on the pattern and related concepts.

- <mark><strong>参考资料</strong>，提供用于进一步探索的资源，帮助你更深入地学习该模式及相关概念。</mark>

While the chapters are ordered to build concepts progressively, feel free to use the book as a reference, jumping to chapters that address specific challenges you face in your own agent development projects. The appendices provide a comprehensive look at advanced prompting techniques, principles for applying AI agents in real-world environments, and an overview of essential agentic frameworks. To complement this, practical online-only tutorials are included, offering step-by-step guidance on building agents with specific platforms like AgentSpace and for the command-line interface. The emphasis throughout is on practical application; we strongly encourage you to run the code examples, experiment with them, and adapt them to build your own intelligent systems on your chosen canvas.

<mark>虽然各章节的排序是为了循序渐进地构建概念，但你完全可以将本书作为参考手册，直接跳转到那些能解决你在智能体开发项目中遇到的特定挑战的章节。附录部分全面介绍了高级提示技术、在真实环境中应用 AI 智能体的原则，以及主流智能体框架的概览。作为补充，我们还提供了仅在线上发布的实战教程，逐步指导你如何使用 AgentSpace 等特定平台以及在命令行界面中构建智能体。全书自始至终都强调实际应用；我们强烈鼓励你运行代码示例，动手实验，并将其改造应用于在你选择的画布上构建你自己的智能系统。</mark>

A great question I hear is, 'With AI changing so fast, why write a book that could be quickly outdated?' My motivation was actually the opposite. It's precisely because things are moving so quickly that we need to step back and identify the underlying principles that are solidifying. Patterns like RAG, Reflection, Routing, Memory and the others I discuss, are becoming fundamental building blocks. This book is an invitation to reflect on these core ideas, which provide the foundation we need to build upon. Humans need these reflection moments on foundation patterns.

<mark>我常被问到：「AI 日新月异，为何还要写一本可能很快过时的书？」我的动机恰恰相反：正是因为一切变化太快，我们才更需要退后一步，去识别那些正在固化成型的底层原则。诸如 RAG、反思、路由、记忆等模式，正在成为基本的构建模块。本书正是一份邀请，旨在引导大家一同审视这些核心思想，它们为我们未来的构建工作提供了必要的基础。我们正需要这样的时刻，来深入思考这些奠基性的模式。</mark>

---

## Introduction to the Frameworks Used | <mark>本书使用的框架介绍</mark>

To provide a tangible "canvas" for our code examples (see also Appendix), we will primarily utilize three prominent agent development frameworks. **LangChain**, along with its stateful extension **LangGraph**, provides a flexible way to chain together language models and other components, offering a robust canvas for building complex sequences and graphs of operations. **Crew AI** provides a structured framework specifically designed for orchestrating multiple AI agents, roles, and tasks, acting as a canvas particularly well-suited for collaborative agent systems. The **Google Agent Developer Kit (Google ADK)** offers tools and components for building, evaluating, and deploying agents, providing another valuable canvas, often integrated with Google's AI infrastructure.

<mark>为了给代码示例提供具体的「画布」（亦可参阅附录），本书主要采用三个主流的智能体开发框架。<strong>LangChain</strong> 及其有状态扩展 <strong>LangGraph</strong>，提供了一种灵活的方式来将语言模型和其他组件链接在一起，为构建复杂的操作序列和图谱提供了一个鲁棒的画布；<strong>Crew AI</strong> 提供了一个专为编排多个 AI 智能体、角色和任务而设计的结构化框架，它扮演的画布角色尤其适合协作型智能体系统；<strong>谷歌智能体开发者套件（Google ADK）</strong> 则提供了用于构建、评估和部署智能体的工具与组件，这是另一块极具价值的画布，通常与谷歌的 AI 基础设施集成。</mark>

These frameworks represent different facets of the agent development canvas, each with its strengths. By showing examples across these tools, you will gain a broader understanding of how the patterns can be applied regardless of the specific technical environment you choose for your agentic systems. The examples are designed to clearly illustrate the pattern's core logic and its implementation on the framework's canvas, focusing on clarity and practicality.

<mark>这些框架代表了智能体开发画布的不同侧面，各有其长处。通过展示跨越这些工具的示例，你将更广泛地理解，无论你为自己的智能体系统选择哪种具体的技术环境，这些模式都可以被应用。这些示例旨在清晰地阐明模式的核心逻辑及其在相应框架画布上的实现，重点突出清晰性和实用性。</mark>

By the end of this book, you will not only understand the fundamental concepts behind 21 essential agentic patterns but also possess the practical knowledge and code examples to apply them effectively, enabling you to build more intelligent, capable, and autonomous systems on your chosen development canvas. Let's begin this hands-on journey!

<mark>在读完本书时，你不仅将理解 21 种关键智能体设计模式的基本理念，还将收获足以落地的实践知识与代码示例，助你在所选「画布」上高效应用这些模式，构建更智能、更强大、更具自主性的系统。让我们开始这段动手实践之旅吧！</mark>

---
