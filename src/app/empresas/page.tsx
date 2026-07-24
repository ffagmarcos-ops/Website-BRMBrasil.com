import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { companies } from "@/data/companies";

export const metadata: Metadata = {
  title: "Empresas do Grupo | Grupo RBM",
  description: "Conheça as 5 empresas especializadas do Grupo RBM: Contabilidade, M.O Publicidade, Desenvolvimento, DIGMIDIA e Sistemas para Supermercados.",
};

export default function EmpresasPage() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Empresas do Grupo" }]} />

        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-black font-heading text-rbm-navy">
            Empresas do Grupo RBM
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Cinco empresas especialistas unidas sob uma governança sólida para oferecer atendimento completo, estratégico e resultados mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companies.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-3xl p-7 border border-rbm-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: `${c.color}15`, color: c.color }}
                >
                  {c.name.substring(0, 2).toUpperCase()}
                </div>

                <h2 className="text-xl font-extrabold font-heading" style={{ color: c.color }}>
                  {c.title}
                </h2>

                <p className="text-xs text-gray-600 leading-relaxed">{c.shortDescription}</p>

                <div className="pt-2 space-y-2 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Destaques
                  </span>
                  {c.services.slice(0, 3).map((srv, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={`/empresas/${c.slug}`}
                  className="w-full inline-flex items-center justify-center text-xs font-bold font-heading py-3 rounded-xl text-white transition-all shadow-sm"
                  style={{ backgroundColor: c.color }}
                >
                  <span>Conhecer a empresa</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
