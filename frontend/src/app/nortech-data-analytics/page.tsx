import { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Data Analytics | Engenharia de Dados & BI',
  description: 'Data Warehousing, Data Lakehouses, pipelines ETL/ELT e dashboards executivos em tempo real.',
};

export default function NortechDataAnalyticsPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Engenharia de Dados & BI</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold">Nortech <span className="text-cyan">DATA ANALYTICS</span></h1>
          <p className="text-slate-300 text-base max-w-2xl">Transforme volumes massivos de dados brutos em decisões estratégicas através de pipelines modernos e visualizações executivas.</p>
          <Link href="/contatos?unidade=Data+Analytics" className="bg-cyan text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2">
            <span>Agendar Consultoria de Dados</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-[1280px] mx-auto space-y-8">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white text-center">Soluções de Dados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Construção de Data Lakehouses e Data Warehouses (Snowflake / Databricks / BigQuery)",
            "Pipelines de ETL/ELT em Tempo Real com Apache Kafka e Airflow",
            "Dashboards Executivos de KPIs (Power BI / Metabase / Tableau)",
            "Governança, Qualidade e Linhagem de Dados Corporativos"
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
