import { LoginPage } from '../../../pages/LoginPage';
import { ListarProdutosPage } from '../../../pages/ListarProdutosPage';
import credentials from '../../../fixtures/credentials.json';

const loginPage = new LoginPage();
const listarProdutosPage = new ListarProdutosPage();

Given(
  'que estou logado como {string} e na página de listar produtos',
  (perfil) => {
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
    listarProdutosPage.acessarPaginaListarProdutos();
  }
);

Then('devo ver o título correto da página de produtos', () => {
  listarProdutosPage.validarTituloListaProdutos();
});

Then('devo ver todas as colunas presentes na tabela de produtos', () => {
  listarProdutosPage.validarColunasDaTabela();
});
