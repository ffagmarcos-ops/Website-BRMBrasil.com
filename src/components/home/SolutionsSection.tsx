"use client";

import React from "react";
import {
  TrendingUp,
  ShoppingCart,
  Cpu,
  PieChart,
  ShieldCheck,
} from "lucide-react";
import { solutionsData } from "@/data/services";

export const SolutionsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6" };
    switch (iconName) {
      case "trending-up":
        return <TrendingUp {...iconProps} className="w-6 h-6 text-emerald-600" />;
      case "shopping-cart":
        return <ShoppingCart {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "cpu":
        return <Cpu {...iconProps} className="w-6 h-6 text-purple-600" />;
      case "pie-chart":
        return <PieChart {...iconProps} className="w-6 h-6 text-orange-600" />;
      case "shield-check":
      default:
        return <ShieldCheck {...iconProps} className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="bg-white py-14 border-b border-rbm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-rbm-navy mb-8">
          Soluções para Empresas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {solutionsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 border border-rbm-border/80 shadow-sm hover:shadow-card transition-all duration-200 flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100 shrink-0">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-sm font-bold font-heading text-rbm-navy leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
