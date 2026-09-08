import React from 'react';
import { siteConfig } from '../config';
import { 
  AlertCircle, 
  ShieldCheck, 
  Compass, 
  Award, 
  Layers, 
  TrendingUp, 
  Clock, 
  Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-[#60A5FA]" />,
  Compass: <Compass className="h-6 w-6 text-[#60A5FA]" />,
  Award: <Award className="h-6 w-6 text-[#60A5FA]" />,
  Layers: <Layers className="h-6 w-6 text-[#60A5FA]" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-[#60A5FA]" />,
  Clock: <Clock className="h-6 w-6 text-[#60A5FA]" />,
};

export const WhyNeedSection: React.FC = () => {
  return (
    <section id="por-que-preciso" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            Diagnóstico do Negócio
          </span>
          <h2 
            id="why-need-headline"
            className="mt-2 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
          >
            {siteConfig.whyNeed.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Identifique se o seu negócio passa por algum destes desafios no dia a dia:
          </p>
        </div>

        {/* 4 Common Situations (Pain Points) */}
        <div id="common-situations-list" className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {siteConfig.whyNeed.commonSituations.map((situation, index) => (
            <div 
              key={index}
              id={`situation-item-${index + 1}`}
              className="flex items-start gap-3.5 rounded-2xl border border-zinc-800 bg-[#151821] p-4 transition-all hover:border-zinc-700"
            >
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                <AlertCircle className="h-4 w-4" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {situation}
              </p>
            </div>
          ))}
        </div>

        {/* The Solution Bridge Banner */}
        <div 
          id="solution-bridge-banner"
          className="mt-8 rounded-2xl bg-gradient-to-r from-[#151821] via-[#1A2030] to-[#151821] border border-[#2563FF]/40 p-6 sm:p-8 text-center text-white shadow-xl"
        >
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-2">
              <Sparkles className="h-4 w-4" />
              A Solução Estruturada
            </span>
            <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
              {siteConfig.whyNeed.solution}
            </p>
          </div>
        </div>

        {/* The 6 Solution Benefit Cards */}
        <div 
          id="why-need-cards-grid"
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.whyNeed.cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="group relative rounded-2xl border border-zinc-800 bg-[#151821] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#2563FF]/50"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#08090D] p-3 border border-zinc-800 transition-colors group-hover:border-[#2563FF]/40 group-hover:bg-[#2563FF]/10">
                {iconMap[card.icon]}
              </div>

              <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                {card.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
