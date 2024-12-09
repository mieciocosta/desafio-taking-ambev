import { ListarProdutosLocators } from '../locators/ListarProdutosLocators';

export class ListarProdutosPage {
  acessarPaginaListarProdutos() {
    cy.get(ListarProdutosLocators.menuListarProdutos).click();
  }

  validarTituloListaProdutos() {
    cy.get(ListarProdutosLocators.tituloListaProdutos).should(
      'contain',
      'Lista dos Produtos'
    );
  }

  validarColunasDaTabela() {
    cy.get(ListarProdutosLocators.colunaNome).should('be.visible');
    cy.get(ListarProdutosLocators.colunaPreco).should('be.visible');
    cy.get(ListarProdutosLocators.colunaDescricao).should('be.visible');
    cy.get(ListarProdutosLocators.colunaQuantidade).should('be.visible');
    cy.get(ListarProdutosLocators.colunaImagem).should('be.visible');
    cy.get(ListarProdutosLocators.colunaAcoes).should('be.visible');
  }
}
