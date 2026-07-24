"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, mainNav } from "@/data/site";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061F40] text-white pt-14 pb-8 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Brand Logo & Slogan */}
          <div className="md:col-span-1 space-y-4">
            <Logo variant="light" width={200} height={48} />
            <p className="text-xs font-semibold text-brm-lime tracking-wide leading-relaxed uppercase">
              {siteConfig.slogan}
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Soluções integradas em gestão, marketing, desenvolvimento de software, mídia digital e sistemas para varejo alimentar.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase text-white tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brm-lime transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluções Integradas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase text-white tracking-wider">Empresas do Grupo</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/empresas/contabilidade" className="hover:text-emerald-400 transition-colors">
                  Contabilidade
                </Link>
              </li>
              <li>
                <Link href="/empresas/mo-publicidade" className="hover:text-orange-400 transition-colors">
                  M.O Publicidade
                </Link>
              </li>
              <li>
                <Link href="/empresas/desenvolvimento" className="hover:text-purple-400 transition-colors">
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link href="/empresas/digmidia" className="hover:text-blue-400 transition-colors">
                  DIGMIDIA
                </Link>
              </li>
              <li>
                <Link href="/empresas/sistemas" className="hover:text-cyan-400 transition-colors">
                  Sistemas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Mídias Sociais */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-heading uppercase text-white tracking-wider">Contato & Atendimento</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Email: {siteConfig.contactEmail}</p>
              <p>WhatsApp: {siteConfig.contactPhone}</p>
              <p className="text-xs text-gray-400 pt-1">{siteConfig.workingHours}</p>
            </div>
            
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn do Grupo BRM"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0754A6] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Grupo BRM"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F36C0A] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Grupo BRM"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0878D1] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Grupo BRM. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
