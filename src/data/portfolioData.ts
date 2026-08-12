import { ContactInfo, Project, ServicePackage, Skill } from '../types';
import tiagoProfilePic from '../assets/images/eu.png';

/* ==========================================================================
   INFORMAÇÕES PESSOAIS DE TIAGO SANTOS DA SILVA
   Abaixo você encontra todos os dados que podem ser facilmente editados.
   ========================================================================== */

export const getWhatsAppUrl = (customMessage?: string): string => {
  const defaultText = "Olá Tiago! Vi seu portfólio e gostaria de solicitar um orçamento para meu projeto.";
  const textToUse = customMessage || defaultText;
  return `https://wa.me/5567981233340?text=${encodeURIComponent(textToUse)}`;
};

export const CONTACT_INFO: ContactInfo = {
  name: "Tiago Santos da Silva",
  role: "Web Designer & Desenvolvedor Full-Stack",
  phoneDisplay: "(67) 98123-3340",
  phoneRaw: "+5567981233340",
  whatsappUrl: getWhatsAppUrl(),
  githubUrl: "https://github.com/TiagoDevops-cpu",
  linkedinUrl: "https://www.linkedin.com/in/tiago-silva-285225401",
  location: "Mato Grosso do Sul, Brasil (Atendimento Nacional e Internacional)",
  email: "ts.devcode@gmail.com",
};

// Títulos rotativos do efeito de digitação no Hero
export const TYPING_ROLES: string[] = [
  "Web Designer Full-Stack",
  "Desenvolvedor Frontend & Backend",
  "Especialista em Sites de Alta Conversão",
  "Criador de Soluções Web para Empresas"
];

/* ==========================================================================
   FOTO DE PERFIL DE TIAGO SANTOS
   Foto de perfil oficial do desenvolvedor.
   ========================================================================== */
export const PROFILE_PHOTO_URL = tiagoProfilePic;

/* ==========================================================================
   LISTA DE HABILIDADES E TECNOLOGIAS (EDITÁVEL)
   ========================================================================== */
export const SKILLS_LIST: Skill[] = [
  {
    id: "html-css",
    name: "HTML5 & CSS3 / Tailwind",
    category: "frontend",
    categoryLabel: "Frontend",
    iconName: "Code2",
    level: 98,
    description: "Semântica moderna, layouts responsivos, animações e estilização ultrarrápida com Tailwind CSS."
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frontend",
    categoryLabel: "Frontend",
    iconName: "FileCode",
    level: 95,
    description: "Lógica avançada, manipulação assíncrona do DOM, consumo de APIs e integração dinâmica."
  },
  {
    id: "react",
    name: "React.js / Next.js",
    category: "frontend",
    categoryLabel: "Frontend",
    iconName: "Atom",
    level: 92,
    description: "Criação de Single Page Applications (SPAs) reativas, componentes reutilizáveis e páginas SSR focadas em SEO."
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Frontend",
    iconName: "FileCheck",
    level: 90,
    description: "Código fortemente tipado, prevenindo erros em tempo de compilação e aumentando a previsibilidade do projeto."
  },
  {
    id: "node",
    name: "Node.js & Express",
    category: "backend",
    categoryLabel: "Backend",
    iconName: "Server",
    level: 88,
    description: "Desenvolvimento de APIs RESTful robustas, autenticação, rotas rápidas e integração com bancos de dados."
  },
  {
    id: "db",
    name: "Bancos de Dados (SQL & NoSQL)",
    category: "backend",
    categoryLabel: "Backend",
    iconName: "Database",
    level: 85,
    description: "Modelagem e gerenciamento de dados com PostgreSQL, MongoDB e Firebase Firestore."
  },
  {
    id: "figma",
    name: "UI/UX Design & Figma",
    category: "design",
    categoryLabel: "Design",
    iconName: "Palette",
    level: 94,
    description: "Prototipagem de interfaces elegantes, wireframes, Design Systems e foco na usabilidade do cliente final."
  },
  {
    id: "performance",
    name: "Performance & SEO Web",
    category: "outros",
    categoryLabel: "Otimização",
    iconName: "Zap",
    level: 96,
    description: "Otimização de Core Web Vitals, imagens leves, carregamento instantâneo e ranqueamento no Google."
  },
  {
    id: "git",
    name: "Git & DevOps Básico",
    category: "outros",
    categoryLabel: "Ferramentas",
    iconName: "GitBranch",
    level: 90,
    description: "Controle de versão com GitHub, automação de deploys na Vercel/Netlify/Cloud Run e rotinas de CI/CD."
  }
];

