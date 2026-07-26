import { Metadata } from 'next';
import UnitLandingPage from '@/components/units/UnitLandingPage';
import { healthTechUnit } from '@/data/units';

export const metadata: Metadata = {
  title: 'Nortech Health Tech | HL7/FHIR, Prontuário Eletrônico & IA Clínica',
  description: 'Plataformas de saúde digital com interoperabilidade HL7 FHIR R4, prontuário eletrônico, telemedicina e modelos preditivos para desfechos clínicos.',
};

export default function NortechHealthTechPage() {
  return <UnitLandingPage content={healthTechUnit} />;
}
