import React from "react";
import { Hero } from "@/components/home/Hero";
import { CompanyCards } from "@/components/home/CompanyCards";
import { AboutSection } from "@/components/home/AboutSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. Banner Principal */}
      <Hero />

      {/* 2. As 5 Empresas do Grupo */}
      <CompanyCards />

      {/* 3. Sobre o Grupo BRM + Indicadores */}
      <AboutSection />

      {/* 4. Soluções para Empresas */}
      <SolutionsSection />

      {/* 5. Como funciona + Diferenciais + Resultados */}
      <ProcessSection />

      {/* 6. Faixa CTA de Contato Pré-Rodapé */}
      <ContactCTA />
    </div>
  );
}