/* ==========================================================================
   PROJETOS / PORTFÓLIO (EDITÁVEL)
   Cada card possui um campo 'projectUrl' com placeholder "LINK_DO_PROJETO_AQUI"
   ou link direto que você pode editar facilmente.
   ========================================================================== */
export const PROJECTS_LIST: Project[] = [
  {
    id: "projeto-1",
    title: "Apex Logística Corp",
    subtitle: "Portal Corporativo de Alta Performance",
    category: "institucional",
    categoryLabel: "Site Institucional",
    clientType: "Empresa de Grande Porte",
    description: "Desenvolvimento de site corporativo completo para empresa multinacional de logística. Inclui rastreamento de cargas em tempo real, painel de cotações dinâmico e integração com WhatsApp comercial.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "SEO Avançado"],
    projectUrl: "#", // SUBSTITUIR PELO LINK REAL DO PROJETO Ex: https://apexlog.com.br
    githubUrl: "https://github.com/TiagoDevops-cpu",
    featured: true,
    highlights: [
      "98/100 de pontuação no Google PageSpeed Insights",
      "Calculadora de frete interativa acoplada ao WhatsApp",
      "Design 100% responsivo e otimizado para dispositivos móveis"
    ]
  },
  {
    id: "projeto-2",
    title: "Lumina Joias & Acessórios",
    subtitle: "E-Commerce Premium de Alta Conversão",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    clientType: "Pequeno/Médio Negócio",
    description: "Loja virtual moderna e minimalista para marca de joias finas. Conta com catálogo interativo de produtos, carrinho de compras dinâmico, checkout simplificado via WhatsApp e PIX.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Carrinho Dinâmico", "WhatsApp API", "UI/UX"],
    projectUrl: "#", // SUBSTITUIR PELO LINK REAL DO PROJETO
    githubUrl: "https://github.com/TiagoDevops-cpu",
    featured: true,
    highlights: [
      "Aumento de 40% no envio de orçamentos diretos para a loja",
      "Galeria de produtos com zoom responsivo e filtros inteligentes",
      "Painel intuitivo de gerenciamento de itens"
    ]
  },
  {
    id: "projeto-3",
    title: "Dr. Marcelo Santos - Odontologia Especializada",
    subtitle: "Landing Page de Captura de Clientes",
    category: "landing-page",
    categoryLabel: "Landing Page",
    clientType: "Pequeno/Médio Negócio",
    description: "Landing Page focada em conversão direta para clínica odontológica de alto padrão. Projetada para campanhas de Google Ads com botão flutuante de agendamento no WhatsApp.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "Copywriting", "Conversão"],
    projectUrl: "#", // SUBSTITUIR PELO LINK REAL DO PROJETO
    githubUrl: "https://github.com/TiagoDevops-cpu",
    featured: true,
    highlights: [
      "Taxa de conversão de visitantes para contatos de 18%",
      "Formulário rápido integrado diretamente ao WhatsApp do consultório",
      "Animações suaves e visual altamente profissional"
    ]
  },
  {
    id: "projeto-4",
    title: "FitTrack - Dashboard & Gestão de Academias",
    subtitle: "Sistema Web SaaS Completo",
    category: "sistemas",
    categoryLabel: "Sistema Web / SaaS",
    clientType: "Empresa de Grande Porte",
    description: "Plataforma web para gestão de alunos, planos de treino e controle financeiro. Interface escura no estilo cyberpunk moderno com gráficos interativos e relatórios em tempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Node.js", "Express", "Recharts", "PostgreSQL"],
    projectUrl: "#", // SUBSTITUIR PELO LINK REAL DO PROJETO
    githubUrl: "https://github.com/TiagoDevops-cpu",
    featured: false,
    highlights: [
      "Dashboard dinâmico com métricas financeiras em tempo real",
      "Controle de acesso por níveis (Administrador, Instrutor, Aluno)",
      "Design ultra moderno focado na usabilidade no dia a dia"
    ]
  },
  {
    id: "projeto-5",
    title: "Construtora Horizonte Soluções",
    subtitle: "Portal de Empreendimentos Imobiliários",
    category: "institucional",
    categoryLabel: "Site Institucional",
    clientType: "Empresa de Grande Porte",
    description: "Site para construtora exibindo portfólio de obras concluídas, plantas de novos lançamentos em 3D e simulador de financiamento simplificado.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Framer Motion", "SEO"],
    projectUrl: "#", // SUBSTITUIR PELO LINK REAL DO PROJETO
    githubUrl: "https://github.com/TiagoDevops-cpu",
    featured: false,
    highlights: [
      "Filtro inteligente de imóveis por bairro, metragem e faixa de preço",
      "Tour virtual em vídeo integrado e mapa de localização interativo",
      "Otimização extrema para buscas orgânicas no Google"
    ]
  },
  {
    id: "projeto-6",
    title: "Sabor & Arte Gastronomia",
    subtitle: "Site Gastronômico com Cardápio Digital QR Code",
    category: "landing-page",
    categoryLabel: "Landing Page / Gastronomia",
    clientType: "Pequeno/Médio Negócio",
    description: "Site responsivo para restaurante de gastronomia artesanal. Acompanha cardápio interativo online acessível via QR Code nas mesas e sistema de pedidos diretos no WhatsApp.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "QR Code", "WhatsApp API"],
    projectUrl: "#", // SUBSTITUIR PELO LINK REAL DO PROJETO
    githubUrl: "https://github.com/TiagoDevops-cpu",
    featured: false,
    highlights: [
      "Cardápio leve com carregamento em menos de 1 segundo",
      "Botão de reservas antecipadas acoplado ao WhatsApp",
      "Design atraente com destaque para fotografias de pratos"
    ]
  }
];

