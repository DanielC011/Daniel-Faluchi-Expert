import React, { useState } from 'react';
import { siteConfig } from '../config';
import { 
  MessageCircle, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  Zap, 
  Check, 
  Layers 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'both' | 'mobile' | 'desktop'>('both');

  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background soft ambient gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col items-center text-center">
          <div 
            id="hero-badge"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            {siteConfig.hero.badge}
          </div>

          {/* Main Headline */}
          <h1 
            id="hero-headline"
            className="max-w-4xl font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-white tracking-tighter"
          >
            Uma Landing Page <span className="text-blue-500">profissional</span> para transformar visitantes em clientes.
          </h1>

          {/* Subheadline */}
          <p 
            id="hero-subheadline"
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-snug text-zinc-400 font-normal"
          >
            {siteConfig.hero.subheadline}
          </p>

          {/* Main CTA Button & Microcopy */}
          <div id="hero-cta-block" className="mt-8 flex flex-col items-center gap-4">
            <a
              id="hero-primary-cta"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white hover:bg-blue-600 hover:text-white text-black px-8 py-4 text-base sm:text-lg font-bold transition-all duration-200 shadow-2xl hover:shadow-blue-600/25 active:scale-98"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>{siteConfig.primaryCtaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div id="hero-microcopy" className="flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-widest text-zinc-500 border-t border-zinc-800 pt-3">
              <span>Orçamento sem compromisso</span>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span>Atendimento direto</span>
            </div>
          </div>
        </div>

        {/* Device Switcher Controls (Mobile-First helper) */}
        <div className="mt-12 flex justify-center">
          <div 
            id="device-mockup-selector"
            className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 p-1 text-xs text-zinc-400"
          >
            <button
              id="btn-view-both"
              onClick={() => setDeviceMode('both')}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors ${
                deviceMode === 'both' ? 'bg-zinc-800 text-white font-bold' : 'hover:text-zinc-200'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Computador & Celular</span>
            </button>
            <button
              id="btn-view-mobile"
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors ${
                deviceMode === 'mobile' ? 'bg-zinc-800 text-white font-bold' : 'hover:text-zinc-200'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>Celular</span>
            </button>
            <button
              id="btn-view-desktop"
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors ${
                deviceMode === 'desktop' ? 'bg-zinc-800 text-white font-bold' : 'hover:text-zinc-200'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>Computador</span>
            </button>
          </div>
        </div>

        {/* Visual Mockups Container: Desktop Browser + Mobile Smartphone */}
        <div id="hero-mockups-container" className="mt-6 relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          
          {/* Desktop Mockup */}
          {(deviceMode === 'both' || deviceMode === 'desktop') && (
            <div 
              id="mockup-desktop-wrapper"
              className={`w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950 p-2 sm:p-3 shadow-2xl transition-all duration-300 ${
                deviceMode === 'both' ? 'lg:w-3/5' : 'mx-auto'
              }`}
            >
              {/* Browser chrome header bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 px-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400 font-mono">
                  <span className="text-blue-400">https://</span>seunegocio.com.br
                </div>
                <div className="flex items-center gap-1 text-zinc-500 text-xs">
                  <Zap className="h-3 w-3 text-blue-400" />
                  <span className="text-[10px] hidden sm:inline font-mono">0.6s</span>
                </div>
              </div>

              {/* Inside Browser Canvas */}
              <div className="mt-2 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-4 sm:p-6 border border-zinc-800/70">
                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-blue-600 font-bold text-[9px] text-white flex items-center justify-center">DF</div>
                    <div className="h-2.5 w-24 rounded bg-zinc-700" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-12 rounded bg-zinc-700 hidden sm:block" />
                    <div className="h-2 w-12 rounded bg-zinc-700 hidden sm:block" />
                    <div className="h-6 px-3 rounded-full bg-white text-black text-[9px] flex items-center justify-center font-bold">
                      Contato
                    </div>
                  </div>
                </div>

                {/* Mockup Hero Content */}
                <div className="py-6 sm:py-8 text-center max-w-md mx-auto">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-3">
                    Solução Especializada
                  </div>
                  <div className="h-5 w-4/5 mx-auto bg-white rounded mb-2" />
                  <div className="h-3 w-3/5 mx-auto bg-zinc-500 rounded mb-4" />
                  <div className="flex justify-center gap-2">
                    <div className="h-8 px-4 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <MessageCircle className="h-3.5 w-3.5" />
                      Solicitar Orçamento
                    </div>
                  </div>
                </div>

                {/* Mockup 3 Feature Pills */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-800/80">
                  <div className="rounded-lg bg-zinc-900/80 p-2 border border-zinc-800 text-center">
                    <div className="h-2 w-12 mx-auto bg-blue-500 rounded mb-1" />
                    <div className="h-1.5 w-16 mx-auto bg-zinc-600 rounded" />
                  </div>
                  <div className="rounded-lg bg-zinc-900/80 p-2 border border-zinc-800 text-center">
                    <div className="h-2 w-12 mx-auto bg-blue-500 rounded mb-1" />
                    <div className="h-1.5 w-16 mx-auto bg-zinc-600 rounded" />
                  </div>
                  <div className="rounded-lg bg-zinc-900/80 p-2 border border-zinc-800 text-center">
                    <div className="h-2 w-12 mx-auto bg-blue-500 rounded mb-1" />
                    <div className="h-1.5 w-16 mx-auto bg-zinc-600 rounded" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Phone Mockup */}
          {(deviceMode === 'both' || deviceMode === 'mobile') && (
            <div 
              id="mockup-mobile-wrapper"
              className={`w-full max-w-[270px] rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-900 p-2.5 shadow-2xl overflow-hidden transition-all duration-300 ${
                deviceMode === 'both' ? 'lg:-ml-8 lg:translate-y-4' : 'mx-auto'
              }`}
            >
              {/* Phone dynamic island / speaker */}
              <div className="relative mx-auto mb-2.5 h-4 w-24 rounded-full bg-zinc-800 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 mr-2" />
                <div className="h-1.5 w-8 rounded-full bg-zinc-700" />
              </div>

              {/* Mobile Screen Surface */}
              <div className="rounded-[24px] overflow-hidden bg-zinc-950 border border-zinc-800/80 p-3.5 text-left">
                {/* Mobile top mini bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <div className="h-3.5 w-3.5 rounded bg-blue-600 flex items-center justify-center text-[7px] font-bold text-white">DF</div>
                    <span className="text-[10px] font-bold text-white tracking-tight">Sua Marca</span>
                  </div>
                  <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold uppercase tracking-wider">Online</span>
                </div>

                {/* Mobile Hero Content */}
                <div className="my-3 text-center">
                  <span className="inline-block text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">
                    Atendimento Rápido
                  </span>
                  <div className="text-[12px] font-bold text-white leading-tight mb-1.5 tracking-tight">
                    O que seu negócio oferece em poucas palavras
                  </div>
                  <div className="text-[9px] text-zinc-400 leading-snug mb-3">
                    Seu cliente entende tudo em menos de 10 segundos sem sair da tela.
                  </div>

                  {/* WhatsApp Big Button Mockup */}
                  <div className="rounded-xl bg-blue-600 p-2.5 text-center text-white font-bold text-[10px] flex items-center justify-center gap-1 shadow-md">
                    <MessageCircle className="h-3 w-3" />
                    Chamar no WhatsApp
                  </div>
                </div>

                {/* Mobile 2 Benefits */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                  <div className="flex items-center gap-1.5 text-[8px] text-zinc-300">
                    <div className="h-3 w-3 rounded bg-green-500/20 text-green-400 flex items-center justify-center text-[7px] font-bold">✓</div>
                    <span>Informações diretas e objetivas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8px] text-zinc-300">
                    <div className="h-3 w-3 rounded bg-green-500/20 text-green-400 flex items-center justify-center text-[7px] font-bold">✓</div>
                    <span>Carregamento instantâneo no 4G</span>
                  </div>
                </div>

                {/* Simulated bottom note */}
                <div className="mt-3 pt-2 border-t border-zinc-800 flex items-center justify-between text-[8px] text-zinc-500">
                  <span>Dúvidas?</span>
                  <span className="text-blue-400 font-bold">Fale agora</span>
                </div>
              </div>

              {/* Home indicator bar */}
              <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-zinc-700" />
            </div>
          )}

        </div>

        {/* Feature Highlights Bar Below Mockup */}
        <div id="hero-trust-bar" className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="flex items-center gap-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
            <Zap className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white tracking-tight">Carregamento Rápido</span>
              <span className="block text-[11px] text-zinc-500">Menos de 1 segundo</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
            <Smartphone className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white tracking-tight">100% Mobile First</span>
              <span className="block text-[11px] text-zinc-500">Perfeita no smartphone</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
            <MessageCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white tracking-tight">Foco no WhatsApp</span>
              <span className="block text-[11px] text-zinc-500">Direto para sua conversa</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
            <ShieldCheck className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white tracking-tight">Atendimento Direto</span>
              <span className="block text-[11px] text-zinc-500">Sem intermediários</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
