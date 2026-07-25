// src/data/navigation.ts
import { NavRoute } from '@/types';

export const MAIN_NAV_ROUTES: NavRoute[] = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Ecossistemas', href: '/ecossistemas', badge: '17 Unidades' },
  { name: 'Nortech Network', href: '/nortech-network', badge: 'Infra & TI' },
  { name: 'Planos', href: '/plans' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contatos' }
];

export const FOOTER_NAV_SECTIONS = [
  {
    title: 'Institucional',
    links: [
      { name: 'Sobre a Nortech', href: '/sobre' },
      { name: 'Processo de Desenvolvimento', href: '/processo' },
      { name: 'Portfólio & Casos de Sucesso', href: '/portfolios' },
      { name: 'Planos Corporativos', href: '/plans' },
      { name: 'Carreiras & Vagas', href: '/carreiras' },
      { name: 'Blog & Insight Tech', href: '/blog' },
      { name: 'Contato', href: '/contatos' }
    ]
  },
  {
    title: 'Ecossistemas Principais',
    links: [
      { name: 'Nortech Network (Infra TI)', href: '/nortech-network' },
      { name: 'Nortech Software', href: '/servicos' },
      { name: 'Nortech AI', href: '/#ai' },
      { name: 'Nortech Cyber Security', href: '/nortech-security' },
      { name: 'Nortech Green Tech', href: '/green-tech' },
      { name: 'Nortech Accessibility', href: '/nortech-accessibility' },
      { name: 'Nortech Games', href: '/nortech-games' },
      { name: 'Todos os 17 Ecossistemas', href: '/ecossistemas' }
    ]
  },
  {
    title: 'Painel & Serviços',
    links: [
      { name: 'Área do Cliente', href: '/login' },
      { name: 'Painel Administrativo', href: '/dashboard' },
      { name: 'Gestão Financeira', href: '/dashboard' },
      { name: 'Meus Projetos', href: '/dashboard' },
      { name: 'Suporte & Chamados NOC', href: '/nortech-network#suporte' },
      { name: 'Central de Ajuda & FAQ', href: '/contatos#faq' }
    ]
  },
  {
    title: 'Governança & Termos',
    links: [
      { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { name: 'Termos de Uso', href: '/termos-de-uso' },
      { name: 'Segurança da Informação', href: '/nortech-security' },
      { name: 'Conformidade LGPD', href: '/politica-de-privacidade' }
    ]
  }
];
