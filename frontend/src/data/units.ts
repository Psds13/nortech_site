import {
  Activity,
  BarChart3,
  BookOpen,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Layers,
  Leaf,
  Lightbulb,
  Palette,
  Rocket,
  Satellite,
  ShieldCheck,
  Trophy,
  Users,
  Wifi,
} from 'lucide-react';
import type { UnitPageContent } from '@/types';

export const academyUnit: UnitPageContent = {
  name: 'Academy',
  eyebrow: 'Capacitação Técnica Corporativa',
  eyebrowIcon: GraduationCap,
  description:
    'Programas estruturados de capacitação técnica em Cloud, IA, DevOps e Segurança — desenhados para equipes de engenharia, com trilhas de certificação reconhecidas pelo mercado (AWS, Azure, GCP, CKAD).',
  stats: [
    { value: '3.200+', label: 'Profissionais Certificados' },
    { value: '94%', label: 'Taxa de Aprovação em Certificações' },
  ],
  cta: { label: 'Solicitar Programa para Equipe', href: '/contatos?unidade=Nortech+Academy' },
  spec: {
    icon: BookOpen,
    title: 'Modalidades de Entrega',
    items: [
      { label: 'Formato:', value: 'In-Company / Online Ao Vivo / Híbrido', highlight: true },
      { label: 'Carga Horária:', value: '16h – 120h por trilha' },
      { label: 'Idiomas:', value: 'Português / Inglês' },
      { label: 'Turmas:', value: 'Abertas e Fechadas (B2B)' },
    ],
  },
  deliverables: {
    eyebrow: 'Trilhas de Especialização',
    title: 'Programas Nortech Academy',
    items: [
      {
        title: 'Cloud Engineering (AWS / Azure / GCP)',
        desc: 'Trilha completa de arquitetura cloud, desde fundamentos até preparação para exames Solutions Architect e Cloud Architect.',
      },
      {
        title: 'DevOps & Platform Engineering',
        desc: 'Git, CI/CD pipelines, containerização com Docker, orquestração Kubernetes (CKAD) e IaC com Terraform e Pulumi.',
      },
      {
        title: 'IA Aplicada & MLOps',
        desc: 'Ciclo completo de projetos de ML: coleta, feature engineering, treinamento, avaliação e deploy de modelos em produção.',
      },
      {
        title: 'Cybersecurity & Compliance',
        desc: 'Fundamentos de segurança ofensiva e defensiva, LGPD, SOC 2, ISO 27001 e gestão de identidade (IAM / PAM).',
      },
      {
        title: 'Dados & Analytics (dbt / Spark / Airflow)',
        desc: 'Engenharia de dados moderna: ELT com dbt, processamento distribuído Spark e orquestração de pipelines com Apache Airflow.',
      },
      {
        title: 'Liderança em Tecnologia (Tech Lead Track)',
        desc: 'Gestão de engenharia, arquitetura de decisões técnicas, RFCs, revisão de código e métricas de saúde de equipe (DORA).',
      },
    ],
  },
};

