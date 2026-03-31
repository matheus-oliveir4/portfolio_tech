const projects = [
  {
    id: 'n8n-pulse-energy',
    category: 'n8n',
    title_pt: 'Ecosistema de Automação — Pulse Energy',
    title_en: 'Automation Ecosystem — Pulse Energy',
    desc_pt: 'Solução robusta que automatiza o ciclo completo de contratação: gera documentos PF/PJ, organiza governança no Dropbox e alimenta banco de dados para métricas em Power BI.',
    desc_en: 'Robust solution that automates the complete contracting cycle: generates individual/corporate documents, organizes governance in Dropbox, and feeds a database for Power BI metrics.',
    icon: '⚡',
    imageUrl: 'assets/pulse-energy.png',
    flow: [
      { name_pt: 'Webhook Lead', name_en: 'Lead Webhook', type: 'trigger' },
      { name_pt: 'Triagem PF/PJ', name_en: 'Screening', type: 'logic' },
      { name_pt: 'Geração de Docs', name_en: 'Doc Generation', type: 'action' },
      { name_pt: 'Cloud Storage (Dropbox)', name_en: 'Cloud Storage', type: 'action' },
      { name_pt: 'Notificação Responsável', name_en: 'Sponsor Notification', type: 'action' },
      { name_pt: 'Ingestão Banco de Dados', name_en: 'DB Ingestion', type: 'action' }
    ],
    embedCode: `{ "actions": ["Contract", "POA", "Dropbox", "SQL Ingestion"], "analytics": "Power BI Integrated" }`
  },
  {
    id: 'n8n-pulse',
    category: 'n8n',
    title_pt: 'Automação de Contratos — Pulse Facility',
    title_en: 'Contract Automation — Pulse Facility',
    desc_pt: 'Sistema end-to-end que automatiza a geração de contratos jurídicos via Webhook, reduzindo o tempo de entrega de dias para segundos e garantindo padronização total.',
    desc_en: 'End-to-end system that automates legal contract generation via Webhook, reducing delivery time from days to seconds while ensuring total standardization.',
    icon: '📄',
    imageUrl: 'assets/pulse-flow.png',
    flow: [
      { name_pt: 'Webhook Lead', name_en: 'Lead Webhook', type: 'trigger' },
      { name_pt: 'Copiando Modelo', name_en: 'Copying Template', type: 'action' },
      { name_pt: 'Inserindo Dados', name_en: 'Inserting Data', type: 'action' },
      { name_pt: 'Geração PDF/Word', name_en: 'PDF/Word Gen', type: 'action' },
      { name_pt: 'Envio por Email', name_en: 'Email Dispatch', type: 'action' }
    ],
    embedCode: `{ "steps": ["Webhook", "Template Copy", "Doc Generation", "Email Dispatch"], "status": "In Production" }`
  },
  {
    id: 'n8n-sdr-solar',
    category: 'n8n',
    title_pt: 'SDR de IA — Setor de Energia Solar',
    title_en: 'AI SDR — Solar Energy Sector',
    desc_pt: 'Agente inteligente que qualifica leads via WhatsApp, utiliza RAG para consulta de catálogos técnicos e encaminha leads prontos para o time de fechamento.',
    desc_en: 'Intelligent agent that qualifies leads via WhatsApp, uses RAG to consult technical catalogs, and forwards ready leads to the closing team.',
    icon: '☀️',
    images: ['assets/sdr.png', 'assets/rag.png', 'assets/encaminhndo_lead.png'],
    flow: [
      { name_pt: 'Entrada (WhatsApp)', name_en: 'Input (WhatsApp)', type: 'trigger' },
      { name_pt: 'Extração & Filtro', name_en: 'Extraction & Filter', type: 'logic' },
      { name_pt: 'AI Agent (Gemini + RAG)', name_en: 'AI Agent (Gemini + RAG)', type: 'action' },
      { name_pt: 'Memória de Chat (PostgreSQL)', name_en: 'Chat Memory (PostgreSQL)', type: 'action' },
      { name_pt: 'Encaminhamento Closer', name_en: 'Closer Forwarding', type: 'action' }
    ],
    embedCode: `{ "ai_models": ["Google Gemini 1.5 Pro"], "storage": ["PostgreSQL Vector", "BigQuery"], "integrations": ["WhatsApp API", "n8n AI Agent"] }`
  }
];

