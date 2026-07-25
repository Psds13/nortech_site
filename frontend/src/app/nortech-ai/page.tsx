import { Metadata } from 'next';
import Link from 'next/link';
import { BrainCircuit, CheckCircle2, ArrowRight, Bot } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech AI | Agentes Inteligentes & Modelos Preditivos',
  description: 'Inteligência Artificial corporativa, RAG em dados privados, automação de atendimento e modelos preditivos sob medida.',
};

export default function NortechAIPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Inteligência Artificial Corporativa</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">AI</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Desenvolvimento e integração de agentes virtuais autônomos, sistemas RAG (Retrieval-Augmented Generation) em bases de dados privadas e modelos preditivos de negócios.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-cyan">65%</p>
                <p className="text-xs font-semibold text-slate-400">Redução de Custos de Atendimento</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">98.4%</p>
                <p className="text-xs font-semibold text-slate-400">Acurácia Preditiva</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+AI"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar Demonstração de Agente IA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Architecture Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <Bot className="w-5 h-5 text-cyan" />
              <span>Arquitetura de Segurança de IA</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Privacidade de Dados:</span>
                <span className="text-cyan font-bold">100% On-Premise / VPC Isolada</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Modelos Suportados:</span>
                <span className="text-white font-bold">Llama 3, DeepSeek, Claude, GPT-4o</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Banco Vetorial (RAG):</span>
                <span className="text-white font-bold">Qdrant / Pinecone / PgVector</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Capacidades Técnicas</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Soluções Nortech AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Agentes Conversacionais Corporativos",
              desc: "Treinados exclusivamente nos manuais, contratos e base de conhecimento interna da sua empresa."
            },
            {
              title: "Modelos Preditivos de Demanda & Risco",
              desc: "Algoritmos treinados com histórico de dados para previsão de vendas e detecção de fraudes."
            },
            {
              title: "Visão Computacional para Qualidade",
              desc: "Detecção automática de defeitos em produtos industriais e reconhecimento de imagens."
            },
            {
              title: "Fine-tuning de LLMs Privadas",
              desc: "Ajuste fino de modelos de código aberto para operar sem compartilhamento externo de dados."
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

    </div>
  );
}
