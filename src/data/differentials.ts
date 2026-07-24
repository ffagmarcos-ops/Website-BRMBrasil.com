export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Diagnóstico",
    description: "Entendemos a realidade da empresa e identificamos necessidades e oportunidades.",
  },
  {
    number: 2,
    title: "Planejamento",
    description: "Criamos uma estratégia personalizada com soluções das empresas do grupo.",
  },
  {
    number: 3,
    title: "Implementação",
    description: "Colocamos as soluções em prática com organização, agilidade e acompanhamento.",
  },
  {
    number: 4,
    title: "Resultados",
    description: "Acompanhamos indicadores, realizamos melhorias e evoluímos junto com o cliente.",
  },
];

export const differentialsList: string[] = [
  "Soluções realmente integradas",
  "Equipe multidisciplinar",
  "Atendimento próximo e ágil",
  "Tecnologia aplicada ao negócio",
  "Suporte contínuo",
  "Projetos personalizados",
  "Foco em resultados reais",
  "Experiência em diferentes segmentos",
];
