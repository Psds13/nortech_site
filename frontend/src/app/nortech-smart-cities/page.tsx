import { Metadata } from 'next';
import UnitLandingPage from '@/components/units/UnitLandingPage';
import { smartCitiesUnit } from '@/data/units';

export const metadata: Metadata = {
  title: 'Nortech Smart Cities | Tecnologia para Cidades Inteligentes',
  description: 'Soluções tecnológicas para gestão urbana inteligente: mobilidade, segurança pública, infraestrutura e dados em tempo real.',
};

export default function NortechSmartCitiesPage() {
  return <UnitLandingPage content={smartCitiesUnit} />;
}
