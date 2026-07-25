'use client';
import Link from 'next/link';
import { Ecosystem } from '@/types';
import { 
  Code2, 
  BrainCircuit, 
  Leaf, 
  Accessibility, 
  Gamepad2, 
  Network, 
  ShieldCheck, 
  Cloud, 
  BarChart3, 
  FlaskConical, 
  GraduationCap, 
  Palette, 
  Stethoscope, 
  Tractor, 
  Factory, 
  Building2, 
  Rocket, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BrainCircuit,
  Leaf,
  Accessibility,
  Gamepad2,
  Network,
  ShieldCheck,
  Cloud,
  BarChart3,
  FlaskConical,
  GraduationCap,
  Palette,
  Stethoscope,
  Tractor,
  Factory,
  Building2,
  Rocket
};

interface EcosystemCardProps {
  ecosystem: Ecosystem;
}

export default function EcosystemCard({ ecosystem }: EcosystemCardProps) {
  const IconComponent = iconMap[ecosystem.iconName] || Network;

  return (
    <div className="group relative bg-card-bg/80 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_10px_30px_rgba(0,219,255,0.08)] flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-cyan/10 text-cyan border border-cyan/20 group-hover:bg-cyan group-hover:text-black transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {ecosystem.categoryName}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan transition-colors">
          {ecosystem.name}
        </h3>
        <p className="text-xs font-semibold text-cyan/90 dark:text-cyan/80 mb-3 tracking-wide">
          {ecosystem.tagline}
        </p>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 line-clamp-3 leading-relaxed">
          {ecosystem.shortDescription}
        </p>

        {/* Key Features List */}
        <div className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800/60 pt-4">
          {ecosystem.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Metrics & Action */}
      <div>
        {ecosystem.metrics && ecosystem.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/40">
            {ecosystem.metrics.map((m, i) => (
              <div key={i}>
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">{m.label}</p>
                <p className="text-xs font-extrabold text-cyan">{m.value}</p>
              </div>
            ))}
          </div>
        )}

        <Link
          href={ecosystem.href}
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-cyan pt-2 transition-colors"
        >
          <span>Conhecer Solução</span>
          <ArrowRight className="w-4 h-4 text-cyan group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
