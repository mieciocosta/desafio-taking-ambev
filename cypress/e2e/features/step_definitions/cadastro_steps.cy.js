import { LoginPage } from '../../../pages/LoginPage';
import { CadastroPage } from '../../../pages/CadastroPage';

const loginPage = new LoginPage();
const cadastroPage = new CadastroPage();

function gerarEmailUnico() {
  const timestamp = Date.now();
  return `user${timestamp}@example.com`;
}

function gerarNomeUnico() {
  const timestamp = Date.now();
  return `User${timestamp}`;
}

Given('que estou logado no sistema', () => {
  cy.visit('/');
  loginPage.preencherEmail('miecio.costa2@gmail.com');
  loginPage.preencherSenha('123');
  loginPage.clicarEntrar();
  cy.get('[data-testid="logout"]').should('be.visible');
});

When('acesso a página de cadastro de usuários', () => {
  cadastroPage.acessarPaginaDeCadastro();
});

When('preencho o formulário com dados únicos', () => {
  const nomeUnico = gerarNomeUnico();
  const emailUnico = gerarEmailUnico();
  cadastroPage.preencherFormularioCadastro(
    nomeUnico,
    emailUnico,
    'senha123',
    false
  );
});

When(
  'preencho o formulário com nome {string}, email {string}, senha {string} e admin {string}',
  (nome, email, senha, isAdmin) => {
    cadastroPage.preencherFormularioCadastro(
      nome,
      email,
      senha,
      isAdmin === 'true'
    );
  }
);

When('preencho o formulário com dados únicos para administrador', () => {
  const nomeUnico = gerarNomeUnico();
  const emailUnico = gerarEmailUnico();
  cadastroPage.preencherFormularioCadastro(
    nomeUnico,
    emailUnico,
    'senhaAdmin',
    true
  );
});

And('submeto o formulário de cadastro', () => {
  cadastroPage.enviarCadastro();
});

Then('devo ser redirecionado para a lista de usuários', () => {
  cadastroPage.validarRedirecionamentoParaListaUsuarios();
});

Then(
  'devo ver uma mensagem de erro informando que o email já está sendo usado',
  () => {
    cadastroPage.validarMensagemDeErro('Este email já está sendo usado');
  }
);
