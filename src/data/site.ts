export interface NavItem {
  label: string;
  href: string;
  submenu?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const siteConfig = {
  name: "Grupo BRM",
  slogan: "Conectamos soluções. Potencializamos resultados.",
  tagline: "Soluções integradas para impulsionar empresas e negócios.",
  description: "Tecnologia, estratégia, comunicação e gestão trabalhando juntas para gerar resultados reais e crescimento sustentável.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://grupobrm.com.br",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999",
  defaultWhatsAppMessage: "Olá! Conheci o Grupo BRM pelo site e gostaria de saber mais sobre as soluções.",
  contactEmail: "contato@grupobrm.com.br",
  contactPhone: "(11) 99999-9999",
  address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100",
  workingHours: "Segunda a Sexta, das 08h às 18h",
  socialLinks: {
    linkedin: "https://linkedin.com/company/grupobrm",
    instagram: "https://instagram.com/grupobrm",
    facebook: "https://facebook.com/grupobrm",
  },
};

export const mainNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Soluções",
    href: "/solucoes",
    submenu: [
      { label: "Gestão empresarial", href: "/solucoes#gestao", description: "Otimização de processos e alta performance" },
      { label: "Marketing e comunicação", href: "/solucoes#marketing", description: "Posicionamento de marca e crescimento" },
      { label: "Desenvolvimento de software", href: "/solucoes#desenvolvimento", description: "Sistemas e aplicativos sob medida" },
      { label: "Soluções digitais", href: "/solucoes#digmidia", description: "TV indoor, EAD e sinalização digital" },
      { label: "Sistemas", href: "/solucoes#sistemas", description: "PDV, frente de caixa e gestão comercial" },
    ],
  },
  { label: "Empresas", href: "/empresas" },
  { label: "Cases", href: "/cases" },
  { label: "Contato", href: "/contato" },
];
