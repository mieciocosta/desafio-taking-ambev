Feature: Cadastro de Produtos

Scenario: Cadastro de produto com sucesso
  Given que estou logado como "admin" e na página de cadastro de produtos
  When preencho o formulário de cadastro com nome único, valor "100.00", descrição "Descrição do Produto", quantidade "10" e imagem "utils/1.png"
  And clico no botão de cadastrar produto
  Then devo ser redirecionado para a lista de produtos

Scenario: Cadastro de produto com nome duplicado
  Given que estou logado como "admin" e na página de cadastro de produtos
  When preencho o formulário de cadastro com nome "Produto Teste", valor "100.00", descrição "Descrição do Produto", quantidade "10" e imagem "utils/1.png"
  And clico no botão de cadastrar produto
  Then devo ver uma mensagem de erro indicando nome duplicado
