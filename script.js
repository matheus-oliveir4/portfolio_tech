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
  },
  {
    id: 'bi-dashboard-01',
    category: 'bi',
    title_pt: 'Dashboard Estratégico — Power BI',
    title_en: 'Strategic Dashboard — Power BI',
    desc_pt: 'Dashboard comercial desenvolvido em Power BI para a Star Seguros, com extração de dados via API REST do Kommo CRM e modelagem com DAX avançado, incluindo fórmulas de Time Intelligence. A tela acompanha faturamento, vendas, ticket médio, perdas, taxa de conexão, funil comercial, evolução mensal de leads, vendas por plano, origem dos leads e motivos de perda para identificar gargalos, canais eficientes e oportunidades de melhoria.',
    desc_en: 'Commercial Power BI dashboard for Star Seguros, with data extracted through the Kommo CRM REST API and modeled with advanced DAX, including Time Intelligence formulas. It tracks revenue, sales, average ticket, lost sales, connection rate, funnel conversion, monthly lead trends, sales by plan, lead sources, and loss reasons to identify bottlenecks, high-performing channels, and improvement opportunities.',
    icon: '📊',
    thumbnail: 'assets/bi_starauto.png',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiOTQ4ZjdlMGUtZTA0YS00NDM4LTkwYzEtZWYxYjFhMTBmYjUzIiwidCI6IjMwYTc3ZWI2LTg4MWItNGU3Yi1iYzRmLTdjMmQ2MTQ4NTNkNSIsImMiOjl9&pageName=ReportSectionc860061da7c65c155d3f'
  },
  {
    id: 'bi-dashboard-02',
    category: 'bi',
    title_pt: 'Overview Sales — Power BI',
    title_en: 'Overview Sales — Power BI',
    desc_pt: 'Dashboard de Overview Sales desenvolvido em Power BI para acompanhamento comercial ponta a ponta, com visão de valor fechado, volume de vendas, ticket médio (ACV), vendas perdidas, ciclo médio, funil por etapas, evolução de Cash Collect e análises por origem do lead, usuário e setor. A base foi construída com extração do PipeDrive CRM via ETL em Python, orquestração no Airflow e armazenamento no Google BigQuery como data warehouse, garantindo atualização estruturada e suporte à análise gerencial.',
    desc_en: 'Overview Sales dashboard built in Power BI for end-to-end commercial monitoring, covering closed revenue, sales volume, average ticket (ACV), lost sales, average sales cycle, stage-by-stage funnel, Cash Collect trends, and breakdowns by lead source, user, and sector. The data foundation was built from PipeDrive CRM extraction through ETL in Python, orchestrated with Airflow, and stored in Google BigQuery as the data warehouse, providing structured refreshes and support for management analysis.',
    icon: '📈',
    thumbnail: 'assets/bubblemkt.png',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNmYyYTBiNzItOWIyOS00MWZkLWI5MjEtOGIzZWMxNDFlZDEyIiwidCI6IjMwYTc3ZWI2LTg4MWItNGU3Yi1iYzRmLTdjMmQ2MTQ4NTNkNSIsImMiOjl9&pageName=ReportSectionc860061da7c65c155d3f'
  }
];

