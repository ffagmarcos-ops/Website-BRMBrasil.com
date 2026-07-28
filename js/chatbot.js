/* ==========================================================================
   GRUPO BRM - CHATBOT INTERATIVO DE AUTOATENDIMENTO 24H (WHATSAPP FLUTUANTE)
   ========================================================================== */

(function () {
  // Built-in Knowledge Base Fallback (Guarantees instant local file:// execution & zero CORS issues)
  const DEFAULT_KNOWLEDGE = {
    "group_info": {
      "name": "Grupo BRM",
      "slogan": "Conexão que gera valor. Soluções que transformam.",
      "description": "O Grupo BRM é um ecossistema empresarial focado em conectar negócios, tecnologia, gestão, comunicação e inteligência para impulsionar resultados sustentáveis em empresas de todos os portes.",
      "coverage": "Atendimento nacional em todo o Brasil",
      "address": "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      "phone": "(11) 99999-9999",
      "email": "contato@grupobrm.com.br",
      "whatsapp_url": "https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20chatbot%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20atendente."
    },
    "companies": [
      {
        "id": "sistemas",
        "order": 1,
        "name": "Sistemas",
        "tagline": "Sistemas comerciais para alta performance, frente de caixa e supermercados",
        "description": "Especializada em sistemas comerciais integrados e gestão de varejo. Oferece controle total de frente de caixa (PDV), estoque em tempo real, emissão fiscal simplificada e relatórios de lucratividade para supermercados, atacados, lojas de conveniência e comércio em geral.",
        "features": [
          "Frente de Caixa (PDV) de altíssima velocidade e contingência offline",
          "Controle de Estoque avançado com gestão de lotes, validade e inventário",
          "Emissão de Documentos Fiscais (NF-e, NFC-e, SAT, Sped e Bloco K)",
          "Integração com Balanças, Etiquetadoras e PinPads (TEF)",
          "Conciliação bancária automática e controle de vendas no cartão"
        ],
        "target_audience": "Supermercados, hortifrutis, atacadistas, minimercados, lojas de conveniência e comércio varejista.",
        "keywords": ["sistemas", "sistema", "pdv", "supermercado", "supermercados", "estoque", "caixa", "frente de caixa", "vendas", "nfe", "nfce", "tef", "balanca", "inventario", "comercio"]
      },
      {
        "id": "mo-publicidade",
        "order": 2,
        "name": "M.O Publicidade",
        "tagline": "Estratégia de marca, publicidade 360° e marketing de performance",
        "description": "Agência de comunicação e publicidade estratégica focada no fortalecimento de marcas e aceleração de vendas. Desenvolve desde a criação de identidade visual até grandes campanhas de tráfego pago, redes sociais e materiais de ponto de venda.",
        "features": [
          "Branding, criação de logotipos e manual de identidade visual completo",
          "Gestão de Tráfego Pago (Google Ads, Meta Ads - Instagram/Facebook, TikTok Ads)",
          "Gestão de Mídias Sociais, criação de artes, vídeos e planejamento editorial",
          "Campanhas publicitárias integradas (On-line e Off-line)",
          "Produção de materiais impressos, promocionais e catálogo corporativo"
        ],
        "target_audience": "Empresas que desejam aumentar suas vendas, profissionalizar sua imagem institucional e dominar o mercado local ou nacional.",
        "keywords": ["mo", "publicidade", "marketing", "propaganda", "branding", "redes sociais", "anuncios", "campanhas", "google ads", "instagram", "facebook", "identidade visual", "logo", "agencia"]
      },
      {
        "id": "desenvolvimento",
        "order": 3,
        "name": "Desenvolvimento",
        "tagline": "Engenharia de software, plataformas web e aplicativos sob medida",
        "description": "Fábrica de software de alta performance focada em transformar processos complexos em plataformas intuitivas. Desenvolve sistemas web sob medida, aplicativos móveis para iOS e Android, integrações de APIs e ecossistemas de ensino EAD.",
        "features": [
          "Desenvolvimento de Aplicativos Móveis Nativos e Híbridos (iOS e Android)",
          "Plataformas e Softwares Web Sob Medida em arquitetura Cloud",
          "Sistemas de EAD, treinamento corporativo e portais do cliente",
          "Integração de APIs, ERPs, gateways de pagamento e automações",
          "Dashboards de BI (Business Intelligence) e relatórios analíticos"
        ],
        "target_audience": "Corporações, startups, redes de ensino, franqueadoras e empresas que necessitam de soluções tecnológicas exclusivas.",
        "keywords": ["desenvolvimento", "software", "app", "aplicativo", "web", "programacao", "api", "sistema sob medida", "ead", "plataforma", "bi", "dashboard", "fabrica de software"]
      },
      {
        "id": "digmidia",
        "order": 4,
        "name": "DIGMIDIA",
        "tagline": "Mídia digital indoor, sinalização dinâmica e encartes digitais",
        "description": "Pioneira em mídia digital no ponto de venda e comunicação corporativa visual. Transforma a experiência dos clientes no PDV através de redes de TV indoor, totens digitais interativos, encartes digitais dinâmicos e menu boards.",
        "features": [
          "Rede de TV Indoor corporativa e promocional no ponto de venda",
          "Totens Digitais Interativos para atendimento, senhas e catálogo de produtos",
          "Encartes Digitais animados para WhatsApp, redes sociais e displays",
          "Menu Boards Dinâmicos para restaurantes, lanchonetes e padarias",
          "Gerenciamento de conteúdo 100% remoto via nuvem em tempo real"
        ],
        "target_audience": "Supermercados, redes de varejo, restaurantes, clínicas, academias, shoppings e escritórios corporativos.",
        "keywords": ["digmidia", "midia digital", "tv indoor", "toten", "totens", "encartes", "sinalizacao", "displays", "menu board", "encarte digital", "sinalizacao digital", "pdv digital"]
      },
      {
        "id": "contabilidade",
        "order": 5,
        "name": "Contabilidade",
        "tagline": "Gestão contábil estratégica, inteligência tributária e finanças",
        "description": "Consultoria e assessoria contábil moderna que vai além do básico. Oferece inteligência tributária para redução legal da carga de impostos, escrituração contábil e fiscal precisa, BPO financeiro e gestão completa de folha de pagamento.",
        "features": [
          "Planejamento Tributário Estratégico e Recuperação de Créditos fiscais",
          "Escrituração Contábil, Fiscal e Emissão de Balanços Gerenciais",
          "BPO Financeiro (Terceirização completa das rotinas de contas a pagar/receber)",
          "Gestão Trabalhista, Folha de Pagamento e eSocial corporativo",
          "Abertura, alteração de contrato social e blindagem patrimonial"
        ],
        "target_audience": "Empresas do Simples Nacional, Lucro Presumido e Lucro Real que buscam segurança jurídica e economia em impostos.",
        "keywords": ["contabilidade", "contabil", "imposto", "tributario", "fiscal", "folha", "bpo", "auditoria", "abrir empresa", "simples nacional", "lucro presumido", "lucro real", "balanco", "impostos"]
      }
    ],
    "intents": [
      {
        "intent": "empresas_lista",
        "triggers": ["empresas", "🏢 empresas", "quais sao as empresas", "empresas do grupo", "quais empresas", "quais sao os negocios", "lista de empresas", "quais sao os serviços", "ver empresas", "todas as empresas"],
        "responses": [
          "O Grupo BRM reúne 5 empresas especializadas e integradas:\n\n1. 💻 **Sistemas** (PDV, frente de caixa e automação para comércio)\n2. 📢 **M.O Publicidade** (Marketing 360°, tráfego e branding)\n3. ⚙️ **Desenvolvimento** (Apps móveis e softwares sob medida)\n4. 📺 **DIGMIDIA** (TV indoor, encartes digitais e sinalização)\n5. 📊 **Contabilidade** (Planejamento tributário e gestão fiscal)\n\nSobre qual das empresas gostaria de saber mais?"
        ]
      },
      {
        "intent": "contato_localizacao",
        "triggers": ["contato", "telefone", "whatsapp", "email", "endereco", "onde fica", "localizacao", "cidade", "estado", "atendem minha regiao"],
        "responses": [
          "📍 **Endereço**: Av. Paulista, 1000 - São Paulo, SP\n📞 **Telefone / WhatsApp**: (11) 99999-9999\n✉️ **E-mail**: contato@grupobrm.com.br\n🌐 **Atendimento**: Atendemos empresas em **todo o território nacional (Brasil)**!\n\nDeseja conversar com nosso atendimento humano agora?"
        ]
      },
      {
        "intent": "orcamento_proposta",
        "triggers": ["orcamento", "preço", "valor", "quanto custa", "contratar", "proposta", "comprar"],
        "responses": [
          "Cada projeto no Grupo BRM é dimensionado sob medida para a sua necessidade! Analisamos o porte da sua empresa para oferecer o melhor custo-benefício.\n\nClique no botão abaixo para receber um orçamento rápido com nossos consultores no WhatsApp!"
        ]
      },
      {
        "intent": "suporte_horario",
        "triggers": ["suporte", "horario", "funcionamento", "duvida tecnica", "atendimento"],
        "responses": [
          "⏰ **Horário de Atendimento**: Segunda a Sexta, das 08h às 18h.\n🤖 **Autoatendimento Chatbot**: Disponível 24 horas por dia, 7 dias por semana!\n\nSe você já é cliente e precisa de suporte técnico, pode falar diretamente com nossa equipe no WhatsApp."
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
      "Olá! Seja muito bem-vindo(a) ao Autoatendimento 24h do **Grupo BRM**! 👋 Como posso ajudar seu negócio hoje?",
      "Olá! Que excelente ter você por aqui. Sou o assistente virtual do **Grupo BRM**. Sobre qual das nossas 5 empresas você gostaria de informações?"
    ],
    "fallbacks": [
      "Entendi sua dúvida! Para responder com exatidão sobre esse assunto específico, recomendo conversar diretamente com nossa equipe no WhatsApp.",
      "Para obter uma resposta detalhada e personalizada para o seu modelo de negócio, posso te conectar agora com um consultor especialista no WhatsApp!"
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
        <span class="hidden sm:inline font-bold font-heading text-xs tracking-wide">Fale Conosco 24h</span>
      </button>

      <!-- Chat Modal Window -->
      <div id="brm-chat-modal" class="fixed bottom-20 right-5 z-50 w-[92vw] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden hidden transition-all duration-300 transform scale-95 opacity-0">
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
                <span>Assistente Virtual 24h</span>
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
          <input type="text" id="brm-chat-input" placeholder="Digite sua dúvida ou empresa..." autocomplete="off" class="flex-1 px-4 py-2.5 rounded-full bg-gray-100 text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]">
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

  // 3. Format & Add Message to UI
  function addMessage(text, sender = "bot", hasWhatsAppBtn = false) {
    const msgContainer = document.getElementById("brm-chat-messages");
    if (!msgContainer) return;

    const wrapper = document.createElement("div");
    wrapper.className = `flex ${sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`;

    const bubble = document.createElement("div");
    if (sender === "user") {
      bubble.className = "max-w-[80%] bg-[#1E4FA3] text-white p-3 rounded-2xl rounded-tr-none shadow-sm leading-relaxed";
    } else {
      bubble.className = "max-w-[85%] bg-white text-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm leading-relaxed space-y-2";
    }

    // Convert markdown bold to HTML
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formattedText = formattedText.replace(/\n/g, "<br>");
    bubble.innerHTML = formattedText;

    if (hasWhatsAppBtn && knowledgeData) {
      const btn = document.createElement("a");
      btn.href = knowledgeData.group_info.whatsapp_url;
      btn.target = "_blank";
      btn.className = "mt-2 w-full py-2 px-3 bg-[#19A37F] hover:bg-[#138366] text-white text-[11px] font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-colors shadow-sm";
      btn.innerHTML = `
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        <span>Falar com Atendente Humano</span>
      `;
      bubble.appendChild(btn);
    }

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
      addMessage("Desculpe, estou carregando minha base de conhecimento. Tente novamente em um instante!", "bot");
      return;
    }

    // A. Check General Intent Triggers FIRST (e.g., "empresas", "contato", "orçamento")
    for (const intentObj of knowledgeData.intents) {
      for (const trigger of intentObj.triggers) {
        if (cleanQuery.includes(normalizeStr(trigger))) {
          const randomResp = intentObj.responses[Math.floor(Math.random() * intentObj.responses.length)];
          addMessage(randomResp, "bot", true);
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
        let responseText = `🏢 **Empresa ${company.order}ª do Grupo: ${company.name.toUpperCase()}**\n\n_${company.tagline}_\n\n${company.description}\n\n**✨ Principais Recursos e Diferenciais:**\n`;
        if (company.features && company.features.length) {
          company.features.forEach(f => {
            responseText += `• ${f}\n`;
          });
        }
        if (company.target_audience) {
          responseText += `\n🎯 **Público Indicado:** ${company.target_audience}\n`;
        }
        responseText += `\nGostaria de solicitar uma proposta ou tirar dúvidas sobre **${company.name}**?`;
        addMessage(responseText, "bot", true);
        return;
      }
    }

    // C. Greetings check
    if (cleanQuery.match(/^(ola|oi|bom dia|boa tarde|boa noite|inicio|menu|ajuda)$/)) {
      const greeting = knowledgeData.greetings[Math.floor(Math.random() * knowledgeData.greetings.length)];
      addMessage(greeting, "bot");
      return;
    }

    // D. Fallback Response
    const fallback = knowledgeData.fallbacks[Math.floor(Math.random() * knowledgeData.fallbacks.length)];
    addMessage(fallback, "bot", true);
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
