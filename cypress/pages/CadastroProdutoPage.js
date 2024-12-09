import { CadastroProdutoLocators } from '../locators/CadastroProdutoLocators';

export class CadastroProdutoPage {
  acessarPaginaDeCadastro() {
    cy.get(CadastroProdutoLocators.menuCadastrarProdutos).click();
  }

  validarTituloCadastro() {
    cy.get(CadastroProdutoLocators.tituloCadastro).should(
      'contain',
      'Cadastro de Produtos'
    );
  }

  preencherFormulario(nome, preco, descricao, quantidade, imagem) {
    cy.get(CadastroProdutoLocators.campoNome).clear().type(nome);
    cy.get(CadastroProdutoLocators.campoValor).clear().type(preco);
    cy.get(CadastroProdutoLocators.campoDescricao).clear().type(descricao);
    cy.get(CadastroProdutoLocators.campoQuantidade).clear().type(quantidade);
    cy.get(CadastroProdutoLocators.campoImagem).attachFile(imagem);
  }

  clicarCadastrar() {
    cy.get(CadastroProdutoLocators.botaoCadastrar).click();
  }

  validarRedirecionamentoParaLista() {
    cy.get(CadastroProdutoLocators.tituloListaProdutos).should(
      'contain',
      'Lista dos Produtos'
    );
  }

  validarMensagemDeErroMesmoCadastro() {
    cy.get(CadastroProdutoLocators.mensagemErroNomeDuplicado);
  }
}
