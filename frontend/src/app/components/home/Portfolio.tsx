"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/data/institutional";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-[1280px] mx-auto space-y-12">
        
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">Casos de Sucesso</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projetos & Impacto Mensurável
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Casos de sucesso em infraestrutura de TI, softwares sob medida e inteligência artificial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card-bg border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan/50 transition-all flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20">
                      {project.ecosystem}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">Cliente: {project.client}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Results Metrics */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Resultados Obtidos:</p>
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/portfolios"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan hover:underline"
                >
                  <span>Ver Detalhes do Caso de Estudo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/portfolios"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-cyan hover:text-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Ver Portfólio Completo de Projetos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
