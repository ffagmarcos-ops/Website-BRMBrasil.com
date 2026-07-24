export interface Company {
  id: string;
  slug: string;
  name: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  color: string;
  bgLight: string;
  iconName: "calculator" | "megaphone" | "code" | "monitor" | "shopping-cart" | "terminal";
  services: string[];
  heroText: string;
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const companies: Company[] = [
  {
    id: "contabilidade",
    slug: "contabilidade",
    name: "Contabilidade",
    title: "CONTABILIDADE",
    shortDescription: "Gestão financeira, fiscal e contábil completa para empresas de todos os portes.",
    fullDescription: "A BRM Contabilidade oferece soluções estratégicas em planejamento tributário, gestão financeira, compliance fiscal e departamento pessoal, garantindo total conformidade legal e saúde financeira para o seu negócio crescer de forma sustentável.",
    color: "#39A844",
    bgLight: "bg-emerald-50 text-emerald-600 border-emerald-200",
    iconName: "calculator",
    services: [
      "Planejamento tributário",
      "Departamento pessoal",
      "Regularização fiscal",
      "Relatórios financeiros",
      "Gestão contábil integrada",
    ],
    heroText: "Transforme a gestão financeira da sua empresa com inteligência contábil e planejamento tributário eficiente.",
    benefits: [
      { title: "Redução de Impostos", description: "Enquadramento tributário ideal para diminuir custos fiscais dentro da lei." },
      { title: "Tranquilidade Fiscal", description: "Conformidade total com obrigações acessórias e órgãos governamentais." },
      { title: "Relatórios Estratégicos", description: "Dados claros sobre a saúde financeira do negócio para tomada de decisões." },
    ],
    process: [
      { step: "01", title: "Diagnóstico Fiscal", description: "Análise completa da situação contábil e tributária atual da sua empresa." },
      { step: "02", title: "Estruturação", description: "Implementação de rotinas contábeis, integração de dados e ajustes tributários." },
      { step: "03", title: "Gestão Contínua", description: "Acompanhamento mensal, apuração de impostos e relatórios gerenciais." },
    ],
    faq: [
      { question: "Como funciona a transição da minha contabilidade atual?", answer: "Nossa equipe realiza todo o processo de migração de forma simples e segura, sem interrupção nas suas rotinas fiscais." },
      { question: "A BRM Contabilidade atende empresas de qual porte?", answer: "Atendemos desde microempresas e PMEs até médias e grandes corporações de diferentes segmentos." },
    ],
  },
  {
    id: "mo-publicidade",
    slug: "mo-publicidade",
    name: "M.O Publicidade",
    title: "M.O PUBLICIDADE",
    shortDescription: "Marketing, redes sociais e comunicação estratégica para gerar visibilidade, relacionamento e resultados.",
    fullDescription: "A M.O Publicidade conecta marcas aos seus públicos através de estratégias criativas de marketing digital, gestão de redes sociais, tráfego pago, produção de vídeos, branding e materiais promocionais com foco em conversão e awareness.",
    color: "#F36C0A",
    bgLight: "bg-orange-50 text-orange-600 border-orange-200",
    iconName: "megaphone",
    services: [
      "Gestão de redes sociais",
      "Campanhas publicitárias",
      "Tráfego pago (Ads)",
      "Identidade visual e Branding",
      "Produção de vídeos",
      "Criação de sites e landing pages",
      "Materiais digitais e impressos",
    ],
    heroText: "Aumente a visibilidade da sua marca e conquiste mais clientes com marketing digital estratégico.",
    benefits: [
      { title: "Maior Alcance", description: "Construção de presença digital forte e atração de novos clientes qualificados." },
      { title: "Posicionamento Premium", description: "Design profissional e comunicação coerente com os valores do seu negócio." },
      { title: "ROI Mensurável", description: "Campanhas de tráfego otimizadas com relatórios claros sobre retorno do investimento." },
    ],
    process: [
      { step: "01", title: "Briefing & Pesquisa", description: "Mapeamento do público-alvo, concorrentes e diferenciais da sua marca." },
      { step: "02", title: "Estratégia Criativa", description: "Definição do plano de conteúdo, canais de mídia e campanhas." },
      { step: "03", title: "Execução & Otimização", description: "Publicação, análise contínua de métricas e ajustes estratégicos." },
    ],
    faq: [
      { question: "A M.O Publicidade cuida da produção completa de conteúdo?", answer: "Sim, cuidamos do planejamento, redação, design, gravação de vídeos e veiculação em todas as plataformas." },
      { question: "Como acompanho os resultados das campanhas?", answer: "Enviamos relatórios periódicos de desempenho detalhando métricas como alcance, engajamento e novos leads." },
    ],
  },
  {
    id: "desenvolvimento",
    slug: "desenvolvimento",
    name: "Desenvolvimento",
    title: "DESENVOLVIMENTO",
    shortDescription: "Soluções personalizadas, sistemas, aplicativos e integrações que otimizam processos e impulsionam negócios.",
    fullDescription: "A BRM Desenvolvimento projeta e constrói softwares sob medida, plataformas web, aplicativos móveis, sistemas de gestão personalizados e soluções de Inteligência Artificial para automatizar rotinas e maximizar a eficiência das empresas.",
    color: "#50319A",
    bgLight: "bg-purple-50 text-purple-600 border-purple-200",
    iconName: "code",
    services: [
      "Desenvolvimento de sites",
      "Aplicativos iOS e Android",
      "Sistemas web sob medida",
      "Painéis administrativos e dashboards",
      "Automação de processos",
      "Integrações via API",
      "Soluções em Inteligência Artificial",
    ],
    heroText: "Construímos soluções tecnológicas sob medida para resolver os desafios do seu negócio.",
    benefits: [
      { title: "Sofware Exclusivo", description: "Sistemas desenhados sob medida para as regras de negócio específicas da sua empresa." },
      { title: "Ganho de Produtividade", description: "Eliminação de tarefas manuais repetitivas através de automação inteligente." },
      { title: "Escalabilidade", description: "Arquitetura moderna e segura preparada para o crescimento do seu volume de operação." },
    ],
    process: [
      { step: "01", title: "Levantamento de Requisitos", description: "Entendimento profundo das necessidades de software e arquitetura." },
      { step: "02", title: "Prototipagem & UX/UI", description: "Criação de telas e fluxo de navegação intuitivo antes da codificação." },
      { step: "03", title: "Desenvolvimento & Testes", description: "Codificação ágil, testes de segurança e homologação dos módulos." },
    ],
    faq: [
      { question: "Vocês realizam integração com sistemas legados da minha empresa?", answer: "Sim! Desenvolvemos APIs e conectores seguros para integrar novas plataformas aos seus sistemas existentes." },
      { question: "O código-fonte e o sistema pertencem ao cliente?", answer: "Sim, ao final do projeto todo o código-fonte e documentação são entregues exclusivamente ao cliente." },
    ],
  },
  {
    id: "digmidia",
    slug: "digmidia",
    name: "DIGMIDIA",
    title: "DIGMIDIA",
    shortDescription: "Tecnologia voltada para comunicação, conteúdo digital, treinamento e presença em telas.",
    fullDescription: "A DIGMIDIA revoluciona a forma como sua empresa se comunica no ponto de venda e internamente. Especialista em mídias em tela, fornecemos sistemas de TV Indoor, encartes digitais interativos, painéis de sinalização digital e plataformas EAD de capacitação.",
    color: "#0878D1",
    bgLight: "bg-blue-50 text-blue-600 border-blue-200",
    iconName: "monitor",
    services: [
      "TV indoor corporativa e comercial",
      "Encartes digitais e catálogos interativos",
      "Painéis digitais e videowalls",
      "Sistemas EAD e plataformas de treinamento",
      "Comunicação interna corporativa",
      "Gestão centralizada de conteúdo",
      "Exibição programada de campanhas",
    ],
    heroText: "Conecte sua marca a clientes e colaboradores através de mídia digital em telas inteligentes.",
    benefits: [
      { title: "Engajamento Visual", description: "Transmissão dinâmica de promoções, anúncios e comunicados com alto impacto." },
      { title: "Gestão Remota Centralizada", description: "Atualize os conteúdos de centenas de telas simultaneamente de onde estiver." },
      { title: "Redução de Custos de Impressão", description: "Substitua encartes e cartazes físicos por encartes digitais flexíveis e ecológicos." },
    ],
    process: [
      { step: "01", title: "Planejamento de Mídia", description: "Definição do parque de telas, pontos de exibição e grade de programação." },
      { step: "02", title: "Instalação & Configuração", description: "Configuração dos players, licenças e integração do sistema." },
      { step: "03", title: "Gestão de Conteúdo", description: "Programação e veiculação de encartes digitais e vinhetas informativas." },
    ],
    faq: [
      { question: "É preciso ter conexão de internet em cada tela?", answer: "Sim, nossas telas utilizam conexão para atualizar o conteúdo, mas continuam rodando offline caso a internet caia temporariamente." },
      { question: "Como funciona a atualização dos encartes digitais?", answer: "Você pode atualizar ofertas e preços instantaneamente pelo painel administrativo DIGMIDIA sem necessidade de reimpressão." },
    ],
  },
  {
    id: "sistemas",
    slug: "sistemas",
    name: "Sistemas",
    title: "SISTEMAS",
    shortDescription: "Soluções de gestão, frente de caixa, estoque, integração e suporte especializado para o varejo e empresas.",
    fullDescription: "A BRM Sistemas entrega softwares de alta disponibilidade para o mercado. Garantimos agilidade na frente de caixa (PDV), controle rigoroso de estoque, precificação dinâmica, emissão fiscal sem travamentos e integração completa com balanças e leitores.",
    color: "#08AFC4",
    bgLight: "bg-cyan-50 text-cyan-600 border-cyan-200",
    iconName: "shopping-cart",
    services: [
      "PDV rápido e estável",
      "Frente de caixa ágil",
      "Controle automatizado de estoque",
      "Gestão inteligente de preços e margens",
      "Emissão fiscal (NFC-e, SAT, NF-e)",
      "Relatórios gerenciais de vendas",
      "Integração com balanças e leitores",
      "Suporte técnico especializado 7 dias por semana",
    ],
    heroText: "Maximize a eficiência do seu supermercado com frente de caixa ágil e gestão de estoque em tempo real.",
    benefits: [
      { title: "Zero Fila no Caixa", description: "PDV otimizado para leituras ultra rápidas de códigos de barra e pagamento agilizado." },
      { title: "Controle Total de Perdas", description: "Acompanhamento preciso de validade, ruptura de gôndola e contagem de estoque." },
      { title: "Suporte Especializado 24/7", description: "Atendimento técnico rápido focado na operação do varejo para não parar a sua loja." },
    ],
    process: [
      { step: "01", title: "Mapeamento da Loja", description: "Análise da quantidade de caixas, balanças, servidores e padrão fiscal." },
      { step: "02", title: "Implantação & Treinamento", description: "Instalação do sistema nos PDVs e capacitação completa dos operadores de caixa." },
      { step: "03", title: "Acompanhamento & Suporte", description: "Monitoramento contínuo da operação com suporte proativo e preventivo." },
    ],
    faq: [
      { question: "O sistema funciona em caso de queda da internet?", answer: "Sim! Nosso PDV possui contingência offline automática, permitindo continuar vendendo e emitindo cupons normalmente." },
      { question: "Como é feita a integração com as balanças de açougue e hortifrúti?", answer: "Realizamos integração nativa com as principais marcas de balanças do mercado (Toledo, Filizola, Urano, etc.)." },
    ],
  },
];
