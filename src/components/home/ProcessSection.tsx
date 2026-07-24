"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import { processSteps, differentialsList } from "@/data/differentials";
import { casesData } from "@/data/cases";

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[#F5F7FA] py-14 border-b border-brm-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Como funciona (4 steps) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brm-border shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-extrabold font-heading text-brm-navy mb-6">
                Como funciona
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 relative">
                {processSteps.map((step, idx) => (
                  <div key={step.number} className="relative z-10 flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#0754A6] text-white font-bold font-heading text-xs flex items-center justify-center shadow-sm shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-xs font-bold font-heading text-brm-navy">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-tight">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Nossos diferenciais */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-brm-border shadow-sm">
            <h2 className="text-lg font-extrabold font-heading text-brm-navy mb-5">
              Nossos diferenciais
            </h2>

            <ul className="space-y-2.5 text-xs text-gray-700">
              {differentialsList.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resultados que geram confiança */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-brm-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-extrabold font-heading text-brm-navy">
                  Resultados que geram confiança
                </h2>
                <Link
                  href="/cases"
                  className="text-xs font-bold text-[#0754A6] hover:underline"
                >
                  Ver todos
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {casesData.map((c) => (
                  <div
                    key={c.id}
                    className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between hover:bg-blue-50/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center space-x-1.5 text-xs font-bold font-heading text-brm-navy mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{c.clientName}</span>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-tight mb-2">
                        {c.metric}
                      </p>
                    </div>

                    <Link
                      href="/cases"
                      className="inline-flex items-center text-[10px] font-bold text-[#0754A6] hover:text-[#064385]"
                    >
                      <span>Ver case</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
