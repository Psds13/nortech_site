import { Metadata } from 'next';
import Link from 'next/link';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nortech Health Tech | HL7/FHIR, Prontuário Eletrônico & IA Clínica',
  description: 'Plataformas de saúde digital com interoperabilidade HL7 FHIR R4, prontuário eletrônico, telemedicina e modelos preditivos para desfechos clínicos.',
};

export default function NortechHealthTechPage() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Tecnologia para Saúde Digital</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">Health Tech</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Desenvolvimento de plataformas clínicas com interoperabilidade total via HL7 FHIR R4, PEP (Prontuário Eletrônico do Paciente), telemedicina e modelos preditivos de desfechos, com conformidade LGPD e ANS.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-cyan">HL7 FHIR R4</p>
                <p className="text-xs font-semibold text-slate-400">Padrão de Interoperabilidade Clínica</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan">LGPD + ANS</p>
                <p className="text-xs font-semibold text-slate-400">Conformidade Regulatória Garantida</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contatos?unidade=Nortech+Health+Tech"
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Solicitar Avaliação de Plataforma</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <ShieldCheck className="w-5 h-5 text-cyan" />
              <span>Conformidade & Integrações</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Interoperabilidade:</span>
                <span className="text-cyan font-bold">HL7 FHIR R4 / HL7 v2.x / DICOM</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Prontuário (PEP):</span>
                <span className="text-white font-bold">TISS / TUSS / CID-10 / CBHPM</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Segurança de Dados:</span>
                <span className="text-white font-bold">LGPD + ISO 27799 + HIPAA</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400">Telemedicina:</span>
                <span className="text-white font-bold">CFM Res. 2.314/2022 Compliant</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Soluções Clínicas</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Plataformas Nortech Health Tech
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'PEP com Interoperabilidade FHIR',
              desc: 'Prontuário eletrônico nativo em FHIR R4 com APIs abertas para integração com HIS, LIS, RIS e sistemas de glosa eletrônica.'
            },
            {
              title: 'Plataforma de Telemedicina Regulada',
              desc: 'Videoconsulta com prescrição eletrônica, assinatura digital ICP-Brasil e conformidade com a Resolução CFM 2.314/2022.'
            },
            {
              title: 'IA para Diagnóstico por Imagem',
              desc: 'Modelos de visão computacional para análise de exames de imagem (raio-X, tomografia, ressonância) integrados ao fluxo DICOM/PACS.'
            },
            {
              title: 'Predição de Readmissão Hospitalar',
              desc: 'Algoritmos preditivos treinados em dados históricos para identificar pacientes de alto risco antes da alta hospitalar.'
            },
            {
              title: 'Portal do Paciente & Jornada Digital',
              desc: 'Agendamento online, resultado de exames, histórico de consultas e comunicação segura médico-paciente via canal criptografado.'
            },
            {
              title: 'Analytics de Saúde Populacional',
              desc: 'Dashboards epidemiológicos, monitoramento de indicadores assistenciais (IRAS, NPS clínico) e alertas de surtos por geolocalização.'
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