export const agroTechUnit: UnitPageContent = {
  name: 'Agro Tech',
  eyebrow: 'Agricultura de Precisão & AgriData',
  eyebrowIcon: Leaf,
  description:
    'Integração de sensores IoT em campo via LoRaWAN, análise de imagens multiespectrais (NDVI/NDWI) e plataformas de rastreabilidade de cadeia produtiva do campo ao destino final.',
  stats: [
    { value: '22%', label: 'Redução Média no Uso de Insumos' },
    { value: 'LoRaWAN', label: 'Conectividade Rural de Longo Alcance' },
  ],
  cta: { label: 'Solicitar Piloto de Sensoriamento', href: '/contatos?unidade=Nortech+Agro+Tech' },
  spec: {
    icon: Satellite,
    title: 'Protocolos & Tecnologias',
    items: [
      { label: 'Conectividade Campo:', value: 'LoRaWAN / NB-IoT / Sigfox', highlight: true },
      { label: 'Imagens Satélite:', value: 'Sentinel-2 / PlanetScope (NDVI)' },
      { label: 'Rastreabilidade:', value: 'GS1 / QR Code / RFID / Blockchain' },
      { label: 'Plataforma IoT:', value: 'AWS IoT Core / Azure IoT Hub' },
    ],
  },
  deliverables: {
    eyebrow: 'Soluções para o Campo',
    title: 'Plataformas Nortech Agro Tech',
    items: [
      {
        title: 'Monitoramento de Solo & Microclima',
        desc: 'Rede de sensores IoT (temperatura, umidade, pH, condutividade elétrica) com telemetria em tempo real e alertas automáticos por talhão.',
      },
      {
        title: 'Mapeamento Multiespectral com Drone',
        desc: 'Voos com câmeras NDVI/NDWI para geração de mapas de vigor vegetativo, estresse hídrico e zoneamento de produtividade.',
      },
      {
        title: 'Predição de Safra & Planejamento',
        desc: 'Modelos agrometeorológicos e de crescimento de culturas para estimativa de produção com antecedência de 30 a 90 dias.',
      },
      {
        title: 'Rastreabilidade Grain-to-Table',
        desc: 'Plataforma de rastreabilidade integrada ao padrão GS1 com QR codes de origem, certificações de sustentabilidade e conformidade SISBOV.',
      },
      {
        title: 'Gestão de Frota & Telemetria de Maquinário',
        desc: 'Integração com CAN Bus de tratores e colhedeiras para monitoramento de consumo de combustível, horas de operação e manutenção preditiva.',
      },
      {
        title: 'Irrigação de Precisão Automatizada',
        desc: 'Controle automático de pivôs e gotejadores com base em dados de umidade do solo, previsão meteorológica e ETc da cultura.',
      },
    ],
  },
};

export const designStudioUnit: UnitPageContent = {
  name: 'Design Studio',
  eyebrow: 'Design de Produto & Sistemas Visuais',
  eyebrowIcon: Palette,
  description:
    'Do research etnográfico ao design system versionado em produção — cobrindo pesquisa com usuários, prototipação, handoff para engenharia e conformidade com WCAG 2.2 Nível AA.',
  stats: [
    { value: '+38%', label: 'Aumento Médio em Conversão Pós-Redesign' },
    { value: 'WCAG 2.2 AA', label: 'Padrão de Acessibilidade Garantido' },
  ],
  cta: { label: 'Solicitar Auditoria de UX', href: '/contatos?unidade=Nortech+Design+Studio' },
  spec: {
    icon: Layers,
    title: 'Stack de Ferramentas',
    items: [
      { label: 'Prototipação:', value: 'Figma (Component Libraries)', highlight: true },
      { label: 'Design System:', value: 'Storybook + Chromatic' },
      { label: 'Pesquisa Quantitativa:', value: 'Hotjar / FullStory / Mixpanel' },
      { label: 'Acessibilidade:', value: 'axe-core / NVDA / VoiceOver' },
    ],
  },
  deliverables: {
    eyebrow: 'Serviços Especializados',
    title: 'Entregas Nortech Design Studio',
    items: [
      {
        title: 'Design System Escalável',
        desc: 'Biblioteca de componentes com tokens de design (cores, tipografia, espaçamento), versionada e integrada diretamente ao repositório de código via Storybook.',
      },
      {
        title: 'UX Research & Testes de Usabilidade',
        desc: 'Entrevistas qualitativas, card sorting, tree testing, testes moderados e não-moderados com métricas de SUS (System Usability Scale).',
      },
      {
        title: 'Auditoria de Acessibilidade (WCAG 2.2)',
        desc: 'Avaliação manual e automatizada contra critérios WCAG 2.2 Nível AA, com laudo técnico e roadmap de correções priorizadas por impacto.',
      },
      {
        title: 'Redesign Orientado por Dados',
        desc: 'Análise de funis de conversão, mapas de calor e sessões gravadas para embasar decisões de redesign com evidência quantitativa.',
      },
      {
        title: 'Handoff Engenharia (Figma → Código)',
        desc: 'Especificações de componentes com auto-layout, variáveis de design e anotações de comportamento para entrega sem ambiguidade.',
      },
      {
        title: 'Motion Design & Microinterações',
        desc: 'Definição de princípios de animação, curvas de easing e protótipos de microinterações que reforçam a linguagem visual do produto.',
      },
    ],
  },
};

