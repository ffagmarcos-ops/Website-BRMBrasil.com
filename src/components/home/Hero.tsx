"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Play,
  Users,
  Target,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#061F40] text-white overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061F40] via-[#061F40]/95 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] md:min-h-[600px] items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 py-12 md:py-16 pr-0 lg:pr-8 z-30 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold font-heading text-white leading-[1.15] tracking-tight">
              Soluções integradas para <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-300">
                impulsionar empresas e negócios.
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl">
              Tecnologia, estratégia e resultados reais para transformar a gestão, fortalecer a comunicação e gerar crescimento sustentável.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                text="Solicitar Diagnóstico Gratuito"
                variant="green"
                size="lg"
                showIcon={false}
                className="font-bold shadow-lg shadow-emerald-900/30"
                customMessage="Olá! Gostaria de solicitar um diagnóstico gratuito para a minha empresa."
              />

              <Link
                href="/solucoes"
                className="inline-flex items-center justify-center font-heading font-semibold text-white bg-transparent border border-white/60 hover:bg-white/10 hover:border-white px-6 py-3.5 rounded-full text-base transition-all duration-300 space-x-2"
              >
                <Play className="w-4 h-4 fill-white shrink-0" />
                <span>Conheça as Soluções</span>
              </Link>
            </div>

            {/* 4 Differentials Strip */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-heading font-medium text-gray-200">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-full bg-blue-900/60 border border-blue-400/30 text-cyan-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="leading-tight">Especialistas em gestão</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-full bg-blue-900/60 border border-blue-400/30 text-cyan-400 shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <span className="leading-tight">Soluções sob medida</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-full bg-blue-900/60 border border-blue-400/30 text-cyan-400 shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="leading-tight">Resultados comprovados</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-full bg-blue-900/60 border border-blue-400/30 text-cyan-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="leading-tight">Segurança e confiança</span>
              </div>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="hidden lg:block lg:col-span-5 absolute right-0 top-0 bottom-0 w-1/2 h-full z-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/escritorio-rbm.jpg"
                alt="Escritório corporativo moderno do Grupo RBM com painel digital"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Overlay Gradient Integration */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#061F40] via-[#061F40]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061F40]/80 via-transparent to-[#061F40]/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
