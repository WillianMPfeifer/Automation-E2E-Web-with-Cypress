import {given, when, then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../page-objects/login';

const loginPage = new LoginPage();

given('o usuário está na página de login', () => {
  cy.visit('/login');
});

when('ele insere um nome de usuário válido "{string}"', (username) => {
  loginPage.enterUsername(username);
});

when('ele insere uma senha válida "{string}"', (password) => {
  loginPage.enterPassword(password);
});

when('ele clica no botão de login', () => {
  loginPage.clickLoginButton();
});

then('ele deve ser redirecionado para a página inicial', () => {
  cy.url().should('include', '/home');
});

then('ele deve ver uma mensagem de boas-vindas "{string}"', (message) => {
  loginPage.getWelcomeMessage().should('contain', message);
});

then('ele deve ver uma mensagem de erro "{string}"', (message) => {
  loginPage.getErrorMessage().should('contain', message);
});