import React from 'react';
import { siteConfig } from '../config';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="border-t border-zinc-900 bg-[#050505] py-12 text-zinc-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold text-sm tracking-tighter">
                DF
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">
              {siteConfig.profession} • Páginas de alta conversão
            </p>
          </div>

          {/* Quick WhatsApp Link in Footer */}
          <div className="flex items-center gap-4">
            <a
              id="footer-whatsapp-link"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs sm:text-sm font-bold text-blue-400 hover:border-blue-500/40 hover:text-blue-300 transition-all shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: Conversar com Daniel</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
          <p id="footer-copyright">
            © {siteConfig.year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
            <span>Desenvolvido com foco em velocidade e conversão</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
