"use client";

import React from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const ContactCTA: React.FC = () => {
  return (
    <section className="bg-[#061F40] text-white py-14 border-t border-blue-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-white">
              Vamos conversar sobre o futuro do seu negócio?
            </h2>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
              Fale com nossos especialistas e descubra como o Grupo BRM pode conectar soluções para gerar resultados reais para a sua empresa.
            </p>
          </div>

          <div className="shrink-0">
            <WhatsAppButton
              text={`Fale no WhatsApp ${siteConfig.contactPhone}`}
              variant="green"
              size="md"
              className="w-full sm:w-auto shadow-md px-6 py-3.5 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
