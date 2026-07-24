import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Privacidade | Grupo BRM",
  description: "Política de Privacidade e Proteção de Dados Pessoais (LGPD) do Grupo BRM.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb items={[{ label: "Política de Privacidade" }]} />

        {/* Legal Disclaimer Box */}
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-800 space-y-1">
          <strong className="block font-bold">AVISO LEGAL DE REVISÃO JURÍDICA:</strong>
          <p>
            Este documento é uma minuta inicial estruturada para fins de prototipagem web e atendimento aos requisitos de usabilidade. Deve ser submetido à revisão e validação pelo departamento jurídico ou encarregado de dados (DPO) da sua empresa antes da publicação definitiva em produção.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-black font-heading text-brm-navy">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="text-xs text-gray-500">Última atualização: Julho de 2026</p>
        </div>

        <div className="prose prose-sm text-gray-700 space-y-6 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-brm-navy">1. Introdução</h2>
            <p>
              O <strong>Grupo BRM</strong> tem o compromisso de proteger a privacidade e a segurança dos dados pessoais de seus clientes, parceiros, colaboradores e visitantes do nosso site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações de acordo com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-brm-navy">2. Coleta de Dados Pessoais</h2>
            <p>Coletamos informações que você fornece voluntariamente ao interagir com nosso site, incluindo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dados de identificação e contato (nome, e-mail, telefone, empresa);</li>
              <li>Informações enviadas em formulários de diagnóstico, orçamento ou contato;</li>
              <li>Dados de navegação e cookies técnicos para fins estatísticos e de usabilidade.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-brm-navy">3. Finalidade do Tratamento</h2>
            <p>Seus dados pessoais são utilizados estritamente para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responder a solicitações de orçamento e agendamento de diagnósticos;</li>
              <li>Prestar serviços contratados e gerenciar o atendimento ao cliente;</li>
              <li>Enviar comunicados institucionais pertinentes, quando autorizado.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-brm-navy">4. Compartilhamento de Dados</h2>
            <p>
              O Grupo BRM não vende nem aluga dados pessoais a terceiros. O compartilhamento ocorre apenas entre as empresas do Grupo BRM para a prestação integrada de serviços ou quando exigido por obrigação legal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-brm-navy">5. Direitos do Titular</h2>
            <p>
              Conforme a LGPD, você possui o direito de confirmar a existência de tratamento, acessar seus dados, solicitar a correção de informações incompletas ou a eliminação de dados desnecessários através do nosso e-mail oficial de contato.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-brm-navy">6. Contato do Encarregado (DPO)</h2>
            <p>
              Para dúvidas sobre esta política ou requisições relacionadas aos seus dados pessoais, entre em contato pelo e-mail: <strong>privacidade@grupobrm.com.br</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