const translations = {
  pt: {
    nav_bi: "Inteligência de Negócio",
    nav_auto: "Automação",
    nav_data: "Arquitetura de Dados",
    nav_infra: "Infraestrutura",
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
    data_desc: "Pipeline ETL ponta a ponta com Arquitetura Medalhão, orquestração e entrega de valor ao cliente.",
    infra_title: "Infraestrutura Cloud",
    infra_desc: "Stack de produção containerizada com orquestração, automação e APIs de mensageria.",
    soon_title_data: "Em breve...",
    data_soon_desc: "Estruturação de pipelines e arquitetura de dados em desenvolvimento.",
    conf_title: "Experiência Corporativa e Projetos",
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
    nav_infra: "Infrastructure",
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
    data_desc: "End-to-end ETL pipeline with Medallion Architecture, orchestration and client value delivery.",
    infra_title: "Cloud Infrastructure",
    infra_desc: "Containerized production stack with orchestration, automation and messaging APIs.",
    soon_title_data: "Coming soon...",
    data_soon_desc: "Pipeline structuring and data architecture currently in development.",
    conf_title: "Corporate Experience & Projects",
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

// Cache de iframes BI pré-carregados
const biFrameCache = {};

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
    const previewHtml = proj.thumbnail ? `
      <div class="card-preview">
        <img src="${proj.thumbnail}" alt="${currentLang === 'pt' ? proj.title_pt : proj.title_en}" loading="lazy">
      </div>` : '';

    card.innerHTML = `
      ${previewHtml}
      <div class="card-content">
        <div class="card-icon">${proj.icon || '📁'}</div>
        <h4 class="card-title">${currentLang === 'pt' ? proj.title_pt : proj.title_en}</h4>
        <p class="card-desc">${currentLang === 'pt' ? proj.desc_pt : proj.desc_en}</p>
        <div class="card-actions">
          <button class="btn btn-primary btn-view" data-id="${proj.id}">${translations[currentLang].btn_view}</button>
        </div>
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
const modalContent = modal ? modal.querySelector('.modal-content') : null;
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
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) modalContent.classList.toggle('bi-embed', proj.category === 'bi');


  if (mode === 'view') {
    if (proj.category === 'bi') {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';

      const loader = document.createElement('div');
      loader.className = 'bi-loader';
      loader.innerHTML = '<div class="bi-loader-spinner"></div><p>Carregando relatório...</p>';
      wrapper.appendChild(loader);

      // Reusa iframe pré-carregado se disponível
      const cached = biFrameCache[proj.id];
      const iframe = cached || document.createElement('iframe');
      if (!cached) {
        iframe.src = proj.embedUrl;
        iframe.allow = 'fullscreen';
      }
      iframe.title = currentLang === 'pt' ? proj.title_pt : proj.title_en;
      iframe.style.cssText = 'width:100%;aspect-ratio:16/9;height:auto;max-height:78vh;display:block;';

      iframe.addEventListener('load', () => loader.classList.add('hidden'), { once: true });
      if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
        loader.classList.add('hidden');
      }

      wrapper.appendChild(iframe);
      modalBody.appendChild(wrapper);
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
    }
  } else {
    // Mode code / details
    const pre = document.createElement('pre');
    pre.className = 'workflow-viewer';
    pre.textContent = proj.embedCode;
    modalBody.appendChild(pre);
  }

  // Gerenciar visibilidade das ações
  copyBtn.style.display = proj.embedCode ? 'inline-block' : 'none';
  openNew.style.display = proj.embedUrl ? 'inline-block' : 'none';

  if (proj.embedUrl) openNew.href = proj.embedUrl;

  copyBtn.onclick = () => {
    if (proj.embedCode) {
      navigator.clipboard.writeText(proj.embedCode);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = currentLang === 'pt' ? 'Copiado!' : 'Copied!';
      setTimeout(() => copyBtn.textContent = originalText, 2000);
    }
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
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

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

  // --- KPI Count-Up Animation ---
  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerHTML = end + (obj.dataset.target === '99' ? '%' : '+');
      }
    };
    window.requestAnimationFrame(step);
  };

  const kpiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateValue(entry.target, 0, target, 2000);
        kpiObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.kpi-num').forEach(num => kpiObserver.observe(num));

  // Pré-carrega iframes de BI em background após 4s
  setTimeout(() => {
    projects.filter(p => p.category === 'bi' && p.embedUrl).forEach(proj => {
      if (biFrameCache[proj.id]) return;
      const iframe = document.createElement('iframe');
      iframe.src = proj.embedUrl;
      iframe.allow = 'fullscreen';
      iframe.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;';
      document.body.appendChild(iframe);
      biFrameCache[proj.id] = iframe;
    });
  }, 4000);

  // Iniciar interações da Landing Page se os elementos existirem
  initLandingInteractions();

  // --- Carousel Logic ---
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(container => {
    const grid = container.querySelector('.projects-grid');
    const nextBtn = container.querySelector('.carousel-btn.next');
    const prevBtn = container.querySelector('.carousel-btn.prev');

    if (!grid || !nextBtn || !prevBtn) return;

    const scrollAmount = 900; // Ajustado para a largura otimizada do card de BI

    nextBtn.addEventListener('click', () => {
      grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Opcional: Ocultar/Mostrar botões baseado no scroll
    grid.addEventListener('scroll', () => {
      const isAtStart = grid.scrollLeft <= 0;
      const isAtEnd = grid.scrollLeft + grid.offsetWidth >= grid.scrollWidth - 10;

      prevBtn.style.opacity = isAtStart ? '0' : '1';
      prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';

      nextBtn.style.opacity = isAtEnd ? '0' : '1';
      nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
    });

    // Trigger scroll event to init button states
    grid.dispatchEvent(new Event('scroll'));
  });
});


// --- Interações da Landing Page ---

// --- Rastreamento Inteligente (n8n Automation) ---

const WEBHOOK_URL = 'https://seu-n8n.webhook.com/rastreamento'; // SUBSTITUA PELA SUA URL DO n8n

async function getVisitorContext() {
  let location = { city: 'Desconhecido', region: 'Desconhecido', country: 'Desconhecido' };

  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    location = { city: data.city, region: data.region, country: data.country_name };
  } catch (e) { console.warn('Erro ao obter localização:', e); }

  const referrer = document.referrer;
  let source = 'direto';
  if (referrer.includes('instagram.com')) source = 'instagram';
  else if (referrer.includes('linkedin.com')) source = 'linkedin';
  else if (referrer) source = referrer;

  return {
    source,
    location,
    device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    browser: navigator.userAgent,
    resolution: `${window.screen.width}x${window.screen.height}`,
    timestamp: new Date().toISOString()
  };
}

async function trackEvent(eventName) {
  const context = await getVisitorContext();
  const payload = { event: eventName, ...context };

  console.log(`[Tracking] ${eventName}:`, payload); // Log para debug

  try {
    fetch(WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
      keepalive: true
    });
  } catch (e) { console.error('Erro no rastreamento:', e); }
}

function initLandingInteractions() {
  const tiltCard = $('#tilt-card');
  const mouseGlow = $('#mouse-glow');

  // 1. Mouse Glow Tracking
  if (mouseGlow) {
    window.addEventListener('mousemove', (e) => {
      mouseGlow.style.left = `${e.clientX}px`;
      mouseGlow.style.top = `${e.clientY}px`;
    });
  }

  // 2. 3D Tilt Effect
  if (tiltCard) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      tiltCard.style.transform = `rotateX(${(y - rect.height / 2) / 10}deg) rotateY(${(rect.width / 2 - x) / 10}deg)`;
    });
    tiltCard.addEventListener('mouseleave', () => tiltCard.style.transform = `rotateX(0deg) rotateY(0deg)`);
  }

  // 3. Webhook: Page View (Landing)
  if (document.body.classList.contains('landing-body')) {
    trackEvent('view_landing');
  }

  // 4. Webhook: Button Clicks
  const portfolioBtn = $('a[href="portfolio.html"]');
  const resumeBtn = $('a[href="curriculo.html"]');

  if (portfolioBtn) portfolioBtn.addEventListener('click', () => trackEvent('click_portfolio'));
  if (resumeBtn) resumeBtn.addEventListener('click', () => trackEvent('click_resume'));
}

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
