import React from 'react';
import { siteConfig } from '../config';
import { 
  Briefcase, 
  FileSpreadsheet, 
  Palette, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

const stepIcons = [
  <Briefcase className="h-6 w-6 text-[#60A5FA]" />,
  <FileSpreadsheet className="h-6 w-6 text-[#60A5FA]" />,
  <Palette className="h-6 w-6 text-[#60A5FA]" />,
  <Rocket className="h-6 w-6 text-[#60A5FA]" />,
];

export const WhatIDoSection: React.FC = () => {
  return (
    <section id="o-que-faco" className="relative border-t border-zinc-800/80 bg-[#08090D] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
            Processo Transparente
          </span>
          <h2 
            id="what-i-do-headline"
            className="mt-2 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tighter"
          >
            {siteConfig.whatIDo.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Você não precisa se preocupar com aspectos técnicos complicados. O processo é direto e focado em resultados:
          </p>
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div 
          id="what-i-do-steps-grid"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.whatIDo.steps.map((step, index) => (
            <div
              key={step.number}
              id={`step-card-${step.number}`}
              className="relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#151821] p-6 transition-all hover:border-[#2563FF]/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl font-black text-[#2563FF] font-mono tracking-tighter">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#08090D] border border-zinc-800">
                    {stepIcons[index]}
                  </div>
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-500">
                <span className="uppercase tracking-widest text-[10px]">Etapa {index + 1} de 4</span>
                {index < 3 && <ArrowRight className="h-3.5 w-3.5 text-[#60A5FA]" />}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
