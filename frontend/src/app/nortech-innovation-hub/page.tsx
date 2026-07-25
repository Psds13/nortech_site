import { Metadata } from 'next';
import Link from 'next/link';
import { Lightbulb, CheckCircle2, ArrowRight, Rocket, Users, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Innovation Hub | Aceleração e Inovação Corporativa',
  description: 'Hub de inovação aberta da Nortech: aceleração de startups, laboratórios de inovação corporativa, hackathons e programas de co-criação.',
};

export default function NortechInnovationHubPage() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Inovação Aberta & Aceleração</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">Innovation Hub</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Ecossistema de inovação aberta que conecta startups, grandes empresas e pesquisadores em programas de aceleração, laboratórios de co-criação e hackathons de alto impacto.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-cyan">120+</p>
                <p className="text-xs font-semibold text-slate-400">Startups Aceleradas</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">R$50M+</p>
                <p className="text-xs font-semibold text-slate-400">em Funding Gerado</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">34</p>
                <p className="text-xs font-semibold text-slate-400">Parceiros Corporativos</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+Innovation+Hub"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Inscreva sua Startup ou Empresa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <Rocket className="w-5 h-5 text-cyan" />
              <span>Programas Ativos</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Aceleração Seed:</span>
                <span className="text-cyan font-bold">6 meses · 3 turmas/ano</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Corporate Lab:</span>
                <span className="text-white font-bold">Co-criação com Grandes Empresas</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Hackathon Anual:</span>
                <span className="text-cyan font-bold">500+ participantes · R$200k em prêmios</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Pré-aceleração:</span>
                <span className="text-white font-bold">12 semanas · Validação de Mercado</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">O que Oferecemos</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Serviços do Nortech Innovation Hub
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Programa de Aceleração de Startups",
              desc: "Mentoria intensiva, conexão com investidores, suporte jurídico e alocação em espaço de co-working premium."
            },
            {
              title: "Corporate Innovation Lab",
              desc: "Laboratórios dedicados para grandes empresas desenvolverem P&D com metodologias ágeis e squads multidisciplinares."
            },
            {
              title: "Hackathons & Open Innovation",
              desc: "Desafios de inovação aberta com premiações em dinheiro, conexão com venture capital e oportunidades de piloto."
            },
            {
              title: "Matchmaking Startup × Corporativo",
              desc: "Curadoria inteligente para conectar startups com desafios reais de grandes empresas parceiras do hub."
            },
            {
              title: "Residência Tecnológica",
              desc: "Programa de residência para pesquisadores e cientistas de dados desenvolverem soluções aplicadas ao mercado."
            },
            {
              title: "Fundo de Investimento Seed",
              desc: "Acesso a cheques iniciais para startups de base tecnológica com foco em impacto e escalabilidade."
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
              { icon: <Rocket className="w-6 h-6 text-cyan" />, title: "Aceleração Real", desc: "Programas estruturados com mentores seniores, EIRs e acesso direto à rede corporativa da Nortech." },
              { icon: <Users className="w-6 h-6 text-cyan" />, title: "Comunidade Ativa", desc: "Mais de 500 founders, mentores e executivos conectados em eventos mensais e rede exclusiva." },
              { icon: <Trophy className="w-6 h-6 text-cyan" />, title: "Track Record", desc: "120+ startups com exits, aquisições e rodadas Series A concluídas após passagem pelo hub." },
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
