import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle2, ArrowRight, Wifi, BarChart3, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Smart Cities | Tecnologia para Cidades Inteligentes',
  description: 'Soluções tecnológicas para gestão urbana inteligente: mobilidade, segurança pública, infraestrutura e dados em tempo real.',
};

export default function NortechSmartCitiesPage() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Tecnologia para Gestão Urbana</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">Smart Cities</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Plataformas integradas de gestão urbana que conectam mobilidade, segurança pública, infraestrutura e serviços municipais em um único painel de controle com dados em tempo real.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-cyan">40%</p>
                <p className="text-xs font-semibold text-slate-400">Redução de Custos Operacionais</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">99.9%</p>
                <p className="text-xs font-semibold text-slate-400">Uptime de Plataforma IoT</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+Smart+Cities"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Falar com um Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <Wifi className="w-5 h-5 text-cyan" />
              <span>Infraestrutura de Plataforma</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Protocolos IoT:</span>
                <span className="text-white font-bold">MQTT, LoRaWAN, NB-IoT</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Painel de Controle:</span>
                <span className="text-cyan font-bold">GIS + Dashboards em Tempo Real</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Integração Gov:</span>
                <span className="text-white font-bold">APIs DETRAN, SAMU, GDF</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Segurança:</span>
                <span className="text-cyan font-bold">LGPD Compliant + Criptografia E2E</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Capacidades Técnicas</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Soluções Nortech Smart Cities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Mobilidade Urbana Inteligente",
              desc: "Monitoramento de frotas, semáforos adaptativos e controle de tráfego em tempo real com IA preditiva."
            },
            {
              title: "Segurança Pública & Videomonitoramento",
              desc: "Rede de câmeras com reconhecimento facial, detecção de anomalias e integração com centrais de segurança."
            },
            {
              title: "Gestão de Infraestrutura & Utilities",
              desc: "Monitoramento remoto de redes de água, energia e iluminação pública com alertas automatizados."
            },
            {
              title: "Central de Dados Urbanos",
              desc: "Data lake municipal centralizado com painéis GIS, relatórios de indicadores e APIs abertas para gov."
            },
            {
              title: "Saúde & Assistência Social Conectada",
              desc: "Plataformas de telemedicina, rastreio de vulnerabilidade social e gestão de UBSs integradas."
            },
            {
              title: "Meio Ambiente & Sustentabilidade",
              desc: "Sensores de qualidade do ar, monitoramento de rios e índices de sustentabilidade urbana."
            }
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

      {/* Pillars */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Wifi className="w-6 h-6 text-cyan" />, title: "Conectividade Total", desc: "Infraestrutura IoT de baixo consumo cobrindo toda a área urbana com sensores e gateways." },
              { icon: <BarChart3 className="w-6 h-6 text-cyan" />, title: "Decisão Baseada em Dados", desc: "Analytics em tempo real para gestores públicos tomarem decisões fundamentadas em evidências." },
              { icon: <ShieldCheck className="w-6 h-6 text-cyan" />, title: "Conformidade & Privacidade", desc: "Plataforma 100% aderente à LGPD com gestão de consentimento e auditoria de dados." },
            ].map((item, idx) => (
              <div key={idx} className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
                {item.icon}
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
