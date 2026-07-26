import { Metadata } from 'next';
import UnitLandingPage from '@/components/units/UnitLandingPage';
import { industry40Unit } from '@/data/units';

export const metadata: Metadata = {
  title: 'Nortech Industry 4.0 | IIoT, SCADA, Digital Twins & Manutenção Preditiva',
  description: 'Industrialização digital com protocolos OPC-UA / MQTT, gêmeos digitais, integração ERP-MES e manutenção preditiva baseada em ML.',
};

export default function NortechIndustry40Page() {
  return <UnitLandingPage content={industry40Unit} />;
}
