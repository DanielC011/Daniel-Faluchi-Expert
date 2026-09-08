import React from 'react';
import { siteConfig } from '../config';
import { 
  Users, 
  Layout, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  Check, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const WhatIsLandingPage: React.FC = () => {
  return (
    <section id="o-que-e-uma-landing-page" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#60A5FA]/30 bg-[#2563FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Conceito Fundamental</span>
          </div>

          <h2 
            id="what-is-headline"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
          >
            {siteConfig.whatIs.headline}
          </h2>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-[#151821] p-6 sm:p-8 shadow-xl">
            <p 
              id="what-is-definition"
              className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug"
            >
              “<span className="text-[#60A5FA]">{siteConfig.whatIs.description}</span>”
            </p>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              {siteConfig.whatIs.summary}
            </p>
          </div>
        </div>

        {/* Visual Flow Diagram: VISITANTE → LANDING PAGE → CONTATO → CLIENTE */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 text-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              A Jornada Simples e Eficiente
            </span>
          </div>

          {/* Steps in Grid */}
          <div 
            id="conversion-pipeline"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Step 1: Visitante */}
            <div 
              id="flow-step-visitante"
              className="relative rounded-2xl border border-zinc-800 bg-[#151821] p-5 transition-all hover:border-zinc-700"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold font-mono text-zinc-300 border border-zinc-700">
                  01
                </span>
                <div className="rounded-xl bg-[#2563FF]/10 p-2 text-[#60A5FA] border border-[#2563FF]/20">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                Visitante
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Chega através do Instagram, anúncio, busca no Google ou indicação direta.
              </p>
            </div>

            {/* Step 2: Landing Page */}
            <div 
              id="flow-step-landing-page"
              className="relative rounded-2xl border border-[#2563FF]/50 bg-[#2563FF]/10 p-5 shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2563FF] text-xs font-bold font-mono text-white">
                  02
                </span>
                <div className="rounded-xl bg-[#2563FF]/20 p-2 text-[#60A5FA] border border-[#2563FF]/30">
                  <Layout className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5">
                <h3 className="font-heading text-lg font-bold text-white">
                  Landing Page
                </h3>
                <span className="rounded-full bg-[#2563FF] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Foco Total
                </span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Apresenta sua oferta com clareza imediata, elimina dúvidas e transmite confiança.
              </p>
            </div>

            {/* Step 3: Contato */}
            <div 
              id="flow-step-contato"
              className="relative rounded-2xl border border-zinc-800 bg-[#151821] p-5 transition-all hover:border-zinc-700"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold font-mono text-zinc-300 border border-zinc-700">
                  03
                </span>
                <div className="rounded-xl bg-[#2563FF]/10 p-2 text-[#60A5FA] border border-[#2563FF]/20">
                  <MessageSquare className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                Contato
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Com um clique no botão, ele inicia uma conversa no seu WhatsApp já interessado.
              </p>
            </div>

            {/* Step 4: Cliente */}
            <div 
              id="flow-step-cliente"
              className="relative rounded-2xl border border-zinc-800 bg-[#151821] p-5 transition-all hover:border-zinc-700"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold font-mono text-zinc-300 border border-zinc-700">
                  04
                </span>
                <div className="rounded-xl bg-[#2563FF]/10 p-2 text-[#60A5FA] border border-[#2563FF]/20">
                  <CheckCircle className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                Cliente
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Você atende uma pessoa informada e pronta para receber sua proposta e fechar.
              </p>
            </div>
          </div>
        </div>

        {/* Purposes Checklist / Tags */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-[#151821] p-6 sm:p-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                Para que uma Landing Page pode ser utilizada?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Uma página sob medida para o objetivo principal do seu negócio:
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#60A5FA]">
              <Sparkles className="h-3.5 w-3.5" />
              100% orientada a ação
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {siteConfig.whatIs.purposes.map((purpose) => (
              <div
                key={purpose.id}
                id={purpose.id}
                className="flex items-center gap-2.5 rounded-xl border border-zinc-800/80 bg-[#08090D] px-3.5 py-3 transition-colors hover:border-[#60A5FA]/30"
              >
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {purpose.title}
                </span>
              </div>
            ))}
          </div>

          {/* Naturally Repositioned Explanation Section CTA */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-sm font-bold text-white block">
                Pronto para colocar sua oferta em destaque?
              </span>
              <span className="text-xs text-zinc-400">
                Criamos a estrutura ideal para seu segmento. Atendimento direto com Daniel Faluchi.
              </span>
            </div>
            <a
              id="what-is-cta-btn"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563FF] hover:bg-blue-600 text-white px-6 py-3 text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#2563FF]/20 active:scale-95 whitespace-nowrap"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{siteConfig.whatIsCtaText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
