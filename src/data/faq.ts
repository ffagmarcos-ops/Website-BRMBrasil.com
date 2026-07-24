export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const generalFaqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "O Grupo BRM atende apenas supermercados?",
    answer: "Não! O Grupo BRM atende empresas de diversos setores (indústria, comércio, serviços, varejo). O segmento de supermercados é uma das nossas especialidades através da empresa de sistemas para varejo alimentar, mas oferecemos contabilidade, marketing, desenvolvimento de software e mídia digital para todos os ramos.",
  },
  {
    id: "faq-2",
    question: "Como funciona a contratação de soluções integradas?",
    answer: "Sua empresa pode contratar uma única empresa do grupo ou optar pelo ecossistema integrado. Realizamos um diagnóstico inicial gratuito para identificar quais especialidades trarão maior retorno para o seu negócio.",
  },
  {
    id: "faq-3",
    question: "Terei um ponto de contato único no Grupo BRM?",
    answer: "Sim! Ao contratar soluções integradas, disponibilizamos um gestor de conta dedicado que coordena a entrega dos projetos entre as equipes de contabilidade, marketing, tecnologia e mídia.",
  },
  {
    id: "faq-4",
    question: "Qual o prazo médio para início das atividades?",
    answer: "Após o diagnóstico e alinhamento do escopo, o início do planejamento e implantação ocorre geralmente em até 48 horas úteis.",
  },
  {
    id: "faq-5",
    question: "Como solicitar um orçamento ou diagnóstico gratuito?",
    answer: "Você pode clicar no botão de WhatsApp em nosso site para falar diretamente com um especialista ou preencher o formulário na página de contato.",
  },
];
