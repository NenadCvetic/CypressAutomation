/// <reference types="cypress" />

describe('Input forms tests', () => {
    beforeEach('Navigate to registration page of Cydeo practice',() => {

      cy.clearAllCookies();

      cy.visit('/registration_form');
    });
  
    it('Check different input box fields', () => {
        //fill the form for username and other fields
        cy.get('input[name="firstname"]').type('Mike');

        cy.get('input[name="lastname"]').type('Brown');

        cy.get('input[name="username"]').type('mikebrown');

        /**
         * 
         * Math.random(): creates a number between 0 - 1
         * 
         */

        let email = `formtest${Math.floor(100000+Math.random() * 900000)}@cydeo.com`;



        cy.get('input[name="email"]').type(email);


        
        
      });
    
  });
  

