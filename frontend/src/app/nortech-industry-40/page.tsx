import { Metadata } from 'next';
import Link from 'next/link';
import { Factory, CheckCircle2, ArrowRight, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Industry 4.0 | IIoT, SCADA, Digital Twins & Manutenção Preditiva',
  description: 'Industrialização digital com protocolos OPC-UA / MQTT, gêmeos digitais, integração ERP-MES e manutenção preditiva baseada em ML.',
};

export default function NortechIndustry40Page() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              <span>Manufatura Digital & IIoT</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">Industry 4.0</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Digitalização de chão de fábrica com protocolos industriais OPC-UA e MQTT, gêmeos digitais de ativos e processos, integração ERP-MES e manutenção preditiva baseada em machine learning.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-cyan">40%</p>
                <p className="text-xs font-semibold text-slate-400">Redução de Paradas Não Planejadas</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">OEE +18pp</p>
                <p className="text-xs font-semibold text-slate-400">Ganho Médio em Eficiência Global</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+Industry+4.0"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar Assessment de Maturidade 4.0</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <Activity className="w-5 h-5 text-cyan" />
              <span>Protocolos & Arquitetura</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Protocolos IIoT:</span>
                <span className="text-cyan font-bold">OPC-UA / MQTT / Modbus TCP</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">SCADA / MES:</span>
                <span className="text-white font-bold">Ignition / FactoryTalk / WinCC</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Gêmeo Digital:</span>
                <span className="text-white font-bold">Azure Digital Twins / AWS IoT TwinMaker</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Integração ERP:</span>
                <span className="text-white font-bold">SAP S/4HANA / TOTVS / Oracle</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Soluções Industriais</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Entregas Nortech Industry 4.0
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Manutenção Preditiva com ML',
              desc: 'Modelos de anomalia treinados em vibração, temperatura e corrente elétrica de equipamentos para antecipar falhas antes da parada.'
            },
            {
              title: 'Gêmeo Digital de Linha de Produção',
              desc: 'Replica virtual sincronizada em tempo real com o ativo físico para simulação de cenários, otimização de parâmetros e treinamento de operadores.'
            },
            {
              title: 'Integração ERP–MES–SCADA',
              desc: 'Camada de integração entre sistemas de gestão (SAP, TOTVS), execução de manufatura (MES) e supervisão de chão de fábrica (SCADA).'
            },
            {
              title: 'Controle Estatístico de Processo (CEP)',
              desc: 'Cartas de controle em tempo real (Xbar-R, CUSUM, EWMA) com alertas automáticos de derivação e análise de capabilidade Cp/Cpk.'
            },
            {
              title: 'Track & Trace de Lotes (MES)',
              desc: 'Rastreamento de lotes e ordens de produção ponta a ponta, com genealogia completa para auditorias de qualidade e recalls ágeis.'
            },
            {
              title: 'Dashboards OEE & Análise de Perdas',
              desc: 'Monitoramento em tempo real de Disponibilidade, Performance e Qualidade com categorização automática de perdas via OEE Waterfall.'
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
