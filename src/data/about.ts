/**
 * NOTA DE CONFIGURAÇÃO:
 * Os indicadores numéricos abaixo são dados demonstrativos/placeholders.
 * Devem ser revisados e validados com o cliente antes do lançamento oficial em produção.
 */
export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: "users" | "folder-check" | "award" | "map-pin";
}

export const aboutStats: StatItem[] = [
  {
    id: "stat-clientes",
    value: "+200",
    label: "Clientes Ativos",
    iconName: "users",
  },
  {
    id: "stat-projetos",
    value: "+600",
    label: "Projetos atendidos",
    iconName: "folder-check",
  },
  {
    id: "stat-experiencia",
    value: "15+ anos",
    label: "De experiência",
    iconName: "award",
  },
  {
    id: "stat-atendimento",
    value: "Atendimento",
    label: "Nacional",
    iconName: "map-pin",
  },
];

export const aboutContent = {
  title: "Sobre o Grupo RBM",
  paragraph1: "O Grupo RBM conecta cinco empresas especializadas que trabalham de forma integrada para oferecer soluções completas e personalizadas para empresas, negócios e varejo.",
  paragraph2: "Nosso propósito é unir conhecimento, criatividade, tecnologia e experiência em gestão para impulsionar resultados reais e construir parcerias de longo prazo.",
  mission: "Conectar soluções inteligentes e tecnologia de ponta para potencializar o crescimento sustentável de empresas e organizações de diversos segmentos.",
  vision: "Ser reconhecido nacionalmente como um ecossistema empresarial integrado referência em gestão, inovação tecnológica e comunicação estratégica.",
  values: [
    "Integração e Sinergia entre especialidades",
    "Foco em Resultados Reais e mensuráveis",
    "Inovação Contínua e Tecnologia Prática",
    "Ética, Transparência e Segurança",
    "Parcerias de Longo Prazo com Nossos Clientes",
  ],
};
