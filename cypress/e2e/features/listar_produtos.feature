Feature: Listar Produtos

Scenario: Visualizar a lista de produtos
  Given que estou logado como "admin" e na página de listar produtos
  Then devo ver o título correto da página de produtos
  And devo ver todas as colunas presentes na tabela de produtos
