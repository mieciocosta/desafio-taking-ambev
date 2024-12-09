Feature: Login no sistema

Scenario: Login com credenciais válidas de admin
  Given que estou na página de login
  When preencho as credenciais do perfil "admin"
  And clico no botão de entrar
  Then devo ver o botão de logout visível

Scenario: Login com credenciais válidas de usuário padrão
  Given que estou na página de login
  When preencho as credenciais do perfil "user"
  And clico no botão de entrar
  Then devo ver o botão de logout visível
