import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { NORTECH_ECOSYSTEMS } from '@/data/ecosystems';
import { 
  Code2, 
  BrainCircuit, 
  Leaf, 
  Accessibility, 
  Gamepad2, 
  Network, 
  ShieldCheck, 
  Cloud, 
  BarChart3, 
  FlaskConical, 
  GraduationCap, 
  Palette, 
  Stethoscope, 
  Tractor, 
  Factory, 
  Building2, 
  Rocket,
  CheckCircle2,
  ArrowRight,
  Layers,
  Cpu
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BrainCircuit,
  Leaf,
  Accessibility,
  Gamepad2,
  Network,
  ShieldCheck,
  Cloud,
  BarChart3,
  FlaskConical,
  GraduationCap,
  Palette,
  Stethoscope,
  Tractor,
  Factory,
  Building2,
  Rocket
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NORTECH_ECOSYSTEMS.map((eco) => ({
    slug: eco.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ecosystem = NORTECH_ECOSYSTEMS.find((e) => e.id === slug);

  if (!ecosystem) {
    return {
      title: 'Ecossistema Não Encontrado | Nortech Inovação',
    };
  }

  return {
    title: `${ecosystem.name} | Soluções Corporativas Nortech`,
    description: ecosystem.fullDescription,
  };
}

export default async function EcosystemDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ecosystem = NORTECH_ECOSYSTEMS.find((e) => e.id === slug);

  if (!ecosystem) {
    notFound();
  }

  const IconComponent = iconMap[ecosystem.iconName] || Layers;

  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <IconComponent className="w-3.5 h-3.5" />
              <span>{ecosystem.categoryName}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              {ecosystem.name}
            </h1>

            <p className="text-lg text-cyan font-semibold">
              {ecosystem.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {ecosystem.fullDescription}
            </p>

            {/* Metrics */}
            {ecosystem.metrics && (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                {ecosystem.metrics.map((m, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-extrabold text-cyan">{m.value}</p>
                    <p className="text-xs font-semibold text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/contatos?unidade=${encodeURIComponent(ecosystem.name)}`}
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar Proposta Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Spec Card */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <Cpu className="w-5 h-5 text-cyan" />
              <span>Ficha Técnica do Ecossistema</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Categoria:</span>
                <span className="text-white font-bold">{ecosystem.categoryName}</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Modelo de Execução:</span>
                <span className="text-cyan font-bold">Módulo Desacoplado / SaaS</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">SLA Contratual:</span>
                <span className="text-emerald-400 font-bold">Atendimento 24/7 Garantido</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Conformidade:</span>
                <span className="text-white font-bold">LGPD & ISO Compliant</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Entregáveis Técnicos</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Recursos & Capacidades da Unidade
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Principais frentes de implementação desenvolvidas pela equipe especializada de {ecosystem.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecosystem.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-cyan/50 transition-all"
            >
              <div className="p-3 rounded-xl bg-cyan/10 text-cyan shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{feat}</h4>
                <p className="text-xs text-slate-500">
                  Implementação corporativa alinhada com as melhores práticas de mercado e segurança.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
          Deseja integrar {ecosystem.name} ao seu ambiente?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Nossos consultores executivos e engenheiros estão prontos para analisar seu projeto.
        </p>
        <Link
          href={`/contatos?unidade=${encodeURIComponent(ecosystem.name)}`}
          className="inline-flex items-center gap-2 bg-cyan text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-cyan/90 transition-all shadow-lg"
        >
          <span>Falar com Especialista de {ecosystem.name}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
