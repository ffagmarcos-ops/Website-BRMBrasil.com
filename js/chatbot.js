/* ==========================================================================
   GRUPO BRM - CHATBOT INTERATIVO DE AUTOATENDIMENTO 24H (ASSISTENTE VIRTUAL)
   ========================================================================== */

(function () {
  // Base de Conhecimento Incorporada no Script (Garante funcionamento 100% instantâneo via file:// e servidor)
  const DEFAULT_KNOWLEDGE = {
    "group_info": {
      "name": "Grupo BRM",
      "slogan": "CONEXÃO QUE GERA VALOR. SOLUÇÕES QUE TRANSFORMAM.",
      "description": "O Grupo BRM é um ecossistema empresarial focado em conectar negócios, tecnologia, gestão, comunicação e inteligência para impulsionar resultados sustentáveis em empresas de todos os portes.",
      "coverage": "Atendimento nacional em todo o Brasil (São Paulo, SP e todo o país).",
      "address": "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      "phone": "(11) 99999-9999",
      "email": "contato@grupobrm.com.br",
      "whatsapp_url": "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20Grupo%20BRM."
    },
    "companies": [
      {
        "id": "sistemas",
        "order": 1,
        "name": "Sistemas",
        "tagline": "Sistemas comerciais para alta performance, frente de caixa e supermercados",
        "description": "A **Sistemas** é a empresa do Grupo BRM especializada em automação comercial e gestão de varejo. Desenvolvemos softwares de frente de caixa (PDV) ultra-rápidos e estáveis, com total controle de estoque, compras, vendas e gestão financeira para o comércio varejista e atacadista.",
        "features": [
          "Frente de Caixa (PDV) de altíssima velocidade e estabilidade com contingência offline (funciona mesmo sem internet)",
          "Controle de Estoque Inteligente com gestão de lotes, datas de validade, inventário cego e auditoria de preços",
          "Emissão Fiscal Completa e Automática: NF-e, NFC-e, SAT, Sped Fiscal, Sped Contribuições e Bloco K",
          "Integração Nativa com Balanças de checkout/etiquetadoras, Leitores de Código de Barras e PinPads (TEF)",
          "Conciliação bancária automática e controle detalhado de vendas no cartão de crédito/débito",
          "Relatórios gerenciais de DRE, curva ABC de produtos e margem de lucratividade em tempo real"
        ],
        "target_audience": "Supermercados, minimercados, hortifrutis, atacadistas, lojas de conveniência, padarias e comércio varejista.",
        "keywords": ["sistemas", "sistema", "pdv", "supermercado", "supermercados", "estoque", "caixa", "frente de caixa", "vendas", "nfe", "nfce", "tef", "balanca", "inventario", "comercio", "varejo", "atocado", "validade", "lote", "contingencia", "offline"]
      },
      {
        "id": "mo-publicidade",
        "order": 2,
        "name": "M.O Publicidade",
        "tagline": "Estratégia de marca, publicidade 360° e marketing de performance",
        "description": "A **M.O Publicidade** é a agência de comunicação e publicidade estratégica do Grupo BRM. Desenvolvemos estratégias completas de posicionamento de marca, marketing de performance, gestão de redes sociais e campanhas que geram vendas reais e visibilidade no mercado.",
        "features": [
          "Branding & Identidade Visual: criação de logotipos, manual de marca e posicionamento de mercado",
          "Gestão de Tráfego Pago & Performance: anúncios no Google Ads, Meta Ads (Instagram e Facebook) e TikTok Ads",
          "Gestão de Mídias Sociais: planejamento editorial, criação de artes, copy estratégica e edição de vídeos (Reels/Shorts)",
          "Campanhas Publicitárias 360°: estratégias de lançamento e crescimento On-line e Off-line",
          "Produção Audiovisual & Gráfica: vídeos institucionais, fotos corporativas, materiais impressos e catálogos"
        ],
        "target_audience": "Empresas e marcas que desejam profissionalizar sua comunicação, aumentar o volume de clientes e dominar seu segmento.",
        "keywords": ["mo", "publicidade", "marketing", "propaganda", "branding", "redes sociais", "anuncios", "campanhas", "google ads", "instagram", "facebook", "identidade visual", "logo", "agencia", "trafego pago", "performance", "conteudo", "design"]
      },
      {
        "id": "desenvolvimento",
        "order": 3,
        "name": "Desenvolvimento",
        "tagline": "Engenharia de software, plataformas web e aplicativos sob medida",
        "description": "A **Desenvolvimento** é a fábrica de software e tecnologia do Grupo BRM. Construímos sistemas web sob medida, aplicativos móveis para iOS e Android, integrações de APIs corporativas, ecossistemas EAD e soluções de Inteligência Artificial para automatizar rotinas.",
        "features": [
          "Desenvolvimento de Aplicativos Móveis Nativos e Híbridos para iOS e Android",
          "Plataformas e Softwares Web Sob Medida desenvolvidos em arquitetura Cloud resiliente e escalável",
          "Sistemas de EAD (Ensino a Distância), treinamento corporativo e portais de atendimento ao cliente",
          "Integração de APIs RESTful/GraphQL, ERPs, gateways de pagamento e automação de processos internos",
          "Dashboards de BI (Business Intelligence), gráficos analíticos em tempo real e inteligência artificial"
        ],
        "target_audience": "Corporações, startups, franqueadoras, instituições de ensino e empresas com processos exclusivos.",
        "keywords": ["desenvolvimento", "software", "app", "aplicativo", "web", "programacao", "api", "sistema sob medida", "ead", "plataforma", "bi", "dashboard", "fabrica de software", "cloud", "nuvem", "ia", "inteligencia artificial"]
      },
      {
        "id": "digmidia",
        "order": 4,
        "name": "DIGMIDIA",
        "tagline": "Mídia digital indoor, sinalização dinâmica e encartes digitais",
        "description": "A **DIGMIDIA** é a empresa pioneira em soluções de mídia digital indoor e sinalização inteligente no ponto de venda. Transformamos a comunicação visual de lojas e escritórios com redes de TV indoor, totens digitais interativos e encartes promocionais animados.",
        "features": [
          "TV Indoor Corporativa & Promocional: transmissão de ofertas, conteúdos institucionais e notícias nas telas do PDV",
          "Totens Digitais Interativos: atendimento, senhas de fila, vitrine virtual e catálogos interativos em tela sensível ao toque",
          "Encartes Digitais Dinâmicos: folhetos de ofertas animados para disparo no WhatsApp, redes sociais e monitores",
          "Menu Boards Dinâmicos: cardápios digitais interativos para restaurantes, padarias, lanchonetes e praças de alimentação",
          "Gerenciamento 100% Remoto via Nuvem: atualização instantânea da programação das telas em tempo real de qualquer lugar"
        ],
        "target_audience": "Supermercados, redes de varejo, restaurantes, clínicas, academias, shopping centers e escritórios corporativos.",
        "keywords": ["digmidia", "midia digital", "tv indoor", "toten", "totens", "encartes", "sinalizacao", "displays", "menu board", "encarte digital", "sinalizacao digital", "pdv digital", "telas", "cardapio digital"]
      },
      {
        "id": "contabilidade",
        "order": 5,
        "name": "Contabilidade",
        "tagline": "Gestão contábil estratégica, inteligência tributária e finanças",
        "description": "A **Contabilidade** é a consultoria tributária e fiscal estratégica do Grupo BRM. Oferecemos inteligência financeira para redução legal da carga de impostos, planejamento fiscal preventivo, BPO financeiro e gestão trabalhista completa.",
        "features": [
          "Planejamento Tributário Estratégico e Recuperação de Créditos fiscais acumulados",
          "Escrituração Contábil & Fiscal Completa com emissão de Balanços e Demonstrações Financeiras (DRE)",
          "BPO Financeiro: terceirização completa das contas a pagar, contas a receber e fluxo de caixa da empresa",
          "Gestão Trabalhista & Departamento Pessoal: folha de pagamento, férias, rescisões e conformidade eSocial",
          "Abertura, alteração de contrato social, regularização jurídica e planejamento de blindagem patrimonial"
        ],
        "target_audience": "Empresas enquadradas no Simples Nacional, Lucro Presumido e Lucro Real que buscam segurança jurídica e economia em impostos.",
        "keywords": ["contabilidade", "contabil", "imposto", "tributario", "fiscal", "folha", "bpo", "auditoria", "abrir empresa", "simples nacional", "lucro presumido", "lucro real", "balanco", "impostos", "credito fiscal", "esocial"]
      }
    ],
    "intents": [
      {
        "intent": "empresas_lista",
        "triggers": ["empresas", "🏢 empresas", "quais sao as empresas", "empresas do grupo", "quais empresas", "quais sao os negocios", "lista de empresas", "quais sao os serviços", "ver empresas", "todas as empresas"],
        "responses": [
          "O **Grupo BRM** é composto por 5 empresas altamente integradas e especializadas:\n\n1. 💻 **Sistemas** (Automação comercial, PDV e gestão de estoque para varejo e supermercados)\n2. 📢 **M.O Publicidade** (Agência 360°, branding, tráfego pago e mídias sociais)\n3. ⚙️ **Desenvolvimento** (Softwares web sob medida, aplicativos móveis iOS/Android e APIs)\n4. 📺 **DIGMIDIA** (Mídia digital indoor, TV corporativa, encartes digitais e totens)\n5. 📊 **Contabilidade** (Planejamento tributário, BPO financeiro e gestão fiscal/trabalhista)\n\nQual destas empresas atende a sua necessidade atual?"
        ]
      },
      {
        "intent": "pdv_sistema_duvida",
        "triggers": ["como funciona o pdv", "pdv offline", "funciona sem internet", "emite nota fiscal", "nfc-e", "sat", "balança"],
        "responses": [
          "Nosso sistema de **Frente de Caixa (PDV)** foi desenvolvido para garantir que o seu comércio nunca pare!\n\n• **Contingência Offline**: Se a internet cair, o caixa continua vendendo normalmente.\n• **Emissão Fiscal**: Emissão automática de NFC-e, NF-e, SAT e Sped.\n• **Equipamentos**: Compatível com balanças de checkout, leitores de código de barras e TEF (máquinas de cartão integradas ao caixa)."
        ]
      },
      {
        "intent": "supermercado_duvida",
        "triggers": ["supermercado", "supermercados", "hortifruti", "minimercado", "validade", "estoque supermercado"],
        "responses": [
          "Para supermercados e varejo alimentar, oferecemos uma solução completa que une **Sistemas + DIGMIDIA + M.O Publicidade**:\n\n• **Gestão de Estoque**: Controle de lotes, datas de validade e inventário em tempo real.\n• **TV Indoor & Encartes Digitais**: Divulgação dinâmica das ofertas da semana nas telas da loja e via WhatsApp.\n• **PDV Ultra-Rápido**: Evita filas no caixa nos horários de pico."
        ]
      },
      {
        "intent": "marketing_duvida",
        "triggers": ["trafego pago", "google ads", "instagram ads", "anunciar", "redes sociais", "branding", "criar logo"],
        "responses": [
          "A **M.O Publicidade** cuida de todo o posicionamento digital da sua marca:\n\n• **Gestão de Anúncios**: Campanhas otimizadas no Google Ads, Instagram e Facebook Ads para atração imediata de clientes.\n• **Redes Sociais**: Criação de artes profissionais, vídeos estratégicos e planejamento de postagens.\n• **Identidade Visual**: Criação e reformulação de logotipos e manuais de marca."
        ]
      },
      {
        "intent": "desenvolvimento_duvida",
        "triggers": ["criar aplicativo", "criar app", "sistema web", "sistema sob medida", "desenvolver software", "quanto custa um app"],
        "responses": [
          "Na **Desenvolvimento**, construímos softwares e aplicativos sob medida de acordo com a regra de negócio da sua empresa:\n\n• **Apps Móveis**: Aplicativos nativos ou híbridos para iOS e Android.\n• **Plataformas Web**: Sistemas em nuvem, portais de clientes e dashboards interativos.\n• **Arquitetura Escalável**: Projetos desenvolvidos com máxima segurança, velocidade e capacidade de expansão."
        ]
      },
      {
        "intent": "digmidia_duvida",
        "triggers": ["tv indoor", "totem", "totens", "encarte digital", "cardapio digital", "menu board"],
        "responses": [
          "A **DIGMIDIA** moderniza a comunicação visual da sua empresa:\n\n• **TV Indoor**: Redes de telas com programação promocional, notícias e ofertas no seu estabelecimento.\n• **Encartes Digitais**: Folhetos interativos animados perfeitos para envio no WhatsApp.\n• **Totens Interativos**: Terminais de autoatendimento, pesquisa de satisfação e senhas."
        ]
      },
      {
        "intent": "contabilidade_duvida",
        "triggers": ["planejamento tributario", "reduzir imposto", "bpo financeiro", "folha de pagamento", "abrir empresa", "simples nacional", "lucro presumido"],
        "responses": [
          "Nossa divisão de **Contabilidade** atua com foco em gestão estratégica e economia fiscal:\n\n• **Planejamento Tributário**: Análise minuciosa para enquadrar sua empresa no regime tributário que paga menos impostos dentro da lei.\n• **BPO Financeiro**: Terceirização das rotinas de contas a pagar, receber e conciliação.\n• **Folha de Pagamento**: Gestão trabalhista completa em total conformidade com o eSocial."
        ]
      },
      {
        "intent": "cases_resultados",
        "triggers": ["cases", "resultados", "clientes", "exemplos", "depoimentos", "historias de sucesso"],
        "responses": [
          "Conheça alguns dos resultados reais gerados pelo Grupo BRM:\n\n• **Rede Mais**: +18% em eficiência operacional através de marketing de performance.\n• **EcoVarejo**: Redução de 12% nos custos operacionais com reestruturação fiscal.\n• **SuperFácil**: +25% de agilidade com plataforma web e automação sob medida.\n• **UniPeças**: Comunicação unificada e vantagem competitiva com TV Indoor e DIGMIDIA."
        ]
      },
      {
        "intent": "contato_localizacao",
        "triggers": ["contato", "telefone", "whatsapp", "email", "endereco", "onde fica", "localizacao", "cidade", "estado", "atendem minha regiao"],
        "responses": [
          "📍 **Endereço**: Av. Paulista, 1000 - Bela Vista, São Paulo - SP\n📞 **Telefone / WhatsApp**: (11) 99999-9999\n✉️ **E-mail**: contato@grupobrm.com.br\n🌐 **Atendimento**: Atendemos empresas e clientes em **todo o Brasil**!"
        ]
      },
      {
        "intent": "orcamento_proposta",
        "triggers": ["orcamento", "preço", "valor", "quanto custa", "contratar", "proposta", "comprar"],
        "responses": [
          "Cada solução do Grupo BRM é personalizada de acordo com o tamanho e objetivo da sua empresa!\n\nVocê pode nos enviar uma mensagem com os detalhes do seu projeto para elaborarmos um diagnóstico sem compromisso."
        ]
      },
      {
        "intent": "grupobrm_sobre",
        "triggers": ["grupo brm", "o que e o grupo brm", "sobre o grupo", "quem somos", "historia"],
        "responses": [
          "O **Grupo BRM** é um ecossistema integrado que une tecnologia, publicidade, software, mídia digital e contabilidade sob uma mesma visão de inteligência e performance.\n\nNosso lema oficial é:\n🌟 **CONEXÃO QUE GERA VALOR. SOLUÇÕES QUE TRANSFORMAM.**"
        ]
      }
    ],
    "greetings": [
      "Olá! Seja muito bem-vindo(a) ao Autoatendimento do **Grupo BRM**! 👋 Como posso ajudar sua empresa hoje?",
      "Olá! Sou o assistente virtual do **Grupo BRM**. Sobre qual das nossas soluções ou empresas você gostaria de saber mais?"
    ],
    "fallbacks": [
      "Posso te ajudar com detalhes sobre **Sistemas**, **M.O Publicidade**, **Desenvolvimento**, **DIGMIDIA** ou **Contabilidade**! Qual desses assuntos você gostaria de explorar?",
      "Sobre esse assunto específico, posso detalhar como nossas soluções em tecnologia, gestão ou publicidade podem atender sua empresa!"
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
      <button id="brm-chat-trigger" aria-label="Abrir atendimento WhatsApp Grupo BRM" class="fixed bottom-5 right-5 z-50 flex items-center space-x-3 bg-[#19A37F] hover:bg-[#138366] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-white/20">
        <div class="relative flex items-center justify-center">
          <!-- WhatsApp Icon -->
          <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <!-- Pulse Dot -->
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
        <div id="brm-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F4F6F9] text-xs">
          <!-- Dynamically inserted messages -->
        </div>

        <!-- Quick Suggestion Chips -->
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
          <input type="text" id="brm-chat-input" placeholder="Pergunte sobre nossas empresas ou serviços..." autocomplete="off" class="flex-1 px-4 py-2.5 rounded-full bg-gray-100 text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]">
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
      console.log("Usando base de conhecimento incorporada diretamente no JS.", e);
    }
  }

  // 3. Format & Add Message to UI (NO repetitive human transfer buttons)
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

    // Convert markdown bold to HTML & newlines
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

  // 4. Intelligent Natural Language Processing Engine
  function processUserQuery(query) {
    const cleanQuery = normalizeStr(query);

    if (!knowledgeData) {
      addMessage("Desculpe, estou finalizando a inicialização. Pode repetir em um segundo?", "bot");
      return;
    }

    // A. Check General Intent Triggers FIRST (e.g., "empresas", "contato", "pdv", "desenvolvimento", etc.)
    for (const intentObj of knowledgeData.intents) {
      for (const trigger of intentObj.triggers) {
        if (cleanQuery.includes(normalizeStr(trigger))) {
          const randomResp = intentObj.responses[Math.floor(Math.random() * intentObj.responses.length)];
          addMessage(randomResp, "bot");
          return;
        }
      }
    }

    // B. Check Specific Companies by Name, ID or Keywords
    for (const company of knowledgeData.companies) {
      const matchName = normalizeStr(company.name);
      const matchId = normalizeStr(company.id);
      
      let isMatch = cleanQuery.includes(matchName) || cleanQuery.includes(matchId);
      if (!isMatch && company.keywords) {
        for (const kw of company.keywords) {
          if (cleanQuery.includes(normalizeStr(kw))) {
            isMatch = true;
            break;
          }
        }
      }

      if (isMatch) {
        let responseText = `🏢 **Empresa ${company.order}ª do Grupo: ${company.name.toUpperCase()}**\n\n_${company.tagline}_\n\n${company.description}\n\n**✨ Principais Serviços e Soluções:**\n`;
        if (company.features && company.features.length) {
          company.features.forEach(f => {
            responseText += `• ${f}\n`;
          });
        }
        if (company.target_audience) {
          responseText += `\n🎯 **Público Indicado:** ${company.target_audience}`;
        }
        addMessage(responseText, "bot");
        return;
      }
    }

    // C. Greetings check
    if (cleanQuery.match(/^(ola|oi|bom dia|boa tarde|boa noite|inicio|menu|ajuda)$/)) {
      const greeting = knowledgeData.greetings[Math.floor(Math.random() * knowledgeData.greetings.length)];
      addMessage(greeting, "bot");
      return;
    }

    // D. Fallback Response (Clean & Helpful)
    const fallback = knowledgeData.fallbacks[Math.floor(Math.random() * knowledgeData.fallbacks.length)];
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
        
        // Add initial greeting if empty
        const msgContainer = document.getElementById("brm-chat-messages");
        if (msgContainer && msgContainer.children.length === 0 && knowledgeData) {
          addMessage(knowledgeData.greetings[0], "bot");
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

    // Dynamic delegation for chip buttons
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

  // 6. Global API to open chatbot programmatically from company cards / buttons
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
      addMessage(knowledgeData.greetings[0], "bot");
    }

    if (query) {
      addMessage(query, "user");
      setTimeout(() => processUserQuery(query), 200);
    }
  };

  // 7. Boot Everything on DOM Ready or Immediate if already loaded
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
