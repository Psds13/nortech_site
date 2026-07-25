"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Headset, ShieldCheck, Clock, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
            <Headset className="w-3.5 h-3.5" />
            <span>Atendimento Executivo & Suporte Técnico NOC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Pronto para Elevar a <span className="text-cyan">Tecnologia da sua Empresa</span>?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Agende uma reunião com nossos arquitetos de software e engenheiros de redes para um diagnóstico gratuito da sua infraestrutura.
          </p>
        </motion.div>

        {/* Action Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          <Link
            href="/contatos?assunto=reuniao-executiva"
            className="w-full sm:w-auto px-8 py-4 bg-cyan hover:bg-cyan/90 text-black font-extrabold rounded-xl transition-all shadow-[0_0_25px_rgba(0,219,255,0.3)] text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Agendar Reunião Executiva</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/nortech-network#suporte"
            className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-cyan text-white rounded-xl transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-cyan" />
            <span>Central NOC 24/7 (0800)</span>
          </Link>
        </motion.div>

        {/* Guarantees Footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-semibold">
            <Clock className="w-4 h-4 text-cyan" />
            SLA de Resposta Crítica &lt; 15 min
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 font-semibold">
            <ShieldCheck className="w-4 h-4 text-cyan" />
            Atendimento Presencial & Remoto Nacional
          </span>
        </div>

      </div>
    </section>
  );
}
