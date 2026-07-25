import { Metadata } from 'next';
import Link from 'next/link';
import { METHODOLOGY_STEPS } from '@/data/institutional';
import { Building2, Award, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a Nortech | Nortech Inovação',
  description: 'Conheça a história, missão e os 17 ecossistemas de tecnologia da Nortech Inovação.',
};

export default function SobrePage() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Header */}
      <section className="py-16 px-4 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1536px] mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Institucional & Governança</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            Engenharia de Tecnologia para a <span className="text-cyan">Era Digital</span>
          </h1>

          <p className="text-sm lg:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A Nortech Inovação é uma plataforma corporativa estruturada em 17 ecossistemas especializados. Unimos engenharia de software, inteligência artificial, redes de infraestrutura física e segurança defensiva para acelerar empresas de alto impacto.
          </p>
        </div>
      </section>

      {/* Values & Pillars */}
      <section className="py-16 px-4 lg:px-8 max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card-bg border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-3">
          <Award className="w-8 h-8 text-cyan" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Excelência Técnica</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Padrões rigorosos de engenharia, arquiteturas desacopladas e certificação oficial em infraestrutura de rede e segurança.
          </p>
        </div>

        <div className="bg-card-bg border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-3">
          <ShieldCheck className="w-8 h-8 text-cyan" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Resiliência & SLA</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Disponibilidade crítica garantida por contrato com monitoramento NOC/SOC 24 horas por dia, 7 dias por semana.
          </p>
        </div>

        <div className="bg-card-bg border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-3">
          <Users className="w-8 h-8 text-cyan" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Especialização por Domínio</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            17 unidades independentes de negócios garantindo profunda especialização técnica em cada segmento do mercado.
          </p>
        </div>
      </section>

      {/* Development Methodology */}
      <section className="py-16 px-4 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1536px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-cyan text-xs font-bold uppercase tracking-wider">Processo de Engenharia</span>
            <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">Metodologia de Desenvolvimento</h2>
            <p className="text-xs text-slate-500">Da concepção do projeto à sustentação contínua de ambiente em produção.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl relative space-y-4"
              >
                <span className="text-3xl font-extrabold text-cyan/30 absolute top-4 right-4">
                  {step.stepNumber}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white pt-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-500">
                      <CheckCircle2 className="w-3 h-3 text-cyan shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
          Pronto para escalar sua infraestrutura e softwares?
        </h2>
        <Link
          href="/contatos"
          className="inline-flex items-center gap-2 bg-cyan text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-cyan/90 transition-all"
        >
          <span>Falar com Nossos Especialistas</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
