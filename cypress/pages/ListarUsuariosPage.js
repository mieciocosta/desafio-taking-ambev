import { ListarUsuariosLocators } from '../locators/ListarUsuariosLocators';

export class ListarUsuariosPage {
  acessarPaginaListarUsuarios() {
    cy.get(ListarUsuariosLocators.listarUsuariosMenu).click();
  }

  validarColunas() {
    cy.get(ListarUsuariosLocators.colunaNome).should('contain', 'Nome');
    cy.get(ListarUsuariosLocators.colunaEmail).should('contain', 'Email');
    cy.get(ListarUsuariosLocators.colunaSenha).should('contain', 'Senha');
    cy.get(ListarUsuariosLocators.colunaAdministrador).should(
      'contain',
      'Administrador'
    );
    cy.get(ListarUsuariosLocators.colunaAcoes).should('contain', 'Ações');
  }

  validarTitulo() {
    cy.get(ListarUsuariosLocators.titulo).should(
      'contain',
      'Lista dos usuários'
    );
  }
}