export const healthTechUnit: UnitPageContent = {
  name: 'Health Tech',
  eyebrow: 'Tecnologia para Saúde Digital',
  eyebrowIcon: HeartPulse,
  description:
    'Desenvolvimento de plataformas clínicas com interoperabilidade total via HL7 FHIR R4, PEP (Prontuário Eletrônico do Paciente), telemedicina e modelos preditivos de desfechos, com conformidade LGPD e ANS.',
  stats: [
    { value: 'HL7 FHIR R4', label: 'Padrão de Interoperabilidade Clínica' },
    { value: 'LGPD + ANS', label: 'Conformidade Regulatória Garantida' },
  ],
  cta: { label: 'Solicitar Avaliação de Plataforma', href: '/contatos?unidade=Nortech+Health+Tech' },
  spec: {
    icon: ShieldCheck,
    title: 'Conformidade & Integrações',
    items: [
      { label: 'Interoperabilidade:', value: 'HL7 FHIR R4 / HL7 v2.x / DICOM', highlight: true },
      { label: 'Prontuário (PEP):', value: 'TISS / TUSS / CID-10 / CBHPM' },
      { label: 'Segurança de Dados:', value: 'LGPD + ISO 27799 + HIPAA' },
      { label: 'Telemedicina:', value: 'CFM Res. 2.314/2022 Compliant' },
    ],
  },
  deliverables: {
    eyebrow: 'Soluções Clínicas',
    title: 'Plataformas Nortech Health Tech',
    items: [
      {
        title: 'PEP com Interoperabilidade FHIR',
        desc: 'Prontuário eletrônico nativo em FHIR R4 com APIs abertas para integração com HIS, LIS, RIS e sistemas de glosa eletrônica.',
      },
      {
        title: 'Plataforma de Telemedicina Regulada',
        desc: 'Videoconsulta com prescrição eletrônica, assinatura digital ICP-Brasil e conformidade com a Resolução CFM 2.314/2022.',
      },
      {
        title: 'IA para Diagnóstico por Imagem',
        desc: 'Modelos de visão computacional para análise de exames de imagem (raio-X, tomografia, ressonância) integrados ao fluxo DICOM/PACS.',
      },
      {
        title: 'Predição de Readmissão Hospitalar',
        desc: 'Algoritmos preditivos treinados em dados históricos para identificar pacientes de alto risco antes da alta hospitalar.',
      },
      {
        title: 'Portal do Paciente & Jornada Digital',
        desc: 'Agendamento online, resultado de exames, histórico de consultas e comunicação segura médico-paciente via canal criptografado.',
      },
      {
        title: 'Analytics de Saúde Populacional',
        desc: 'Dashboards epidemiológicos, monitoramento de indicadores assistenciais (IRAS, NPS clínico) e alertas de surtos por geolocalização.',
      },
    ],
  },
};

