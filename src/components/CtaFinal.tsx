import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CtaFinal: React.FC = () => {
  return (
    <section id="cta-final-section" className="relative border-t border-zinc-800/80 bg-[#08090D] py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-[#2563FF]/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        
        {/* Subtle pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#60A5FA]/30 bg-[#2563FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Dê o Próximo Passo</span>
        </div>

        {/* Headline */}
        <h2 
          id="cta-final-headline"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F8FAFC] leading-none tracking-tighter"
        >
          {siteConfig.ctaFinal.headline}
        </h2>

        {/* Subheadline */}
        <p 
          id="cta-final-subheadline"
          className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal"
        >
          {siteConfig.ctaFinal.subheadline}
        </p>

        {/* Action Button */}
        <div className="mt-9 flex flex-col items-center gap-3">
          <a
            id="cta-final-main-btn"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2563FF] hover:bg-blue-600 text-white px-10 py-4 text-base sm:text-lg font-bold transition-all shadow-xl shadow-[#2563FF]/30 active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-white/20 transition-transform group-hover:scale-110" />
            <span>{siteConfig.finalCtaText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-xs sm:text-sm text-zinc-400 font-medium">
            {siteConfig.microcopyBudget}
          </p>
        </div>

        {/* 3 Quick Assurance Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />
            <span>Sem burocracia ou termos técnicos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />
            <span>Conversa rápida no WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />
            <span>Proposta sob medida</span>
          </div>
        </div>

      </div>
    </section>
  );
};
