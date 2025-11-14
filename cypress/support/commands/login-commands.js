Cypress.Commands.add("loginUI", (user, pass) => {
  cy.get("#user").type(user);
  cy.get("#pass").type(pass);
  cy.get("button[type='submit']").click();
});
