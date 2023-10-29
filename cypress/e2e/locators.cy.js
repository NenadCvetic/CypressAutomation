/// <reference types="cypress" />


describe('Locators practice' , () => {


    beforeEach(() => {

        cy.clearAllCookies();
        cy.visit('practice.cydeo.com/login')
    })


it(('Check different locators strategies'), () => {

    //by CSS locator
    cy.get("input[name='username']").type('CydeoStudent'); //every statement creates an object with which you can interact with
    //and next command makes operation to the object created at the previous statement





})









})

