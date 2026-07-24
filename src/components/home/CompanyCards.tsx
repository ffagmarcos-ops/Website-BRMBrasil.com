"use client";

import React from "react";
import Link from "next/link";
import {
  Calculator,
  Megaphone,
  Code2,
  Tv,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { companies, Company } from "@/data/companies";

export const CompanyCards: React.FC = () => {
  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-7 h-7", style: { color } };
    switch (iconName) {
      case "calculator":
        return <Calculator {...props} />;
      case "megaphone":
        return <Megaphone {...props} />;
      case "code":
        return <Code2 {...props} />;
      case "monitor":
        return <Tv {...props} />;
      case "shopping-cart":
      default:
        return <ShoppingCart {...props} />;
    }
  };

  return (
    <section className="bg-white py-12 border-b border-rbm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {companies.map((company: Company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl p-6 border border-rbm-border/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${company.color}15` }}
                >
                  {getIcon(company.iconName, company.color)}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-extrabold font-heading tracking-wide mb-2"
                  style={{ color: company.color }}
                >
                  {company.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {company.shortDescription}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={`/empresas/${company.slug}`}
                className="inline-flex items-center text-xs font-bold font-heading transition-colors group/link"
                style={{ color: company.color }}
              >
                <span>Saiba mais</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
