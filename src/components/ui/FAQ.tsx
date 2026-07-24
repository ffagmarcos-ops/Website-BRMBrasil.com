"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faq";

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, title = "Perguntas Frequentes" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-xl font-bold font-heading text-brm-navy mb-4">
          {title}
        </h3>
      )}

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-brm-border overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between font-heading font-semibold text-sm text-brm-navy hover:bg-gray-50 focus:outline-none"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[#0754A6]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
