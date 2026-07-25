"use client";

import { motion } from "framer-motion";
import EcosystemsGrid from "@/app/components/ecosystems/EcosystemsGrid";
import { Layers } from "lucide-react";

export default function Ecosystem3D() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-background border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto space-y-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Arquitetura de 17 Ecossistemas</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Unidades de Negócio Integradas
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Nossa plataforma é organizada por domínios funcionais. Escolha a unidade desejada ou filtre por setor de mercado.
          </p>
        </motion.div>

        {/* Embedded Interactive Grid Component */}
        <EcosystemsGrid />

      </div>
    </section>
  );
}
