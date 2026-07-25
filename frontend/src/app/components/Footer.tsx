'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_NAV_SECTIONS } from '@/data/navigation';
import { ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-[1536px] mx-auto px-4 lg:px-8">
        
        {/* Main Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Nortech Inovação.png"
                alt="Logo Nortech Inovação"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-extrabold text-xl text-white tracking-tight">
                Nortech <span className="text-cyan">INOVAÇÃO</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Plataforma tecnológica enterprise modular. Engenharia de software, inteligência artificial, infraestrutura de redes, cyber security e transição digital para empresas de alta performance.
            </p>

            {/* Contact Quick Highlights */}
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>São Paulo | Rio de Janeiro | Hubs Nacionais</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>contato@nortechinovacao.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>Central NOC 24/7: 0800 591 0420</span>
              </div>
            </div>
          </div>

          {/* Dynamic Nav Columns */}
          {FOOTER_NAV_SECTIONS.slice(0, 3).map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-cyan transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Certifications & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan" />
              <span>ISO 27001 & WCAG 2.2 Compliant</span>
            </span>
            <span>|</span>
            <span>Certificação Fluke Networks</span>
            <span>|</span>
            <span>LGPD Audited</span>
          </div>

          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Nortech Inovação. Todos os direitos reservados.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
