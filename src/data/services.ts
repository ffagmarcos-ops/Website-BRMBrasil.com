export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: "trending-up" | "shopping-cart" | "cpu" | "pie-chart" | "shield-check";
  badge: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: "gestao-integrada",
    title: "Gestão integrada",
    description: "Integramos processos, dados e equipes para aumentar a produtividade e melhorar a operação.",
    iconName: "trending-up",
    badge: "Gestão & Processos",
  },
  {
    id: "mais-vendas",
    title: "Mais visibilidade e vendas",
    description: "Estratégias de comunicação e tecnologia para fortalecer marcas, gerar oportunidades e aumentar conversões.",
    iconName: "shopping-cart",
    badge: "Marketing & Growth",
  },
  {
    id: "automacao-tecnologia",
    title: "Automação e tecnologia",
    description: "Sistemas inteligentes que automatizam rotinas, reduzem custos e melhoram o controle.",
    iconName: "cpu",
    badge: "Tecnologia & Softwares",
  },
  {
    id: "decisoes-inteligentes",
    title: "Decisões inteligentes",
    description: "Informações organizadas e indicadores para decisões mais rápidas e estratégicas.",
    iconName: "pie-chart",
    badge: "BI & Indicadores",
  },
  {
    id: "seguranca-conformidade",
    title: "Segurança e conformidade",
    description: "Processos estruturados, gestão responsável e soluções preparadas para o crescimento.",
    iconName: "shield-check",
    badge: "Compliance & Fiscal",
  },
];
