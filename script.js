// Dados de exemplo - substitua pelos seus projetos reais.
const projects = [
  {
    id: 'pbi-1',
    type: 'powerbi',
    title: 'Dashboard Vendas Global',
    desc: 'Análise completa de vendas por região, produto e temporada com previsões.',
    embedUrl: 'https://app.powerbi.com/view?r=example1',
    embedCode: `<iframe title="Dashboard Vendas Global" width="100%" height="600" src="https://app.powerbi.com/view?r=SEU_TOKEN_AQUI" frameborder="0" allowFullScreen="true"></iframe>`
  },
  {
    id: 'pbi-2',
    type: 'powerbi',
    title: 'KPIs Financeiros',
    desc: 'Métricas financeiras, fluxo de caixa e projeções para tomada de decisão.',
    embedUrl: 'https://app.powerbi.com/view?r=example2',
    embedCode: `<iframe title="KPIs Financeiros" width="100%" height="600" src="https://app.powerbi.com/view?r=SEU_TOKEN_AQUI" frameborder="0" allowFullScreen="true"></iframe>`
  },
  {
    id: 'pbi-3',
    type: 'powerbi',
    title: 'Analytics RH',
    desc: 'Indicadores de RH, turnover, satisfação e desenvolvimento de equipe.',
    embedUrl: 'https://app.powerbi.com/view?r=example3',
    embedCode: `<iframe title="Analytics RH" width="100%" height="600" src="https://app.powerbi.com/view?r=SEU_TOKEN_AQUI" frameborder="0" allowFullScreen="true"></iframe>`
  },
  {
    id: 'pbi-4',
    type: 'powerbi',
    title: 'Performance Marketing',
    desc: 'Análise de campanhas, ROI, conversões e funil de vendas.',
    embedUrl: 'https://app.powerbi.com/view?r=example4',
    embedCode: `<iframe title="Performance Marketing" width="100%" height="600" src="https://app.powerbi.com/view?r=SEU_TOKEN_AQUI" frameborder="0" allowFullScreen="true"></iframe>`
  },
  {
    id: 'pbi-5',
    type: 'powerbi',
    title: 'Supply Chain Dashboard',
    desc: 'Gestão de estoque, logística e otimização da cadeia de suprimentos.',
    embedUrl: 'https://app.powerbi.com/view?r=example5',
    embedCode: `<iframe title="Supply Chain Dashboard" width="100%" height="600" src="https://app.powerbi.com/view?r=SEU_TOKEN_AQUI" frameborder="0" allowFullScreen="true"></iframe>`
  },
  {
    id: 'pbi-6',
    type: 'powerbi',
    title: 'Customer Success',
    desc: 'Métricas de satisfação do cliente, NPS e análise de retenção.',
    embedUrl: 'https://app.powerbi.com/view?r=example6',
    embedCode: `<iframe title="Customer Success" width="100%" height="600" src="https://app.powerbi.com/view?r=SEU_TOKEN_AQUI" frameborder="0" allowFullScreen="true"></iframe>`
  },

  // n8n Projects
  {
    id: 'n8n-1',
    type: 'n8n',
    title: 'Integração CRM-Email',
    desc: 'Automação de envio de emails baseado em eventos do CRM.',
    embedUrl: 'https://n8n.example.com/workflow/1',
    embedCode: `{
      "nodes": [
        {"name": "When CRM Updated", "type": "webhook"},
        {"name": "Send Email", "type": "email"}
      ]
    }`
  },
  {
    id: 'n8n-2',
    type: 'n8n',
    title: 'Social Media Monitor',
    desc: 'Monitoramento de menções em redes sociais com notificações.',
    embedUrl: 'https://n8n.example.com/workflow/2',
    embedCode: `{
      "nodes": [
        {"name": "Social Monitor", "type": "social-trigger"},
        {"name": "Process Data", "type": "function"}
      ]
    }`
  },
  {
    id: 'n8n-3',
    type: 'n8n',
    title: 'Backup Automático',
    desc: 'Backup automático de dados para cloud storage.',
    embedUrl: 'https://n8n.example.com/workflow/3',
    embedCode: `{
      "nodes": [
        {"name": "Schedule", "type": "cron"},
        {"name": "Backup", "type": "storage"}
      ]
    }`
  },
  {
    id: 'n8n-4',
    type: 'n8n',
    title: 'Lead Nurturing',
    desc: 'Automação de nutrição de leads com conteúdo personalizado.',
    embedUrl: 'https://n8n.example.com/workflow/4',
    embedCode: `{
      "nodes": [
        {"name": "New Lead", "type": "trigger"},
        {"name": "Content Flow", "type": "sequence"}
      ]
    }`
  },
  {
    id: 'n8n-5',
    type: 'n8n',
    title: 'API Integration Hub',
    desc: 'Hub central de integração entre múltiplas APIs.',
    embedUrl: 'https://n8n.example.com/workflow/5',
    embedCode: `{
      "nodes": [
        {"name": "API Gateway", "type": "webhook"},
        {"name": "Route Request", "type": "router"}
      ]
    }`
  },
  {
    id: 'n8n-6',
    type: 'n8n',
    title: 'Data Sync Engine',
    desc: 'Sincronização bidirecional entre sistemas internos.',
    embedUrl: 'https://n8n.example.com/workflow/6',
    embedCode: `{
      "nodes": [
        {"name": "System A Trigger", "type": "webhook"},
        {"name": "Sync Logic", "type": "function"}
      ]
    }`
  }
];

