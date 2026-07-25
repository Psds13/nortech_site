import { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, CheckCircle2, ArrowRight, Satellite } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Agro Tech | Agricultura de Precisão, IoT Rural & Agri-Data',
  description: 'Plataformas de agricultura de precisão com sensores IoT (LoRaWAN), imagens de satélite NDVI, rastreabilidade de cadeia e analytics de produtividade.',
};

export default function NortechAgroTechPage() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              <span>Agricultura de Precisão & AgriData</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">Agro Tech</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Integração de sensores IoT em campo via LoRaWAN, análise de imagens multiespectrais (NDVI/NDWI) e plataformas de rastreabilidade de cadeia produtiva do campo ao destino final.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-cyan">22%</p>
                <p className="text-xs font-semibold text-slate-400">Redução Média no Uso de Insumos</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">LoRaWAN</p>
                <p className="text-xs font-semibold text-slate-400">Conectividade Rural de Longo Alcance</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+Agro+Tech"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar Piloto de Sensoriamento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <Satellite className="w-5 h-5 text-cyan" />
              <span>Protocolos & Tecnologias</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Conectividade Campo:</span>
                <span className="text-cyan font-bold">LoRaWAN / NB-IoT / Sigfox</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Imagens Satélite:</span>
                <span className="text-white font-bold">Sentinel-2 / PlanetScope (NDVI)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Rastreabilidade:</span>
                <span className="text-white font-bold">GS1 / QR Code / RFID / Blockchain</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Plataforma IoT:</span>
                <span className="text-white font-bold">AWS IoT Core / Azure IoT Hub</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Soluções para o Campo</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Plataformas Nortech Agro Tech
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Monitoramento de Solo & Microclima',
              desc: 'Rede de sensores IoT (temperatura, umidade, pH, condutividade elétrica) com telemetria em tempo real e alertas automáticos por talhão.'
            },
            {
              title: 'Mapeamento Multiespectral com Drone',
              desc: 'Voos com câmeras NDVI/NDWI para geração de mapas de vigor vegetativo, estresse hídrico e zoneamento de produtividade.'
            },
            {
              title: 'Predição de Safra & Planejamento',
              desc: 'Modelos agrometeorológicos e de crescimento de culturas para estimativa de produção com antecedência de 30 a 90 dias.'
            },
            {
              title: 'Rastreabilidade Grain-to-Table',
              desc: 'Plataforma de rastreabilidade integrada ao padrão GS1 com QR codes de origem, certificações de sustentabilidade e conformidade SISBOV.'
            },
            {
              title: 'Gestão de Frota & Telemetria de Maquinário',
              desc: 'Integração com CAN Bus de tratores e colhedeiras para monitoramento de consumo de combustível, horas de operação e manutenção preditiva.'
            },
            {
              title: 'Irrigação de Precisão Automatizada',
              desc: 'Controle automático de pivôs e gotejadores com base em dados de umidade do solo, previsão meteorológica e ETc da cultura.'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan shrink-0" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 pl-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
