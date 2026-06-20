# Alpha Precatórios Analytical Description Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir a descrição em português do projeto Alpha Precatórios por uma análise clara dos painéis comercial e de ligações.

**Architecture:** A alteração ficará restrita ao campo `desc_pt` do objeto `bi-dashboard-alpha-precatorios` em `script.js`. O teste existente validará que a descrição cobre os principais grupos de indicadores apresentados nos dois visuais.

**Tech Stack:** JavaScript e `node:test`.

---

### Task 1: Atualizar a descrição analítica em português

**Files:**
- Modify: `tests/alpha-precatorios-project.test.js:31`
- Modify: `script.js:84`

- [ ] **Step 1: Atualizar o teste para exigir a descrição completa**

Substituir a asserção atual sobre `desc_pt` por:

```javascript
  assert.match(alphaProject.desc_pt, /valor e quantidade de fechamentos/i);
  assert.match(alphaProject.desc_pt, /período anterior/i);
  assert.match(alphaProject.desc_pt, /funil completo/i);
  assert.match(alphaProject.desc_pt, /evolução mensal do faturamento/i);
  assert.match(alphaProject.desc_pt, /motivos de descarte/i);
  assert.match(alphaProject.desc_pt, /ligações realizadas, atendidas e conectadas/i);
  assert.match(alphaProject.desc_pt, /desempenho individual dos agentes/i);
  assert.match(alphaProject.desc_pt, /faixa horária/i);
```

- [ ] **Step 2: Executar o teste e confirmar a falha**

Run: `node --test tests/alpha-precatorios-project.test.js`

Expected: FAIL porque a descrição atual não contém os indicadores do painel de ligações.

- [ ] **Step 3: Substituir somente `desc_pt`**

Usar o texto:

```javascript
    desc_pt: 'Dashboard integrado de desempenho comercial e ligações desenvolvido em Power BI. A visão de compras acompanha valor e quantidade de fechamentos, ticket médio, valores e volume de oportunidades depreciadas, total de leads, taxas de conversão e variações em relação ao período anterior. Apresenta o funil completo — entrada do lead, filtro de IA, validação, conexão, proposta e fechamento —, evolução mensal do faturamento, oportunidades por entidade devedora, fechamentos por faixa de valor e comprador, além dos principais motivos de descarte. A visão de ligações monitora chamadas realizadas, atendidas e conectadas, leads únicos, média de ligações por contato, tempo em linha e duração média, comparando a minutagem e o desempenho individual dos agentes com suas metas. Também permite analisar o volume por dia e faixa horária, segmentado entre ligações, atendimentos, conexões superiores a 40 segundos e chamadas perdidas, com filtros por período, agente e direção da chamada.',
```

- [ ] **Step 4: Executar as verificações**

Run: `node --test tests/alpha-precatorios-project.test.js`

Expected: PASS com um teste aprovado.

Run: `node --check script.js`

Expected: código de saída 0.

Run: `git diff --check -- script.js tests/alpha-precatorios-project.test.js`

Expected: saída vazia.

- [ ] **Step 5: Commitar a alteração**

```powershell
git add -- script.js tests/alpha-precatorios-project.test.js docs/superpowers/plans/2026-06-20-alpha-precatorios-analytical-description.md
git commit -m "content: expand Alpha Precatorios project description"
```
