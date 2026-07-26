import { Metadata } from 'next';
import UnitLandingPage from '@/components/units/UnitLandingPage';
import { academyUnit } from '@/data/units';

export const metadata: Metadata = {
  title: 'Nortech Academy | Capacitação Técnica & Trilhas de Certificação',
  description: 'Bootcamps corporativos, trilhas de certificação em Cloud, AI e DevOps, e programas de upskilling para equipes de tecnologia.',
};

export default function NortechAcademyPage() {
  return <UnitLandingPage content={academyUnit} />;
}
