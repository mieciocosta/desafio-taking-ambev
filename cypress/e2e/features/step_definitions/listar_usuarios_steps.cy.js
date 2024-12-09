import { LoginPage } from '../../../pages/LoginPage';
import { ListarUsuariosPage } from '../../../pages/ListarUsuariosPage';
import credentials from '../../../fixtures/credentials.json';

const loginPage = new LoginPage();
const listarUsuariosPage = new ListarUsuariosPage();

Given('que estou logado como {string}', (perfil) => {
  const credenciais = credentials[perfil];
  if (!credenciais) {
    throw new Error(
      `Perfil "${perfil}" não encontrado no arquivo credentials.json`
    );
  }
  cy.visit('/');
  loginPage.preencherEmail(credenciais.email);
  loginPage.preencherSenha(credenciais.password);
  loginPage.clicarEntrar();
  loginPage.verificarLogoutVisivel();
});

When('acesso a página de lista de usuários', () => {
  listarUsuariosPage.acessarPaginaListarUsuarios();
});

Then('devo ver o título correto da página', () => {
  listarUsuariosPage.validarTitulo();
});

Then('devo ver todas as colunas presentes na tabela', () => {
  listarUsuariosPage.validarColunas();
});
