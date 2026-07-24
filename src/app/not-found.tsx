import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-white py-20 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md text-center px-4 space-y-6">
        <div className="w-20 h-20 bg-blue-50 text-[#0754A6] rounded-full flex items-center justify-center mx-auto text-3xl font-black font-heading shadow-inner">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-black font-heading text-rbm-navy">
          Página não encontrada
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Desculpe, a página que você está procurando não existe, foi movida ou está temporariamente indisponível.
        </p>
        <div className="pt-2 flex justify-center space-x-3">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0754A6] hover:bg-[#064385] text-white font-bold font-heading text-xs rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
