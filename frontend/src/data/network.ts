// src/data/network.ts
import { NetworkServiceDetail } from '@/types';

export const NETWORK_SERVICES: NetworkServiceDetail[] = [
  {
    id: 'cabamento-estruturado',
    title: 'Cabeamento Estruturado & Fibra Óptica',
    description: 'Projetos completos de infraestrutura física de rede, lançamento e fusão de fibra óptica, certificação de canais de dados com equipamentos Fluke.',
    icon: 'Cable',
    badge: 'Certificação Fluke ISO/IEC 11801',
    deliverables: [
      'Projetos executivos de cabeamento Cat6, Cat6A e Cat7',
      'Lançamento, fusão e conectorização de Fibra Óptica Monomodo e Multimodo',
      'Organização, identificação e montagem de Racks de Telecomunicações',
      'Emissão de laudo técnico com certficador de rede e garantia de 10 anos'
    ],
    specs: [
      { label: 'Padrão Normativo', detail: 'ANSI/TIA-568-D & ISO/IEC 11801' },
      { label: 'Velocidade Suportada', detail: 'Até 10Gbps em Cobre / 100Gbps em Fibra' },
      { label: 'Documentação', detail: 'As-Built Completo + Mapa de Portas' }
    ]
  },
  {
    id: 'servidores-virtualizacao',
    title: 'Servidores & Virtualização Corporativa',
    description: 'Dimensionamento, instalação e gerenciamento de servidores físicos, clusters de virtualização de alta disponibilidade (HA) e storages SAN/NAS.',
    icon: 'Server',
    badge: 'Alta Disponibilidade HA',
    deliverables: [
      'Implantação de Clusters VMware vSphere, Proxmox VE e Hyper-V',
      'Configuração de Storage All-Flash SAN / NAS (iSCSI & NFS)',
      'Dimensionamento de Servidores Dell PowerEdge / HPE ProLiant',
      'Migração de ambientes físicos para virtuais (P2V) sem downtime'
    ],
    specs: [
      { label: 'Hypervisors', detail: 'Proxmox VE, VMware ESXi, Hyper-V' },
      { label: 'Disponibilidade', detail: 'Cluster Ativo/Ativo com Live Migration' },
      { label: 'Backups Virtuais', detail: 'Veeam Backup & Immutable Storage' }
    ]
  },
  {
    id: 'redes-corporativas',
    title: 'Redes, SD-WAN & Wi-Fi Corporativo',
    description: 'Arquitetura de rede corporativa segura, switches gerenciáveis L2/L3, roteamento BGP, SD-WAN e redes Wi-Fi 6E com roaming contínuo.',
    icon: 'Wifi',
    badge: 'Wi-Fi 6E & Zero-Downtime',
    deliverables: [
      'Segregamento de Vlan por departamento e regras de Firewall de Borda',
      'Implantação de Wi-Fi Corporativo com controle de banda e portal visitante',
      'Arquitetura SD-WAN para interconexão segura de matriz e filiais',
      'Gerenciamento centralizado via Mikrotik, Fortinet, Cisco e Ubiquiti UniFi'
    ],
    specs: [
      { label: 'Segurança de Rede', detail: '802.1X, Radius, WPA3 Enterprise' },
      { label: 'Hardware Parceiro', detail: 'Fortinet, Cisco, Mikrotik, Ubiquiti' },
      { label: 'Redundância', detail: 'Dual WAN Failover / BGP Multihoming' }
    ]
  },
  {
    id: 'telefonia-ip',
    title: 'Telefonia IP & Comunicação Unificada',
    description: 'PABX IP corporativo em nuvem ou local, entroncamento SIP, URAs inteligentes, gravação de chamadas e ramais no smartphone.',
    icon: 'PhoneCall',
    badge: 'Redução de Custos de Até 60%',
    deliverables: [
      'Implantação de PABX IP 3CX e Asterisk corporativo',
      'URAs de atendimento com rotas inteligentes e transbordo',
      'Softphones integrados no Windows, macOS, Android e iOS',
      'Integração de telefonia com sistemas CRM e WhatsApp Business'
    ],
    specs: [
      { label: 'Protocolo', detail: 'SIP / WebRTC Encriptado TLS/SRTP' },
      { label: 'Ramais Inclusos', detail: 'Ilimitados por Servidor Dedicated' },
      { label: 'Recursos', detail: 'Gravação, Audioconferência, Fax to Mail' }
    ]
  },
  {
    id: 'suporte-noc-247',
    title: 'Suporte Técnico & Monitoramento NOC 24/7',
    description: 'Gestão contínua da TI com equipes de suporte presencial e remoto (N1, N2 e N3), além de monitoramento proativo de ativos 24 horas por dia.',
    icon: 'Headset',
    badge: 'SLA < 15 Minutos',
    deliverables: [
      'Monitoramento proativo em tempo real via Zabbix / Grafana / Datadog',
      'Atendimento remoto ilimitado para usuários e resolução rápida de chamados',
      'Técnicos residentes ou visitas preventivas periódicas presenciais',
      'Relatórios mensais de saúde da infraestrutura e inventário de TI'
    ],
    specs: [
      { label: 'Níveis de Suporte', detail: 'N1 (Helpdesk), N2 (Sistemas), N3 (Especialistas)' },
      { label: 'Disponibilidade NOC', detail: '24 horas por dia, 365 dias por ano' },
      { label: 'Atendimento SLA', detail: 'Crítico: 15 min | Alto: 1h | Normal: 4h' }
    ]
  },
  {
    id: 'infraestrutura-nuvem-hibrida',
    title: 'Infraestrutura em Nuvem & Datacenter',
    description: 'Conexão direta de datacenters locais com AWS e Azure, colocation, backup offsite criptografado e infraestrutura híbrida de dados.',
    icon: 'CloudCog',
    badge: 'Backup Imutável Anti-Ransomware',
    deliverables: [
      'Projetos de nuvem híbrida com VPN IPsec e DirectConnect',
      'Gestão e manutenção de servidores dedicados em Datacenters Tier III',
      'Rotinas de backup externo automatizado com proteção contra Ransomware',
      'Plano de Continuidade de Negócios e Recuperação de Desastres (DRP)'
    ],
    specs: [
      { label: 'Datacenters', detail: 'Conformidade Tier III e ISO 27001' },
      { label: 'Retenção Backup', detail: 'Políticas configuráveis (3-2-1 Backup)' },
      { label: 'Criptografia', detail: 'AES-256 em trânsito e em repouso' }
    ]
  }
];

