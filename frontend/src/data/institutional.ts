// src/data/institutional.ts
import { PricingPlan, FAQItem, ProcessStep, PortfolioProject } from '@/types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Essential TI & Cloud',
    price: 'Sob Consulta',
    period: 'mensal',
    description: 'Para empresas de médio porte que necessitam de suporte de TI resiliente, infraestrutura segura e sustentação de sistemas.',
    features: [
      'Suporte Técnico Remoto com SLA de 4 horas',
      'Gerenciamento de Redes & Firewall de Borda',
      'Monitoramento NOC básico em Horário Comercial',
      'Backup em Nuvem Automatizado',
      'Consultoria em Acessibilidade WCAG Basica'
    ],
    ctaText: 'Solicitar Proposta',
    ctaHref: '/contatos?plano=essential'
  },
  {
    id: 'business',
    name: 'Corporate Ecosystem',
    price: 'Sob Consulta',
    period: 'mensal',
    badge: 'Mais Contratado',
    isPopular: true,
    description: 'Solução completa integrando engenharia de software sob demanda, suporte de TI presencial/remoto e infraestrutura de IA.',
    features: [
      'Engenharia de Software Sob Medida (Horas Dedicadas)',
      'Suporte Técnico Presencial e Remoto 24/7 com SLA de 1 hora',
      'Gestão de Servidores, Cabeamento e Telefonia IP',
      'Integração de Agentes de IA e Análise de Dados',
      'Auditoria Contínua de Cyber Security & LGPD',
      'Acesso ao Hub de Inovação Nortech Labs'
    ],
    ctaText: 'Falar com Consultor',
    ctaHref: '/contatos?plano=corporate'
  },
  {
    id: 'enterprise',
    name: 'Mission Critical Enterprise',
    price: 'Personalizado',
    period: 'anual',
    description: 'Para grandes corporações, indústrias e governos que exigem equipe residente, NOC/SOC dedicado e SLA crítico de 15 minutos.',
    features: [
      'Técnicos e Engenheiros Residentes On-Site',
      'SLA Crítico Garantido em Contrato (< 15 minutos)',
      'SOC 24/7 Dedicado e Pentest Periódico',
      'Automação Industrial 4.0 & Gêmeos Digitais',
      'Infraestrutura Multicloud com DR Ativo-Ativo',
      'Gerente de Conta Executivo e Arquito de TI Dedicado'
    ],
    ctaText: 'Agendar Reunião Executiva',
    ctaHref: '/contatos?plano=enterprise'
  }
];

export const FREQUENT_QUESTIONS: FAQItem[] = [
  {
    id: '1',
    category: 'general',
    question: 'Como a Nortech estrutura seus 17 ecossistemas de negócios?',
    answer: 'Cada ecossistema funciona como uma unidade especializada com equipe técnica focada na sua disciplina (ex: Nortech Network para Infra/TI, Nortech AI para inteligência preditiva, Nortech Cyber Security para proteção). Isso garante alta especialização sem perder a integração nativa entre todas as plataformas.'
  },
  {
    id: '2',
    category: 'network',
    question: 'Qual o tempo de atendimento (SLA) para suporte de infraestrutura e redes?',
    answer: 'Nosso NOC opera 24/7. Para incidentes críticos de parada de operação, nosso tempo máximo de resposta é de até 15 minutos no plano Mission Critical e de até 1 hora no plano Corporate Enterprise.'
  },
  {
    id: '3',
    category: 'contracting',
    question: 'Como funciona a contratação dos serviços de cabeamento estruturado e TI?',
    answer: 'Realizamos uma visita técnica ou auditoria remota prévia para entender a planta física ou arquitetura atual da empresa. Emitimos o projeto executivo com especificação de materiais, cronograma e emissão de laudo técnico certificado Fluke.'
  },
  {
    id: '4',
    category: 'support',
    question: 'A Nortech oferece suporte a sistemas legados e migração para nuvem?',
    answer: 'Sim, através da unidade Nortech Software e Nortech Cloud, realizamos a modernização de softwares legados, refatoração de código e migração elástica para AWS, Azure ou Google Cloud com zero perda de dados.'
  }
];

export const METHODOLOGY_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Diagnóstico & Arquitetura',
    description: 'Imersão nos objetivos do negócio, auditoria de infraestrutura e desenho da arquitetura técnica ideal.',
    details: ['Mapeamento de Requisitos', 'Auditoria de Segurança & TI', 'Blueprint Arquitetural']
  },
  {
    stepNumber: '02',
    title: 'Desenvolvimento & Engenharia',
    description: 'Construção ágil por sprints curtas com entregas contínuas, testes automatizados e integração de ecossistemas.',
    details: ['Sprints de 2 semanas', 'DevOps & CI/CD Pipeline', 'Garantia de Qualidade QA']
  },
  {
    stepNumber: '03',
    title: 'Implantação & Certificação',
    description: 'Publicação em ambiente de produção seguro, certificação de cabeamento/redes e homologação com o cliente.',
    details: ['Certificação Fluke / Pentest', 'Homologação de Segurança', 'Treinamento de Equipes']
  },
  {
    stepNumber: '04',
    title: 'Sustentação & Evolução',
    description: 'Monitoramento 24/7 via NOC/SOC, suporte nível 1/2/3 e melhoria contínua baseada em dados e telemetria.',
    details: ['NOC 24/7 Proativo', 'SLA Garantido em Contrato', 'Evolução Tecnológica']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Modernização de Infraestrutura e Redes Industriais',
    client: 'Multinacional Metalúrgica',
    ecosystem: 'Nortech Network & Industry 4.0',
    category: 'Infraestrutura & Redes',
    summary: 'Projeto de reestruturação de 1.200 pontos de cabeamento Cat6A, conectividade fibra óptica de 10Gbps e implantação de rede Wi-Fi 6E em 3 galpões de fábrica.',
    results: [
      'Zero paradas de rede durante a migração',
      'Aumento de 400% na velocidade de comunicação interna',
      'Laudo de certificação Fluke 100% aprovado'
    ],
    image: '/Nortech Inovação.png',
    tags: ['Cabeamento Cat6A', 'Fibra Óptica', 'Wi-Fi 6E', 'Fluke Certified']
  },
  {
    id: 'proj-2',
    title: 'Plataforma SaaS de Gestão com Agente de IA',
    client: 'Grupo de Logística e Transportes',
    ecosystem: 'Nortech Software & Nortech AI',
    category: 'Software & IA',
    summary: 'Desenvolvimento de portal web e aplicativo móvel com inteligência artificial para roteirização e suporte automatizado aos motoristas.',
    results: [
      'Redução de 28% no consumo de combustível',
      'Mais de 45.000 chamados respondidos pelo assistente de IA'
    ],
    image: '/Nortech Inovação.png',
    tags: ['Next.js', 'AI Agent', 'RAG', 'PostgreSQL']
  }
];
