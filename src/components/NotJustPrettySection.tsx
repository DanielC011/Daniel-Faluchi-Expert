import React from 'react';
import { siteConfig } from '../config';
import { 
  Eye, 
  Layers, 
  CheckCircle2, 
  Smartphone, 
  MousePointerClick, 
  HelpCircle, 
  MessageCircle, 
  Compass,
  Quote
} from 'lucide-react';

const pillarIcons = [
  <Layers className="h-5 w-5 text-[#60A5FA]" />,
  <Eye className="h-5 w-5 text-[#60A5FA]" />,
  <CheckCircle2 className="h-5 w-5 text-[#60A5FA]" />,
  <Smartphone className="h-5 w-5 text-[#60A5FA]" />,
  <MousePointerClick className="h-5 w-5 text-[#60A5FA]" />,
  <HelpCircle className="h-5 w-5 text-[#60A5FA]" />,
  <MessageCircle className="h-5 w-5 text-[#60A5FA]" />,
  <Compass className="h-5 w-5 text-[#60A5FA]" />,
];

export const NotJustPrettySection: React.FC = () => {
  return (
    <section id="nao-e-apenas-bonita" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            Design com Propósito Estratégico
          </span>
          
          <h2 
            id="not-just-pretty-headline"
            className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
          >
            {siteConfig.notJustPretty.headline}
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            A estética atrai, mas é a arquitetura e a facilidade de navegação que transformam o clique em orçamento. Veja o que está por trás de cada projeto:
          </p>
        </div>

        {/* 8 Structural Pillars Grid */}
        <div 
          id="pillars-grid"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.notJustPretty.pillars.map((pillar, index) => (
            <div
              key={index}
              id={`pillar-card-${index + 1}`}
              className="rounded-2xl border border-zinc-800 bg-[#151821] p-5 transition-colors hover:border-[#2563FF]/50"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20">
                {pillarIcons[index % pillarIcons.length]}
              </div>
              <h3 className="font-heading text-base font-bold text-white">
                {pillar.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Quote Box */}
        <div 
          id="quote-highlight-box"
          className="relative mt-12 rounded-2xl bg-gradient-to-r from-[#151821] via-[#1A2030] to-[#151821] border border-[#2563FF]/40 p-6 sm:p-10 text-center text-white shadow-xl"
        >
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2563FF]/20 text-[#60A5FA] mb-4">
            <Quote className="h-5 w-5" />
          </div>
          <p className="mx-auto max-w-2xl font-heading text-lg sm:text-2xl font-bold text-white leading-relaxed">
            “{siteConfig.notJustPretty.highlight}”
          </p>
          <span className="mt-4 inline-block text-xs uppercase tracking-widest text-[#60A5FA] font-bold">
            {siteConfig.name} • {siteConfig.profession}
          </span>
        </div>

      </div>
    </section>
  );
};
