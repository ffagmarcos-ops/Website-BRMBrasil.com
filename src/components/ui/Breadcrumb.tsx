import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-xs text-gray-500 py-3 mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-[#0754A6] transition-colors">
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Início</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="inline-flex items-center">
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 mx-1" />
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:text-[#0754A6] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-brm-dark">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
