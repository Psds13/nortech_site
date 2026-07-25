import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Academy | Capacitação Técnica & Trilhas de Certificação',
  description: 'Bootcamps corporativos, trilhas de certificação em Cloud, AI e DevOps, e programas de upskilling para equipes de tecnologia.',
};

export default function NortechAcademyPage() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Capacitação Técnica Corporativa</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">Academy</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Programas estruturados de capacitação técnica em Cloud, IA, DevOps e Segurança — desenhados para equipes de engenharia, com trilhas de certificação reconhecidas pelo mercado (AWS, Azure, GCP, CKAD).
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-cyan">3.200+</p>
                <p className="text-xs font-semibold text-slate-400">Profissionais Certificados</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">94%</p>
                <p className="text-xs font-semibold text-slate-400">Taxa de Aprovação em Certificações</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+Academy"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar Programa para Equipe</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <BookOpen className="w-5 h-5 text-cyan" />
              <span>Modalidades de Entrega</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Formato:</span>
                <span className="text-cyan font-bold">In-Company / Online Ao Vivo / Híbrido</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Carga Horária:</span>
                <span className="text-white font-bold">16h – 120h por trilha</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Idiomas:</span>
                <span className="text-white font-bold">Português / Inglês</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Turmas:</span>
                <span className="text-white font-bold">Abertas e Fechadas (B2B)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Trilhas de Especialização</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Programas Nortech Academy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Cloud Engineering (AWS / Azure / GCP)',
              desc: 'Trilha completa de arquitetura cloud, desde fundamentos até preparação para exames Solutions Architect e Cloud Architect.'
            },
            {
              title: 'DevOps & Platform Engineering',
              desc: 'Git, CI/CD pipelines, containerização com Docker, orquestração Kubernetes (CKAD) e IaC com Terraform e Pulumi.'
            },
            {
              title: 'IA Aplicada & MLOps',
              desc: 'Ciclo completo de projetos de ML: coleta, feature engineering, treinamento, avaliação e deploy de modelos em produção.'
            },
            {
              title: 'Cybersecurity & Compliance',
              desc: 'Fundamentos de segurança ofensiva e defensiva, LGPD, SOC 2, ISO 27001 e gestão de identidade (IAM / PAM).'
            },
            {
              title: 'Dados & Analytics (dbt / Spark / Airflow)',
              desc: 'Engenharia de dados moderna: ELT com dbt, processamento distribuído Spark e orquestração de pipelines com Apache Airflow.'
            },
            {
              title: 'Liderança em Tecnologia (Tech Lead Track)',
              desc: 'Gestão de engenharia, arquitetura de decisões técnicas, RFCs, revisão de código e métricas de saúde de equipe (DORA).'
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