export const NETWORK_METRICS = [
  { value: '99.98%', label: 'Uptime Médio Garantido' },
  { value: '+8.500', label: 'Pontos de Rede Certificados' },
  { value: '< 15min', label: 'SLA Atendimento Crítico' },
  { value: '+350', label: 'Empresas Atendidas' }
];

export const SLA_LEVELS = [
  {
    name: 'Essencial',
    sla: 'SLA 4 Horas',
    coverage: 'Horário Comercial (08h às 18h)',
    features: ['Suporte Remoto Ilimitado N1/N2', 'Monitoramento Basico de Rede', 'Gestão de Antivírus e Patches', 'Relatório Mensal']
  },
  {
    name: 'Enterprise',
    sla: 'SLA 1 Hora',
    coverage: '24x7 Ininterrupto',
    isPopular: true,
    features: ['Suporte Remoto & Presencial N1/N2/N3', 'NOC 24/7 com Alerta Proativo', 'Gestão de Servidores & Backup', 'Visitas Preventivas Mensais', 'Técnico Dedicado']
  },
  {
    name: 'Mission Critical',
    sla: 'SLA 15 Minutos',
    coverage: '24x7 Dedicado com Engenheiro de Plantão',
    features: ['Técnico Residente On-Site', 'Monitoramento NOC em Tempo Real', 'Gestão Total de Redes, Telecom e Cloud', 'Recuperação de Desastres Garantida', 'Gerente de Conta Exclusivo']
  }
];
