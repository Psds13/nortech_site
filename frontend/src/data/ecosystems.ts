// src/data/ecosystems.ts
import { Ecosystem } from '@/types';

export const NORTECH_ECOSYSTEMS: Ecosystem[] = [
  {
    id: 'nortech-software',
    name: 'Nortech Software',
    category: 'specialized-solutions',
    categoryName: 'Engenharia de Software',
    shortDescription: 'Desenvolvimento sob medida de softwares web, mobile e sistemas legados de alta complexidade.',
    fullDescription: 'Unidade responsável pelo ciclo completo de engenharia de software enterprise, arquiteturas distribuídas, microsserviços e integração contínua.',
    iconName: 'Code2',
    href: '/ecossistemas/nortech-software',
    tagline: 'Sistemas Escaláveis & Arquiteturas de Elite',
    features: [
      'Desenvolvimento de Plataformas Web SaaS',
      'Aplicativos Nativos e Cross-Platform (iOS/Android)',
      'Modernização de Sistemas Legados & Refatoração',
      'APIs RESTful e Arquitetura orientada a microsserviços'
    ],
    metrics: [
      { label: 'Uptime em Produção', value: '99.99%' },
      { label: 'Projetos Entregues', value: '+140' }
    ],
    isFeatured: true
  },
  {
    id: 'nortech-ai',
    name: 'Nortech AI',
    category: 'ai-data',
    categoryName: 'Inteligência Artificial',
    shortDescription: 'Agentes autônomos, inteligência preditiva e modelos de LLM integrados aos processos de negócios.',
    fullDescription: 'Soluções avançadas em Machine Learning, visão computacional e agentes conversacionais corporativos treinados em dados privados.',
    iconName: 'BrainCircuit',
    href: '/nortech-ai',
    tagline: 'Hiperautomação Inteligente Corporativa',
    features: [
      'Agentes Virtuais e Chatbots com RAG Corporativo',
      'Modelos Preditivos de Demanda e Análise de Risco',
      'Visão Computacional e Controle de Qualidade',
      'Fine-tuning de Modelos de Linguagem Privados'
    ],
    metrics: [
      { label: 'Redução de Custos de Atendimento', value: '65%' },
      { label: 'Acurácia de Predição', value: '98.4%' }
    ],
    isFeatured: true
  },
  {
    id: 'nortech-green-tech',
    name: 'Nortech Green Tech',
    category: 'industry-agro',
    categoryName: 'Sustentabilidade & ESG',
    shortDescription: 'Monitoramento de pegada de carbono, eficiências energéticas e créditos ambientais rastreáveis.',
    fullDescription: 'Tecnologia voltada para a transição energética e auditoria automatizada de metas ESG para grandes indústrias e corporações.',
    iconName: 'Leaf',
    href: '/green-tech',
    tagline: 'Tecnologia Sustentável para a Transição Energética',
    features: [
      'Plataforma de Gestão de Emissões de Carbono (Escopos 1, 2 e 3)',
      'Telemetria IoT para Consumo Energético Predial e Industrial',
      'Rastreabilidade de Créditos de Carbono em Blockchain',
      'Relatórios Regulatórios ESG Automatizados'
    ],
    metrics: [
      { label: 'Energia Economizada', value: '3.2 GWh' },
      { label: 'CO2 Mitigado', value: '-12.000 ton' }
    ],
    isFeatured: true
  },
  {
    id: 'nortech-accessibility',
    name: 'Nortech Accessibility',
    category: 'specialized-solutions',
    categoryName: 'Acessibilidade Digital',
    shortDescription: 'Inclusão digital e conformidade total com diretrizes WCAG 2.2 e Lei Brasileira de Inclusão.',
    fullDescription: 'Serviços de auditoria, tradução automática de Libras, leitores de tela otimizados e adaptação de plataformas para acessibilidade universal.',
    iconName: 'Accessibility',
    href: '/nortech-accessibility',
    tagline: 'Experiências Digitais Sem Barreiras para Todos',
    features: [
      'Auditoria de Acessibilidade Digital (WCAG 2.2 AAA)',
      'Widget Inteligente de Assistência e Tradução em Libras',
      'Navegação por Voz e Teclado Otimizada',
      'Certificação de Inclusão Corporativa'
    ],
    metrics: [
      { label: 'Conformidade WCAG', value: '100%' },
      { label: 'Usuários Beneficiados', value: '+500k' }
    ],
    isFeatured: true
  },
  {
    id: 'nortech-games',
    name: 'Nortech Games',
    category: 'specialized-solutions',
    categoryName: 'Gamificação & Imersão',
    shortDescription: 'Gamificação corporativa, treinamentos imersivos em 3D, simulações virtuais e advergames.',
    fullDescription: 'Engajamento de colaboradores e clientes através de mecânicas de jogos, ambientes interativos e treinamentos industriais imersivos.',
    iconName: 'Gamepad2',
    href: '/nortech-games',
    tagline: 'Gamificação Estratégica e Ambientes Imersivos',
    features: [
      'Simuladores Imersivos de Treinamento Técnico em VR/AR',
      'Sistemas de Gamificação de Metas e Vendas',
      'Desenvolvimento de Advergames para Engajamento de Marca',
      'Mecânicas de Recompensa e Lealdade Corporativa'
    ],
    metrics: [
      { label: 'Aumento de Engajamento', value: '+210%' },
      { label: 'Retenção de Aprendizado', value: '92%' }
    ],
    isFeatured: true
  },
  {
    id: 'nortech-network',
    name: 'Nortech Network',
    category: 'infra-cloud',
    categoryName: 'Infraestrutura de TI & Redes',
    shortDescription: 'Cabeamento estruturado, telefonia IP, servidores, virtualização, suporte presencial/remoto e infraestrutura.',
    fullDescription: 'Arquitetura de rede corporativa de alta performance, projeto e certificação de cabeamento Cat6A/Fibra, PABX IP, suporte N1/N2/N3 e NOC 24/7.',
    iconName: 'Network',
    href: '/nortech-network',
    tagline: 'Conectividade Crítica, Suporte 24/7 & Infraestrutura Resiliente',
    features: [
      'Cabeamento Estruturado e Fibra Óptica Certificada',
      'Projetos de Redes Corporativas (LAN/WAN/SD-WAN/Wi-Fi 6E)',
      'Virtualização de Servidores (VMware, Proxmox, Hyper-V)',
      'Suporte Técnico Presencial, Remoto e Monitoramento NOC 24/7',
      'Telefonia IP Corporativa (PABX Cloud & Voip)',
      'Administração de Data Centers e Equipamentos de Borda'
    ],
    metrics: [
      { label: 'Tempo Médio de Resposta (SLA)', value: '< 15 min' },
      { label: 'Uptime de Redes Monitoradas', value: '99.98%' }
    ],
    isFeatured: true
  },
  {
    id: 'nortech-cyber-security',
    name: 'Nortech Cyber Security',
    category: 'infra-cloud',
    categoryName: 'Segurança da Informação',
    shortDescription: 'Proteção perimetral, Pentest, SIEM, conformidade LGPD e resposta contínua a incidentes cibernéticos.',
    fullDescription: 'Blindagem de ativos digitais, monitoramento SOC 24/7, testes de invasão e governança de segurança da informação para empresas.',
    iconName: 'ShieldCheck',
    href: '/nortech-security',
    tagline: 'Segurança Ofensiva e Defensiva Corporativa',
    features: [
      'Pentest Ransoware & Testes de Invasão de Redes',
      'Centro de Operações de Segurança (SOC 24/7)',
      'Gestão de Identidade e Acesso Zero Trust (IAM)',
      'Conformidade LGPD, ISO 27001 e SOC 2'
    ],
    metrics: [
      { label: 'Ameaças Neutralizadas', value: '+1.5M/mês' },
      { label: 'Tempo de Contenção', value: '< 5 min' }
    ],
    isFeatured: true
  },
  {
    id: 'nortech-cloud',
    name: 'Nortech Cloud',
    category: 'infra-cloud',
    categoryName: 'Computação em Nuvem',
    shortDescription: 'Migração de sistemas, arquitetura multicloud (AWS, Azure, GCP), FinOps e ambientes híbridos.',
    fullDescription: 'Estratégia de modernização em nuvem, otimização contínua de custos FinOps e implementação de ambientes elásticos e seguros.',
    iconName: 'Cloud',
    href: '/nortech-cloud',
    tagline: 'Orquestração Multicloud & Otimização FinOps',
    features: [
      'Migração Cloud Lift-and-Shift e Re-architecting',
      'Arquiteturas Híbridas e Multicloud (AWS / GCP / Azure)',
      'FinOps e Governança de Custos Computacionais',
      'Disaster Recovery em Nuvem e Backup Criptografado'
    ],
    metrics: [
      { label: 'Redução Média na Fatura Cloud', value: '35%' }
    ]
  },
  {
    id: 'nortech-data-analytics',
    name: 'Nortech Data Analytics',
    category: 'ai-data',
    categoryName: 'Dados & BI',
    shortDescription: 'Engenharia de dados, Data Warehousing, pipelines em tempo real e dashboards executivos.',
    fullDescription: 'Transformação de dados brutos em decisões estratégicas através de arquiteturas modernas de Data Lakehouse e BI em tempo real.',
    iconName: 'BarChart3',
    href: '/nortech-data-analytics',
    tagline: 'Cultura Data-Driven & Engenharia de Dados',
    features: [
      'Construção de Data Lakehouses e Data Warehouses',
      'ETL/ELT Pipelining de Altíssima Velocidade',
      'Dashboards Executivos e KPIs em Tempo Real (PowerBI / Metabase)',
      'Governança e Qualidade de Dados Corporativos'
    ],
    metrics: [
      { label: 'Volume de Dados Processados', value: '10 TB+/dia' }
    ]
  },
  {
    id: 'nortech-labs',
    name: 'Nortech Labs',
    category: 'specialized-solutions',
    categoryName: 'Pesquisa & Inovação',
    shortDescription: 'Pesquisa e desenvolvimento de tecnologias emergentes, provas de conceito (PoC) e computação quântica.',
    fullDescription: 'Braço de P&D focado em testar e validar tecnologias disruptivas antes que se tornem padrão de mercado.',
    iconName: 'FlaskConical',
    href: '/nortech-lab',
    tagline: 'Pesquisa Disruptiva & Provas de Conceito',
    features: [
      'Desenvolvimento Acelerado de Provas de Conceito (PoCs)',
      'Exploração de Web3, Smart Contracts e Criptografia',
      'Modelagem de Algoritmos Quânticos Iniciais',
      'Benchmarking Tecnológico de Vanguarda'
    ]
  },
  {
    id: 'nortech-academy',
    name: 'Nortech Academy',
    category: 'specialized-solutions',
    categoryName: 'Capacitação & Educação',
    shortDescription: 'Treinamentos executivos, reskilling de equipes de tecnologia e formação em arquitetura de software.',
    fullDescription: 'Programas corporativos de qualificação em DevOps, Cloud, Inteligência Artificial e Boas Práticas de Engenharia.',
    iconName: 'GraduationCap',
    href: '/ecossistemas/nortech-academy',
    tagline: 'Formação de Altíssimo Nível para Equipes Tech',
    features: [
      'Imersões In-Company em DevOps & Cloud Native',
      'Bootcamps de Inteligência Artificial Aplicada',
      'Formação Executiva para CTOs e Lideranças de Tecnologia',
      'Certificação Interna em Segurança e Acessibilidade'
    ]
  },
  {
    id: 'nortech-design-studio',
    name: 'Nortech Design Studio',
    category: 'specialized-solutions',
    categoryName: 'Design & UX/UI',
    shortDescription: 'Design de produtos digitais, Design Systems corporativos, pesquisa com usuários e testes de usabilidade.',
    fullDescription: 'Criação de interfaces elegantes, funcionais e focadas na melhor conversão e experiência de utilização profissional.',
    iconName: 'Palette',
    href: '/ecossistemas/nortech-design-studio',
    tagline: 'Interfaces de Alta Performance & Design Systems',
    features: [
      'Construção de Design Systems Escaláveis no Figma e Code',
      'Pesquisa UX, Mapeamento de Jornada e Personas',
      'Prototipação de Alta Fidelidade e Wireframing',
      'Testes A/B e Otimização de Taxa de Conversão (CRO)'
    ]
  },
  {
    id: 'nortech-health-tech',
    name: 'Nortech Health Tech',
    category: 'industry-agro',
    categoryName: 'Saúde & Biotecnologia',
    shortDescription: 'Sistemas hospitalares, Prontuário Eletrônico (PEP), telemedicina segura e integração HL7/FHIR.',
    fullDescription: 'Soluções tecnológicas especializadas para redes hospitalares, operadoras de saúde e laboratórios com estrita proteção de dados médicos.',
    iconName: 'Stethoscope',
    href: '/ecossistemas/nortech-health-tech',
    tagline: 'Tecnologia em Saúde com Proteção e Precisão',
    features: [
      'Plataformas de Telemedicina com Prontuário Criptografado',
      'Integração de Equipamentos Médicos e Normas HL7 / FHIR',
      'IA para Triagem Diagnóstica e Análise de Exames',
      'Conformidade com Resoluções do CFM e LGPD da Saúde'
    ]
  },
  {
    id: 'nortech-agro-tech',
    name: 'Nortech Agro Tech',
    category: 'industry-agro',
    categoryName: 'Agronegócio Inteligente',
    shortDescription: 'Telemetria de maquinário agrícola, sensores IoT de solo, imagens de satélite e gestão de safras.',
    fullDescription: 'Digitalização no campo: conectividade em áreas remotas, monitoramento de lavouras e automação da cadeia agroindustrial.',
    iconName: 'Tractor',
    href: '/ecossistemas/nortech-agro-tech',
    tagline: 'Inteligência no Campo & Gestão Agro de Alta Precisão',
    features: [
      'Telemetria de Máquinas Agrícolas em Tempo Real',
      'Análise de Imagens de Satélite e Drones com IA para Pragas',
      'Conectividade Rural Privada (LoRaWAN / 4G Privado)',
      'Previsão Meteorológica Preditiva e Rastreamento de Logística Agro'
    ]
  },
  {
    id: 'nortech-industry',
    name: 'Nortech Industry 4.0',
    category: 'industry-agro',
    categoryName: 'Indústria 4.0 & Automação',
    shortDescription: 'Digital Twin, manutenção preditiva, sensores IIoT e integração SCADA / MES / ERP.',
    fullDescription: 'Transformação digital de linhas de produção industrial, reduzindo paradas não planejadas e maximizando a eficiência de fábrica.',
    iconName: 'Factory',
    href: '/ecossistemas/nortech-industry-4-0',
    tagline: 'Fábricas Conectadas & Manutenção Preditiva',
    features: [
      'Implementação de Digital Twins (Gêmeos Digitais)',
      'Coleta de Dados Industriais IIoT e CLP/SCADA',
      'Manutenção Preditiva baseada em Vibração e Temperatura',
      'Automação de Linhas de Montagem e Rastreamento em Tempo Real'
    ],
    metrics: [
      { label: 'Redução de Paradas de Fábrica', value: '42%' }
    ]
  },
  {
    id: 'nortech-smart-cities',
    name: 'Nortech Smart Cities',
    category: 'industry-agro',
    categoryName: 'Cidades Inteligentes',
    shortDescription: 'Iluminação pública inteligente, monitoramento urbano, gestão de tráfego e portais do cidadão.',
    fullDescription: 'Tecnologias para a gestão pública sustentável, integrando sensores urbanos, controle de trânsito e segurança pública participativa.',
    iconName: 'Building2',
    href: '/ecossistemas/nortech-smart-cities',
    tagline: 'Cidades Eficientes, Conectadas e Sustentáveis',
    features: [
      'Tele-gestão de Iluminação Pública Inteligente (IoT)',
      'Sistemas de Monitoramento de Tráfego e Mobilidade',
      'Portais do Cidadão e Governo Digital Unificado',
      'Central de Comando e Controle Urbano Integrado (CCO)'
    ]
  },
  {
    id: 'nortech-innovation-hub',
    name: 'Nortech Innovation Hub',
    category: 'specialized-solutions',
    categoryName: 'Hub de Inovação Aberta',
    shortDescription: 'Conexão entre grandes empresas e ecossistemas de startups, hackathons e programas de intrapreendedorismo.',
    fullDescription: 'Aceleração corporativa de novos modelos de negócios através de programas de inovação aberta, co-criação e venture building.',
    iconName: 'Rocket',
    href: '/ecossistemas/nortech-innovation-hub',
    tagline: 'Aceleração de Inovação Corporativa & Venture Building',
    features: [
      'Programas de Inovação Aberta com Startups Tecnológicas',
      'Organização de Hackathons Corporativos de Alta Performance',
      'Venture Building: Criação de Novas Spin-Offs Tecnológicas',
      'Mapeamento de Tendências e Radars Tecnológicos Setoriais'
    ]
  }
];

export const NORTECH_CATEGORIES = [
  { id: 'all', label: 'Todos os Ecossistemas' },
  { id: 'infra-cloud', label: 'Infraestrutura, Redes & Cloud' },
  { id: 'ai-data', label: 'Inteligência Artificial & Dados' },
  { id: 'industry-agro', label: 'Indústria, Agro & Cidades' },
  { id: 'specialized-solutions', label: 'Engenharia & Soluções Especiais' }
];
