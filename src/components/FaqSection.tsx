import React, { useState } from 'react';
import { siteConfig } from '../config';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  // Store set of open FAQ indices. Default the first item open.
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq-section" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#60A5FA]/30 bg-[#2563FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          
          <h2 
            id="faq-headline"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
          >
            Perguntas Frequentes
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Respostas diretas e transparentes para as dúvidas mais comuns sobre Landing Pages:
          </p>
        </div>

        {/* Accordion List */}
        <div id="faq-accordion-list" className="mt-10 space-y-3">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={item.id}
                id={item.id}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#151821] transition-all hover:border-[#2563FF]/50"
              >
                <button
                  id={`btn-${item.id}`}
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-bold text-white sm:text-lg pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#2563FF] text-white' : 'bg-[#08090D] text-zinc-400 border border-zinc-800'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-800/80 px-5 pb-6 pt-4 sm:px-6 bg-[#08090D]/50">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helper Note for any other doubt */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#151821] p-4 text-center text-xs sm:text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Tem outra dúvida que não está aqui?</span>
          <a
            id="faq-ask-whatsapp-btn"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#60A5FA] hover:text-white transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Pergunte direto no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
