export class HomePage {
    constructor() {
        this.ToDoListButton = '#todolistlink';
        this.AlertsButton = '#alertslink';
        this.OnlineShopButton = '#onlineshoplink';
        this.WaitsButton = '#waitslink';
        this.FormUtilsButton = '#formutilslink';
        this.FileUploadButton = '#fileuploadlink';

        
    }

    clickToDoList() {
        cy.get(this.ToDoListButton).click();
    };
    clickAlerts() {
        cy.get(this.AlertsButton).click();
    };
    clickOnlineShop() {
        cy.get(this.OnlineShopButton).click();
    };
    clickWaits() {
        cy.get(this.WaitsButton).click();
    };
    clickForUtils() {
        cy.get(this.FormUtilsButton).click();
    };
    clickFileUpload() {
        cy.get(this.FileUploadButton).click();
    };


};