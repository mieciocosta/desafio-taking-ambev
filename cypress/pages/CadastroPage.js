import { CadastroLocators } from '../locators/CadastroLocators';

export class CadastroPage {
  acessarPaginaDeCadastro() {
    cy.get(CadastroLocators.cadastrarUsuariosButton).click();
  }

  preencherFormularioCadastro(nome, email, senha, isAdmin = false) {
    cy.get(CadastroLocators.nomeInput).clear().type(nome);
    cy.get(CadastroLocators.emailInput).clear().type(email);
    cy.get(CadastroLocators.senhaInput).clear().type(senha);

    if (isAdmin) {
      cy.get(CadastroLocators.adminCheckbox).check();
    }
  }

  enviarCadastro() {
    cy.get(CadastroLocators.cadastrarButton).click();
  }

  validarRedirecionamentoParaListaUsuarios() {
    cy.get(CadastroLocators.listaUsuariosHeading).should(
      'contain',
      'Lista dos usuários'
    );
  }

  validarMensagemDeErro(mensagem) {
    cy.get(CadastroLocators.alertaErro).should('contain', mensagem);
  }
}
