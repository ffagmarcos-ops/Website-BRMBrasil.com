"use client";

import React from "react";

export const ContactCTA: React.FC = () => {
  return (
    <section className="bg-[#061F40] text-white py-14 border-t border-blue-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-white">
            Vamos conversar sobre o futuro do seu negócio?
          </h2>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
            Fale com nossos especialistas através do nosso autoatendimento 24h no canto inferior direito e descubra como o Grupo BRM pode conectar soluções para gerar resultados reais para a sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
};
