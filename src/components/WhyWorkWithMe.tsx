import React from 'react';
import { siteConfig } from '../config';
import { 
  UserCheck, 
  Sparkles, 
  Target, 
  Smartphone, 
  MessagesSquare, 
  Zap, 
  Shield 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="h-6 w-6 text-blue-400" />,
  Sparkles: <Sparkles className="h-6 w-6 text-blue-400" />,
  Target: <Target className="h-6 w-6 text-blue-400" />,
  Smartphone: <Smartphone className="h-6 w-6 text-blue-400" />,
  MessagesSquare: <MessagesSquare className="h-6 w-6 text-blue-400" />,
  Zap: <Zap className="h-6 w-6 text-blue-400" />,
};

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="por-que-fazer-comigo" className="relative border-t border-zinc-900 bg-[#050505] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
            <Shield className="h-3.5 w-3.5" />
            <span>Compromisso e Confiança</span>
          </div>
          
          <h2 
            id="why-me-headline"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter"
          >
            Por que fazer comigo?
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Sem promessas irreais ou intermediários complicados. Confiança construída na seriedade e na entrega:
          </p>
        </div>

        {/* 6 Differential Cards */}
        <div 
          id="why-me-cards-grid"
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.whyMeCards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="mb-4 inline-flex rounded-xl bg-zinc-800 p-3 border border-zinc-700/60 group-hover:border-blue-500/40 group-hover:bg-blue-600/10 transition-colors">
                {iconMap[card.icon]}
              </div>

              <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
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
