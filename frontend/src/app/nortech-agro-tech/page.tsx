import { Metadata } from 'next';
import UnitLandingPage from '@/components/units/UnitLandingPage';
import { agroTechUnit } from '@/data/units';

export const metadata: Metadata = {
  title: 'Nortech Agro Tech | Agricultura de Precisão, IoT Rural & Agri-Data',
  description: 'Plataformas de agricultura de precisão com sensores IoT (LoRaWAN), imagens de satélite NDVI, rastreabilidade de cadeia e analytics de produtividade.',
};

export default function NortechAgroTechPage() {
  return <UnitLandingPage content={agroTechUnit} />;
}
