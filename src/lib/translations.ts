export type Lang = "en" | "pt";

const t = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      work: "Work",
      process: "Process",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      tag: "Creative Project Manager & UX Researcher",
      h1_1: "Where",
      h1_accent1: "Strategy",
      h1_2: "Meets",
      h1_accent2: "Craft.",
      sub: "I help businesses turn complex ideas into clear, well-executed projects — bridging strategy, design thinking, and human-centered research.",
      cta1: "Work with me",
      cta2: "See my work",
      scroll: "Scroll",
    },
    about: {
      label: "About Me",
      quote:
        "I don't just manage projects — I shape how teams create, think, and deliver.",
      quoteAccent1: "teams create",
      quoteAccent2: "think",
      quoteAccent3: "deliver",
      stat1_value: "4+",
      stat1_label: "Years of Experience",
      stat2_value: "15+",
      stat2_label: "Projects Delivered",
      stat3_value: "3",
      stat3_label: "Continents Served",
      p1: "I'm a Creative Project Manager and UX Researcher who thrives at the intersection of structure and creativity. My work lives in the space between a messy idea and a polished, functional outcome.",
      p2: "Whether I'm orchestrating a complex product launch, mapping user journeys in Figma, or designing workflows in Miro, I bring the same energy: clear thinking, genuine curiosity, and an obsession with making things work beautifully.",
      p3: "I've partnered with startups, agencies, and established teams — always as the person who connects the dots between what the client needs, what the team can build, and what users actually want.",
    },
    services: {
      label: "Services",
      title: "How I Can Help",
      subtitle:
        "Four disciplines, one goal: projects that deliver results and experiences that resonate.",
      items: [
        {
          number: "01",
          title: "Creative Project Manager",
          description:
            "From kickoff to delivery, I keep projects moving with clarity and intention — managing tools, teams, and clients so you can focus on what you do best.",
          bullets: [
            "Project management using Jira, Trello & Notion",
            "Client communication & stakeholder management",
            "AI-powered project workflows",
          ],
        },
        {
          number: "02",
          title: "Project & Product Development Ops",
          description:
            "I build the systems and processes that make teams efficient and products predictable — from cost control to KPI dashboards.",
          bullets: [
            "Cost planning & budget management",
            "KPI collection, analysis & team performance",
            "Operations & workflow design in Miro",
          ],
        },
        {
          number: "03",
          title: "Team Management",
          description:
            "I keep teams aligned, motivated, and moving forward — ensuring deadlines are met without burning people out.",
          bullets: [
            "Daily communication & deadline oversight",
            "Team allocation on concurrent projects",
            "Workload balancing & sprint planning",
          ],
        },
        {
          number: "04",
          title: "UX Researcher",
          description:
            "I dig deep into user behavior through research and translate findings into prototypes and design decisions that actually work.",
          bullets: [
            "Interactive prototypes in Figma",
            "UX benchmarking & competitor analysis",
            "User interviews, surveys & exploratory data analysis",
            "User personas & journey mapping",
          ],
        },
      ],
    },
    experience: {
      label: "Experience",
      title1: "Turning Ideas Into",
      title2: "Real Outcomes",
      p1: "My background spans product development, creative operations, and UX research — working with international teams, startups, and agencies across multiple industries.",
      p2: "I bring both the strategic clarity to define what needs to happen and the operational discipline to make sure it does.",
      cta: "Download Full CV",
      cta_aria: "Download full CV (PDF)",
      items: [
        {
          period: "2023 — Present",
          role: "Creative Project Manager",
          org: "Freelance & Upwork",
          note: "International clients · Remote",
        },
        {
          period: "2022 — 2023",
          role: "UX Researcher & Product Ops",
          org: "Project Ingrador",
          note: "University research project · Figma & Miro",
        },
        {
          period: "2021 — 2022",
          role: "Project & Operations Analyst",
          org: "Cortinas Project",
          note: "End-to-end execution · Workflow design",
        },
      ],
    },
    portfolio: {
      label: "Mini Portfolio",
      title: "Selected Work",
      subtitle:
        "A curated set of projects — each one a different challenge, the same commitment to quality.",
      items: [
        {
          id: "01",
          title: "The Clarity Ebook",
          type: "Content & Design Strategy",
          description:
            "A structured ebook project — from content architecture to visual design direction. Full end-to-end creative project management.",
          tags: ["Content Strategy", "Design", "Project Management"],
        },
        {
          id: "02",
          title: "Ingrador — University Project",
          type: "UX Research & Prototype",
          description:
            "Comprehensive UX research: user interviews, persona mapping, journey design, and interactive Figma prototype for a university product.",
          tags: ["UX Research", "Figma", "Prototyping"],
        },
        {
          id: "03",
          title: "Competitor Analysis Case Study",
          type: "UX Benchmarking",
          description:
            "Deep-dive benchmarking and competitor UX analysis — identifying opportunities, design patterns, and actionable recommendations.",
          tags: ["UX Analysis", "Research", "Strategy"],
        },
        {
          id: "04",
          title: "Cortinas Project",
          type: "Operations & Execution",
          description:
            "Full project management and execution — visual workflow in Miro, team coordination, and final delivery oversight.",
          tags: ["Miro", "Operations", "Workflow Design"],
        },
      ],
    },
    process: {
      label: "How It Works",
      title1: "From First Contact",
      title2: "to First Delivery",
      subtitle:
        "Hiring a project manager should feel as well-managed as the projects I run. Here's exactly what happens when you reach out.",
      cta: "Start the process →",
      steps: [
        {
          number: "01",
          title: "I Review Your Site & CV",
          description:
            "Before anything else, I take time to understand your business, brand, and goals. I review your existing materials so our first conversation is already informed and relevant.",
        },
        {
          number: "02",
          title: "Initial Email",
          description:
            "I reach out with a personalized message — telling you what I noticed about your business, how I see I can help, and what working together could look like.",
        },
        {
          number: "03",
          title: "1:1 Discovery Call",
          description:
            "We meet — no pitch, just a real conversation. I learn about your challenges, your team, and your vision. You get to ask me anything. We figure out together if it's a good match.",
        },
        {
          number: "04",
          title: "Proposal & Contract",
          description:
            "I send a clear, tailored proposal with scope, timeline, and investment. Once we align, the contract is signed and we get to work.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title1: "Let's Build Something",
      title2: "Worth Remembering.",
      subtitle:
        "Whether you have a clear project or just a challenge that needs solving — I'd love to hear from you.",
      cta: "Send me a message",
      footer: "© 2025 Ana. Designed with intention.",
      links: [
        { label: "Email", value: "ana@email.com" },
        { label: "LinkedIn", value: "linkedin.com/in/ana" },
        { label: "Upwork", value: "upwork.com/fl/ana" },
      ],
    },
    floating: "Let's work together",
  },

  pt: {
    nav: {
      about: "Sobre",
      services: "Serviços",
      work: "Portfólio",
      process: "Processo",
      contact: "Contato",
      cta: "Vamos Conversar",
    },
    hero: {
      tag: "Creative Project Manager & UX Researcher",
      h1_1: "Onde",
      h1_accent1: "Estratégia",
      h1_2: "Encontra",
      h1_accent2: "Criatividade.",
      sub: "Ajudo empresas a transformar ideias complexas em projetos claros e bem executados — conectando estratégia, design thinking e pesquisa centrada no usuário.",
      cta1: "Trabalhe comigo",
      cta2: "Ver meu trabalho",
      scroll: "Rolar",
    },
    about: {
      label: "Sobre Mim",
      quote:
        "Não apenas gerencio projetos — eu moldo como times criam, pensam e entregam.",
      quoteAccent1: "times criam",
      quoteAccent2: "pensam",
      quoteAccent3: "entregam",
      stat1_value: "4+",
      stat1_label: "Anos de Experiência",
      stat2_value: "15+",
      stat2_label: "Projetos Entregues",
      stat3_value: "3",
      stat3_label: "Continentes Atendidos",
      p1: "Sou Creative Project Manager e UX Researcher, e me sinto em casa na interseção entre estrutura e criatividade. Meu trabalho vive no espaço entre uma ideia bagunçada e um resultado polido e funcional.",
      p2: "Seja orquestrando um lançamento de produto, mapeando jornadas de usuário no Figma ou desenhando fluxos de trabalho no Miro, eu trago a mesma energia: pensamento claro, curiosidade genuína e uma obsessão por fazer as coisas funcionarem de forma bonita.",
      p3: "Já trabalhei com startups, agências e times consolidados — sempre como a pessoa que conecta o que o cliente precisa, o que o time consegue construir e o que os usuários realmente querem.",
    },
    services: {
      label: "Serviços",
      title: "Como Posso Ajudar",
      subtitle:
        "Quatro disciplinas, um objetivo: projetos que entregam resultados e experiências que ficam na memória.",
      items: [
        {
          number: "01",
          title: "Gestão Criativa de Projetos",
          description:
            "Do kickoff à entrega, mantenho os projetos em movimento com clareza e intenção — gerenciando ferramentas, times e clientes para você focar no que faz de melhor.",
          bullets: [
            "Gestão com Jira, Trello & Notion",
            "Comunicação com clientes e stakeholders",
            "Fluxos de trabalho com IA",
          ],
        },
        {
          number: "02",
          title: "Operações de Produto e Desenvolvimento",
          description:
            "Construo os sistemas e processos que tornam times eficientes e produtos previsíveis — do controle de custos aos dashboards de KPI.",
          bullets: [
            "Planejamento de custos e orçamento",
            "Coleta e análise de KPIs e performance",
            "Design de operações e fluxos no Miro",
          ],
        },
        {
          number: "03",
          title: "Gestão de Equipes",
          description:
            "Mantenho os times alinhados, motivados e em movimento — garantindo que os prazos sejam cumpridos sem sobrecarregar as pessoas.",
          bullets: [
            "Comunicação diária e acompanhamento de prazos",
            "Alocação de time em projetos simultâneos",
            "Equilíbrio de carga de trabalho e sprints",
          ],
        },
        {
          number: "04",
          title: "Pesquisa de UX",
          description:
            "Mergulho fundo no comportamento dos usuários por meio de pesquisa e transformo achados em protótipos e decisões de design que realmente funcionam.",
          bullets: [
            "Protótipos interativos no Figma",
            "Benchmarking de UX e análise de concorrentes",
            "Entrevistas, surveys e análise exploratória de dados",
            "Personas e mapeamento de jornada do usuário",
          ],
        },
      ],
    },
    experience: {
      label: "Experiência",
      title1: "Transformando Ideias em",
      title2: "Resultados Reais",
      p1: "Minha trajetória abrange desenvolvimento de produto, operações criativas e pesquisa de UX — trabalhando com times internacionais, startups e agências em múltiplos segmentos.",
      p2: "Trago tanto a clareza estratégica para definir o que precisa acontecer quanto a disciplina operacional para garantir que aconteça.",
      cta: "Baixar Currículo Completo",
      cta_aria: "Baixar currículo completo (PDF)",
      items: [
        {
          period: "2023 — Atual",
          role: "Creative Project Manager",
          org: "Freelance & Upwork",
          note: "Clientes internacionais · Remoto",
        },
        {
          period: "2022 — 2023",
          role: "UX Researcher & Operações de Produto",
          org: "Projeto Ingrador",
          note: "Projeto de pesquisa universitária · Figma & Miro",
        },
        {
          period: "2021 — 2022",
          role: "Analista de Projetos e Operações",
          org: "Projeto Cortinas",
          note: "Execução completa · Design de fluxo",
        },
      ],
    },
    portfolio: {
      label: "Mini Portfólio",
      title: "Trabalhos Selecionados",
      subtitle:
        "Uma seleção de projetos — cada um com seu desafio único, o mesmo compromisso com a qualidade.",
      items: [
        {
          id: "01",
          title: "The Clarity Ebook",
          type: "Estratégia de Conteúdo e Design",
          description:
            "Projeto de ebook do início ao fim — da arquitetura de conteúdo à direção visual. Gestão criativa completa do projeto.",
          tags: ["Estratégia de Conteúdo", "Design", "Gestão de Projetos"],
        },
        {
          id: "02",
          title: "Ingrador — Projeto Universitário",
          type: "Pesquisa de UX & Protótipo",
          description:
            "Pesquisa de UX completa: entrevistas com usuários, mapeamento de personas, design de jornada e protótipo interativo no Figma.",
          tags: ["Pesquisa de UX", "Figma", "Prototipação"],
        },
        {
          id: "03",
          title: "Caso de Estudo — Análise de Concorrentes",
          type: "Benchmarking de UX",
          description:
            "Análise aprofundada de UX dos concorrentes — identificando oportunidades, padrões de design e recomendações acionáveis.",
          tags: ["Análise de UX", "Pesquisa", "Estratégia"],
        },
        {
          id: "04",
          title: "Projeto Cortinas",
          type: "Operações e Execução",
          description:
            "Gestão e execução completa do projeto — organização visual no Miro, coordenação do time e acompanhamento da entrega final.",
          tags: ["Miro", "Operações", "Design de Fluxo"],
        },
      ],
    },
    process: {
      label: "Como Funciona",
      title1: "Do Primeiro Contato",
      title2: "à Primeira Entrega",
      subtitle:
        "Contratar uma project manager deve ser tão bem gerenciado quanto os projetos que eu conduzo. Veja exatamente o que acontece quando você entra em contato.",
      cta: "Iniciar o processo →",
      steps: [
        {
          number: "01",
          title: "Analiso Seu Site e Currículo",
          description:
            "Antes de tudo, dedico tempo para entender seu negócio, marca e objetivos. Analiso seus materiais existentes para que nossa primeira conversa já seja informada e relevante.",
        },
        {
          number: "02",
          title: "Contato Inicial por E-mail",
          description:
            "Entro em contato com uma mensagem personalizada — falando sobre o que observei no seu negócio, como posso ajudar e como seria trabalharmos juntos.",
        },
        {
          number: "03",
          title: "Call 1:1 de Discovery",
          description:
            "Nos encontramos — sem pitch, apenas uma conversa real. Entendo seus desafios, seu time e sua visão. Você pode me perguntar qualquer coisa. Juntos descobrimos se faz sentido trabalharmos juntos.",
        },
        {
          number: "04",
          title: "Proposta e Contrato",
          description:
            "Envio uma proposta clara e personalizada com escopo, prazo e investimento. Com alinhamento, assinamos o contrato e colocamos o projeto para rodar.",
        },
      ],
    },
    contact: {
      label: "Contato",
      title1: "Vamos Criar Algo",
      title2: "Que Valha a Pena.",
      subtitle:
        "Seja com um projeto definido ou apenas um desafio para resolver — adoraria ouvir você.",
      cta: "Me manda uma mensagem",
      footer: "© 2025 Ana. Projetado com intenção.",
      links: [
        { label: "E-mail", value: "ana@email.com" },
        { label: "LinkedIn", value: "linkedin.com/in/ana" },
        { label: "Upwork", value: "upwork.com/fl/ana" },
      ],
    },
    floating: "Vamos trabalhar juntos",
  },
} as const;

export default t;
