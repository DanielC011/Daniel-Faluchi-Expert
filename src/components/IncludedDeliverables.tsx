import React from 'react';
import { siteConfig } from '../config';
import { Check, PackageCheck, Sparkles } from 'lucide-react';

export const IncludedDeliverables: React.FC = () => {
  return (
    <section id="o-que-voce-recebe" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#60A5FA]/30 bg-[#2563FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            <PackageCheck className="h-3.5 w-3.5" />
            <span>Escopo Claro e Completo</span>
          </div>
          
          <h2 
            id="deliverables-headline"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
          >
            O que você recebe no seu projeto?
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Tudo o que é essencial para colocar sua página no ar com qualidade, sem cobranças surpresa ou itens desnecessários:
          </p>
        </div>

        {/* Deliverables Checklist Grid */}
        <div 
          id="deliverables-grid"
          className="mt-12 rounded-3xl border border-zinc-800 bg-[#151821] p-6 sm:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.deliverables.map((item, index) => (
              <div
                key={index}
                id={`deliverable-item-${index + 1}`}
                className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-[#08090D] p-4 transition-all hover:border-[#2563FF]/40"
              >
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Guarantee / Clarity Note */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-zinc-400">
              * Seu projeto é entregue pronto para publicação e configurado com seus links de contato.
            </p>
            <a
              id="deliverables-cta-btn"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#60A5FA] hover:text-white transition-colors"
            >
              <span>Consultar prazo para seu negócio</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
