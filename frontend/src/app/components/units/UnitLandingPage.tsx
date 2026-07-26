import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { UnitPageContent } from '@/types';

export default function UnitLandingPage({ content }: { content: UnitPageContent }) {
  const {
    eyebrowIcon: EyebrowIcon,
    eyebrow,
    name,
    description,
    stats,
    cta,
    spec,
    deliverables,
    pillars,
  } = content;

  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/30 text-xs font-bold uppercase tracking-wider">
              <EyebrowIcon className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Nortech <span className="text-cyan">{name}</span>
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div
              className={`grid ${stats.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-4 pt-4 border-t border-slate-800`}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-cyan">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href={cta.href}
                className="bg-cyan hover:bg-cyan/90 text-black px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>{cta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spec Box */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
              <spec.icon className="w-5 h-5 text-cyan" />
              <span>{spec.title}</span>
            </h3>
            <div className="space-y-3 text-xs">
              {spec.items.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700"
                >
                  <span className="text-slate-400">{item.label}</span>
                  <span className={`font-bold ${item.highlight ? 'text-cyan' : 'text-white'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-cyan text-xs font-bold uppercase tracking-wider">{deliverables.eyebrow}</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {deliverables.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.items.map((item) => (
            <div key={item.title} className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan shrink-0" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 pl-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      {pillars && pillars.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map(({ icon: PillarIcon, title, desc }) => (
                <div key={title} className="bg-card-bg border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
                  <PillarIcon className="w-6 h-6 text-cyan" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
