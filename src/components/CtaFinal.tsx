import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CtaFinal: React.FC = () => {
  return (
    <section id="cta-final-section" className="relative border-t border-zinc-900 bg-[#050505] py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        
        {/* Subtle pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Dê o Próximo Passo</span>
        </div>

        {/* Headline */}
        <h2 
          id="cta-final-headline"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none tracking-tighter"
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
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 text-base sm:text-lg font-bold transition-all shadow-xl shadow-blue-600/30 active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-white/20 transition-transform group-hover:scale-110" />
            <span>{siteConfig.primaryCtaText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-xs sm:text-sm text-zinc-500 font-medium">
            {siteConfig.microcopyBudget}
          </p>
        </div>

        {/* 3 Quick Assurance Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-blue-400" />
            <span>Sem burocracia ou termos técnicos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-blue-400" />
            <span>Conversa rápida no WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-blue-400" />
            <span>Proposta sob medida</span>
          </div>
        </div>

      </div>
    </section>
  );
};
