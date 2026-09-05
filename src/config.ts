/**
 * CONFIGURAÇÃO GERAL DA LANDING PAGE
 * 
 * Daniel Faluchi - Criação de Landing Pages
 * Altere as informações abaixo facilmente para personalizar a página.
 */

export const siteConfig = {
  // Informações de Contato e Marca
  name: "Daniel Faluchi",
  profession: "Criação de Landing Pages",
  whatsappUrl: "https://wa.me/5511948739129?text=Olá%2C%20quero%20fazer%20um%20orçamento%21%21",
  year: 2026,
  status: "Disponível para novos projetos",

  // Textos dos CTAs Principais
  primaryCtaText: "Quero minha Landing Page",
  intermediateCtaText: "Solicitar orçamento no WhatsApp",
  howItWorksCtaText: "Quero conversar sobre meu projeto",
  microcopyBudget: "Orçamento sem compromisso • Atendimento direto",
  microcopyNoCommitment: "Sem compromisso.",

  // Hero Section
  hero: {
    badge: "Especialista em Páginas de Alta Conversão",
    headline: "Uma Landing Page profissional para transformar visitantes em clientes.",
    subheadline: "Eu crio páginas personalizadas para apresentar seu negócio, gerar confiança e levar seus clientes até o WhatsApp.",
  },

  // O que é uma Landing Page
  whatIs: {
    headline: "Mas afinal, o que é uma Landing Page?",
    description: "É uma página criada com um objetivo específico: fazer o visitante realizar uma ação.",
    summary: "Diferente de um site comum cheio de menus e distrações, a Landing Page reúne as informações essenciais em um único lugar e conduz o visitante de forma direta até a ação desejada.",
    purposes: [
      { id: "purpose-orcamento", title: "Receber pedidos de orçamento" },
      { id: "purpose-whatsapp", title: "Gerar contatos pelo WhatsApp" },
      { id: "purpose-agendamento", title: "Agendar serviços" },
      { id: "purpose-venda", title: "Vender produtos" },
      { id: "purpose-divulgacao", title: "Divulgar serviços" },
      { id: "purpose-oferta", title: "Apresentar uma oferta" },
      { id: "purpose-leads", title: "Capturar leads" },
    ],
    funnelSteps: [
      {
        step: "1",
        label: "Visitante",
        desc: "Chega através do Instagram, anúncio ou indicação.",
        icon: "User",
      },
      {
        step: "2",
        label: "Landing Page",
        desc: "Apresenta sua oferta com clareza, gerando interesse e confiança.",
        icon: "FileText",
      },
      {
        step: "3",
        label: "Contato",
        desc: "O visitante clica para tirar dúvidas ou pedir orçamento.",
        icon: "MessageCircle",
      },
      {
        step: "4",
        label: "Cliente",
        desc: "Você recebe um lead aquecido pronto para fechar negócio.",
        icon: "CheckCircle2",
      },
    ],
  },

  // Por que meu negócio precisa
  whyNeed: {
    headline: "Por que meu negócio precisa de uma Landing Page?",
    commonSituations: [
      "Seu cliente entra no Instagram, olha seu perfil e ainda não sabe exatamente o que você oferece.",
      "Seu cliente precisa perguntar tudo pelo WhatsApp antes de decidir.",
      "As informações do seu negócio estão espalhadas em vários lugares.",
      "Você investe em divulgação, mas não possui uma página preparada para receber esse visitante.",
    ],
    solution: "Uma Landing Page resolve esse problema colocando sua oferta, benefícios, diferenciais e contato em um único lugar.",
    cards: [
      {
        id: "card-profissionalismo",
        title: "Mais profissionalismo",
        desc: "Seu negócio passa a ter uma apresentação mais profissional na internet.",
        icon: "ShieldCheck",
      },
      {
        id: "card-clareza",
        title: "Mais clareza",
        desc: "Seu cliente entende rapidamente o que você oferece.",
        icon: "Compass",
      },
      {
        id: "card-confianca",
        title: "Mais confiança",
        desc: "Uma página bem estruturada transmite mais segurança para quem está conhecendo seu negócio.",
        icon: "Award",
      },
      {
        id: "card-praticidade",
        title: "Mais praticidade",
        desc: "Todas as informações importantes ficam organizadas em um único lugar.",
        icon: "Layers",
      },
      {
        id: "card-oportunidades",
        title: "Mais oportunidades",
        desc: "O visitante encontra facilmente o caminho para entrar em contato.",
        icon: "TrendingUp",
      },
      {
        id: "card-24h",
        title: "Disponível 24 horas",
        desc: "Sua página pode apresentar seu negócio a qualquer momento.",
        icon: "Clock",
      },
    ],
  },

  // Não é apenas uma página bonita
  notJustPretty: {
    headline: "Uma Landing Page bonita chama atenção. Uma Landing Page bem estruturada conduz o visitante até uma decisão.",
    highlight: "Eu não entrego apenas uma página bonita. Crio uma página pensada para apresentar melhor o seu negócio.",
    pillars: [
      { title: "Organização das informações", desc: "Conteúdo distribuído na ordem que o cliente pensa e decide." },
      { title: "Hierarquia visual", desc: "Destaque preciso para o que é mais importante ler e clicar." },
      { title: "Clareza da oferta", desc: "Explicação sem termos complexos para qualquer pessoa entender." },
      { title: "Experiência no celular", desc: "Design fluido, botões acessíveis e leitura confortável." },
      { title: "Chamadas para ação", desc: "Botões posicionados nos momentos certos de decisão." },
      { title: "Quebra de objeções", desc: "Respostas antecipadas para dúvidas que impedem a compra." },
      { title: "Facilidade de contato", desc: "Um clique direto para o seu WhatsApp sem formulários chatos." },
      { title: "Jornada do visitante", desc: "Roteiro psicológico pensado do primeiro olhar até o contato." },
    ],
  },

  // O que eu faço por você
  whatIDo: {
    headline: "Você me explica o seu negócio. Eu transformo isso em uma página profissional.",
    steps: [
      {
        number: "01",
        title: "Entendo seu negócio",
        desc: "Entendo o que você oferece, para quem oferece e qual é o objetivo da página.",
      },
      {
        number: "02",
        title: "Estruturo a informação",
        desc: "Organizo os textos e informações para que seu cliente entenda sua oferta com facilidade.",
      },
      {
        number: "03",
        title: "Desenvolvo o design",
        desc: "Crio uma interface moderna, profissional e alinhada ao seu negócio.",
      },
      {
        number: "04",
        title: "Entrego sua Landing Page",
        desc: "A página é desenvolvida para funcionar bem no celular e computador e ficar pronta para publicação.",
      },
    ],
  },

  // O que você recebe
  deliverables: [
    "Landing Page personalizada",
    "Design moderno",
    "Layout responsivo",
    "Experiência otimizada para celular",
    "Botões de WhatsApp",
    "Estrutura focada em conversão",
    "Organização estratégica das informações",
    "Seções de benefícios e diferenciais",
    "FAQ quando necessário",
    "Código leve",
    "Página rápida",
    "SEO básico",
    "Preparação para publicação",
  ],

  // Demonstrações (Exemplos de Projetos)
  demonstrations: [
    {
      id: "demo-servico",
      segment: "Prestador de serviço",
      title: "Consultoria & Laudos de Engenharia",
      subtitle: "Página com foco em orçamentos corporativos e credibilidade técnica",
      tag: "Serviço Técnico B2B",
      objective: "Orçamento de laudo via WhatsApp",
      features: [
        "Apresentação clara dos tipos de laudos técnicos",
        "Destaque para tempo de entrega e normas ABNT",
        "Botão de WhatsApp em posição estratégica",
      ],
      previewColors: {
        accent: "emerald",
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      },
    },
    {
      id: "demo-local",
      segment: "Negócio local",
      title: "Clínica de Estética & Odontologia",
      subtitle: "Apresentação visual dos tratamentos com agendamento imediato",
      tag: "Saúde & Estética Local",
      objective: "Agendamento de avaliação",
      features: [
        "Cardápio visual de procedimentos e indicações",
        "Localização, estacionamento e horários claros",
        "Botão 'Agendar Consulta no WhatsApp'",
      ],
      previewColors: {
        accent: "cyan",
        badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      },
    },
    {
      id: "demo-autonomo",
      segment: "Profissional autônomo",
      title: "Advocacia Previdenciária & Trabalhista",
      subtitle: "Página séria e acolhedora para tirar dúvidas sobre direitos",
      tag: "Direito Especializado",
      objective: "Análise gratuita de caso via WhatsApp",
      features: [
        "Explicação simples de regras sem 'juridiquês'",
        "Perguntas frequentes sobre prazos e documentos",
        "Contato imediato e seguro para análise de caso",
      ],
      previewColors: {
        accent: "amber",
        badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      },
    },
    {
      id: "demo-digital",
      segment: "Produto digital",
      title: "Mentoria & Curso Prático Online",
      subtitle: "Página de apresentação de metodologia e turmas abertas",
      tag: "Educação & Infoproduto",
      objective: "Inscrição ou tirar dúvidas com equipe",
      features: [
        "Módulos detalhados do que o aluno vai aprender",
        "Garantia incondicional e cronograma explicado",
        "CTA de garantia de vaga no WhatsApp",
      ],
      previewColors: {
        accent: "violet",
        badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      },
    },
    {
      id: "demo-empresa",
      segment: "Empresa",
      title: "Soluções em Energia Solar Comercial",
      subtitle: "Apresentação institucional e simulador de economia na conta de luz",
      tag: "Sustentabilidade & Indústria",
      objective: "Simulação de projeto fotovoltaico",
      features: [
        "Demonstração visual do retorno financeiro em meses",
        "Etapas de instalação e suporte pós-venda",
        "Solicitação de vistoria técnica sem custo",
      ],
      previewColors: {
        accent: "blue",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      },
    },
  ],

  // Por que fazer comigo
  whyMeCards: [
    {
      id: "whyme-direto",
      title: "Atendimento direto",
      desc: "Você trata diretamente comigo durante o projeto.",
      icon: "UserCheck",
    },
    {
      id: "whyme-personalizado",
      title: "Projeto personalizado",
      desc: "A página é construída de acordo com seu negócio e objetivo.",
      icon: "Sparkles",
    },
    {
      id: "whyme-conversao",
      title: "Foco em conversão",
      desc: "A estrutura é pensada para facilitar a tomada de decisão do visitante.",
      icon: "Target",
    },
    {
      id: "whyme-mobile",
      title: "Mobile First",
      desc: "A experiência é planejada primeiro para quem acessa pelo celular.",
      icon: "Smartphone",
    },
    {
      id: "whyme-comunicacao",
      title: "Comunicação clara",
      desc: "Você entende o que está sendo feito em cada etapa.",
      icon: "MessagesSquare",
    },
    {
      id: "whyme-codigo",
      title: "Código leve",
      desc: "Desenvolvimento simples, rápido e sem frameworks pesados desnecessários.",
      icon: "Zap",
    },
  ],

  // Como funciona
  howItWorks: {
    steps: [
      {
        number: "1",
        title: "Você entra em contato",
        desc: "Clique no WhatsApp e me conte sobre seu negócio.",
      },
      {
        number: "2",
        title: "Conversamos sobre o projeto",
        desc: "Entendo suas necessidades, objetivo e estrutura desejada.",
      },
      {
        number: "3",
        title: "Sua Landing Page é criada",
        desc: "Após a aprovação do orçamento, começo o desenvolvimento.",
      },
    ],
  },

  // FAQ
  faq: [
    {
      id: "faq-programacao",
      question: "Preciso entender de programação?",
      answer: "Não. A parte técnica da criação da página fica comigo.",
    },
    {
      id: "faq-pequena-empresa",
      question: "Minha empresa é pequena. Vale a pena?",
      answer: "Sim. Uma Landing Page pode ser uma forma simples e profissional de apresentar seu serviço e facilitar o contato com clientes.",
    },
    {
      id: "faq-celular",
      question: "Funciona no celular?",
      answer: "Sim. A página será responsiva e desenvolvida com foco na experiência mobile.",
    },
    {
      id: "faq-whatsapp",
      question: "Posso colocar WhatsApp?",
      answer: "Sim. Os botões podem direcionar o visitante diretamente para sua conversa no WhatsApp.",
    },
    {
      id: "faq-anuncios",
      question: "Posso usar a Landing Page em anúncios?",
      answer: "Sim. Ela pode ser utilizada como destino para campanhas de divulgação.",
    },
    {
      id: "faq-site-completo",
      question: "Preciso ter um site completo?",
      answer: "Não necessariamente. Dependendo do objetivo do negócio, uma Landing Page pode ser suficiente para apresentar uma oferta e gerar contatos.",
    },
    {
      id: "faq-quanto-custa",
      question: "Quanto custa?",
      answer: "O valor depende da estrutura e das necessidades do projeto. Entre em contato para receber um orçamento personalizado.",
    },
  ],

  // CTA Intermediário
  ctaIntermediate: {
    headline: "Seu cliente já está na internet. O que ele encontra quando chega até o seu negócio?",
    text: "Uma Landing Page profissional organiza sua oferta, transmite confiança e facilita o próximo passo.",
  },

  // CTA Final
  ctaFinal: {
    headline: "Vamos transformar seu negócio em uma página profissional?",
    subheadline: "Me conte o que você oferece e vamos conversar sobre a melhor estrutura para sua Landing Page.",
  },
};
