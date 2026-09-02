import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 250px down
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Screens < 768px) */}
      <div 
        id="mobile-sticky-whatsapp-bar"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-zinc-900 bg-[#050505]/95 p-3 backdrop-blur-lg shadow-2xl transition-transform duration-300"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
              Atendimento no WhatsApp
            </span>
          </div>

          <a
            id="mobile-sticky-cta-btn"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 text-xs font-bold transition-all shadow-md shadow-blue-600/30 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 fill-white/20" />
            <span>{siteConfig.primaryCtaText}</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button (Screens >= 768px) */}
      <div 
        id="desktop-floating-whatsapp"
        className="fixed bottom-6 right-6 z-50 hidden md:block"
      >
        <a
          id="desktop-floating-cta-btn"
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 rounded-full border border-blue-500/40 bg-zinc-900/90 p-2.5 pr-5 text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:border-blue-500 hover:bg-zinc-900 hover:scale-105"
          aria-label="Falar no WhatsApp"
        >
          {/* Pulsing indicator icon */}
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-400 border-2 border-zinc-900"></span>
            </span>
            <MessageCircle className="h-5 w-5 fill-white/20" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
              Fale com Daniel
            </span>
            <span className="text-[11px] text-zinc-400 font-medium">
              Orçamento no WhatsApp
            </span>
          </div>
        </a>
      </div>
    </>
  );
};
