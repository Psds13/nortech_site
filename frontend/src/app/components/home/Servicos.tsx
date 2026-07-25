"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Network, 
  BrainCircuit, 
  ShieldCheck, 
  Leaf, 
  Accessibility, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const corporateServices = [
  {
    id: "nortech-network",
    title: "Nortech Network (TI & Redes)",
    desc: "Cabeamento estruturado Cat6A/Fibra, PABX IP, servidores, virtualização e suporte proativo NOC 24/7.",
    icon: Network,
    deliverables: ["Certificação Fluke", "SLA < 15 Minutos", "Telefonia PABX IP"],
    href: "/nortech-network"
  },
  {
    id: "nortech-software",
    title: "Nortech Software",
    desc: "Desenvolvimento sob medida de sistemas SaaS web, mobile e integração de microsserviços.",
    icon: Code2,
    deliverables: ["Arquitetura Next.js/Node", "APIs REST / GraphQL", "Deploy Contínuo CI/CD"],
    href: "/servicos"
  },
  {
    id: "nortech-ai",
    title: "Nortech AI",
    desc: "Agentes inteligentes conversacionais, modelos preditivos corporativos e RAG em dados privados.",
    icon: BrainCircuit,
    deliverables: ["Agentes RAG Privados", "Predição de Demanda", "Visão Computacional"],
    href: "/#ai"
  },
  {
    id: "nortech-cyber-security",
    title: "Nortech Cyber Security",
    desc: "Proteção perimetral, testes de invasão (Pentest), gestão SOC 24/7 e conformidade LGPD.",
    icon: ShieldCheck,
    deliverables: ["SOC 24/7 Defensivo", "Pentest de Vulnerabilidade", "Adequação LGPD"],
    href: "/nortech-security"
  },
  {
    id: "nortech-green-tech",
    title: "Nortech Green Tech",
    desc: "Gestão de emissões de carbono, telemetria energética IoT e rastreabilidade ESG.",
    icon: Leaf,
    deliverables: ["Relatórios ESG", "Telemetria IoT", "Auditoria de Carbono"],
    href: "/green-tech"
  },
  {
    id: "nortech-accessibility",
    title: "Nortech Accessibility",
    desc: "Inclusão digital universais com tradução em Libras, leitores de tela e conformidade WCAG 2.2 AAA.",
    icon: Accessibility,
    deliverables: ["Conformidade WCAG 2.2", "Widget Libras", "Auditoria de Acessibilidade"],
    href: "/nortech-accessibility"
  }
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-[1280px] mx-auto space-y-12">
        
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Unidades Tecnológicas Ativas</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Serviços & Soluções Corporativas
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Cada unidade possui especialistas dedicados para garantir altíssimo nível de execução e SLA contratual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateServices.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={item.href}
                className="group h-full bg-card-bg border border-slate-200 dark:border-slate-800 hover:border-cyan/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 text-cyan border border-cyan/20 flex items-center justify-center mb-5 group-hover:bg-cyan group-hover:text-black transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2 group-hover:text-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60 mb-4">
                    {item.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-cyan transition-colors">
                  <span>Acessar Solução</span>
                  <ArrowRight className="w-4 h-4 text-cyan group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/ecossistemas"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-cyan hover:text-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Ver os 17 Ecossistemas Completos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