const translations = {
  pt: {
    nav_bi: "Inteligência de Negócio",
    nav_auto: "Automação",
    nav_data: "Arquitetura de Dados",
    nav_contact: "Contato",
    hero_title: "Transformando dados em decisões inteligentes.",
    hero_desc: "Analista de Dados especializado em ecossistemas de BI modernos, automações de fluxos complexos e infraestrutura de dados escalável.",
    bi_title: "Inteligência de Negócios",
    bi_desc: "Dashboards interativos e análises profundas para insights estratégicos.",
    soon_title: "Em breve...",
    bi_soon_desc: "Novos dashboards e análises estratégicas estão sendo preparados.",
    auto_title: "Automação de Fluxos e Processos",
    auto_desc: "Otimização de rotinas e integração de sistemas utilizando n8n.",
    data_title: "Arquitetura de Dados",
    data_desc: "Engenharia e estruturação de pipelines de dados (Em breve).",
    soon_title_data: "Em breve...",
    data_soon_desc: "Estruturação de pipelines e arquitetura de dados em desenvolvimento.",
    conf_title: "Experiência Corporativa & Projetos Confidenciais",
    conf_desc1: "Devido a acordos de confidencialidade (NDA), mais de 30 projetos realizados não podem ser expostos integralmente.",
    conf_desc2: "Clique nos cards abaixo para revelar os parceiros e ecossistemas explorados.",
    conf_card1_title: "Portfólio de Atendimento",
    conf_card1_desc: "Mais de 30 empresas atendidas com soluções personalizadas de dados:",
    conf_card2_title: "Ecossistema de Integrações",
    conf_card2_desc: "Implementação de fluxos bidirecionais integrando plataformas como:",
    conf_card3_title: "Engenharia de Dados & ETL",
    conf_card3_desc: "Desenvolvimento de pipelines robustos utilizando:",
    contact_title: "Vamos conversar?",
    contact_desc: "Seja para um projeto novo ou apenas para trocar ideias sobre dados.",
    footer: "Portfólio Tech",
    btn_copy: "Copiar Código",
    btn_fullscreen: "Ver Fullscreen",
    btn_view: "Visualizar"
  },
  en: {
    nav_bi: "Business Intelligence",
    nav_auto: "Automation",
    nav_data: "Data Architecture",
    nav_contact: "Contact",
    hero_title: "Transforming data into smart decisions.",
    hero_desc: "Data Analyst specialized in modern BI ecosystems, complex workflow automations, and scalable data infrastructure.",
    bi_title: "Business Intelligence",
    bi_desc: "Interactive dashboards and deep analysis for strategic insights.",
    soon_title: "Coming soon...",
    bi_soon_desc: "New dashboards and strategic analyses are being prepared.",
    auto_title: "Workflow Process Automation",
    auto_desc: "Routine optimization and system integrations using n8n.",
    data_title: "Data Architecture",
    data_desc: "Engineering and structuring of data pipelines (Coming soon).",
    soon_title_data: "Coming soon...",
    data_soon_desc: "Pipeline structuring and data architecture currently in development.",
    conf_title: "Corporate Experience & Confidential Projects",
    conf_desc1: "Due to Non-Disclosure Agreements (NDA), over 30 completed projects cannot be fully exposed.",
    conf_desc2: "Click on the cards below to reveal our partners and explored ecosystems.",
    conf_card1_title: "Service Portfolio",
    conf_card1_desc: "More than 30 companies served with tailored data solutions:",
    conf_card2_title: "Integration Ecosystem",
    conf_card2_desc: "Implementation of bidirectional flows integrating platforms such as:",
    conf_card3_title: "Data Engineering & ETL",
    conf_card3_desc: "Development of robust pipelines using:",
    contact_title: "Let's talk?",
    contact_desc: "Whether for a new project or just to exchange ideas about data.",
    footer: "Tech Portfolio",
    btn_copy: "Copy Code",
    btn_fullscreen: "View Fullscreen",
    btn_view: "View"
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Stop observing once revealed
    }
  });
}, observerOptions);