/* ==========================================================================
   SERVIÇOS E SOLUÇÕES OFERECIDAS
   ========================================================================== */
export const SERVICES_PACKAGES: ServicePackage[] = [
  {
    id: "sites-institucionais",
    title: "Sites Institucionais",
    subtitle: "Sua empresa com presença digital marcante, credibilidade e visual moderno.",
    targetAudience: "Empresas de Pequeno, Médio e Grande Porte",
    deliverables: [
      "Design 100% exclusivo e personalizado",
      "Totalmente adaptado para Celulares e Tablets",
      "Otimização SEO para aparecer no Google",
      "Integração direta com WhatsApp e Redes Sociais",
      "Domínio e Hospedagem configurados"
    ],
    icon: "Building2",
    recommendedFor: "Empresas que desejam transmitir confiança e atrair novos parceiros comerciais."
  },
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversão",
    subtitle: "Páginas projetadas para transformar tráfego em vendas e novos leads.",
    targetAudience: "Lançamentos, Médicos, Advogados, Prestadores de Serviço",
    deliverables: [
      "Estrutura focada em Neuromarketing e Copywriting",
      "Carregamento ultrarrápido (Google PageSpeed 90+)",
      "Chamadas para Ação (CTAs) estratégicas para o WhatsApp",
      "Formulários de contato inteligentes",
      "Rastreamento de conversões instalado (Google / Meta)"
    ],
    icon: "Target",
    recommendedFor: "Quem investe em anúncios (Google Ads, Facebook Ads) e quer resultados imediatos."
  },
  {
    id: "e-commerce",
    title: "Lojas Virtuais & E-Commerce",
    subtitle: "Venda seus produtos 24 horas por dia com uma plataforma rápida e intuitiva.",
    targetAudience: "Marcas de Roupas, Joias, Eletrônicos e Comércio em Geral",
    deliverables: [
      "Catálogo de produtos com categorias e buscas",
      "Carrinho de compras dinâmico e sem travamentos",
      "Integração com meios de pagamento (PIX, Cartão)",
      "Botão de compra direta para envio de pedido no WhatsApp",
      "Painel de controle simples para cadastrar produtos"
    ],
    icon: "ShoppingBag",
    recommendedFor: "Lojistas que buscam expandir suas vendas físicas para todo o Brasil."
  },
  {
    id: "sistemas-web",
    title: "Sistemas Web & Aplicações Sob Medida",
    subtitle: "Desenvolvimento de dashboards, portais de clientes e automações internas.",
    targetAudience: "Empresas com processos específicos que exigem sistemas próprios",
    deliverables: [
      "Desenvolvimento Full-Stack (React, Node.js, SQL)",
      "Autenticação de usuários segura e níveis de permissão",
      "Painéis com relatórios gráficos interativos",
      "APIs REST personalizadas para integração de sistemas",
      "Arquitetura escalável e banco de dados rápido"
    ],
    icon: "LayoutDashboard",
    recommendedFor: "Negócios que precisam automatizar rotinas e organizar operações complexas."
  }
];

/* ==========================================================================
   MÉTRICAS / DIFERENCIAIS EM NÚMEROS
   ========================================================================== */
export const STATS_LIST = [
  { value: "100%", label: "Projetos Responsivos", detail: "Perfeito em qualquer tela" },
  { value: "95+", label: "Google PageSpeed", detail: "Carregamento instantâneo" },
  { value: "24h", label: "WhatsApp Direto", detail: "Atendimento sem intermediários" },
  { value: "Full-Stack", label: "Especialização Total", detail: "Do Design ao Servidor" }
];
