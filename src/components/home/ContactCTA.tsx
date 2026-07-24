"use client";

import React from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ContactForm } from "@/components/home/ContactForm";
import { siteConfig } from "@/data/site";

export const ContactCTA: React.FC = () => {
  return (
    <section className="bg-[#061F40] text-white py-12 border-t border-blue-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-white">
              Vamos conversar sobre o futuro do seu negócio?
            </h2>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
              Fale com nossos especialistas e descubra como o Grupo BRM pode conectar soluções para gerar resultados reais para a sua empresa.
            </p>

            <div className="pt-2">
              <WhatsAppButton
                text={`Fale no WhatsApp ${siteConfig.contactPhone}`}
                variant="green"
                size="md"
                className="w-full sm:w-auto shadow-md"
              />
            </div>
          </div>

          {/* Right Column: Inline Contact Form */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/15">
            <ContactForm compact={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
