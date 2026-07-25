import { Metadata } from 'next';
import Link from 'next/link';
import { NETWORK_SERVICES, NETWORK_METRICS, SLA_LEVELS } from '@/data/network';
import { 
  Network, 
  Cable, 
  Server, 
  Wifi, 
  PhoneCall, 
  Headset, 
  CloudCog, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Network | Infraestrutura de TI, Redes & Suporte 24/7',
  description: 'Projetos de cabeamento estruturado, servidores, virtualização, telefonia IP, suporte presencial/remoto e monitoramento NOC 24/7.',
};

const iconMap: Record<string, React.ElementType> = {
  Cable,
  Server,
  Wifi,
  PhoneCall,
  Headset,
  CloudCog
};

export default function NortechNetworkPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-900 to-background text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <Network className="w-3.5 h-3.5" />
              <span>Infraestrutura Tecnológica & Suporte Crítico</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Nortech <span className="text-cyan">NETWORK</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Engenharia de infraestrutura de TI corporativa, redes de alta disponibilidade, cabeamento estruturado com certificação Fluke, servidores, virtualização e monitoramento proativo NOC 24 horas por dia.
            </p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              {NETWORK_METRICS.map((metric, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-extrabold text-cyan">{metric.value}</p>
                  <p className="text-[11px] text-slate-400 font-semibold">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contatos?solucao=network"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,219,255,0.3)] inline-flex items-center gap-2"
              >
                <span>Solicitar Projeto / Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="#servicos"
                className="border border-slate-700 hover:border-cyan text-slate-300 hover:text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                Explorar Soluções
              </a>
            </div>
          </div>

          {/* Right Architecture Card */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <Activity className="w-5 h-5 text-cyan" />
              <span>NOC & SOC Status de Operação</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-300 font-semibold">Monitoramento de Redes (NOC)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">OPERACIONAL 24/7</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-300 font-semibold">SLA de Atendimento Crítico</span>
                <span className="text-cyan font-bold">&lt; 15 Minutos</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-300 font-semibold">Certificação de Padrão</span>
                <span className="text-slate-200 font-bold">ANSI/TIA-568-D & ISO 11801</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-300 font-semibold">Modo de Suporte</span>
                <span className="text-cyan font-bold">Presencial & Remoto N1/N2/N3</span>
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-cyan" />
                Garantia de laudo executivo e suporte continuo
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-16 px-4 lg:px-8 max-w-[1536px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            Soluções Especializadas da <span className="text-cyan">Nortech Network</span>
          </h2>
          <p className="text-xs lg:text-sm text-slate-600 dark:text-slate-400">
            Cobertura completa para a infraestrutura física e lógica da sua corporação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NETWORK_SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Network;
            return (
              <div
                key={service.id}
                className="bg-card-bg border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan/50 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-cyan/10 text-cyan border border-cyan/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-cyan border border-cyan/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-4 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Entregáveis Principais:</p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs breakdown */}
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50 mt-4 space-y-1">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="text-slate-500 font-semibold">{spec.label}:</span>
                      <span className="text-slate-800 dark:text-slate-200 font-bold">{spec.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SLA Levels Section */}
      <section className="py-16 px-4 lg:px-8 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-cyan text-xs font-bold uppercase tracking-wider">Níveis de Garantia Contratual</span>
            <h2 className="text-3xl font-extrabold">Planos de Suporte & SLAs Garatidos</h2>
            <p className="text-xs text-slate-400">Escolha a cobertura ideal para o nível de criticidade do seu ambiente de TI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SLA_LEVELS.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-slate-800/90 border rounded-2xl p-8 flex flex-col justify-between relative ${
                  plan.isPopular ? 'border-cyan shadow-[0_0_30px_rgba(0,219,255,0.2)]' : 'border-slate-700'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-black font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                    Mais Recomendado
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <div className="flex items-center gap-2 text-cyan font-extrabold text-lg mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{plan.sla}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">{plan.coverage}</p>

                  <div className="space-y-3 border-t border-slate-700 pt-4">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contatos?sla=${plan.name.toLowerCase()}`}
                    className={`w-full block text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      plan.isPopular
                        ? 'bg-cyan text-black hover:bg-cyan/90'
                        : 'border border-slate-600 hover:border-cyan text-white'
                    }`}
                  >
                    Contratar {plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Callout */}
      <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Precisa de uma Auditoria de Infraestrutura ou Novo Projeto?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Nossos engenheiros de rede e infraestrutura realizam o diagnóstico presencial ou remoto para emitir o parecer técnico.
        </p>
        <Link
          href="/contatos?assunto=auditoria-network"
          className="inline-flex items-center gap-2 bg-cyan text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-cyan/90 transition-all shadow-lg"
        >
          <span>Falar com Engenheiro de Redes</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
