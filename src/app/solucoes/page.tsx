import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { companies } from "@/data/companies";

export const metadata: Metadata = {
  title: "Soluções Integradas | Grupo RBM",
  description: "Soluções completas em gestão empresarial, marketing, desenvolvimento de software, mídia digital e sistemas para supermercados.",
};

export default function SolucoesPage() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Soluções Integradas" }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-black font-heading text-rbm-navy">
            Soluções Integradas para Negócios
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conectamos tecnologia, estratégia, gestão e comunicação para entregar soluções completas adaptadas ao tamanho e objetivo da sua empresa.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12 mb-16">
          {companies.map((c) => (
            <div
              key={c.id}
              id={c.slug}
              className="bg-[#F5F7FA] rounded-3xl p-8 border border-rbm-border shadow-sm scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold font-heading uppercase"
                    style={{ backgroundColor: `${c.color}20`, color: c.color }}
                  >
                    {c.name}
                  </span>

                  <h2 className="text-2xl font-black font-heading text-rbm-navy">{c.title}</h2>

                  <p className="text-xs text-gray-700 leading-relaxed">{c.fullDescription}</p>

                  <div className="pt-2">
                    <Link
                      href={`/empresas/${c.slug}`}
                      className="inline-flex items-center text-xs font-bold font-heading px-5 py-2.5 rounded-xl text-white transition-colors"
                      style={{ backgroundColor: c.color }}
                    >
                      <span>Ver detalhes da empresa</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-rbm-border space-y-3">
                  <h3 className="text-xs font-bold font-heading uppercase tracking-wider text-gray-500 mb-2">
                    Serviços e Especialidades Incluídas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {c.services.map((srv, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 text-xs text-rbm-dark font-medium">
                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: c.color }} />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-[#061F40] text-white p-8 sm:p-12 rounded-3xl text-center space-y-4">
          <h2 className="text-2xl font-bold font-heading">Dúvida sobre qual solução escolher?</h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Nossos consultores realizam uma análise gratuita do seu cenário para indicar o plano ideal.
          </p>
          <div className="pt-2 flex justify-center">
            <WhatsAppButton text="Solicitar Diagnóstico Gratuito" variant="green" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
