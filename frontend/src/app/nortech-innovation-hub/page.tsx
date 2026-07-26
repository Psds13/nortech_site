import { Metadata } from 'next';
import UnitLandingPage from '@/components/units/UnitLandingPage';
import { innovationHubUnit } from '@/data/units';

export const metadata: Metadata = {
  title: 'Nortech Innovation Hub | Aceleração e Inovação Corporativa',
  description: 'Hub de inovação aberta da Nortech: aceleração de startups, laboratórios de inovação corporativa, hackathons e programas de co-criação.',
};

export default function NortechInnovationHubPage() {
  return <UnitLandingPage content={innovationHubUnit} />;
}
