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
  assert.equal(alphaProject.title_pt, 'Overview Comercial e Ligações');
  assert.equal(alphaProject.title_en, 'Commercial and Calls Overview');
  assert.equal(alphaProject.thumbnail, 'assets/alpha_prec.png');
  assert.equal(
    alphaProject.embedUrl,
    'https://app.powerbi.com/view?r=eyJrIjoiYWVkMGFiNTctYWEwZS00YzM2LWIzMjQtYjk4MmQ0YTM1MzQzIiwidCI6IjMwYTc3ZWI2LTg4MWItNGU3Yi1iYzRmLTdjMmQ2MTQ4NTNkNSIsImMiOjl9&pageName=c299bb07bdf38b8be6d2'
  );
  assert.match(alphaProject.desc_pt, /valores fechados e depreciados/i);
  assert.match(alphaProject.desc_en, /closed and depreciated values/i);
});
