/* ==========================================================================
   GRUPO BRM - CHATBOT INTERATIVO DE AUTOATENDIMENTO (ATENDENTE VIRTUAL HUMANO)
   ========================================================================== */

(function () {
  // Base de Conhecimento Incorporada no Script (Com respostas introdutórias sobre cada assunto e empresa)
  const DEFAULT_KNOWLEDGE = {
    "group_info": {
      "name": "Grupo BRM",
      "slogan": "Conexão que gera valor. Soluções que transformam.",
      "description": "O Grupo BRM é um ecossistema empresarial focado em conectar negócios, tecnologia, gestão, comunicação e inteligência para impulsionar resultados sustentáveis em empresas de todos os portes.",
      "coverage": "Atendemos empresas em todo o território nacional (Niterói - RJ e todo o Brasil).",
      "address": "Alameda São Boaventura, 540 - Fonseca, Niterói - RJ, 24120-191",
      "phone": "(11) 99999-9999",
      "email": "contato@grupobrm.com.br"
    },
    "greetings": [
      "Olá! Seja muito bem-vindo(a) ao Grupo BRM! 👋 Sou o assistente virtual da empresa. Como posso te ajudar hoje?",
      "Oi! Que ótimo ter você por aqui! 😊 Sou o atendente virtual do Grupo BRM. Sobre qual assunto ou empresa você gostaria de conversar?"
    ],
    "topic_intros": [
      {
        "topic": "social_media",
        "company": "M.O Publicidade",
        "triggers": ["social media", "redes sociais", "instagram", "facebook", "postagens", "gestao de redes", "posts", "reels", "midias sociais", "feed"],
        "answers": [
          "Com certeza! Quando o assunto é **Social Media e Redes Sociais**, a **M.O Publicidade** é a nossa agência especialista! 📢\n\nCuidamos do planejamento editorial, criação de artes profissionais, edição de vídeos para Reels/Shorts, cópias persuasivas e gestão de tráfego pago no Instagram e Facebook para atrair clientes reais diariamente para o seu negócio.",
          "Excelente! Para **Redes Sociais e Social Media**, a **M.O Publicidade** desenvolve toda a estratégia da sua marca! Ajudamos sua empresa a criar conteúdo profissional, aumentar o engajamento e transformar seguidores em compradores."
        ]
      },
      {
        "topic": "anuncios_trafego",
        "company": "M.O Publicidade",
        "triggers": ["google ads", "anuncios", "trafego pago", "meta ads", "divulgar no google", "patrocinado", "anunciar", "vender mais"],
        "answers": [
          "Ótima escolha! Se você deseja **Anúncios e Tráfego Pago**, a **M.O Publicidade** cria campanhas focadas em vendas reais! 🎯\n\nGerenciamos anúncios no Google Ads (para alcançar quem já pesquisa por seus serviços) e Meta Ads/TikTok Ads (para criar desejo e gerar leads diários).",
          "Perfeito! A **M.O Publicidade** é especialista em estratégias de tráfego de alta performance. Otimizamos diariamente seu investimento para garantir o maior retorno financeiro possível para o seu negócio."
        ]
      },
      {
        "topic": "branding_logo",
        "company": "M.O Publicidade",
        "triggers": ["criar logo", "logotipo", "identidade visual", "manual de marca", "branding", "criar marca", "redesign"],
        "answers": [
          "Sensacional! Se você precisa de **Branding, Logo ou Identidade Visual**, a **M.O Publicidade** constrói a imagem marcante da sua empresa! 🎨\n\nCriamos o logotipo profissional, paleta de cores, tipografia e o manual completo de marca para destacar seu negócio da concorrência.",
          "Com certeza! A **M.O Publicidade** desenvolve identidades visuais modernas e alinhadas ao propósito do seu negócio, transmitindo autoridade e confiança desde o primeiro olhar dos clientes."
        ]
      },
      {
        "topic": "sistema_caixa_pdv",
        "company": "Sistemas",
        "triggers": ["sistema de caixa", "caixa", "pdv", "frente de caixa", "sistema de supermercado", "sistema comercial", "contingencia", "offline"],
        "answers": [
          "Excelente! Se você precisa de um **Sistema de Caixa e PDV**, a **Sistemas** é a nossa unidade focada exatamente nisso! 💻\n\nOferecemos uma frente de caixa ultra-rápida que não trava, contingência offline (seu caixa continua vendendo mesmo se a internet cair), emissão fiscal de notas (NFC-e, NF-e, SAT) e integração com balanças e TEF.",
          "Perfeito! A **Sistemas** cuida de toda a automação comercial da sua loja ou supermercado. Nosso PDV é ágil, fácil de operar e garante controle total sobre as vendas, estoque e movimentações financeiras."
        ]
      },
      {
        "topic": "estoque_validade",
        "company": "Sistemas",
        "triggers": ["controle de estoque", "estoque", "lote", "validade", "inventario", "perdas de estoque", "produtos vencendo"],
        "answers": [
          "Com certeza! O **Controle de Estoque e Validade** é uma das maiores especialidades da **Sistemas**! 📦\n\nNosso software gerencia estoques por lote, alertando sobre produtos próximos do vencimento, realizando inventário cego, controle de entradas/saídas e auditoria de preços para evitar prejuízos.",
          "Ótima colocação! Com a **Sistemas**, seu estoque fica 100% sob controle. Você acompanha a movimentação dos produtos em tempo real e reduz perdas com nosso gerenciador de validade e inventário."
        ]
      },
      {
        "topic": "criar_app_software",
        "company": "Desenvolvimento",
        "triggers": ["criar app", "criar aplicativo", "aplicativo", "software", "sistema web", "programa sob medida", "desenvolver sistema", "fábrica de software"],
        "answers": [
          "Sensacional! Se você quer **criar um Aplicativo ou Sistema Web Sob Medida**, a **Desenvolvimento** é a nossa fábrica de software dedicada! ⚙️\n\nDesenvolvemos aplicativos nativos e híbridos para iOS e Android, além de plataformas web em nuvem sob medida com protótipos de tela intuitivos, dashboards de BI e arquitetura escalável.",
          "Perfeito! A **Desenvolvimento** transforma sua ideia ou processo corporativo em uma plataforma tecnológica exclusiva. Criamos sistemas e apps seguros, rápidos e preparados para crescer junto com sua empresa."
        ]
      },
      {
        "topic": "tv_indoor_telas",
        "company": "DIGMIDIA",
        "triggers": ["tv indoor", "telas", "totem", "totens", "encarte digital", "menu board", "cardapio digital", "sinalizacao digital"],
        "answers": [
          "Ótima escolha! Para **TV Indoor, Encartes Digitais e Totens**, a **DIGMIDIA** é a nossa empresa pioneira nessa tecnologia visual! 📺\n\nImplementamos redes de telas promocionais no ponto de venda, encartes digitais animados perfeitos para envio no WhatsApp e totens interativos touchscreen com gerenciamento 100% remoto via nuvem.",
          "Com certeza! A **DIGMIDIA** moderniza a comunicação do seu estabelecimento. Você altera os preços, fotos de ofertas ou vídeos institucionais nas suas telas em segundos de qualquer lugar!"
        ]
      },
      {
        "topic": "reduzir_impostos_contabilidade",
        "company": "Contabilidade",
        "triggers": ["reduzir imposto", "pagar menos imposto", "impostos", "contabilidade", "planejamento tributario", "bpo financeiro", "folha", "esocial", "abrir empresa"],
        "answers": [
          "Entendi perfeitamente! Para **reduzir impostos e organizar a gestão fiscal**, a **Contabilidade** do Grupo BRM é especialista em Inteligência Tributária! 📊\n\nRealizamos estudo e planejamento fiscal completo para sua empresa pagar o menor imposto possível dentro da lei, além de oferecer BPO Financeiro (terceirização do setor financeiro) e gestão de folha eSocial.",
          "Excelente! A **Contabilidade** vai muito além do básico. Nossa consultoria analisa seu enquadramento (Simples Nacional, Lucro Presumido ou Real) para recuperar créditos fiscais e diminuir sua carga tributária com total segurança jurídica."
        ]
      }
    ],
    "companies": {
      "sistemas": {
        "order": 1,
        "name": "Sistemas",
        "tagline": "Sistemas comerciais para alta performance e frente de caixa",
        "summary": "A **Sistemas** é a nossa unidade especializada em automação comercial e gestão de varejo. Nosso foco é garantir que seu caixa nunca pare e seu estoque fique 100% sob controle.",
        "variations": [
          "A **Sistemas** cuida de toda a operação do seu comércio. Oferecemos um PDV ultra-rápido que não trava e continua vendendo mesmo se a internet cair (contingência offline), além de controle de estoque com validade/lotes, emissão de nota fiscal (NFC-e, NF-e, SAT) e integração com balanças e TEF.",
          "Se você busca agilidade no caixa e controle total da sua loja ou supermercado, a **Sistemas** é a solução ideal! Nosso software gerencia desde a entrada de mercadorias e inventário até a venda no caixa e emissão das notas fiscais sem complicação."
        ]
      },
      "mo-publicidade": {
        "order": 2,
        "name": "M.O Publicidade",
        "tagline": "Estratégia de marca, marketing e posicionamento",
        "summary": "A **M.O Publicidade** é a nossa agência de comunicação e marketing 360°. Nosso objetivo é fazer sua marca vender mais e dominar o mercado.",
        "variations": [
          "A **M.O Publicidade** transforma a imagem da sua empresa! Cuidamos da criação de logotipos e identidade visual, anúncios no Google Ads, Instagram e Facebook, gestão de redes sociais com conteúdo em vídeo e campanhas completas de vendas.",
          "Com a **M.O Publicidade**, sua empresa ganha visibilidade real. Desenvolvemos estratégias de tráfego pago para atrair clientes diariamente, além de cuidar das mídias sociais e materiais gráficos/promocionais para o seu negócio."
        ]
      },
      "desenvolvimento": {
        "order": 3,
        "name": "Desenvolvimento",
        "tagline": "Engenharia de software e aplicativos sob medida",
        "summary": "A **Desenvolvimento** é a nossa fábrica de software. Construímos soluções tecnológicas exclusivas pensadas para o seu modelo de negócio.",
        "variations": [
          "Na **Desenvolvimento**, criamos aplicativos móveis para iOS e Android, sistemas web corporativos em nuvem, portais de clientes, plataformas de EAD e automação de processos para eliminar tarefas manuais.",
          "Se sua empresa precisa de um aplicativo exclusivo ou de um sistema sob medida com dashboards de BI e Inteligência Artificial, a **Desenvolvimento** planeja e constrói tudo com máxima segurança e escalabilidade."
        ]
      },
      "digmidia": {
        "order": 4,
        "name": "DIGMIDIA",
        "tagline": "Mídia digital indoor, sinalização e encartes interativos",
        "summary": "A **DIGMIDIA** revoluciona a comunicação visual no ponto de venda com telas digitais, TV indoor e encartes interativos.",
        "variations": [
          "A **DIGMIDIA** leva tecnologia visual para sua loja ou escritório! Implementamos redes de TV Indoor com ofertas dinâmicas, totens digitais interativos para atendimento, encartes digitais animados para WhatsApp e cardápios digitais.",
          "Com a **DIGMIDIA**, você atualiza todo o conteúdo promocional das suas telas em tempo real via nuvem. É perfeito para supermercados, lojas, restaurantes e recepções corporativas que querem se destacar."
        ]
      },
      "contabilidade": {
        "order": 5,
        "name": "Contabilidade",
        "tagline": "Gestão contábil, inteligência tributária e finanças",
        "summary": "A **Contabilidade** do Grupo BRM entrega inteligência fiscal e financeira para sua empresa pagar menos impostos dentro da lei.",
        "variations": [
          "A **Contabilidade** vai muito além de emitir guias! Realizamos planejamento tributário estratégico para reduzir a carga de impostos da sua empresa, BPO financeiro (terceirização do contas a pagar/receber) e folha de pagamento eSocial.",
          "Nossa equipe contábil cuida da escrituração fiscal, balanços, recuperação de créditos tributários e regularização jurídica, garantindo 100% de segurança fiscal para empresas do Simples Nacional, Lucro Presumido e Lucro Real."
        ]
      }
    },
    "qa_topics": [
      {
        "intent": "empresas_lista",
        "triggers": ["empresas", "quais sao as empresas", "lista de empresas", "quais empresas", "quais negocios", "ver empresas"],
        "answers": [
          "O **Grupo BRM** conta com 5 empresas altamente integradas na seguinte ordem:\n\n1. 💻 **Sistemas** (PDV, frente de caixa e gestão de varejo/supermercados)\n2. 📢 **M.O Publicidade** (Marketing 360°, tráfego pago e branding)\n3. ⚙️ **Desenvolvimento** (Apps sob medida iOS/Android e sistemas web)\n4. 📺 **DIGMIDIA** (TV indoor, encartes digitais e totens interativos)\n5. 📊 **Contabilidade** (Planejamento tributário, BPO financeiro e gestão fiscal)\n\nQual dessas áreas é a prioridade no seu negócio hoje?",
          "Nosso ecossistema reúne 5 soluções completas:\n\n1. 💻 **Sistemas**\n2. 📢 **M.O Publicidade**\n3. ⚙️ **Desenvolvimento**\n4. 📺 **DIGMIDIA**\n5. 📊 **Contabilidade**\n\nSobre qual delas você quer bater um papo agora?"
        ]
      },
      {
        "intent": "cases_resultados_duvida",
        "triggers": ["cases", "resultados", "clientes", "exemplos", "rede mais", "ecovarejo", "superfacil", "unipeças"],
        "answers": [
          "Olha alguns dos nossos resultados em clientes reais:\n\n• **Rede Mais**: +18% na eficiência com estratégias de tráfego e branding da M.O Publicidade.\n• **EcoVarejo**: Redução de 12% em custos com reorganização fiscal da Contabilidade.\n• **SuperFácil**: +25% de agilidade na operação com sistema sob medida da Desenvolvimento.\n• **UniPeças**: Vantagem competitiva com TV Indoor da DIGMIDIA.",
          "Temos orgulho de transformar negócios! Clientes como a **Rede Mais**, **EcoVarejo**, **SuperFácil** e **UniPeças** alcançaram aumentos expressivos de eficiência e redução de custos através das soluções do Grupo BRM."
        ]
      },
      {
        "intent": "contato_localizacao_duvida",
        "triggers": ["contato", "telefone", "whatsapp", "email", "endereco", "onde fica", "niteroi", "rio de janeiro", "atendem meu estado"],
        "answers": [
          "Ficamos localizados na **Alameda São Boaventura, 540 - Fonseca, Niterói - RJ, 24120-191**! 📍 Mas fique tranquilo(a): atendemos clientes e empresas em **todo o território nacional (Brasil inteiro)** via atendimento digital e remoto com total proximidade.",
          "Nossa sede fica na **Alameda São Boaventura, 540 (Niterói - RJ)**, e prestamos atendimento especializado para empresas de todos os estados do Brasil! E-mail: contato@grupobrm.com.br / Tel: (11) 99999-9999."
        ]
      },
      {
        "intent": "orcamento_proposta_duvida",
        "triggers": ["orcamento", "preço", "quanto custa", "valor", "proposta", "contratar"],
        "answers": [
          "Como cada empresa possui uma necessidade única, dimensionamos a proposta sob medida para caber no seu orçamento! Me conte um pouco sobre o que sua empresa precisa que vou te detalhar os próximos passos.",
          "Elaboramos propostas personalizadas de acordo com o porte da sua empresa. Quer me explicar um pouquinho sobre qual serviço você precisa no momento?"
        ]
      }
    ],
    "fallbacks": [
      "Entendi o seu ponto! Posso te responder em detalhes sobre **Sistemas** (PDV/caixa), **M.O Publicidade** (marketing/redes sociais/anúncios), **Desenvolvimento** (apps/softwares), **DIGMIDIA** (telas/TV indoor) ou **Contabilidade** (impostos/gestão). Sobre qual destas áreas você quer falar?",
      "Olha, para essa dúvida específica, posso te ajudar explicando como nossas soluções em tecnologia, publicidade ou contabilidade se aplicam ao seu negócio. O que você gostaria de analisar?"
    ]
  };

  let knowledgeData = DEFAULT_KNOWLEDGE;
  let chatWindowOpen = false;

  // 1. Create HTML Structure for Floating Button & Chat Modal
  function createChatbotUI() {
    if (document.getElementById("brm-chatbot-container")) return;

    const container = document.createElement("div");
    container.id = "brm-chatbot-container";
    container.innerHTML = `
      <!-- Floating WhatsApp Button -->
      <button id="brm-chat-trigger" aria-label="Abrir atendimento Grupo BRM" class="fixed bottom-5 right-5 z-50 flex items-center space-x-3 bg-[#19A37F] hover:bg-[#138366] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-white/20">
        <div class="relative flex items-center justify-center">
          <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
        </div>
        <span class="hidden sm:inline font-bold font-heading text-xs tracking-wide">Autoatendimento 24h</span>
      </button>

      <!-- Chat Modal Window -->
      <div id="brm-chat-modal" class="fixed bottom-20 right-5 z-50 w-[92vw] sm:w-[390px] h-[530px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden hidden transition-all duration-300 transform scale-95 opacity-0">
        <!-- Header -->
        <div class="bg-[#0B1D3A] text-white p-4 flex items-center justify-between border-b border-blue-900/40">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <div class="w-10 h-10 rounded-full bg-[#19A37F] flex items-center justify-center font-bold font-heading text-white text-sm border-2 border-white/20">
                BRM
              </div>
              <span class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0B1D3A]"></span>
            </div>
            <div>
              <h3 class="font-bold font-heading text-sm leading-tight text-white">Grupo BRM</h3>
              <p class="text-[11px] text-emerald-300 flex items-center space-x-1">
                <span>●</span>
                <span>Atendente Virtual</span>
              </p>
            </div>
          </div>
          <button id="brm-chat-close" class="text-gray-300 hover:text-white p-1 rounded-lg transition-colors" aria-label="Fechar chat">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Message Body -->
        <div id="brm-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F4F6F9] text-xs"></div>

        <!-- Quick Suggestion Chips (5 Empresas na Ordem Correta) -->
        <div id="brm-chat-chips" class="px-3 py-2 bg-white border-t border-gray-100 flex items-center space-x-2 overflow-x-auto text-[11px] no-scrollbar">
          <button data-query="Quais são as empresas?" class="chip-btn px-3 py-1.5 bg-gray-100 hover:bg-[#1E4FA3] hover:text-white rounded-full transition-colors whitespace-nowrap text-gray-700 font-medium">🏢 Empresas</button>
          <button data-query="Sistemas" class="chip-btn px-3 py-1.5 bg-gray-100 hover:bg-[#1E4FA3] hover:text-white rounded-full transition-colors whitespace-nowrap text-gray-700 font-medium">💻 Sistemas</button>
          <button data-query="M.O Publicidade" class="chip-btn px-3 py-1.5 bg-gray-100 hover:bg-[#1E4FA3] hover:text-white rounded-full transition-colors whitespace-nowrap text-gray-700 font-medium">📢 Publicidade</button>
          <button data-query="Desenvolvimento" class="chip-btn px-3 py-1.5 bg-gray-100 hover:bg-[#1E4FA3] hover:text-white rounded-full transition-colors whitespace-nowrap text-gray-700 font-medium">⚙️ Softwares</button>
          <button data-query="DIGMIDIA" class="chip-btn px-3 py-1.5 bg-gray-100 hover:bg-[#1E4FA3] hover:text-white rounded-full transition-colors whitespace-nowrap text-gray-700 font-medium">📺 DIGMIDIA</button>
          <button data-query="Contabilidade" class="chip-btn px-3 py-1.5 bg-gray-100 hover:bg-[#1E4FA3] hover:text-white rounded-full transition-colors whitespace-nowrap text-gray-700 font-medium">📊 Contabilidade</button>
        </div>

        <!-- Input Footer -->
        <form id="brm-chat-form" class="p-3 bg-white border-t border-gray-200 flex items-center space-x-2">
          <input type="text" id="brm-chat-input" placeholder="Pergunte sobre social media, sistemas, impostos..." autocomplete="off" class="flex-1 px-4 py-2.5 rounded-full bg-gray-100 text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]">
          <button type="submit" class="p-2.5 bg-[#19A37F] hover:bg-[#138366] text-white rounded-full transition-colors shadow-md flex items-center justify-center">
            <svg class="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </form>
      </div>
    `;
    document.body.appendChild(container);
  }

  // 2. Fetch Knowledge Base JSON (with fallback)
  async function loadKnowledge() {
    try {
      const response = await fetch("js/chatbot-knowledge.json");
      if (response.ok) {
        knowledgeData = await response.json();
      }
    } catch (e) {
      console.log("Usando base de conhecimento oficial do site.", e);
    }
  }

  // 3. Add Message to UI
  function addMessage(text, sender = "bot") {
    const msgContainer = document.getElementById("brm-chat-messages");
    if (!msgContainer) return;

    const wrapper = document.createElement("div");
    wrapper.className = `flex ${sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`;

    const bubble = document.createElement("div");
    if (sender === "user") {
      bubble.className = "max-w-[80%] bg-[#1E4FA3] text-white p-3 rounded-2xl rounded-tr-none shadow-sm leading-relaxed";
    } else {
      bubble.className = "max-w-[85%] bg-white text-gray-800 p-3.5 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm leading-relaxed space-y-2";
    }

    let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formattedText = formattedText.replace(/_(.*?)_/g, "<em>$1</em>");
    formattedText = formattedText.replace(/\n/g, "<br>");
    bubble.innerHTML = formattedText;

    wrapper.appendChild(bubble);
    msgContainer.appendChild(wrapper);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function normalizeStr(str) {
    if (!str) return "";
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  function getRandomItem(arr) {
    if (!arr || !arr.length) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // 4. Processing Engine Inteligente (Topic Intros & Niche Queries)
  function processUserQuery(query) {
    const cleanQuery = normalizeStr(query);

    if (!knowledgeData) {
      addMessage("Desculpe, estou pronto para te ajudar! Pode perguntar novamente?", "bot");
      return;
    }

    // A. Check Specific Topic Intros FIRST (Connect Niche Query e.g. "social media" directly to the right company)
    if (knowledgeData.topic_intros) {
      for (const topicItem of knowledgeData.topic_intros) {
        for (const trigger of topicItem.triggers) {
          if (cleanQuery.includes(normalizeStr(trigger))) {
            const answer = getRandomItem(topicItem.answers);
            addMessage(answer, "bot");
            return;
          }
        }
      }
    }

    // B. Check Q&A Topics (Perguntas Frequentes)
    if (knowledgeData.qa_topics) {
      for (const topic of knowledgeData.qa_topics) {
        for (const trigger of topic.triggers) {
          if (cleanQuery.includes(normalizeStr(trigger))) {
            const answer = getRandomItem(topic.answers);
            addMessage(answer, "bot");
            return;
          }
        }
      }
    }

    // C. Check Specific Companies (Empresas do Grupo)
    const companyKeys = ["sistemas", "mo-publicidade", "desenvolvimento", "digmidia", "contabilidade"];
    for (const key of companyKeys) {
      const comp = knowledgeData.companies ? knowledgeData.companies[key] : null;
      if (!comp) continue;

      const normName = normalizeStr(comp.name);
      const normKey = normalizeStr(key);

      let isMatch = cleanQuery.includes(normName) || cleanQuery.includes(normKey);
      if (!isMatch && comp.keywords) {
        for (const kw of comp.keywords) {
          if (cleanQuery.includes(normalizeStr(kw))) {
            isMatch = true;
            break;
          }
        }
      }

      if (isMatch) {
        const textVar = getRandomItem(comp.variations || [comp.summary]);
        const responseText = `🏢 **Empresa ${comp.order}ª do Grupo: ${comp.name.toUpperCase()}**\n\n_${comp.tagline}_\n\n${textVar}`;
        addMessage(responseText, "bot");
        return;
      }
    }

    // D. Greetings Check
    if (cleanQuery.match(/^(ola|oi|bom dia|boa tarde|boa noite|inicio|menu|ajuda)$/)) {
      const greeting = getRandomItem(knowledgeData.greetings);
      addMessage(greeting, "bot");
      return;
    }

    // E. Fallback Humano
    const fallback = getRandomItem(knowledgeData.fallbacks);
    addMessage(fallback, "bot");
  }

  // 5. Initialize Events
  function initChatbotEvents() {
    const trigger = document.getElementById("brm-chat-trigger");
    const closeBtn = document.getElementById("brm-chat-close");
    const modal = document.getElementById("brm-chat-modal");
    const form = document.getElementById("brm-chat-form");
    const input = document.getElementById("brm-chat-input");

    function toggleChat(open) {
      chatWindowOpen = open;
      if (open) {
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.remove("scale-95", "opacity-0");
          modal.classList.add("scale-100", "opacity-100");
        }, 10);
        
        const msgContainer = document.getElementById("brm-chat-messages");
        if (msgContainer && msgContainer.children.length === 0 && knowledgeData) {
          addMessage(getRandomItem(knowledgeData.greetings), "bot");
        }
      } else {
        modal.classList.remove("scale-100", "opacity-100");
        modal.classList.add("scale-95", "opacity-0");
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 300);
      }
    }

    if (trigger) trigger.addEventListener("click", () => toggleChat(!chatWindowOpen));
    if (closeBtn) closeBtn.addEventListener("click", () => toggleChat(false));

    document.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip-btn");
      if (chip) {
        const query = chip.getAttribute("data-query");
        if (query) {
          addMessage(query, "user");
          setTimeout(() => processUserQuery(query), 200);
        }
      }
    });

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const val = input.value.trim();
        if (val) {
          addMessage(val, "user");
          input.value = "";
          setTimeout(() => processUserQuery(val), 200);
        }
      });
    }
  }

  // 6. Global API to open chatbot programmatically from company cards
  window.openBRMChatbot = function(query) {
    const modal = document.getElementById("brm-chat-modal");
    if (!modal) return;
    
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("scale-95", "opacity-0");
      modal.classList.add("scale-100", "opacity-100");
    }, 10);
    chatWindowOpen = true;

    const msgContainer = document.getElementById("brm-chat-messages");
    if (msgContainer && msgContainer.children.length === 0 && knowledgeData) {
      addMessage(getRandomItem(knowledgeData.greetings), "bot");
    }

    if (query) {
      addMessage(query, "user");
      setTimeout(() => processUserQuery(query), 200);
    }
  };

  // 7. Boot Everything on DOM Ready
  function boot() {
    createChatbotUI();
    loadKnowledge();
    initChatbotEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
