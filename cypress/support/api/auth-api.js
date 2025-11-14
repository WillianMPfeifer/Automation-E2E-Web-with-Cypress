
class AuthAPI {
  login(username, password) {
    return cy.request("POST", "/api/login", { username, password });
  }
}

export default new AuthAPI();
