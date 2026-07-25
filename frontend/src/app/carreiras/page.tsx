import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carreiras | Nortech Inovação',
  description: 'Faça parte do time da Nortech Inovação. Vagas para engenharia de software, redes, IA e cibersegurança.',
};

export default function CarreirasPage() {
  const openPositions = [
    {
      title: 'Engenheiro de Redes & Telecom (N3)',
      ecosystem: 'Nortech Network',
      location: 'São Paulo, SP | Híbrido',
      type: 'Tempo Integral',
      description: 'Responsável por projetos de cabeamento estruturado, configuração de switches Cisco/Fortinet e monitoramento NOC 24/7.'
    },
    {
      title: 'Desenvolvedor Full Stack Senior (Next.js / Node.js)',
      ecosystem: 'Nortech Software',
      location: 'Remoto (Brasil)',
      type: 'Tempo Integral',
      description: 'Desenvolvimento de sistemas SaaS escaláveis, microsserviços e integração de plataformas para grandes clientes.'
    },
    {
      title: 'Especialista em Cyber Security & SOC',
      ecosystem: 'Nortech Cyber Security',
      location: 'Remoto (Brasil)',
      type: 'Tempo Integral',
      description: 'Análise de vulnerabilidades, resposta a incidentes de segurança e auditorias de conformidade ISO 27001.'
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen py-16 px-4 lg:px-8">
      <div className="max-w-[1536px] mx-auto space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trabalhe Conosco</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            Construa o Futuro da <span className="text-cyan">Tecnologia Corporativa</span>
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Procuramos talentos apaixonados por engenharia de software, redes de alta velocidade, inteligência artificial e segurança defensiva.
          </p>
        </div>

        {/* Positions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            Vagas Abertas
          </h3>

          {openPositions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-cyan/50 transition-all"
            >
              <div>
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20">
                  {pos.ecosystem}
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{pos.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{pos.location} • {pos.type}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">{pos.description}</p>
              </div>

              <Link
                href={`/contatos?vaga=${encodeURIComponent(pos.title)}`}
                className="bg-slate-900 dark:bg-slate-800 hover:bg-cyan hover:text-black text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
              >
                Candidatar-se
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
