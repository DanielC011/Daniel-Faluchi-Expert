import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const CtaIntermediate: React.FC = () => {
  return (
    <section id="cta-intermediario" className="relative border-t border-zinc-900 bg-[#050505] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div 
          id="cta-intermediate-card"
          className="relative overflow-hidden rounded-3xl bg-blue-600 p-8 sm:p-12 text-center shadow-2xl text-white"
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-black/20 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 
              id="cta-intermediate-headline"
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight"
            >
              {siteConfig.ctaIntermediate.headline}
            </h2>

            <p 
              id="cta-intermediate-text"
              className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed font-medium"
            >
              {siteConfig.ctaIntermediate.text}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                id="cta-intermediate-btn"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 px-8 py-4 text-base sm:text-lg font-extrabold transition-all shadow-xl active:scale-95"
              >
                <MessageCircle className="h-5 w-5 fill-zinc-950/20 transition-transform group-hover:scale-110" />
                <span>{siteConfig.intermediateCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <span id="cta-intermediate-micro" className="text-xs sm:text-sm text-blue-100/90 font-medium">
                {siteConfig.microcopyNoCommitment}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
