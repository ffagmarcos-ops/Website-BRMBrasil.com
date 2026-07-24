import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Target, Award, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { aboutContent, aboutStats } from "@/data/about";
import { companies } from "@/data/companies";

export const metadata: Metadata = {
  title: "Sobre o Grupo BRM | Ecossistema Empresarial Integrado",
  description: "Conheça a história, missão, visão e valores do Grupo BRM. Unimos contabilidade, marketing, desenvolvimento de software e mídia digital.",
};

export default function SobrePage() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Sobre o Grupo BRM" }]} />

        {/* Hero Section Page */}
        <div className="bg-[#061F40] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brm-lime">
              Ecossistema Empresarial
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
              Unindo inteligência, gestão e tecnologia para impulsionar negócios.
            </h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
              {aboutContent.paragraph1}
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {aboutStats.map((stat) => (
            <div key={stat.id} className="bg-[#F5F7FA] p-6 rounded-2xl border border-brm-border text-center">
              <div className="text-3xl font-black font-heading text-[#0754A6] mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-gray-600 uppercase font-heading">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story & Purpose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brm-navy">
              Nossa História e Propósito
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              O Grupo BRM nasceu da percepção de que empresas modernas necessitam de soluções perfeitamente integradas. Em vez de contratar múltiplos fornecedores desconectados para gerenciar contabilidade, campanhas de marketing, sistemas de TI e mídias em telas, unificamos essas inteligências sob uma única governança.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Com mais de 15 anos de experiência de mercado, conectamos especialistas multidisciplinares em cada vertical de negócio para oferecer agilidade, segurança e retorno comprovado sobre o investimento.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#F5F7FA] p-8 rounded-3xl border border-brm-border space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#0754A6]">
                <Target className="w-5 h-5" />
                <h3 className="text-base font-bold font-heading">Missão</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{aboutContent.mission}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#0754A6]">
                <Award className="w-5 h-5" />
                <h3 className="text-base font-bold font-heading">Visão</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{aboutContent.vision}</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold font-heading text-brm-navy mb-8 text-center">
            Nossos Valores Fundamentais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-brm-border shadow-sm flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-brm-dark">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Companies Ecosystem */}
        <div className="bg-[#F5F7FA] rounded-3xl p-8 sm:p-12 mb-16 border border-brm-border">
          <h2 className="text-2xl font-extrabold font-heading text-brm-navy mb-6">
            Estrutura do Grupo: Como as empresas trabalham juntas
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Cada uma das cinco empresas do Grupo BRM atua de forma independente ou em perfeita sinergia. Isso significa que sua empresa pode começar com um serviço específico e expandir a integração conforme novas demandas surgirem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {companies.map((c) => (
              <div key={c.id} className="bg-white p-5 rounded-2xl border border-brm-border space-y-3">
                <h3 className="text-xs font-black font-heading uppercase" style={{ color: c.color }}>
                  {c.name}
                </h3>
                <p className="text-[11px] text-gray-600 leading-snug">{c.shortDescription}</p>
                <Link
                  href={`/empresas/${c.slug}`}
                  className="inline-flex items-center text-[10px] font-bold text-[#0754A6] hover:underline pt-2"
                >
                  <span>Conhecer empresa</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#061F40] text-white p-10 rounded-3xl space-y-4">
          <h2 className="text-2xl font-bold font-heading">Pronto para transformar a gestão do seu negócio?</h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Fale com a nossa equipe de especialistas e descubra como o atendimento integrado do Grupo BRM pode gerar resultados reais.
          </p>
          <div className="pt-2 flex justify-center">
            <WhatsAppButton text="Falar com Especialista" variant="green" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
