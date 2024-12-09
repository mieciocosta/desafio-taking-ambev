Feature: Cadastro de usuários

Scenario: Cadastro de usuário com dados únicos
  Given que estou logado como "admin"
  When acesso a página de cadastro de usuários
  And preencho o formulário com dados únicos
  And submeto o formulário de cadastro
  Then devo ser redirecionado para a lista de usuários

Scenario: Cadastro com email já existente
  Given que estou logado como "admin"
  When acesso a página de cadastro de usuários
  And preencho o formulário com nome "Usuário Existente", email "existente@example.com", senha "senha123" e admin "false"
  And submeto o formulário de cadastro
  Then devo ver uma mensagem de erro informando que o email já está sendo usado

Scenario: Cadastro de administrador
  Given que estou logado como "admin"
  When acesso a página de cadastro de usuários
  And preencho o formulário com dados únicos para administrador
  And submeto o formulário de cadastro
  Then devo ser redirecionado para a lista de usuários
