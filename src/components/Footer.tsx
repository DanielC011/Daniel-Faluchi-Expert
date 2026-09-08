import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, ShieldCheck, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="border-t border-zinc-800/80 bg-[#08090D] py-12 text-zinc-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="font-heading text-xl font-black tracking-tight text-white">
                FALUCHI <span className="text-[#2563FF]">STUDIO</span>
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">
              {siteConfig.name} • {siteConfig.profession} • Páginas de alta conversão
            </p>
          </div>

          {/* Social & WhatsApp Link in Footer */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-instagram-link"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#151821] px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 hover:border-[#2563FF]/50 hover:text-white transition-all shadow-sm"
            >
              <Instagram className="h-4 w-4 text-[#60A5FA]" />
              <span>@faluchi.studio</span>
            </a>

            <a
              id="footer-whatsapp-link"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#151821] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#60A5FA] hover:border-[#2563FF]/50 hover:text-white transition-all shadow-sm"
            >
              <MessageCircle className="h-4 w-4 text-[#2563FF]" />
              <span>Conversar com Daniel</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
          <p id="footer-copyright">
            © {siteConfig.year} FALUCHI STUDIO • Daniel Faluchi. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="h-3.5 w-3.5 text-[#60A5FA]" />
            <span>Desenvolvido com foco em velocidade e conversão</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
