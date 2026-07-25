"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Network, ShieldCheck, Layers, Award, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-[1280px] mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Engenharia & Governança de Tecnologia</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Plataforma Corporativa Estruturada por <span className="text-cyan">Domínio de Negócio</span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Sediada em São Luís (MA) e com suporte em todo o território nacional, a Nortech Inovação desenvolve ecossistemas desacoplados, garantindo alta especialização técnica, suporte presencial/remoto e SLA contratual.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <Image
                src="/Nortech Inovação.png"
                alt="Nortech Inovação Operações"
                fill
                className="object-contain p-8 bg-slate-900"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Overlay Status Badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-card-bg border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan/10 text-cyan">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Nortech Network</p>
                <p className="text-[11px] text-slate-500 font-semibold">Suporte NOC & Redes 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Text & Features Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Ciclo Completo: Da Arquitetura de Redes ao Software SaaS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Nossa arquitetura é dividida em módulos independentes. Isso permite adicionar novos ecossistemas (como IA, Cyber Security ou Automação Industrial) sem impacto na infraestrutura existente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card-bg/80 border border-slate-200 dark:border-slate-800 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-cyan font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Segurança & Conformidade</span>
                </div>
                <p className="text-xs text-slate-500">Auditoria LGPD, testes de invasão e conformidade com WCAG 2.2 AAA.</p>
              </div>

              <div className="bg-card-bg/80 border border-slate-200 dark:border-slate-800 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-cyan font-bold text-xs uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>17 Ecossistemas</span>
                </div>
                <p className="text-xs text-slate-500">Unidades de negócio especializadas com equipes dedicadas.</p>
              </div>
            </div>

            {/* Technical Stack Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Stack Técnica & Infraestrutura Corporativa:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cabeamento Cat6A / Fibra",
                  "Fluke Certified",
                  "Next.js 15",
                  "TypeScript",
                  "Fortinet / Cisco",
                  "VMware / Proxmox",
                  "Python / RAG AI",
                  "PostgreSQL",
                  "AWS & Azure"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 rounded-lg text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan hover:underline"
              >
                <span>Conhecer Metodologia de Governança</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
