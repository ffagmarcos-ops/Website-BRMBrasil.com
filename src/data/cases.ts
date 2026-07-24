export interface CaseItem {
  id: string;
  clientName: string;
  category: string;
  title: string;
  metric: string;
  resultSummary: string;
  fullStory: string;
  solutionsUsed: string[];
  companySlug: string;
  isPlaceholderNote?: boolean;
}

export const casesData: CaseItem[] = [
  {
    id: "case-01-rede-mais",
    clientName: "Rede Mais",
    category: "Marketing e comunicação",
    title: "Fortalecimento da presença digital e alcance expandido",
    metric: "+18% eficiência operacional",
    resultSummary: "Fortalecimento da presença digital e aumento do alcance das campanhas.",
    fullStory: "A Rede Mais necessitava de uma reformulação completa em sua comunicação digital e presença em redes sociais. A M.O Publicidade implementou estratégias integradas de tráfego pago, planejamento editorial e nova identidade visual.",
    solutionsUsed: ["M.O Publicidade", "Gestão de Redes Sociais", "Tráfego Pago"],
    companySlug: "mo-publicidade",
    isPlaceholderNote: true,
  },
  {
    id: "case-02-ecovarejo",
    clientName: "EcoVarejo",
    category: "Gestão e contabilidade",
    title: "Reestruturação contábil e otimização de tributos",
    metric: "-12% custos operacionais",
    resultSummary: "Maior organização financeira e melhoria dos processos internos.",
    fullStory: "Com o crescimento rápido de suas operações, a EcoVarejo precisava alinhar seus relatórios financeiros e reorganizar o departamento fiscal. A RBM Contabilidade conduziu um planejamento tributário preventivo que reduziu gargalos operacionais.",
    solutionsUsed: ["RBM Contabilidade", "Planejamento Tributário", "Gestão Financeira"],
    companySlug: "contabilidade",
    isPlaceholderNote: true,
  },
  {
    id: "case-03-superfacil",
    clientName: "SuperFácil",
    category: "Desenvolvimento & Automação",
    title: "Automação de processos e integração de sistemas web",
    metric: "+25% produtividade diária",
    resultSummary: "Automação de atividades e redução de tarefas manuais.",
    fullStory: "Para escalar seu atendimento sem elevar custos fixos, a empresa adotou um sistema web personalizado desenvolvido pela RBM Desenvolvimento, integrando fluxos de pedidos e painéis administrativos em tempo real.",
    solutionsUsed: ["RBM Desenvolvimento", "Sistemas Web", "Painel Administrativo"],
    companySlug: "desenvolvimento",
    isPlaceholderNote: true,
  },
  {
    id: "case-04-unipecas",
    clientName: "UniPeças",
    category: "DIGMIDIA e sistemas",
    title: "Comunicação digital em telas e encartes interativos",
    metric: "Vantagem competitiva",
    resultSummary: "Comunicação digital centralizada e melhor distribuição de conteúdo.",
    fullStory: "A UniPeças modernizou suas unidades físicas com o sistema de TV Indoor da DIGMIDIA e encartes digitais dinâmicos, garantindo a exibição de ofertas atualizadas instantaneamente em todas as suas telas.",
    solutionsUsed: ["DIGMIDIA", "TV Indoor", "Encartes Digitais"],
    companySlug: "digmidia",
    isPlaceholderNote: true,
  },
];
