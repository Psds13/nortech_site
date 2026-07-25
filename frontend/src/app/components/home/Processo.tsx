"use client";

import { motion } from "framer-motion";
import { Search, Compass, Cpu, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { METHODOLOGY_STEPS } from "@/data/institutional";

const iconMap: Record<string, React.ElementType> = {
  "01": Search,
  "02": Compass,
  "03": Cpu,
  "04": ShieldCheck
};

export default function Processo() {
  return (
    <section id="processo" className="py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50 border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto space-y-12">
        
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Governança & Rigor Técnico</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Metodologia de Engenharia em 4 Etapas
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Transparência total com acompanhamento em tempo real através do Painel do Cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((item, i) => {
            const IconComponent = iconMap[item.stepNumber] || Search;
            return (
              <motion.div
                key={item.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-card-bg border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center border border-cyan/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-cyan/30">
                      {item.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/processo"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan hover:underline"
          >
            <span>Ver Metodologia Completa & Artefatos Gerados</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
