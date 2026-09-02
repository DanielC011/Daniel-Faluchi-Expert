import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header id="main-header" className="sticky top-0 z-40 w-full border-b border-zinc-900 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Brand Name & Title */}
        <div id="header-brand" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white text-xs sm:text-sm shadow-md">
            DF
          </div>
          <div>
            <span className="block font-heading text-base font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              {siteConfig.profession}
            </span>
          </div>
        </div>

        {/* Status Pill & WhatsApp CTA */}
        <div id="header-actions" className="flex items-center gap-2 sm:gap-4">
          <div 
            id="header-availability-badge" 
            className="hidden md:flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1 text-xs font-medium text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            {siteConfig.status}
          </div>

          <a
            id="header-whatsapp-btn"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 shadow-md active:scale-95"
            aria-label="Falar com Daniel Faluchi no WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
