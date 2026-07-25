import { Metadata } from 'next';
import { Newspaper, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Insights | Nortech Inovação',
  description: 'Artigos técnicos sobre infraestrutura de TI, cabeamento estruturado, inteligência artificial e engenharia de software.',
};

export default function BlogPage() {
  const posts = [
    {
      id: '1',
      title: 'Boas Práticas para Cabeamento Estruturado Cat6A em Datacenters',
      category: 'Nortech Network',
      date: '24 Julho, 2026',
      readTime: '6 min de leitura',
      excerpt: 'Entenda os requisitos normativos da ANSI/TIA-568-D e como a certificação Fluke garante 10Gbps em ambientes críticos.'
    },
    {
      id: '2',
      title: 'Como Implementar Agentes de IA Privados sem Vazamento de Dados',
      category: 'Nortech AI',
      date: '18 Julho, 2026',
      readTime: '8 min de leitura',
      excerpt: 'Estratégias de Fine-Tuning e RAG (Retrieval-Augmented Generation) executadas em servidores privados on-premise.'
    },
    {
      id: '3',
      title: 'Manutenção Preditiva na Indústria 4.0 com Sensores IIoT',
      category: 'Nortech Industry 4.0',
      date: '10 Julho, 2026',
      readTime: '5 min de leitura',
      excerpt: 'Como prever falhas de maquinários industriais com análise de vibração e telemetria em tempo real.'
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen py-16 px-4 lg:px-8">
      <div className="max-w-[1536px] mx-auto space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20 text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Conteúdo & Conhecimento Técnico</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            Nortech <span className="text-cyan">INSIGHTS</span>
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            Artigos técnicos, estudos de caso e boas práticas de engenharia de software e infraestrutura.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan/50 transition-all"
            >
              <div>
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20">
                  {post.category}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-cyan" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan" />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
