import { LoginElements } from "../../elements/login/login-elements";

class LoginPage {
  enterUsername(username) {
    cy.get(LoginElements.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(LoginElements.passwordInput).type(password);
  }

  clickLoginButton() {
    cy.get(LoginElements.loginButton).click();
  }

  getWelcomeMessage() {
    return cy.get(LoginElements.welcomeMessage);
  }

  getErrorMessage() {
    return cy.get(LoginElements.errorMessage);
  }
}

export default LoginPage;