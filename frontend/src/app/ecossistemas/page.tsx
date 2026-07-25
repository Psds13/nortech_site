import { Metadata } from 'next';
import EcosystemsGrid from '@/app/components/ecosystems/EcosystemsGrid';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ecossistemas | Nortech Inovação',
  description: 'Conheça os 17 ecossistemas de negócios e unidades tecnológicas da Nortech Inovação.',
};

export default function EcossistemasPage() {
  return (
    <div className="w-full bg-background min-h-screen py-12 px-4 lg:px-8">
      <div className="max-w-[1536px] mx-auto space-y-12">
        
        {/* Page Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>17 Unidades Especializadas de Negócio</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ecossistemas Tecnológicos <span className="text-cyan">Nortech</span>
          </h1>

          <p className="text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Nossa estrutura é dividida em módulos independentes e altamente especializados por domínio de negócio. Escolha o ecossistema ideal ou integre múltiplas unidades para escalar sua operação.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-card-bg/60 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Arquitetura Modular</h4>
              <p className="text-[11px] text-slate-500">Módulos independentes desacoplados.</p>
            </div>
          </div>

          <div className="bg-card-bg/60 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <Zap className="w-6 h-6 text-cyan shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Alta Performance</h4>
              <p className="text-[11px] text-slate-500">SLA contratual e suporte especializado.</p>
            </div>
          </div>

          <div className="bg-card-bg/60 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <Layers className="w-6 h-6 text-cyan shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Integração Nativa</h4>
              <p className="text-[11px] text-slate-500">Interoperabilidade total entre sistemas.</p>
            </div>
          </div>
        </div>

        {/* Interactive Grid with Filters */}
        <EcosystemsGrid />

      </div>
    </div>
  );
}
