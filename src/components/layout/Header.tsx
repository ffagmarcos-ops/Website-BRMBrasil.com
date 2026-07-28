"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { mainNav } from "@/data/site";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-2.5" : "border-b border-brm-border/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          {mainNav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            if (item.submenu) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium font-heading rounded-md transition-colors ${
                      isActive
                        ? "text-[#0754A6] font-bold border-b-2 border-[#0754A6]"
                        : "text-brm-dark hover:text-[#0754A6]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="ml-1 w-4 h-4 text-gray-500 group-hover:text-[#0754A6] transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Submenu Dropdown */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-72 transition-all duration-200 origin-top-left ${
                      solutionsDropdownOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-brm-border p-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2.5 rounded-lg hover:bg-brm-light transition-colors group/sub"
                        >
                          <div className="text-sm font-semibold font-heading text-brm-dark group-hover/sub:text-[#0754A6]">
                            {subItem.label}
                          </div>
                          {subItem.description && (
                            <div className="text-xs text-gray-500 mt-0.5">{subItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium font-heading transition-colors relative ${
                  isActive
                    ? "text-[#0754A6] font-bold after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#0754A6]"
                    : "text-brm-dark hover:text-[#0754A6]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Trigger */}
        <div className="flex items-center space-x-3">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brm-dark hover:bg-brm-light focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brm-dark" /> : <Menu className="w-6 h-6 text-brm-dark" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brm-border px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-base font-semibold font-heading rounded-lg ${
                    pathname === item.href ? "bg-blue-50 text-[#0754A6]" : "text-brm-dark hover:bg-brm-light"
                  }`}
                >
                  {item.label}
                </Link>

                {item.submenu && (
                  <div className="pl-4 ml-2 border-l-2 border-brm-border space-y-1 my-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#0754A6]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-brm-border">
            <WhatsAppButton text="Fale Conosco pelo WhatsApp" variant="green" size="md" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
};
