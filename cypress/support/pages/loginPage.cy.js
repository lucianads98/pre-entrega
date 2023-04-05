export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.passwordInput = '#pass';
        this.loginButton = 'Log in';
    }

    typeUser(user) {
        cy.get(this.userInput).type(user);
    };

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
    };

    clickLogin() {
        cy.contains(this.loginButton).click();
    };

    login(user, password) {
        this.typeUser(user);
        this.typePassword(password);
        this.clickLogin();
    };
};