### **README**

---

# **Desafio Cypress - Testes Automatizados**

Este projeto é uma automação de testes end-to-end utilizando o **Cypress**. Ele cobre fluxos de login, cadastro de usuários, cadastro de produtos, e listagem de usuários e produtos em um sistema de administração.

---

## **Instalação**

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd desafio-taking-ambev
   ```

2. **Instale as dependências**:
   Certifique-se de que você tem o Node.js instalado. Então, execute:
   ```bash
   npm install
   ```

3. **Inicie o Cypress**:
   ```bash
   npx cypress open
   ```

---

## **Estrutura do Projeto**

Abaixo está a descrição de cada diretório e arquivo do projeto:

### **Raiz do Projeto**
- **package.json**: Contém as dependências do projeto e scripts de execução.
- **.git/**: Diretório de controle de versão Git.
- **cypress.json**: Configurações globais do Cypress (opcional dependendo da versão).

---

### **Diretório: `cypress/`**
Contém os principais arquivos e pastas do projeto.

#### **1. `cypress/e2e/`**
- **features/**: Arquivos `.feature` que utilizam a sintaxe Gherkin para descrever cenários de teste.
  - **`cadastro.feature`**: Testes de cadastro de usuários.
  - **`cadastro_produto.feature`**: Testes de cadastro de produtos.
  - **`listar_produtos.feature`**: Testes de listagem de produtos.
  - **`listar_usuarios.feature`**: Testes de listagem de usuários.
  - **`login.feature`**: Testes de login.

- **step_definitions/**: Implementação dos passos descritos nas features.
  - **`cadastro_steps.cy.js`**: Steps para o cadastro de usuários.
  - **`cadastro_produto_steps.cy.js`**: Steps para o cadastro de produtos.
  - **`listar_produtos_steps.cy.js`**: Steps para a listagem de produtos.
  - **`listar_usuarios_steps.cy.js`**: Steps para a listagem de usuários.
  - **`login_steps.cy.js`**: Steps para o login.

---

#### **2. `cypress/fixtures/`**
Contém dados estáticos e recursos utilizados nos testes.
- **`credentials.json`**: Armazena credenciais de usuários para diferentes perfis (ex.: admin, user).
- **`utils/1.png`**: Imagem usada para teste de upload de arquivos.

---

#### **3. `cypress/locators/`**
Define os seletores para os elementos das páginas, centralizando-os para reutilização.
- **`CadastroLocators.js`**: Seletores relacionados ao cadastro de usuários.
- **`CadastroProdutoLocators.js`**: Seletores relacionados ao cadastro de produtos.
- **`ListarProdutosLocators.js`**: Seletores relacionados à listagem de produtos.
- **`ListarUsuariosLocators.js`**: Seletores relacionados à listagem de usuários.
- **`LoginLocators.js`**: Seletores relacionados ao login.

---

#### **4. `cypress/pages/`**
Implementa a lógica das páginas para encapsular interações com os elementos.
- **`CadastroPage.js`**: Lógica para o fluxo de cadastro de usuários.
- **`CadastroProdutoPage.js`**: Lógica para o fluxo de cadastro de produtos.
- **`ListarProdutosPage.js`**: Lógica para a listagem de produtos.
- **`ListarUsuariosPage.js`**: Lógica para a listagem de usuários.
- **`LoginPage.js`**: Lógica para o fluxo de login.

---

#### **5. `cypress/plugins/`**
- **`index.js`**: Configurações de plugins do Cypress.

---

#### **6. `cypress/support/`**
- **`commands.js`**: Contém comandos customizados para simplificar testes (ex.: `cy.login()`).
- **`e2e.js`**: Configurações globais para os testes.

---

## **Como Rodar os Testes**

### **Modo Interativo**
1. Execute o comando:
   ```bash
   npx cypress open
   ```
2. Escolha o arquivo de feature ou spec para rodar os testes.

---

### **Modo Headless**
Para executar os testes sem interface gráfica:
```bash
npx cypress run
```

---

## **Fluxos Automatizados**

1. **Login**:
   - Teste de login com credenciais válidas e inválidas.
   - Caso o login falhe devido a credenciais inexistentes, o sistema redireciona para o cadastro de um novo administrador.

2. **Cadastro de Usuários**:
   - Cadastro de usuários com dados únicos.
   - Validações de campos obrigatórios e mensagens de erro.

3. **Cadastro de Produtos**:
   - Cadastro de produtos com dados únicos.
   - Validação de nomes duplicados e mensagens de erro.

4. **Listagem de Usuários e Produtos**:
   - Valida presença de colunas esperadas e título correto.

---

## **Contribuições**

- **Adicionar Novos Cenários**: Utilize o formato Gherkin nos arquivos `.feature`.
- **Definir Locators**: Centralize os seletores nos arquivos em `cypress/locators/`.
- **Criar Steps**: Implemente os passos em `step_definitions`.

---


### **Contato**
Para dúvidas ou suporte, entre em contato com **miecio.costa@gmail.com**.

🚀 **Bons Testes!**