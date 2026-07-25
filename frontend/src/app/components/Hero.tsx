"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-background text-foreground min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden"
    >
      {/* Background Subtle Accent Elements */}
      <div className="absolute inset-0 bg-radial from-cyan/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Location & Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Nortech Inovação · São Luís, MA & Atendimento Nacional</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-cyan font-bold flex items-center gap-1">
              <Network className="w-3.5 h-3.5" /> NOC 24/7 Ativo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
            Engenharia de Software, <br />
            <span className="text-cyan bg-clip-text">Infraestrutura de TI</span> & Inteligência Artificial
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Plataforma tecnológica corporativa dividida em 17 ecossistemas de negócios. Projetos de cabeamento estruturado, servidores, suporte técnico com SLA crítico e softwares sob medida.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contatos?solucao=diagnostico"
              className="w-full sm:w-auto px-8 py-3.5 bg-cyan hover:bg-cyan/90 text-black font-extrabold rounded-xl transition-all shadow-[0_0_25px_rgba(0,219,255,0.25)] text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Solicitar Diagnóstico Técnico</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/ecossistemas"
              className="w-full sm:w-auto px-8 py-3.5 border border-slate-300 dark:border-slate-700 hover:border-cyan text-slate-900 dark:text-white rounded-xl transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-card-bg/50"
            >
              <span>Conhecer 17 Ecossistemas</span>
            </Link>
          </div>
        </motion.div>

        {/* Corporate Trust & Metric Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800/60 max-w-4xl mx-auto"
        >
          <div className="p-3 rounded-xl bg-card-bg/60 border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xl sm:text-2xl font-extrabold text-cyan">+140</p>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Projetos Entregues</p>
          </div>

          <div className="p-3 rounded-xl bg-card-bg/60 border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xl sm:text-2xl font-extrabold text-cyan">&lt; 15 min</p>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">SLA Atendimento Crítico</p>
          </div>

          <div className="p-3 rounded-xl bg-card-bg/60 border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xl sm:text-2xl font-extrabold text-cyan">100%</p>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Certificação Fluke / WCAG</p>
          </div>

          <div className="p-3 rounded-xl bg-card-bg/60 border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xl sm:text-2xl font-extrabold text-cyan">99.98%</p>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Uptime Redes Monitoradas</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
