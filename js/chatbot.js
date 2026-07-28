/* ==========================================================================
   GRUPO BRM - CHATBOT INTERATIVO DE AUTOATENDIMENTO (ATENDENTE VIRTUAL HUMANO)
   ========================================================================== */

(function () {
  // Base de Conhecimento com Tom de Conversa Humano e Variações Fluídas
  const DEFAULT_KNOWLEDGE = {
    "group_info": {
      "name": "Grupo BRM",
      "slogan": "Conexão que gera valor. Soluções que transformam.",
      "description": "O Grupo BRM é um ecossistema empresarial focado em conectar negócios, tecnologia, gestão, comunicação e inteligência para impulsionar resultados sustentáveis em empresas de todos os portes.",
      "coverage": "Atendemos empresas em todo o território nacional (São Paulo e todo o Brasil).",
      "address": "Av. Paulista, 1000 - São Paulo, SP",
      "phone": "(11) 99999-9999",
      "email": "contato@grupobrm.com.br"
    },
    "greetings": [
      "Olá! Seja muito bem-vindo(a) ao Grupo BRM! 👋 Sou o assistente virtual da empresa. Como posso te ajudar hoje?",
      "Oi! Que ótimo ter você por aqui! 😊 Sou o atendente virtual do Grupo BRM. Sobre qual assunto ou empresa você gostaria de conversar?"
    ],
    "hooks": [
      "Excelente pergunta! ",
      "Entendi perfeitamente o seu ponto. ",
      "Com certeza! Essa é uma dúvida muito importante. ",
      "Ótima colocação! ",
      "Perfeito! Vou te explicar exatamente como funciona. "
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
        "intent": "pdv_offline_duvida",
        "triggers": ["internet cair", "sem internet", "pdv trava", "pdv offline", "contingencia", "caixa parar"],
        "answers": [
          "Essa é uma preocupação super legítima! Nosso **PDV (Frente de Caixa)** possui tecnologia de contingência offline. Ou seja: se a internet da sua loja cair, o caixa continua vendendo e emitindo comprovantes normalmente sem travar. Quando a internet voltar, tudo se sincroniza automaticamente!",
          "Fique tranquilo(a)! O sistema da **Sistemas** foi feito pensando no dia a dia real do varejo. Caso falhe a conexão, o PDV opera offline perfeitamente para que você nunca perca uma venda ou enfrente filas."
        ]
      },
      {
        "intent": "nota_fiscal_duvida",
        "triggers": ["nota fiscal", "nfc-e", "nf-e", "sat", "sped", "emite nota"],
        "answers": [
          "Sim! O sistema emite todos os documentos fiscais exigidos pela legislação de forma 100% automática: **NFC-e, NF-e, SAT, Sped Fiscal e Bloco K**. É rápido e sem burocracia para o seu contador!",
          "Com certeza! A emissão de notas (NFC-e / NF-e / SAT) é integrada diretamente ao fechamento de cada venda no PDV, gerando os arquivos de homologação fiscal com total segurança."
        ]
      },
      {
        "intent": "equipamentos_duvida",
        "triggers": ["balanca", "leitor", "codigo de barras", "pinpad", "tef", "maquininha", "impressora"],
        "answers": [
          "Nosso sistema se conecta com os principais equipamentos do mercado! Funciona perfeitamente com balanças de checkout e etiquetadoras (Toledo, Filizola), leitores de código de barras, impressoras térmicas e TEF (máquina de cartão integrada ao caixa).",
          "Pode ter certeza! Integramos nativamente com balanças comerciais, leitores, leitores de código QR/Barra e sistemas TEF de cartão, garantindo um processo de leitura e pagamento em poucos segundos."
        ]
      },
      {
        "intent": "anuncios_trafego_duvida",
        "triggers": ["google ads", "instagram ads", "facebook ads", "tiktok ads", "anuncios", "trafego pago", "atrair clientes"],
        "answers": [
          "A **M.O Publicidade** cria e gerencia campanhas de tráfego pago focadas em conversão! Investimos estrategicamente no Google Ads para alcançar quem já procura seu serviço e no Instagram/Facebook Ads para gerar desejo e novos clientes.",
          "Com a **M.O Publicidade**, seus anúncios aparecem para as pessoas certas na sua cidade ou em todo o Brasil. Cuidamos do design, dos textos e da otimização diária das campanhas para trazer o maior retorno sobre seu investimento."
        ]
      },
      {
        "intent": "criar_logo_duvida",
        "triggers": ["criar logo", "logotipo", "identidade visual", "manual de marca", "branding"],
        "answers": [
          "Desenvolvemos toda a identidade visual da sua marca! A **M.O Publicidade** cria logotipos profissionais, paleta de cores, tipografia e o manual completo de marca para deixar sua empresa com presença marcante e profissional.",
          "Com certeza! Uma marca forte transmite confiança. Nossa equipe de design cria o logotipo e toda a identidade visual alinhada ao posicionamento do seu negócio."
        ]
      },
      {
        "intent": "desenvolvimento_app_duvida",
        "triggers": ["criar app", "criar aplicativo", "app ios android", "quanto custa um aplicativo", "desenvolver app"],
        "answers": [
          "Criamos aplicativos móveis nativos e híbridos para iOS e Android! A **Desenvolvimento** cuida de todas as etapas: desde o protótipo de telas (UX/UI), programação do código até a publicação oficial na App Store e Google Play.",
          "Sensacional! Desenvolver um aplicativo exclusivo é um passo gigante para a empresa. Nossa fábrica de software mapeia sua ideia, cria a arquitetura em nuvem e entrega um aplicativo rápido, seguro e muito fácil de usar."
        ]
      },
      {
        "intent": "tv_indoor_encarte_duvida",
        "triggers": ["tv indoor", "totem", "encarte digital", "menu board", "telas na loja", "sinalizacao"],
        "answers": [
          "A **DIGMIDIA** transforma a experiência na sua loja física! Instalamos redes de TV Indoor com programação dinâmica de ofertas, totens interativos touchscreen e encartes digitais animados perfeitos para divulgar no WhatsApp.",
          "Com a **DIGMIDIA**, você atualiza o preço ou a foto de uma promoção em todas as telas da sua loja com poucos cliques de forma remota via nuvem. É moderno e atrai a atenção dos clientes no PDV!"
        ]
      },
      {
        "intent": "reduzir_impostos_duvida",
        "triggers": ["reduzir imposto", "pagar menos imposto", "planejamento tributario", "recuperar credito", "sonegar nao", "impostos"],
        "answers": [
          "Nossa divisão de **Contabilidade** é especialista em Inteligência Tributária! Efetuamos um estudo completo do seu negócio para enquadrar a empresa no regime fiscal (Simples, Lucro Presumido ou Real) que pague o menor imposto possível dentro da lei.",
          "Com um bom Planejamento Tributário da **Contabilidade**, muitas empresas descobrem que estavam pagando tributos a mais e conseguem reduzir custos de forma legal e imediata."
        ]
      },
      {
        "intent": "bpo_financeiro_duvida",
        "triggers": ["bpo financeiro", "terceirizar financeiro", "contas a pagar", "fluxo de caixa", "contas a receber"],
        "answers": [
          "O **BPO Financeiro** da nossa Contabilidade assume a rotina operacional do seu setor financeiro! Cuidamos dos pagamentos, agendamentos, conciliação bancária diária e emissão de relatórios para você focar apenas em fazer o negócio crescer.",
          "Com o BPO Financeiro, sua empresa ganha um setor financeiro profissional sem precisar contratar e treinar uma equipe interna. Tudo organizado com transparência total!"
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
        "triggers": ["contato", "telefone", "whatsapp", "email", "endereco", "onde fica", "sao paulo", "atendem meu estado"],
        "answers": [
          "Ficamos localizados na **Av. Paulista, 1000 - São Paulo, SP**! 📍 Mas fique tranquilo(a): atendemos clientes e empresas em **todo o território nacional (Brasil inteiro)** via atendimento digital e remoto com total proximidade.",
          "Nossa sede fica na **Av. Paulista, 1000 (São Paulo, SP)**, e prestamos atendimento especializado para empresas de todos os estados do Brasil! E-mail: contato@grupobrm.com.br / Tel: (11) 99999-9999."
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
      "Entendi o seu ponto! Posso te responder em detalhes sobre **Sistemas** (PDV/caixa), **M.O Publicidade** (marketing/anúncios), **Desenvolvimento** (apps/softwares), **DIGMIDIA** (telas/TV indoor) ou **Contabilidade** (impostos/gestão). Sobre qual destas áreas você quer falar?",
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
          <input type="text" id="brm-chat-input" placeholder="Digite sua dúvida sobre o Grupo BRM ou serviços..." autocomplete="off" class="flex-1 px-4 py-2.5 rounded-full bg-gray-100 text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]">
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

  // Helper para selecionar variações de respostas aleatórias de forma natural
  function getRandomItem(arr) {
    if (!arr || !arr.length) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // 4. Engine Humano de Conversação
  function processUserQuery(query) {
    const cleanQuery = normalizeStr(query);

    if (!knowledgeData) {
      addMessage("Desculpe, estou pronto para te ajudar! Pode perguntar novamente?", "bot");
      return;
    }

    // A. Check Q&A Topics (Perguntas Específicas Frequentes)
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

    // B. Check Specific Companies (Empresas do Grupo)
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
        const hook = getRandomItem(knowledgeData.hooks || [""]);
        const textVar = getRandomItem(comp.variations || [comp.summary]);
        const responseText = `${hook}🏢 **Empresa ${comp.order}ª do Grupo: ${comp.name.toUpperCase()}**\n\n_${comp.tagline}_\n\n${textVar}`;
        addMessage(responseText, "bot");
        return;
      }
    }

    // C. Check General Intents (Intenções Gerais)
    if (knowledgeData.intents) {
      for (const intentObj of knowledgeData.intents) {
        for (const trigger of intentObj.triggers) {
          if (cleanQuery.includes(normalizeStr(trigger))) {
            const answer = getRandomItem(intentObj.responses);
            addMessage(answer, "bot");
            return;
          }
        }
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
