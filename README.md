# Cypress BDD Template (JavaScript)

Um template profissional para automação de testes **E2E** utilizando **Cypress**, **Cucumber**, **BDD** e arquitetura desacoplada baseada em **Page Objects**, **Elements**, **Steps**, **Commands** e **APIs**.

Este projeto foi criado para servir como base reutilizável, escalável e padronizada para diversos projetos de automação.

---

## 📁 Estrutura do Projeto

Abaixo está a arquitetura real deste template:

```
cypress-bdd-arquiteture
│   .cypress-cucumber-preprocesorrc.json
│   cypress.config.js
│   package.json
│   README.md
│
└───cypress
    ├───downloads
    ├───e2e
    │       login.feature
    │
    ├───reports
    │       .gitkeep
    │
    ├───screenshots
    │       .gitkeep
    │
    ├───support
    │   │   e2e.js
    │   │
    │   ├───api
    │   │       auth-api.js
    │   │
    │   ├───commands
    │   │       login-commands.js
    │   │
    │   ├───elements
    │   │       login-elements.js
    │   │
    │   ├───fixtures
    │   ├───page-objects
    │   │       login.js
    │   │
    │   ├───steps
    │   │       login.js
    │   │
    │   └───utils
    └───videos
            .gitkeep
```

---

## 🧱 Filosofia da Arquitetura

A arquitetura foi construída garantindo:

* Separação clara de responsabilidades (SRP)
* Reuso de código
* Manutenção facilitada
* Escalabilidade
* Padronização de nomeação e organização

### 🔹 **Elements**

Armazena apenas seletores CSS/XPath.

### 🔹 **Page Objects**

Contém ações e comportamentos da página.

### 🔹 **Steps**

Traduzem steps Gherkin em chamadas dos métodos do Page Object.

### 🔹 **Commands**

Funções globais reutilizáveis pelo projeto.

### 🔹 **API**

Chamadas REST para autenticação, pré-condições e criação de massa.

---

## 🚀 Começando

### 1️⃣ Instale as dependências

```bash
npm install
```

### 2️⃣ Abra o Cypress

```bash
npm run cypress:open
```

### 3️⃣ Execute em modo headless

```bash
npm run cypress:run
```

---

## 🧩 BDD + Cucumber

O projeto utiliza o pacote:

```
@badeball/cypress-cucumber-preprocessor
```

E permite criar cenários no formato:

```gherkin
Feature: Login do usuário
  Scenario: Login válido
    Given que o usuário acessa a tela de login
    When ele preenche usuário e senha válidos
    Then deve ser autenticado com sucesso
```

---

## 📘 Estrutura de Pastas Explicada

### `/cypress/e2e`

Onde ficam os arquivos `.feature`.

### `/support/elements`

Seletores CSS organizados por página.

### `/support/page-objects`

Ações de cada página (clicar, digitar, validar...).

### `/support/steps`

Implementação dos steps BDD.

### `/support/commands`

Comandos Cypress customizados.

### `/support/api`

Responsável por requisições REST.

### `/screenshots` / `/videos` / `/reports`

Diretórios de artefatos automáticos.

---

## 🏗️ Scripts configurados

No `package.json` temos:

```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

Podendo ser estendido para CI/CD futuramente.

---

## 🧪 Boas Práticas do Projeto

✔ Evitar `wait` estático
✔ Usar CSS selectors
✔ Centralizar selectors (DRY)
✔ Steps limpos e simples
✔ Page objects com responsabilidade única
✔ Testes seguindo padrão Gherkin

---

## 🤝 Autor

**Willian Pfeifer (@WillianMP)**

Projeto criado como template reutilizável e moderno para automação de testes com Cypress + BDD. Se quiser evoluir ainda mais este template, posso te ajudar a criar as próximas partes!
