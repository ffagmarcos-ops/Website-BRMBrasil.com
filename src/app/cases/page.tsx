"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight, Filter, AlertCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { casesData, CaseItem } from "@/data/cases";
import { companies } from "@/data/companies";

export default function CasesPage() {
  const [selectedCompany, setSelectedCompany] = useState<string>("all");

  const filteredCases = casesData.filter((c) => {
    if (selectedCompany === "all") return true;
    return c.companySlug === selectedCompany;
  });

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Cases e Resultados" }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black font-heading text-rbm-navy">
            Resultados que Geram Confiança
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conheça como as soluções integradas do Grupo RBM auxiliam empresas a superar desafios em contabilidade, marketing, desenvolvimento e mídia digital.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCompany("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold font-heading transition-all ${
              selectedCompany === "all"
                ? "bg-[#0754A6] text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Todas as empresas ({casesData.length})
          </button>

          {companies.map((company) => (
            <button
              key={company.slug}
              onClick={() => setSelectedCompany(company.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-heading transition-all ${
                selectedCompany === company.slug
                  ? "bg-[#0754A6] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredCases.map((item: CaseItem) => (
              <div
                key={item.id}
                className="bg-[#F5F7FA] rounded-3xl p-7 border border-rbm-border shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-100 text-[#0754A6] font-bold text-xs rounded-full font-heading">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      {item.metric}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold font-heading text-rbm-navy">
                    {item.clientName}: {item.title}
                  </h2>

                  <p className="text-xs text-gray-700 leading-relaxed">
                    {item.fullStory}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                      Soluções Aplicadas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.solutionsUsed.map((sol, idx) => (
                        <span key={idx} className="text-[10px] font-semibold bg-white px-2.5 py-1 rounded-md border border-gray-200 text-gray-700">
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {item.isPlaceholderNote && (
                  <div className="text-[10px] text-gray-400 italic border-t border-gray-200 pt-3">
                    * Dados demonstrativos preparados para atualização posterior pelo cliente.
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-[#F5F7FA] rounded-3xl p-12 text-center space-y-3 max-w-md mx-auto mb-16 border border-rbm-border">
            <AlertCircle className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="text-base font-bold font-heading text-rbm-navy">Nenhum case encontrado</h3>
            <p className="text-xs text-gray-500">
              Não existem cases cadastrados para a empresa selecionada no momento.
            </p>
            <button
              onClick={() => setSelectedCompany("all")}
              className="text-xs font-bold text-[#0754A6] underline pt-2"
            >
              Ver todos os cases
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
