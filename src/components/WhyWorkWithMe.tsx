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
  UserCheck: <UserCheck className="h-6 w-6 text-[#60A5FA]" />,
  Sparkles: <Sparkles className="h-6 w-6 text-[#60A5FA]" />,
  Target: <Target className="h-6 w-6 text-[#60A5FA]" />,
  Smartphone: <Smartphone className="h-6 w-6 text-[#60A5FA]" />,
  MessagesSquare: <MessagesSquare className="h-6 w-6 text-[#60A5FA]" />,
  Zap: <Zap className="h-6 w-6 text-[#60A5FA]" />,
};

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="por-que-fazer-comigo" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#60A5FA]/30 bg-[#2563FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            <Shield className="h-3.5 w-3.5" />
            <span>Compromisso e Confiança</span>
          </div>
          
          <h2 
            id="why-me-headline"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
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
              className="group rounded-2xl border border-zinc-800 bg-[#151821] p-6 transition-all duration-200 hover:border-[#2563FF]/50"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#08090D] p-3 border border-zinc-800 group-hover:border-[#2563FF]/40 group-hover:bg-[#2563FF]/10 transition-colors">
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
