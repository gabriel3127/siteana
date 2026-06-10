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
      h1_accent2: "Creativity.",
      sub: "I help businesses turn ideas into clear, well-executed projects — bridging strategy, design thinking, and human-centered research.",
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
      stat1_value: "3×",
      stat1_label: "Work & Travel USA",
      stat2_value: "2+",
      stat2_label: "Years of Internships",
      stat3_value: "3",
      stat3_label: "Continents Connected",
      p1: "I'm the kind of person who turns almost everything into a project. Whether it's learning a new skill, planning a trip, redesigning a space, or picking up a creative hobby — I love the process of exploring an idea and bringing it to life.",
      p2: "Traveling has always been one of my biggest passions. Through three Work & Travel seasons in the United States, I had the opportunity to live, work, and connect with people from all over the world — which expanded my perspective and sparked my interest in international and multicultural projects.",
      p3: "What motivates me most is working on things that have a positive impact on people. I genuinely enjoy helping others — whether that's supporting a team, sharing knowledge, solving a problem, or simply being there when someone needs a hand.",
    },
    services: {
      label: "Services",
      title: "How I Can Help",
      subtitle:
        "Five disciplines, one goal: projects that deliver results and experiences that resonate.",
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
        {
          number: "05",
          title: "Executive Assistant",
          description:
            "Behind every high-performing executive is someone keeping everything organized, on time, and running smoothly. That's where I come in.",
          bullets: [
            "Task management & meeting scheduling",
            "Email management & general research",
            "Travel planning & Pinterest board curation",
          ],
        },
      ],
    },
    experience: {
      label: "Experience",
      title1: "Turning Ideas Into",
      title2: "Real Outcomes",
      p1: "My background combines project management, UX research, and digital product development. Through projects, international experiences, and creative initiatives, I've developed a passion for helping ideas move from concept to execution.",
      p2: "I bring both the strategic clarity to define what needs to happen and the operational discipline to make sure it does.",
      cta: "Download Full CV",
      cta_aria: "Download full CV (PDF)",
      items: [
        {
          period: "Apr 2025 — Dec 2025",
          role: "Project Management Intern",
          org: "Eldorado Research Institute",
          note: "Agile · Jira · Confluence · Hybrid",
        },
        {
          period: "Jan 2023 — Nov 2023",
          role: "UX/UI Design Intern",
          org: "Eldorado Research Institute",
          note: "Figma · UX Research · Remote",
        },
        {
          period: "Seasonal 2023 — 2026",
          role: "Customer Experience Assistant",
          org: "Snowshoe Mountain Resort, USA",
          note: "Work & Travel · Multicultural teams · On-site",
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
          title: "Let's Learn Brazilian",
          type: "Content & Design",
          description:
            "Beginner-friendly eBook focused on teaching Brazilian Portuguese through real-life travel and everyday communication scenarios.",
          tags: ["Canva", "Content Strategy", "Design"],
          link: "https://www.canva.com/design/DAGqjwnUcBA/Aok0NiPjVnAVUumEmdgJBA/view",
        },
        {
          id: "02",
          title: "Track+ — Dispatch Tracking System",
          type: "UX / Product Design",
          description:
            "End-to-end traceability and dispatch management system for a food production company, developed as a college integrative project.",
          tags: ["Miro", "UX Research", "Product Design"],
          link: "https://miro.com/app/board/uXjVJTcNvqI=/?share_link_id=47377602962",
        },
        {
          id: "03",
          title: "Competitor Analysis Case Study",
          type: "UX Benchmarking",
          description:
            "Deep-dive benchmarking and competitor UX analysis — identifying opportunities, design patterns, and actionable recommendations.",
          tags: ["UX Analysis", "Research", "Strategy"],
          link: "",
        },
        {
          id: "04",
          title: "Cortinas Project",
          type: "Operations & Execution",
          description:
            "Full project management and execution — visual workflow in Miro, team coordination, and final delivery oversight.",
          tags: ["Miro", "Operations", "Workflow Design"],
          link: "",
        },
      ],
    },
    process: {
      label: "How It Works",
      title1: "From First Contact",
      title2: "to First Delivery",
      subtitle:
        "Whether you already have a clear plan or are still figuring things out — here's how we get started.",
      cta: "Send me a message →",
      steps: [
        {
          number: "01",
          title: "Let's Connect",
          description:
            "Send me a message and tell me a little about your project, idea, or challenge. This is our first opportunity to explore how I can support you.",
        },
        {
          number: "02",
          title: "Discovery Call",
          description:
            "We'll schedule a conversation to get to know each other, dive deeper into your goals, and discuss the best approach for your project.",
        },
        {
          number: "03",
          title: "Proposal & Planning",
          description:
            "Based on our conversation, I'll put together a tailored proposal outlining the scope, timeline, and next steps.",
        },
        {
          number: "04",
          title: "Let's Build It",
          description:
            "With everything aligned, it's time to turn ideas into action. I prioritize clear communication, collaboration, and transparency throughout.",
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
      footer: "© 2025 Ana Luisa. Designed with intention.",
      links: [
        { label: "Email", value: "ana.malmeida08@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/ana-luisa-mota-almeida" },
        { label: "Upwork", value: "View my Upwork Profile" },
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
      sub: "Ajudo empresas a transformar ideias em projetos claros e bem executados — conectando estratégia, design thinking e pesquisa centrada no usuário.",
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
      stat1_value: "3×",
      stat1_label: "Work & Travel EUA",
      stat2_value: "2+",
      stat2_label: "Anos de Estágio",
      stat3_value: "3",
      stat3_label: "Continentes Conectados",
      p1: "Sou o tipo de pessoa que transforma quase tudo em projeto. Seja aprender uma nova habilidade, planejar uma viagem, redesenhar um espaço ou começar um hobby criativo — adoro o processo de explorar uma ideia e fazer ela ganhar vida.",
      p2: "Viajar sempre foi uma das minhas maiores paixões. Através de três temporadas de Work & Travel nos Estados Unidos, tive a oportunidade de viver, trabalhar e me conectar com pessoas do mundo inteiro — o que ampliou minha perspectiva e despertou meu interesse em projetos internacionais e multiculturais.",
      p3: "O que mais me motiva é trabalhar em projetos que gerem impacto positivo nas pessoas. Gosto genuinamente de ajudar — seja apoiando um time, compartilhando conhecimento, resolvendo um problema ou simplesmente estando presente quando alguém precisa.",
    },
    services: {
      label: "Serviços",
      title: "Como Posso Ajudar",
      subtitle:
        "Cinco disciplinas, um objetivo: projetos que entregam resultados e experiências que ficam na memória.",
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
        {
          number: "05",
          title: "Assistente Executiva",
          description:
            "Por trás de todo executivo de alta performance há alguém mantendo tudo organizado, no prazo e funcionando sem atritos. É aí que entro.",
          bullets: [
            "Gestão de tarefas e agendamento de reuniões",
            "Gestão de e-mails e pesquisas gerais",
            "Planejamento de viagens & curadoria de Pinterest",
          ],
        },
      ],
    },
    experience: {
      label: "Experiência",
      title1: "Transformando Ideias em",
      title2: "Resultados Reais",
      p1: "Minha trajetória combina gestão de projetos, pesquisa de UX e desenvolvimento de produtos digitais. Por meio de projetos, experiências internacionais e iniciativas criativas, desenvolvi uma paixão por ajudar ideias a saírem do conceito e virarem realidade.",
      p2: "Trago tanto a clareza estratégica para definir o que precisa acontecer quanto a disciplina operacional para garantir que aconteça.",
      cta: "Baixar Currículo Completo",
      cta_aria: "Baixar currículo completo (PDF)",
      items: [
        {
          period: "Abr 2025 — Dez 2025",
          role: "Estagiária de Gestão de Projetos",
          org: "Instituto de Pesquisas Eldorado",
          note: "Ágil · Jira · Confluence · Híbrido",
        },
        {
          period: "Jan 2023 — Nov 2023",
          role: "Estagiária de UX/UI Design",
          org: "Instituto de Pesquisas Eldorado",
          note: "Figma · Pesquisa de UX · Remoto",
        },
        {
          period: "Temporadas 2023 — 2026",
          role: "Assistente de Experiência do Cliente",
          org: "Snowshoe Mountain Resort, EUA",
          note: "Work & Travel · Times multiculturais · Presencial",
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
          title: "Let's Learn Brazilian",
          type: "Conteúdo & Design",
          description:
            "eBook para iniciantes focado em ensinar português brasileiro por meio de situações reais de viagem e comunicação do cotidiano.",
          tags: ["Canva", "Estratégia de Conteúdo", "Design"],
          link: "https://www.canva.com/design/DAGqjwnUcBA/Aok0NiPjVnAVUumEmdgJBA/view",
        },
        {
          id: "02",
          title: "Track+ — Sistema de Rastreamento",
          type: "UX / Design de Produto",
          description:
            "Sistema de rastreabilidade e gestão de expedição para uma empresa de produção de alimentos, desenvolvido como projeto integrador da faculdade.",
          tags: ["Miro", "Pesquisa de UX", "Design de Produto"],
          link: "https://miro.com/app/board/uXjVJTcNvqI=/?share_link_id=47377602962",
        },
        {
          id: "03",
          title: "Caso de Estudo — Análise de Concorrentes",
          type: "Benchmarking de UX",
          description:
            "Análise aprofundada de UX dos concorrentes — identificando oportunidades, padrões de design e recomendações acionáveis.",
          tags: ["Análise de UX", "Pesquisa", "Estratégia"],
          link: "",
        },
        {
          id: "04",
          title: "Projeto Cortinas",
          type: "Operações e Execução",
          description:
            "Gestão e execução completa do projeto — organização visual no Miro, coordenação do time e acompanhamento da entrega final.",
          tags: ["Miro", "Operações", "Design de Fluxo"],
          link: "",
        },
      ],
    },
    process: {
      label: "Como Funciona",
      title1: "Do Primeiro Contato",
      title2: "à Primeira Entrega",
      subtitle:
        "Seja com um plano definido ou ainda descobrindo o caminho — veja como começamos juntos.",
      cta: "Me manda uma mensagem →",
      steps: [
        {
          number: "01",
          title: "Vamos nos Conectar",
          description:
            "Me manda uma mensagem contando um pouco sobre seu projeto, ideia ou desafio. Essa é nossa primeira oportunidade de explorar como posso te apoiar.",
        },
        {
          number: "02",
          title: "Call de Discovery",
          description:
            "Vamos marcar uma conversa para nos conhecer melhor, entender seus objetivos com mais profundidade e discutir a melhor abordagem para o seu projeto.",
        },
        {
          number: "03",
          title: "Proposta & Planejamento",
          description:
            "Com base na nossa conversa, preparo uma proposta personalizada com escopo, prazo e próximos passos.",
        },
        {
          number: "04",
          title: "Vamos Construir",
          description:
            "Com tudo alinhado, é hora de transformar ideias em ação. Priorizo comunicação clara, colaboração e transparência em todo o processo.",
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
      footer: "© 2025 Ana Luisa. Projetado com intenção.",
      links: [
        { label: "E-mail", value: "ana.malmeida08@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/ana-luisa-mota-almeida" },
        { label: "Upwork", value: "Ver meu Perfil no Upwork" },
      ],
    },
    floating: "Vamos trabalhar juntos",
  },
} as const;

export default t;
