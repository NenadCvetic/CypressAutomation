/// <reference types="cypress" />


describe('Locators practice', () => {


    beforeEach(() => {

        cy.clearAllCookies();
        cy.visit('practice.cydeo.com/login')
    })




    xit('Check different locators strategies', () => {

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

    xit('Check finding elemnts by traveling through DOM - Document object model', () => {

        cy.get("input[name='username']").parents('form').find('button').should('contain', 'Login').click();


    })


    it.only('Check different types of assertions', () => {

        //Cypress itself uses assertions provided by Chai, Sinon and jQuery library libraries
        //Should Assertions -> directly asserting on the element we located
        cy.get('#wooden_spoon').should('contain' , 'Login').and('have.class', 'btn btn-primary');

        //expect assertion: creates a subject of our test, then we implement different actions
        cy.get('#wooden_spoon').then((buttonElement) => {

            expect(buttonElement).to.have.text('Login');

            expect(buttonElement).to.have.class('btn btn-primary');

        })

    

    })

})

