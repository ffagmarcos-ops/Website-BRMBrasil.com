import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ContactForm } from "@/components/home/ContactForm";
import { siteConfig } from "@/data/site";
import { FAQ } from "@/components/ui/FAQ";
import { generalFaqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Contato | Grupo BRM",
  description: "Fale com os especialistas do Grupo BRM. Atendimento integrado em contabilidade, marketing, desenvolvimento de software e sistemas.",
};

export default function ContatoPage() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contato" }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black font-heading text-brm-navy">
            Fale com o Grupo BRM
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Estamos prontos para entender as necessidades do seu negócio e apresentar as melhores soluções integradas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#061F40] text-white p-8 rounded-3xl space-y-6 shadow-md">
              <h2 className="text-xl font-bold font-heading">Canais Diretos</h2>

              <div className="space-y-4 text-xs text-gray-200">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">Telefone & WhatsApp</span>
                    <span>{siteConfig.contactPhone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">E-mail Corporativo</span>
                    <span>{siteConfig.contactEmail}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">Endereço Principal</span>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">Horário de Atendimento</span>
                    <span>{siteConfig.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15">
                <WhatsAppButton text="Conversar pelo WhatsApp" variant="green" size="md" className="w-full" />
              </div>
            </div>
          </div>

          {/* Right Column: Full Form */}
          <div className="lg:col-span-7 bg-[#F5F7FA] p-8 rounded-3xl border border-brm-border shadow-sm">
            <h2 className="text-xl font-extrabold font-heading text-brm-navy mb-6">
              Envie uma mensagem
            </h2>
            <ContactForm compact={false} />
          </div>
        </div>

        {/* General FAQ */}
        <div className="mb-16">
          <FAQ items={generalFaqs} title="Perguntas Frequentes sobre Atendimento" />
        </div>
      </div>
    </div>
  );
}
