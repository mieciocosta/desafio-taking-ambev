Feature: Listar usuários

Scenario: Visualizar a lista de usuários como admin
  Given que estou logado como "admin"
  When acesso a página de lista de usuários
  Then devo ver o título correto da página
  And devo ver todas as colunas presentes na tabela
