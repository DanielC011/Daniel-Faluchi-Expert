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
  <Layers className="h-5 w-5 text-blue-400" />,
  <Eye className="h-5 w-5 text-blue-400" />,
  <CheckCircle2 className="h-5 w-5 text-blue-400" />,
  <Smartphone className="h-5 w-5 text-blue-400" />,
  <MousePointerClick className="h-5 w-5 text-blue-400" />,
  <HelpCircle className="h-5 w-5 text-blue-400" />,
  <MessageCircle className="h-5 w-5 text-blue-400" />,
  <Compass className="h-5 w-5 text-blue-400" />,
];

export const NotJustPrettySection: React.FC = () => {
  return (
    <section id="nao-e-apenas-bonita" className="relative border-t border-zinc-900 bg-[#050505] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Design com Propósito Estratégico
          </span>
          
          <h2 
            id="not-just-pretty-headline"
            className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter"
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
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20">
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
          className="relative mt-12 rounded-2xl bg-blue-600 p-6 sm:p-10 text-center text-white shadow-xl"
        >
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white mb-4">
            <Quote className="h-5 w-5" />
          </div>
          <p className="mx-auto max-w-2xl font-heading text-lg sm:text-2xl font-bold text-white leading-relaxed">
            “{siteConfig.notJustPretty.highlight}”
          </p>
          <span className="mt-4 inline-block text-xs uppercase tracking-widest text-blue-100 font-bold">
            {siteConfig.name} • {siteConfig.profession}
          </span>
        </div>

      </div>
    </section>
  );
};
