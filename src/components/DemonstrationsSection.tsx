import React, { useState } from 'react';
import { siteConfig } from '../config';
import { 
  Monitor, 
  Smartphone, 
  ArrowUpRight, 
  Check, 
  ExternalLink, 
  Zap, 
  MessageCircle, 
  Layers,
  Sparkles
} from 'lucide-react';

export const DemonstrationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentDemo = siteConfig.demonstrations[activeTab] || siteConfig.demonstrations[0];

  return (
    <section id="demonstracoes" className="relative border-t border-zinc-900 bg-[#050505] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
            Estruturas de Alta Conversão
          </span>
          
          <h2 
            id="demonstrations-headline"
            className="mt-2 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter"
          >
            Demonstrações e Exemplos de Projetos
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Exemplos conceituais para visualizar como uma Landing Page organiza sua oferta de acordo com o seu segmento:
          </p>
        </div>

        {/* Segment Selector Tabs */}
        <div className="mt-8 flex justify-center overflow-x-auto pb-2 scrollbar-none">
          <div 
            id="demonstrations-tabs-bar"
            className="inline-flex gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1.5"
          >
            {siteConfig.demonstrations.map((demo, idx) => (
              <button
                key={demo.id}
                id={`tab-btn-${demo.id}`}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                <span>{demo.segment}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Demonstration Card / Mockup Viewer */}
        <div 
          id="demo-active-viewer"
          className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Project Overview & Conversion Strategy */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${currentDemo.previewColors.badge}`}>
                  {currentDemo.tag}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {currentDemo.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentDemo.subtitle}
                </p>
              </div>

              {/* Goal Box */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Foco Principal de Conversão
                </span>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                  <MessageCircle className="h-4 w-4" />
                  <span>{currentDemo.objective}</span>
                </div>
              </div>

              {/* Strategy points */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Estratégia Aplicada neste Modelo:
                </span>
                {currentDemo.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  id="demo-cta-whatsapp"
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors shadow-lg shadow-blue-600/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Quero uma estrutura como esta</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Interface Mockup Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-3 sm:p-4 shadow-xl">
                
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="rounded bg-zinc-950 px-2.5 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-800">
                    exemplo-demonstrativo.com.br
                  </span>
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Layout Otimizado
                  </span>
                </div>

                {/* Mockup Canvas */}
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-4 sm:p-6 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-blue-600" />
                      <span className="text-xs font-bold text-white tracking-tight">
                        {currentDemo.title.split('&')[0]}
                      </span>
                    </div>
                    <div className="h-6 px-3 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center">
                      Falar no WhatsApp
                    </div>
                  </div>

                  {/* Hero Box inside Mockup */}
                  <div className="rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-900/70 p-4 sm:p-6 border border-zinc-800 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      {currentDemo.tag}
                    </span>
                    <h4 className="mt-1 text-base sm:text-lg font-bold text-white leading-tight">
                      {currentDemo.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2">
                      {currentDemo.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="h-7 px-3.5 rounded-lg bg-blue-600 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                        <MessageCircle className="h-3 w-3" />
                        {currentDemo.objective}
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Resposta rápida no WhatsApp
                      </div>
                    </div>
                  </div>

                  {/* 3 Value Pillars inside Mockup */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-zinc-900 p-2.5 border border-zinc-800 text-left">
                      <div className="h-2 w-10 bg-blue-500 rounded mb-1.5" />
                      <div className="h-1.5 w-full bg-zinc-700 rounded mb-1" />
                      <div className="h-1.5 w-3/4 bg-zinc-700 rounded" />
                    </div>
                    <div className="rounded-lg bg-zinc-900 p-2.5 border border-zinc-800 text-left">
                      <div className="h-2 w-10 bg-blue-500 rounded mb-1.5" />
                      <div className="h-1.5 w-full bg-zinc-700 rounded mb-1" />
                      <div className="h-1.5 w-3/4 bg-zinc-700 rounded" />
                    </div>
                    <div className="rounded-lg bg-zinc-900 p-2.5 border border-zinc-800 text-left">
                      <div className="h-2 w-10 bg-blue-500 rounded mb-1.5" />
                      <div className="h-1.5 w-full bg-zinc-700 rounded mb-1" />
                      <div className="h-1.5 w-3/4 bg-zinc-700 rounded" />
                    </div>
                  </div>
                </div>

                {/* Footer disclaimer inside demo */}
                <div className="mt-2 text-center">
                  <span className="text-[10px] text-zinc-500">
                    * Layout conceitual ilustrativo. Cada projeto é desenhado com a identidade visual e objetivos específicos do seu negócio.
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