// Utilitários
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function createThumbText(title){
  // Gera iniciais para um placeholder
  const parts = title.split(' ').map(s => s[0]).slice(0,2).join('');
  return parts.toUpperCase();
}

function render() {
  const pbiContainer = $('#powerbi-list');
  const n8nContainer = $('#n8n-list');
  pbiContainer.innerHTML = '';
  n8nContainer.innerHTML = '';

  projects.forEach(proj => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="thumb" aria-hidden="true">${createThumbText(proj.title)}</div>
      <div class="card-body">
        <h4 class="card-title">${proj.title}</h4>
        <p class="card-desc">${proj.desc}</p>
        <div class="card-actions">
          <button class="btn btn-view" data-id="${proj.id}">Ver</button>
          <button class="btn btn-embed btn-secondary" data-id="${proj.id}">Código</button>
        </div>
      </div>
    `;
    if (proj.type === 'powerbi') pbiContainer.appendChild(card);
    else n8nContainer.appendChild(card);
  });

  // ligar eventos
  $$('.btn-view').forEach(btn => btn.addEventListener('click', onView));
  $$('.btn-embed').forEach(btn => btn.addEventListener('click', onEmbed));
}

function findProjectById(id){
  return projects.find(p => p.id === id);
}

// Modal
const modal = $('#preview-modal');
const modalTitle = $('#modal-title');
const modalBody = $('#modal-body');
const copyBtn = $('#copy-embed');
const openNew = $('#open-new');

function openModal() {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}
function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
  modalBody.innerHTML = '';
  modalTitle.textContent = '';
  copyBtn.dataset.embed = '';
  openNew.href = '#';
}

function onView(e){
  const id = e.currentTarget.dataset.id;
  const proj = findProjectById(id);
  if(!proj) return;
  modalTitle.textContent = proj.title;

  // Se tiver embedUrl, criamos iframe (lazy load)
  if (proj.embedUrl && proj.type === 'powerbi') {
    const iframe = document.createElement('iframe');
    iframe.src = proj.embedUrl;
    iframe.title = proj.title;
    iframe.allow = 'fullscreen';
    modalBody.appendChild(iframe);
    copyBtn.dataset.embed = proj.embedCode || '';
    openNew.href = proj.embedUrl;
    openNew.style.display = 'inline-block';
  } else if (proj.embedUrl && proj.type === 'n8n') {
    // Para n8n, abrimos um iframe se for público, senão mostramos o código
    if (proj.embedUrl.startsWith('http')) {
      const iframe = document.createElement('iframe');
      iframe.src = proj.embedUrl;
      iframe.title = proj.title;
      modalBody.appendChild(iframe);
      copyBtn.dataset.embed = proj.embedCode || '';
      openNew.href = proj.embedUrl;
      openNew.style.display = 'inline-block';
    } else {
      modalBody.textContent = proj.desc || 'Detalhes do projeto n8n.';
      copyBtn.dataset.embed = proj.embedCode || '';
      openNew.style.display = 'none';
    }
  } else {
    modalBody.innerHTML = `<pre style="white-space:pre-wrap">${proj.embedCode || 'Sem embed configurado.'}</pre>`;
    copyBtn.dataset.embed = proj.embedCode || '';
    openNew.style.display = 'none';
  }

  openModal();
}

function onEmbed(e){
  const id = e.currentTarget.dataset.id;
  const proj = findProjectById(id);
  if(!proj) return;
  modalTitle.textContent = `${proj.title} — Código de embed`;
  modalBody.innerHTML = `<pre style="white-space:pre-wrap">${proj.embedCode || 'Nenhum código de embed configurado.'}</pre>`;
  copyBtn.dataset.embed = proj.embedCode || '';
  openNew.style.display = 'none';
  openModal();
}

function copyEmbed(){
  const code = copyBtn.dataset.embed || '';
  if (!code) {
    alert('Nenhum código de embed definido para este projeto.');
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      copyBtn.textContent = 'Copiado!';
      setTimeout(()=> copyBtn.textContent = 'Copiar código de embed', 1800);
    }).catch(()=> fallbackCopy(code));
  } else {
    fallbackCopy(code);
  }
}

function fallbackCopy(text){
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    alert('Código copiado para a área de transferência.');
  } catch (err) {
    prompt('Copie manualmente:', text);
  } finally {
    document.body.removeChild(ta);
  }
}

// eventos do modal para fechar
document.addEventListener('click', (ev) => {
  const target = ev.target;
  if (target.matches('[data-close="true"]')) closeModal();
});
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

copyBtn.addEventListener('click', copyEmbed);

// inicializa
document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('year').textContent = new Date().getFullYear();
});

function openContactModal() {
  const modal = document.getElementById('contact-modal');
  modal.classList.remove('hidden');
}

// Adicione isso junto com seus outros event listeners de modal
document.querySelectorAll('#contact-modal [data-close="true"]').forEach(element => {
  element.addEventListener('click', () => {
    document.getElementById('contact-modal').classList.add('hidden');
  });
});