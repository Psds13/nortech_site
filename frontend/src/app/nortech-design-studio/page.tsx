import { Metadata } from 'next';
import UnitLandingPage from '@/components/units/UnitLandingPage';
import { designStudioUnit } from '@/data/units';

export const metadata: Metadata = {
  title: 'Nortech Design Studio | UX/UI, Design Systems & Acessibilidade',
  description: 'Design de produto orientado por dados, sistemas de design escaláveis, pesquisa com usuários e conformidade com WCAG 2.2 AA.',
};

export default function NortechDesignStudioPage() {
  return <UnitLandingPage content={designStudioUnit} />;
}
