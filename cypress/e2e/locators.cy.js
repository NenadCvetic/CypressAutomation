/// <reference types="cypress" />


describe('Locators practice', () => {


    beforeEach(() => {

        cy.clearAllCookies();
        cy.visit('practice.cydeo.com/login')
    })


    it(('Check different locators strategies'), () => {

        //by CSS locator
        cy.get("input[name='username']").type('CydeoStudent'); //every statement creates an object with which you can interact with
        //and next command makes operation to the object created at the previous statement

        //attribute name and value
        cy.get("[type='text']").clear(); //clear what is typed in the field

        //locating element by attribute
        cy.get("input").each((item, index, list) => {

            //assert that lenght of list is 2
            expect(list).to.have.length(2);

            expect(item).to.have.attr("type");

            expect(item).to.have.attr("name");
            //by attriubute name
            cy.get("[type]");

            //by classValue
            cy.get(".btn.btn-primary");

            //by id
            cy.get("#wooden_spoon");

            //using text to locate
            cy.get("button").should('contain', 'Login').click();


        })


    })









})

