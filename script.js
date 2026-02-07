const projects = [
  {
    id: 'n8n-pulse-energy',
    category: 'n8n',
    title: 'Ecosistema de Automação — Pulse Energy',
    desc: 'Solução robusta que automatiza o ciclo completo de contratação: gera documentos PF/PJ, organiza governança no Dropbox e alimenta banco de dados para métricas em Power BI.',
    icon: '⚡',
    imageUrl: 'assets/pulse-energy.png',
    flow: [
      { name: 'Webhook Lead', type: 'trigger' },
      { name: 'Triagem PF/PJ', type: 'logic' },
      { name: 'Geração de Docs', type: 'action' },
      { name: 'Cloud Storage (Dropbox)', type: 'action' },
      { name: 'Notificação Responsável', type: 'action' },
      { name: 'Ingestão Banco de Dados', type: 'action' }
    ],
    embedCode: `{ "actions": ["Contract", "POA", "Dropbox", "SQL Ingestion"], "analytics": "Power BI Integrated" }`
  },
  {
    id: 'n8n-pulse',
    category: 'n8n',
    title: 'Automação de Contratos — Pulse Facility',
    desc: 'Sistema end-to-end que automatiza a geração de contratos jurídicos via Webhook, reduzindo o tempo de entrega de dias para segundos e garantindo padronização total.',
    icon: '📄',
    imageUrl: 'assets/pulse-flow.png', // User will need to place the image here
    flow: [
      { name: 'Webhook Lead', type: 'trigger' },
      { name: 'Copiando Modelo', type: 'action' },
      { name: 'Inserindo Dados', type: 'action' },
      { name: 'Geração PDF/Word', type: 'action' },
      { name: 'Envio por Email', type: 'action' }
    ],
    embedCode: `{ "steps": ["Webhook", "Template Copy", "Doc Generation", "Email Dispatch"], "status": "In Production" }`
  }
];

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

  projects.forEach(proj => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-icon">${proj.icon || '📁'}</div>
      <h4 class="card-title">${proj.title}</h4>
      <p class="card-desc">${proj.desc}</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-view" data-id="${proj.id}">Visualizar</button>
        <button class="btn btn-secondary btn-code" data-id="${proj.id}">Detalhes Técnicos</button>
      </div>
    `;

    if (proj.category === 'bi' && biContainer) biContainer.appendChild(card);
    else if (proj.category === 'n8n' && n8nContainer) n8nContainer.appendChild(card);
  });

  // Event Listeners
  $$('.btn-view').forEach(btn => btn.addEventListener('click', (e) => openProjectModal(e.target.dataset.id, 'view')));
  $$('.btn-code').forEach(btn => btn.addEventListener('click', (e) => openProjectModal(e.target.dataset.id, 'code')));
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

  modalTitle.textContent = proj.title;
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
      if (proj.imageUrl) {
        const img = document.createElement('img');
        img.src = proj.imageUrl;
        img.alt = proj.title;
        img.style.width = '100%';
        img.style.borderRadius = '8px';
        img.style.border = '1px solid var(--card-border)';
        img.style.marginBottom = '1.5rem';
        img.onerror = function () { this.style.display = 'none'; }; // Hide if image fails to load
        modalBody.appendChild(img);
      }
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
    nodeEl.innerHTML = `<strong>${node.name}</strong><br><small style="color:var(--slate-light)">${node.type}</small>`;

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
  $('#year').textContent = new Date().getFullYear();

  // Reveal logic for confidential tags
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blurred')) {
      e.target.classList.remove('blurred');
      e.target.classList.add('revealed');
    }
  });
});
