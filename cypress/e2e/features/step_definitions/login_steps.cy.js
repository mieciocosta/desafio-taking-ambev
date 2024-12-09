import { LoginPage } from '../../../pages/LoginPage';
import credentials from '../../../fixtures/credentials.json';

const loginPage = new LoginPage();

Given('que estou na página de login', () => {
  cy.visit('/');
});

When('preencho as credenciais do perfil {string}', (perfil) => {
  const credenciais = credentials[perfil];
  if (!credenciais) {
    throw new Error(
      `Perfil "${perfil}" não encontrado no arquivo credentials.json`
    );
  }
  loginPage.preencherEmail(credenciais.email);
  loginPage.preencherSenha(credenciais.password);
});

When('clico no botão de entrar', () => {
  loginPage.clicarEntrar();
});

Then('devo ver o botão de logout visível', () => {
  loginPage.verificarLogoutVisivel();
});

Then('devo ver uma mensagem de erro de autenticação', () => {
  cy.get(LoginLocators.alertMessage).should(
    'contain',
    'Email e/ou senha inválidos'
  );
});