export const industry40Unit: UnitPageContent = {
  name: 'Industry 4.0',
  eyebrow: 'Manufatura Digital & IIoT',
  eyebrowIcon: Factory,
  description:
    'Digitalização de chão de fábrica com protocolos industriais OPC-UA e MQTT, gêmeos digitais de ativos e processos, integração ERP-MES e manutenção preditiva baseada em machine learning.',
  stats: [
    { value: '40%', label: 'Redução de Paradas Não Planejadas' },
    { value: 'OEE +18pp', label: 'Ganho Médio em Eficiência Global' },
  ],
  cta: {
    label: 'Solicitar Assessment de Maturidade 4.0',
    href: '/contatos?unidade=Nortech+Industry+4.0',
  },
  spec: {
    icon: Activity,
    title: 'Protocolos & Arquitetura',
    items: [
      { label: 'Protocolos IIoT:', value: 'OPC-UA / MQTT / Modbus TCP', highlight: true },
      { label: 'SCADA / MES:', value: 'Ignition / FactoryTalk / WinCC' },
      { label: 'Gêmeo Digital:', value: 'Azure Digital Twins / AWS IoT TwinMaker' },
      { label: 'Integração ERP:', value: 'SAP S/4HANA / TOTVS / Oracle' },
    ],
  },
  deliverables: {
    eyebrow: 'Soluções Industriais',
    title: 'Entregas Nortech Industry 4.0',
    items: [
      {
        title: 'Manutenção Preditiva com ML',
        desc: 'Modelos de anomalia treinados em vibração, temperatura e corrente elétrica de equipamentos para antecipar falhas antes da parada.',
      },
      {
        title: 'Gêmeo Digital de Linha de Produção',
        desc: 'Replica virtual sincronizada em tempo real com o ativo físico para simulação de cenários, otimização de parâmetros e treinamento de operadores.',
      },
      {
        title: 'Integração ERP–MES–SCADA',
        desc: 'Camada de integração entre sistemas de gestão (SAP, TOTVS), execução de manufatura (MES) e supervisão de chão de fábrica (SCADA).',
      },
      {
        title: 'Controle Estatístico de Processo (CEP)',
        desc: 'Cartas de controle em tempo real (Xbar-R, CUSUM, EWMA) com alertas automáticos de derivação e análise de capabilidade Cp/Cpk.',
      },
      {
        title: 'Track & Trace de Lotes (MES)',
        desc: 'Rastreamento de lotes e ordens de produção ponta a ponta, com genealogia completa para auditorias de qualidade e recalls ágeis.',
      },
      {
        title: 'Dashboards OEE & Análise de Perdas',
        desc: 'Monitoramento em tempo real de Disponibilidade, Performance e Qualidade com categorização automática de perdas via OEE Waterfall.',
      },
    ],
  },
};

export const smartCitiesUnit: UnitPageContent = {
  name: 'Smart Cities',
  eyebrow: 'Tecnologia para Gestão Urbana',
  eyebrowIcon: Building2,
  description:
    'Plataformas integradas de gestão urbana que conectam mobilidade, segurança pública, infraestrutura e serviços municipais em um único painel de controle com dados em tempo real.',
  stats: [
    { value: '40%', label: 'Redução de Custos Operacionais' },
    { value: '99.9%', label: 'Uptime de Plataforma IoT' },
  ],
  cta: { label: 'Falar com um Especialista', href: '/contatos?unidade=Nortech+Smart+Cities' },
  spec: {
    icon: Wifi,
    title: 'Infraestrutura de Plataforma',
    items: [
      { label: 'Protocolos IoT:', value: 'MQTT, LoRaWAN, NB-IoT' },
      { label: 'Painel de Controle:', value: 'GIS + Dashboards em Tempo Real', highlight: true },
      { label: 'Integração Gov:', value: 'APIs DETRAN, SAMU, GDF' },
      { label: 'Segurança:', value: 'LGPD Compliant + Criptografia E2E', highlight: true },
    ],
  },
  deliverables: {
    eyebrow: 'Capacidades Técnicas',
    title: 'Soluções Nortech Smart Cities',
    items: [
      {
        title: 'Mobilidade Urbana Inteligente',
        desc: 'Monitoramento de frotas, semáforos adaptativos e controle de tráfego em tempo real com IA preditiva.',
      },
      {
        title: 'Segurança Pública & Videomonitoramento',
        desc: 'Rede de câmeras com reconhecimento facial, detecção de anomalias e integração com centrais de segurança.',
      },
      {
        title: 'Gestão de Infraestrutura & Utilities',
        desc: 'Monitoramento remoto de redes de água, energia e iluminação pública com alertas automatizados.',
      },
      {
        title: 'Central de Dados Urbanos',
        desc: 'Data lake municipal centralizado com painéis GIS, relatórios de indicadores e APIs abertas para gov.',
      },
      {
        title: 'Saúde & Assistência Social Conectada',
        desc: 'Plataformas de telemedicina, rastreio de vulnerabilidade social e gestão de UBSs integradas.',
      },
      {
        title: 'Meio Ambiente & Sustentabilidade',
        desc: 'Sensores de qualidade do ar, monitoramento de rios e índices de sustentabilidade urbana.',
      },
    ],
  },
  pillars: [
    {
      icon: Wifi,
      title: 'Conectividade Total',
      desc: 'Infraestrutura IoT de baixo consumo cobrindo toda a área urbana com sensores e gateways.',
    },
    {
      icon: BarChart3,
      title: 'Decisão Baseada em Dados',
      desc: 'Analytics em tempo real para gestores públicos tomarem decisões fundamentadas em evidências.',
    },
    {
      icon: ShieldCheck,
      title: 'Conformidade & Privacidade',
      desc: 'Plataforma 100% aderente à LGPD com gestão de consentimento e auditoria de dados.',
    },
  ],
};

