# Projeto BI Alpha Precatórios

## Objetivo

Adicionar o dashboard da Alpha Precatórios como terceiro projeto da seção existente de Inteligência de Negócios, mantendo o mesmo padrão visual e funcional dos dois projetos atuais.

## Escopo

- Adicionar um novo objeto à lista `projects` em `script.js`.
- Usar a categoria `bi`, para renderização automática no contêiner `#bi-list`.
- Exibir `assets/alpha_prec.png` como thumbnail do card.
- Abrir o relatório público do Power BI no modal existente.
- Manter o botão de visualização em tela cheia já implementado para projetos BI.
- Fornecer título e descrição em português e inglês.

## Conteúdo

- Identificador: `bi-dashboard-alpha-precatorios`
- Título em português: `Dashboard de Compras — Alpha Precatórios`
- Título em inglês: `Purchasing Dashboard — Alpha Precatórios`
- Ícone: gráfico de barras, igual ao padrão semântico dos dashboards existentes.
- Thumbnail: `assets/alpha_prec.png`
- Relatório: `https://app.powerbi.com/view?r=eyJrIjoiYWVkMGFiNTctYWEwZS00YzM2LWIzMjQtYjk4MmQ0YTM1MzQzIiwidCI6IjMwYTc3ZWI2LTg4MWItNGU3Yi1iYzRmLTdjMmQ2MTQ4NTNkNSIsImMiOjl9&pageName=c299bb07bdf38b8be6d2`

A descrição apresentará o dashboard como uma visão comercial de compras de precatórios, destacando valores fechados e depreciados, leads, conversões, faturamento, oportunidades por entidade devedora, faixas de valor e motivos de descarte.

## Comportamento

O projeto será renderizado pelo fluxo existente. Nenhuma nova seção, componente ou regra de estilo será criada. Ao selecionar o card, o relatório será carregado no mesmo modal e iframe usados pelos outros projetos de Power BI.

## Tratamento de falhas

O comportamento existente será preservado. A disponibilidade e o carregamento do relatório dependem do link público do Power BI; durante o carregamento, o modal continuará exibindo o indicador atual.

## Verificação

- Confirmar que a seção de BI apresenta três cards.
- Confirmar que o novo card utiliza a imagem fornecida.
- Confirmar que o modal abre o relatório correto.
- Confirmar que o botão de tela cheia aponta para o mesmo relatório.
- Confirmar que a troca entre português e inglês atualiza título e descrição.
- Confirmar que nenhuma nova seção foi adicionada.
