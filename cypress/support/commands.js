Cypress.Commands.add('login', (perfil) => {
  const credentials = require('../fixtures/credentials.json')[perfil];
  if (!credentials) {
    throw new Error(
      `Perfil "${perfil}" não encontrado no arquivo credentials.json`
    );
  }

  const { email, password } = credentials;

  cy.visit('/');
  cy.get('#email').clear().type(email);
  cy.get('#password').clear().type(password);
  cy.get('.btn-primary').click();
  cy.get('[data-testid="logout"]').should('be.visible');
});
