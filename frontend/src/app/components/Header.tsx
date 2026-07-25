'use client';
import Link from "next/link";
import Image from "next/image";
import { LogIn, Menu, ChevronDown, Network, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { NORTECH_ECOSYSTEMS } from "@/data/ecosystems";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEcosystemsHovered, setIsEcosystemsHovered] = useState(false);

  return (
    <header className="w-full bg-background/90 backdrop-blur-xl text-foreground border-b border-slate-200 dark:border-slate-800/80 sticky top-0 z-50 transition-colors">
      <div className="max-w-[1536px] mx-auto w-full flex justify-between items-center px-4 py-3.5 lg:px-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <Image
              src="/Nortech Inovação.png"
              alt="Logo Nortech Inovação"
              width={42}
              height={42}
              className="rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,219,255,0.4)]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
              Nortech <span className="text-cyan">INOVAÇÃO</span>
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Enterprise Tech Platform</span>
          </div>
        </Link>

        {/* Main Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center flex-1 justify-center px-6">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan transition-colors"
          >
            Início
          </Link>

          <Link
            href="/sobre"
            className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan transition-colors"
          >
            Sobre
          </Link>

          <Link
            href="/servicos"
            className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan transition-colors"
          >
            Serviços
          </Link>

          {/* Ecosystems Mega Menu Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsEcosystemsHovered(true)}
            onMouseLeave={() => setIsEcosystemsHovered(false)}
          >
            <Link
              href="/ecossistemas"
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan transition-colors py-2"
            >
              <span>Ecossistemas</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20">17</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isEcosystemsHovered ? 'rotate-180 text-cyan' : ''}`} />
            </Link>

            {/* Mega Dropdown Content */}
            <AnimatePresence>
              {isEcosystemsHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[760px] z-50"
                >
                  <div className="bg-card-bg/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl grid grid-cols-3 gap-4">
                    <div className="col-span-3 pb-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Unidades de Negócio & Ecossistemas Nortech
                      </span>
                      <Link href="/ecossistemas" className="text-xs text-cyan font-semibold hover:underline">
                        Ver catálogo completo →
                      </Link>
                    </div>

                    {NORTECH_ECOSYSTEMS.slice(0, 9).map((eco) => (
                      <Link
                        key={eco.id}
                        href={eco.href}
                        className="group flex flex-col p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan transition-colors">
                          {eco.name}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {eco.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Nortech Network direct highlight */}
          <Link
            href="/nortech-network"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan hover:text-cyan/80 transition-colors"
          >
            <Network className="w-3.5 h-3.5" />
            <span>Nortech Network</span>
          </Link>

          <Link
            href="/plans"
            className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan transition-colors"
          >
            Planos
          </Link>

          <Link
            href="/contatos"
            className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Right Section: Theme Toggle + Login */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          <Link
            href="/login"
            className="flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-slate-100 border border-slate-700 dark:border-slate-700 px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm group"
          >
            <LogIn className="w-3.5 h-3.5 text-cyan group-hover:translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Área do Cliente</span>
          </Link>

          {/* Mobile Drawer Trigger */}
          <button
            className="lg:hidden text-slate-700 dark:text-slate-300 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-cyan" /> : <Menu className="w-6 h-6 text-cyan" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background border-b border-slate-200 dark:border-slate-800 px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {[
                { name: "Início", href: "/" },
                { name: "Sobre a Nortech", href: "/sobre" },
                { name: "Serviços", href: "/servicos" },
                { name: "Ver todos os 17 Ecossistemas", href: "/ecossistemas" },
                { name: "Nortech Network (Infra & Suporte)", href: "/nortech-network" },
                { name: "Planos Corporativos", href: "/plans" },
                { name: "Blog & Notícias", href: "/blog" },
                { name: "Carreiras", href: "/carreiras" },
                { name: "Fale Conosco", href: "/contatos" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-cyan transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <Link
                  href="/login"
                  className="w-full text-center bg-cyan text-black font-bold py-3 rounded-xl text-xs uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acessar Área do Cliente / Portal
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;