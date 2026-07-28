import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieNotice } from "@/components/ui/CookieNotice";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Soluções Integradas para Empresas`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Grupo BRM",
    "soluções empresariais",
    "contabilidade",
    "marketing digital",
    "desenvolvimento de software",
    "DIGMIDIA",
    "TV indoor",
    "encartes digitais",
    "sistemas EAD",
    "sistemas para supermercados",
    "automação empresarial",
    "tecnologia para empresas",
  ],
  authors: [{ name: "Grupo BRM" }],
  openGraph: {
    title: `${siteConfig.name} | Soluções Integradas para Empresas`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/escritorio-brm.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo BRM - Soluções Integradas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Soluções Integradas para Empresas`,
    description: siteConfig.description,
    images: ["/images/escritorio-brm.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-brm.svg`,
    description: siteConfig.description,
    telephone: siteConfig.contactPhone,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Paulista, 1000",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01310-100",
      addressCountry: "BR",
    },
    sameAs: [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook,
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
