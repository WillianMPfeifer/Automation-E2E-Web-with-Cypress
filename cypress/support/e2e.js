import './commands/login-commands';

Cypress.on("uncaught:exception", () => false);


before(() => {
  cy.log("🔧 Iniciando suíte de testes");
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

after(() => {
  cy.log("✅ Suíte de testes finalizada");
});