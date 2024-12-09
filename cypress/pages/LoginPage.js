import { LoginLocators } from '../locators/LoginLocators';

export class LoginPage {
  preencherEmail(email) {
    cy.get(LoginLocators.emailInput).clear().type(email);
  }

  preencherSenha(senha) {
    cy.get(LoginLocators.passwordInput).clear().type(senha);
  }

  clicarEntrar() {
    cy.get(LoginLocators.loginButton).click();
  }

  verificarLogoutVisivel() {
    cy.get(LoginLocators.logoutButton).should('be.visible');
  }
}
