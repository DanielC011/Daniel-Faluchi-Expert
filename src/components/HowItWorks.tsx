import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            Simplicidade do Início ao Fim
          </span>
          <h2 
            id="how-it-works-headline"
            className="mt-2 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
          >
            Como funciona?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Apenas 3 passos rápidos para colocar sua presença profissional no ar:
          </p>
        </div>

        {/* 3 Steps Horizontal / Responsive Grid */}
        <div 
          id="how-it-works-steps-grid"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {siteConfig.howItWorks.steps.map((step, idx) => (
            <div
              key={step.number}
              id={`step-item-${step.number}`}
              className="relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#151821] p-6 sm:p-7 transition-all hover:border-[#2563FF]/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/30 text-[#60A5FA] font-bold font-mono text-lg">
                    0{step.number}
                  </span>
                  <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                    Etapa {idx + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#60A5FA]" />
                <span>Processo 100% transparente</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-10 text-center">
          <a
            id="how-it-works-cta-btn"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#2563FF] hover:bg-blue-600 text-white px-8 py-4 text-base font-bold transition-all shadow-lg shadow-[#2563FF]/25 active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-white/20" />
            <span>{siteConfig.howItWorksCtaText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
