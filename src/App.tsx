import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhatIsLandingPage } from './components/WhatIsLandingPage';
import { WhyNeedSection } from './components/WhyNeedSection';
import { NotJustPrettySection } from './components/NotJustPrettySection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { IncludedDeliverables } from './components/IncludedDeliverables';
import { DemonstrationsSection } from './components/DemonstrationsSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { HowItWorks } from './components/HowItWorks';
import { CtaIntermediate } from './components/CtaIntermediate';
import { FaqSection } from './components/FaqSection';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="landing-page-root" className="min-h-screen bg-[#08090D] text-[#F8FAFC] flex flex-col selection:bg-[#2563FF] selection:text-white">
      {/* 0. Header with Brand & Discrete WhatsApp & Instagram */}
      <Header />

      <main className="flex-1">
        {/* 1. HERO — Primeira Dobra */}
        <HeroSection />

        {/* 2. O QUE É UMA LANDING PAGE? */}
        <WhatIsLandingPage />

        {/* 3. POR QUE MEU NEGÓCIO PRECISA DE UMA LANDING PAGE? */}
        <WhyNeedSection />

        {/* 4. NÃO É APENAS UMA PÁGINA BONITA */}
        <NotJustPrettySection />

        {/* 5. O QUE EU FAÇO POR VOCÊ? */}
        <WhatIDoSection />

        {/* 6. O QUE VOCÊ RECEBE? */}
        <IncludedDeliverables />

        {/* 7. MOSTRE O SEU TRABALHO (Demonstrações) */}
        <DemonstrationsSection />

        {/* 8. POR QUE FAZER COMIGO? */}
        <WhyWorkWithMe />

        {/* 9. COMO FUNCIONA? */}
        <HowItWorks />

        {/* 11. CTA INTERMEDIÁRIO */}
        <CtaIntermediate />

        {/* 10. PERGUNTAS FREQUENTES (FAQ) */}
        <FaqSection />

        {/* 12. CTA FINAL */}
        <CtaFinal />
      </main>

      {/* 13. RODAPÉ */}
      <Footer />
    </div>
  );
}