export const innovationHubUnit: UnitPageContent = {
  name: 'Innovation Hub',
  eyebrow: 'Inovação Aberta & Aceleração',
  eyebrowIcon: Lightbulb,
  description:
    'Ecossistema de inovação aberta que conecta startups, grandes empresas e pesquisadores em programas de aceleração, laboratórios de co-criação e hackathons de alto impacto.',
  stats: [
    { value: '120+', label: 'Startups Aceleradas' },
    { value: 'R$50M+', label: 'em Funding Gerado' },
    { value: '34', label: 'Parceiros Corporativos' },
  ],
  cta: {
    label: 'Inscreva sua Startup ou Empresa',
    href: '/contatos?unidade=Nortech+Innovation+Hub',
  },
  spec: {
    icon: Rocket,
    title: 'Programas Ativos',
    items: [
      { label: 'Aceleração Seed:', value: '6 meses · 3 turmas/ano', highlight: true },
      { label: 'Corporate Lab:', value: 'Co-criação com Grandes Empresas' },
      {
        label: 'Hackathon Anual:',
        value: '500+ participantes · R$200k em prêmios',
        highlight: true,
      },
      { label: 'Pré-aceleração:', value: '12 semanas · Validação de Mercado' },
    ],
  },
  deliverables: {
    eyebrow: 'O que Oferecemos',
    title: 'Serviços do Nortech Innovation Hub',
    items: [
      {
        title: 'Programa de Aceleração de Startups',
        desc: 'Mentoria intensiva, conexão com investidores, suporte jurídico e alocação em espaço de co-working premium.',
      },
      {
        title: 'Corporate Innovation Lab',
        desc: 'Laboratórios dedicados para grandes empresas desenvolverem P&D com metodologias ágeis e squads multidisciplinares.',
      },
      {
        title: 'Hackathons & Open Innovation',
        desc: 'Desafios de inovação aberta com premiações em dinheiro, conexão com venture capital e oportunidades de piloto.',
      },
      {
        title: 'Matchmaking Startup × Corporativo',
        desc: 'Curadoria inteligente para conectar startups com desafios reais de grandes empresas parceiras do hub.',
      },
      {
        title: 'Residência Tecnológica',
        desc: 'Programa de residência para pesquisadores e cientistas de dados desenvolverem soluções aplicadas ao mercado.',
      },
      {
        title: 'Fundo de Investimento Seed',
        desc: 'Acesso a cheques iniciais para startups de base tecnológica com foco em impacto e escalabilidade.',
      },
    ],
  },
  pillars: [
    {
      icon: Rocket,
      title: 'Aceleração Real',
      desc: 'Programas estruturados com mentores seniores, EIRs e acesso direto à rede corporativa da Nortech.',
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      desc: 'Mais de 500 founders, mentores e executivos conectados em eventos mensais e rede exclusiva.',
    },
    {
      icon: Trophy,
      title: 'Track Record',
      desc: '120+ startups com exits, aquisições e rodadas Series A concluídas após passagem pelo hub.',
    },
  ],
};
