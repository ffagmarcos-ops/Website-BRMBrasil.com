"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("rbm_cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("rbm_cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-[#061F40] text-white p-4 rounded-2xl shadow-2xl border border-white/20 flex flex-col space-y-3">
      <div className="flex items-start space-x-3">
        <Cookie className="w-5 h-5 text-brm-lime shrink-0 mt-0.5" />
        <p className="text-xs text-gray-200 leading-relaxed">
          Utilizamos cookies para oferecer a melhor experiência em nosso site. Ao continuar navegando, você concorda com a nossa{" "}
          <Link href="/politica-de-privacidade" className="underline text-cyan-300 hover:text-white">
            Política de Privacidade
          </Link>.
        </p>
      </div>
      <div className="flex justify-end space-x-2 pt-1">
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-[#39A844] hover:bg-[#2e8837] text-white text-xs font-bold font-heading rounded-lg transition-colors"
        >
          Aceitar e Continuar
        </button>
      </div>
    </div>
  );
};
