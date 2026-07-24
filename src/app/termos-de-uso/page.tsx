import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Termos de Uso | Grupo RBM",
  description: "Termos e Condições Gerais de Uso do site e serviços institucionais do Grupo RBM.",
};

export default function TermosUsoPage() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb items={[{ label: "Termos de Uso" }]} />

        {/* Legal Disclaimer Box */}
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-800 space-y-1">
          <strong className="block font-bold">AVISO LEGAL DE REVISÃO JURÍDICA:</strong>
          <p>
            Esta minuta inicial de Termos de Uso deve ser revisada pela assessoria jurídica do Grupo RBM para adequação específica às regras contratuais finais e regulamentações do seu segmento.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-black font-heading text-rbm-navy">
            Termos e Condições de Uso
          </h1>
          <p className="text-xs text-gray-500">Última atualização: Julho de 2026</p>
        </div>

        <div className="prose prose-sm text-gray-700 space-y-6 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-rbm-navy">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site do <strong>Grupo RBM</strong>, você concorda expressamente em cumprir estes Termos e Condições de Uso. Caso não concorde com qualquer disposição, recomendamos interromper a navegação.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-rbm-navy">2. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado neste site, incluindo textos, marcas, logotipos, ícones, códigos-fonte, elementos visuais e layouts, é de propriedade exclusiva do Grupo RBM ou de seus licenciadores, estando protegido pela legislação de direitos autorais e propriedade intelectual.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-rbm-navy">3. Uso Autorizado do Site</h2>
            <p>O usuário compromete-se a utilizar o site de forma ética e responsável, sendo vedado:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Transmitir códigos maliciosos ou praticar ataques cibernéticos;</li>
              <li>Utilizar robôs ou raspadores automatizados sem autorização prévia;</li>
              <li>Inserir informações falsas ou enganosas nos formulários de contato.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-rbm-navy">4. Limitação de Responsabilidade</h2>
            <p>
              O Grupo RBM esforça-se para manter as informações do site sempre atualizadas e precisas. No entanto, o conteúdo é fornecido com caráter informativo, podendo ser alterado a qualquer momento sem aviso prévio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-rbm-navy">5. Foro e Legislação Aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias oriundas do presente documento.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
