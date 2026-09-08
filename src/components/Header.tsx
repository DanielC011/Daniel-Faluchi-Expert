import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, Instagram } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header id="main-header" className="relative w-full border-b border-zinc-800/80 bg-[#08090D]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        
        {/* Brand Logo & Name */}
        <div id="header-brand" className="flex items-center gap-3">
          <img
            src={siteConfig.assets.logo}
            alt="FALUCHI STUDIO"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-contain border border-[#60A5FA]/30 bg-[#151821] shadow-md"
            onError={(e) => {
              // Fallback if network issue with image
              const target = e.currentTarget;
              target.style.display = 'none';
            }}
          />
          <div>
            <div className="flex items-center gap-1.5 font-heading text-base sm:text-lg font-extrabold tracking-tight">
              <span className="text-[#F8FAFC]">FALUCHI</span>
              <span className="text-[#2563FF]">STUDIO</span>
            </div>
            <span className="block text-[11px] font-medium tracking-wide text-zinc-400">
              {siteConfig.profession}
            </span>
          </div>
        </div>

        {/* Actions: Discrete Instagram & Discrete CTA (Solicitar orçamento) */}
        <div id="header-actions" className="flex items-center gap-2 sm:gap-3">
          {/* Discrete Instagram Link */}
          <a
            id="header-instagram-btn"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-[#151821] hover:border-[#60A5FA]/50 text-zinc-300 hover:text-white px-3 py-1.5 text-xs font-semibold transition-colors"
            aria-label="Acessar Instagram @faluchi.studio"
          >
            <Instagram className="h-3.5 w-3.5 text-[#60A5FA]" />
            <span className="hidden md:inline">Instagram</span>
          </a>

          {/* Discrete WhatsApp CTA */}
          <a
            id="header-whatsapp-btn"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[#2563FF]/50 bg-[#151821] hover:bg-[#2563FF] text-[#F8FAFC] px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm active:scale-95"
            aria-label="Solicitar orçamento no WhatsApp"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#60A5FA] group-hover:text-white transition-colors" />
            <span>{siteConfig.headerCtaText}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

