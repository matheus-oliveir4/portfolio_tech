# Alpha Precatórios BI Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar o dashboard Alpha Precatórios como terceiro card da seção existente de Inteligência de Negócios.

**Architecture:** O projeto será incluído como mais um objeto com categoria `bi` no array `projects` de `script.js`. O renderizador, o modal, o iframe e o botão de tela cheia existentes serão reutilizados sem criar nova seção ou alterar estilos.

**Tech Stack:** HTML, CSS, JavaScript e `node:test`.

---

### Task 1: Adicionar e validar o projeto Alpha Precatórios

**Files:**
- Create: `tests/alpha-precatorios-project.test.js`
- Modify: `script.js:56-86`

- [ ] **Step 1: Escrever o teste inicialmente falho**

Criar `tests/alpha-precatorios-project.test.js`:

```javascript
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function loadProjects() {
  const scriptPath = path.join(__dirname, '..', 'script.js');
  const source = fs.readFileSync(scriptPath, 'utf8');
  const projectsSource = source.slice(0, source.indexOf('const translations'));
  const context = {};

  vm.runInNewContext(`${projectsSource}\nglobalThis.loadedProjects = projects;`, context);
  return context.loadedProjects;
}

test('includes Alpha Precatórios as the third BI project', () => {
  const biProjects = loadProjects().filter(project => project.category === 'bi');
  const alphaProject = biProjects[2];

  assert.equal(biProjects.length, 3);
  assert.equal(alphaProject.id, 'bi-dashboard-alpha-precatorios');
  assert.equal(alphaProject.title_pt, 'Dashboard de Compras — Alpha Precatórios');
  assert.equal(alphaProject.title_en, 'Purchasing Dashboard — Alpha Precatórios');
  assert.equal(alphaProject.thumbnail, 'assets/alpha_prec.png');
  assert.equal(
    alphaProject.embedUrl,
    'https://app.powerbi.com/view?r=eyJrIjoiYWVkMGFiNTctYWEwZS00YzM2LWIzMjQtYjk4MmQ0YTM1MzQzIiwidCI6IjMwYTc3ZWI2LTg4MWItNGU3Yi1iYzRmLTdjMmQ2MTQ4NTNkNSIsImMiOjl9&pageName=c299bb07bdf38b8be6d2'
  );
  assert.match(alphaProject.desc_pt, /valores fechados e depreciados/i);
  assert.match(alphaProject.desc_en, /closed and depreciated values/i);
});
```

- [ ] **Step 2: Executar o teste e confirmar a falha**

Run: `node --test tests/alpha-precatorios-project.test.js`

Expected: FAIL porque existem somente dois projetos da categoria `bi`.

- [ ] **Step 3: Adicionar a implementação mínima**

Adicionar após o objeto `bi-dashboard-02` em `script.js`:

```javascript
  },
  {
    id: 'bi-dashboard-alpha-precatorios',
    category: 'bi',
    title_pt: 'Dashboard de Compras — Alpha Precatórios',
    title_en: 'Purchasing Dashboard — Alpha Precatórios',
    desc_pt: 'Dashboard comercial de compras de precatórios desenvolvido em Power BI, com acompanhamento de valores fechados e depreciados, leads, conversões, faturamento mensal, oportunidades por entidade devedora, faixas de valor e motivos de descarte.',
    desc_en: 'Commercial Power BI dashboard for receivables purchasing, tracking closed and depreciated values, leads, conversions, monthly revenue, opportunities by debtor entity, value ranges, and discard reasons.',
    icon: '📊',
    thumbnail: 'assets/alpha_prec.png',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYWVkMGFiNTctYWEwZS00YzM2LWIzMjQtYjk4MmQ0YTM1MzQzIiwidCI6IjMwYTc3ZWI2LTg4MWItNGU3Yi1iYzRmLTdjMmQ2MTQ4NTNkNSIsImMiOjl9&pageName=c299bb07bdf38b8be6d2'
```

- [ ] **Step 4: Executar o teste e confirmar o sucesso**

Run: `node --test tests/alpha-precatorios-project.test.js`

Expected: PASS com um teste aprovado.

- [ ] **Step 5: Verificar sintaxe e escopo da alteração**

Run: `node --check script.js`

Expected: saída vazia e código de saída 0.

Run: `git diff --check -- script.js tests/alpha-precatorios-project.test.js`

Expected: saída vazia.

- [ ] **Step 6: Commitar somente os arquivos da implementação**

```powershell
git add -- script.js tests/alpha-precatorios-project.test.js assets/alpha_prec.png
git commit -m "feat: add Alpha Precatorios BI project"
```