// Utilitários
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Renderização dos Projetos
function render() {
  const biContainer = $('#bi-list');
  const n8nContainer = $('#n8n-list');

  if (biContainer) biContainer.innerHTML = biContainer.innerHTML; // Mantém o placeholder se estiver lá
  if (n8nContainer) n8nContainer.innerHTML = '';

  const biProjects = projects.filter(p => p.category === 'bi');
  if (biProjects.length > 0 && biContainer) biContainer.innerHTML = ''; // Só limpa se houver projetos reais

  projects.forEach((proj, index) => {
    const card = document.createElement('article');
    const delayClass = `delay-${(index % 5) + 1}`;
    card.className = `card reveal ${delayClass}`;
    card.innerHTML = `
      <div class="card-icon">${proj.icon || '📁'}</div>
      <h4 class="card-title">${currentLang === 'pt' ? proj.title_pt : proj.title_en}</h4>
      <p class="card-desc">${currentLang === 'pt' ? proj.desc_pt : proj.desc_en}</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-view" data-id="${proj.id}">${translations[currentLang].btn_view}</button>
      </div>
    `;

    if (proj.category === 'bi' && biContainer) biContainer.appendChild(card);
    else if (proj.category === 'n8n' && n8nContainer) n8nContainer.appendChild(card);
    
    // Add to observer
    observer.observe(card);
  });

  // Event Listeners
  $$('.btn-view').forEach(btn => btn.addEventListener('click', (e) => openProjectModal(e.target.dataset.id, 'view')));
}

// Modal Logic
const modal = $('#preview-modal');
const modalTitle = $('#modal-title');
const modalBody = $('#modal-body');
const copyBtn = $('#copy-embed');
const openNew = $('#open-new');

function openProjectModal(id, mode) {
  const proj = projects.find(p => p.id === id);
  if (!proj) return;

  modalTitle.textContent = currentLang === 'pt' ? proj.title_pt : proj.title_en;
  modalBody.innerHTML = '';
  modal.classList.remove('hidden');

  if (mode === 'view') {
    if (proj.category === 'bi') {
      const iframe = document.createElement('iframe');
      iframe.src = proj.embedUrl;
      iframe.title = proj.title;
      iframe.allow = 'fullscreen';
      modalBody.appendChild(iframe);
      openNew.style.display = 'inline-block';
      openNew.href = proj.embedUrl;
    } else if (proj.category === 'n8n') {
      // Support for single or multiple images
      const projectImages = proj.images || (proj.imageUrl ? [proj.imageUrl] : []);

      projectImages.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = proj.title;
        img.className = 'modal-image';
        img.onerror = function () { this.style.display = 'none'; };
        modalBody.appendChild(img);
      });

      renderFlowVisualizer(proj.flow);
      openNew.style.display = 'none';
    }
  } else {
    // Mode code / details
    const pre = document.createElement('pre');
    pre.className = 'workflow-viewer';
    pre.textContent = proj.embedCode;
    modalBody.appendChild(pre);
    openNew.style.display = 'none';
  }

  copyBtn.onclick = () => {
    navigator.clipboard.writeText(proj.embedCode);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copiado!';
    setTimeout(() => copyBtn.textContent = originalText, 2000);
  };
}

function renderFlowVisualizer(flow) {
  const container = document.createElement('div');
  container.className = 'workflow-viewer';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '1rem';
  container.style.alignItems = 'center';

  flow.forEach((node, index) => {
    const nodeEl = document.createElement('div');
    nodeEl.style.padding = '1rem';
    nodeEl.style.border = '1px solid var(--abyss)';
    nodeEl.style.borderRadius = '8px';
    nodeEl.style.background = 'var(--carbon)';
    nodeEl.style.width = '200px';
    nodeEl.style.textAlign = 'center';
    
    const nodeName = currentLang === 'pt' ? node.name_pt : node.name_en;
    nodeEl.innerHTML = `<strong>${nodeName}</strong><br><small style="color:var(--slate-light)">${node.type}</small>`;

    container.appendChild(nodeEl);

    if (index < flow.length - 1) {
      const arrow = document.createElement('div');
      arrow.innerHTML = '↓';
      arrow.style.fontSize = '1.5rem';
      arrow.style.color = 'var(--abyss)';
      container.appendChild(arrow);
    }
  });

  modalBody.appendChild(container);
}

function closeModal() {
  modal.classList.add('hidden');
}

// Global Listeners for Modal
document.addEventListener('click', (e) => {
  if (e.target.dataset.close === 'true') closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  render();
  applyLanguage(currentLang);
  $('#year').textContent = new Date().getFullYear();

  // Reveal logic for confidential tags
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blurred')) {
      e.target.classList.remove('blurred');
      e.target.classList.add('revealed');
    }
  });

  document.querySelectorAll('.reveal:not(.card)').forEach(el => observer.observe(el));

  // Sticky Header Effect
  const header = $('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Language Switch Logic
  $$('.lang-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.dataset.lang;
      if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
        render(); // Re-render project cards to catch language changes
      }
    });
  });
});

function applyLanguage(lang) {
  // Update translation texts
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update button active state
  $$('.lang-opt').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // HTML lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}
