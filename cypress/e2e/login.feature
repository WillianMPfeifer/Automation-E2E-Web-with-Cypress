# language: pt
Funcionalidade: Login no sistema
    Como um usuário registrado
    Eu quero fazer login no sistema
    Para acessar minhas funcionalidades personalizadas

    Cenário: Login com credenciais válidas
        Dado que o usuário está na página de login
        Quando ele insere um nome de usuário válido "usuario_teste"
        E insere uma senha válida "senha_segura"
        E clica no botão de login
        Então ele deve ser redirecionado para a página inicial
        E deve ver uma mensagem de boas-vindas "Bem-vindo, usuario_teste!"
    
    Cenario: Login com credenciais inválidas
        Dado que o usuário está na página de login
        Quando ele insere um nome de usuário inválido "usuario_invalido"
        E insere uma senha inválida "senha_errada"
        E clica no botão de login
        Então ele deve ver uma mensagem de erro "Nome de usuário ou senha incorretos."