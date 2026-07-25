import { Metadata } from 'next';
import Link from 'next/link';
import { Cloud, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Cloud | Computação em Nuvem & FinOps',
  description: 'Migração cloud, arquiteturas híbridas e multicloud (AWS, Azure, GCP), governança FinOps e Disaster Recovery.',
};

export default function NortechCloudPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <Cloud className="w-3.5 h-3.5" />
              <span>Computação em Nuvem & Governança</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">CLOUD</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Arquitetura multicloud elástica, otimização contínua de faturas computacionais (FinOps) e planos de recuperação de desastres (DRP) ativas em nuvem.
            </p>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+Cloud"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar Auditoria FinOps</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-slate-700 pb-3">Provedores Certificados</h3>
            <div className="space-y-2 text-xs">
              <p className="flex justify-between text-slate-300"><span>AWS (Amazon Web Services):</span> <span className="text-cyan font-bold">Advanced Partner</span></p>
              <p className="flex justify-between text-slate-300"><span>Microsoft Azure:</span> <span className="text-cyan font-bold">Solutions Partner</span></p>
              <p className="flex justify-between text-slate-300"><span>Google Cloud (GCP):</span> <span className="text-cyan font-bold">Cloud Architect Certified</span></p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-8">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white text-center">Soluções Cloud Enterprise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Migração Lift-and-Shift e Re-architecting sem Downtime",
            "Otimização FinOps: Redução comprovada de 30% a 45% nos custos de infraestrutura",
            "Disaster Recovery (DRP) com RPO/RTO reduzidos",
            "Kubernetes & Orquestração de Contêineres Docker em Nuvem Híbrida"
          ].map((item, idx) => (
            <div key={idx} className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan shrink-0" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{item}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
