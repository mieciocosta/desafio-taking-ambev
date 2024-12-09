import { CadastroProdutoPage } from '../../../pages/CadastroProdutoPage';

const cadastroProdutoPage = new CadastroProdutoPage();

// Função para gerar nomes únicos
function gerarNomeUnico() {
  const timestamp = Date.now();
  return `Produto_${timestamp}`;
}

Given(
  'que estou logado como {string} e na página de cadastro de produtos',
  (perfil) => {
    cy.visit('/');
    cy.login(perfil); // Login reutilizável
    cadastroProdutoPage.acessarPaginaDeCadastro();
    cadastroProdutoPage.validarTituloCadastro();
  }
);

When(
  'preencho o formulário de cadastro com nome {string}, valor {string}, descrição {string}, quantidade {string} e imagem {string}',
  (nome, valor, descricao, quantidade, imagem) => {
    cadastroProdutoPage.preencherFormulario(
      nome,
      valor,
      descricao,
      quantidade,
      imagem
    );
  }
);

When(
  'preencho o formulário de cadastro com nome único, valor {string}, descrição {string}, quantidade {string} e imagem {string}',
  (valor, descricao, quantidade, imagem) => {
    const nomeUnico = gerarNomeUnico();
    cadastroProdutoPage.preencherFormulario(
      nomeUnico,
      valor,
      descricao,
      quantidade,
      imagem
    );
  }
);

When('clico no botão de cadastrar produto', () => {
  cadastroProdutoPage.clicarCadastrar();
});

Then('devo ser redirecionado para a lista de produtos', () => {
  cadastroProdutoPage.validarRedirecionamentoParaLista();
});

Then('devo ver uma mensagem de erro indicando nome duplicado', () => {
  cadastroProdutoPage.validarMensagemDeErroMesmoCadastro();
});
