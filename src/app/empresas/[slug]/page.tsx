import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, HelpCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FAQ } from "@/components/ui/FAQ";
import { ContactForm } from "@/components/home/ContactForm";
import { companies } from "@/data/companies";

interface CompanyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return companies.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const company = companies.find((c) => c.slug === params.slug);
  if (!company) return { title: "Empresa não encontrada" };

  return {
    title: `${company.title} | Grupo RBM`,
    description: company.shortDescription,
  };
}

export default function CompanyDetailPage({ params }: CompanyPageProps) {
  const company = companies.find((c) => c.slug === params.slug);

  if (!company) {
    notFound();
  }

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Empresas", href: "/empresas" },
            { label: company.name },
          ]}
        />

        {/* Hero Section Banner */}
        <div
          className="rounded-3xl p-8 sm:p-12 mb-14 text-white relative overflow-hidden shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${company.color} 0%, #061F40 100%)`,
          }}
        >
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white">
              Empresa do Grupo RBM
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
              {company.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-100 leading-relaxed font-normal">
              {company.heroText}
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <WhatsAppButton
                text={`Solicitar Diagnóstico ${company.name}`}
                variant="green"
                size="md"
                customMessage={`Olá! Gostaria de um diagnóstico para a minha empresa com foco em ${company.name}.`}
              />
            </div>
          </div>
        </div>

        {/* About & Full Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-extrabold font-heading text-rbm-navy">
              Sobre a {company.name}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{company.fullDescription}</p>

            <h3 className="text-lg font-bold font-heading text-rbm-navy pt-2">
              Serviços Especializados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {company.services.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center space-x-2.5 text-xs font-semibold text-gray-800"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: company.color }} />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Box */}
          <div className="lg:col-span-5 bg-[#F5F7FA] p-6 sm:p-8 rounded-3xl border border-rbm-border space-y-5">
            <div className="flex items-center space-x-2 text-rbm-navy">
              <Zap className="w-5 h-5" style={{ color: company.color }} />
              <h3 className="text-base font-bold font-heading">Principais Benefícios</h3>
            </div>

            <div className="space-y-4">
              {company.benefits.map((b, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-rbm-border space-y-1">
                  <h4 className="text-xs font-bold font-heading text-rbm-navy">{b.title}</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-[#F5F7FA] rounded-3xl p-8 sm:p-10 mb-16 border border-rbm-border">
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-rbm-navy mb-8 text-center">
            Como é feito nosso atendimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {company.process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-2xl border border-rbm-border space-y-3 relative">
                <span
                  className="w-10 h-10 rounded-full font-black text-sm font-heading flex items-center justify-center text-white"
                  style={{ backgroundColor: company.color }}
                >
                  {step.step}
                </span>
                <h3 className="text-sm font-bold font-heading text-rbm-navy">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        {company.faq && company.faq.length > 0 && (
          <div className="mb-16">
            <FAQ
              items={company.faq.map((f, idx) => ({
                id: `faq-${idx}`,
                question: f.question,
                answer: f.answer,
              }))}
              title={`Dúvidas Frequentes - ${company.name}`}
            />
          </div>
        )}

        {/* Contact Form Dedicated */}
        <div className="bg-[#061F40] text-white p-8 sm:p-12 rounded-3xl">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-2xl font-extrabold font-heading">
              Fale com um especialista da {company.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Preencha o formulário abaixo para agendar um diagnóstico sem compromisso.
            </p>
            <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-2xl text-left">
              <ContactForm compact={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
