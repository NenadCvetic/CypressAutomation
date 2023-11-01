/// <reference types="cypress" />


describe('Input forms tests', () => {
  beforeEach('Navigate to registration page of Cydeo practice', () => {
    cy.clearAllCookies();

    cy.visit('/registration_form');
  });

  xit('Check different input box fields', () => {
    // fill the form for username and other fields
    cy.get('input[name="firstname"]').type('Mike');

    cy.get('input[name="lastname"]').type('Brown');

    cy.get('input[name="username"]').type('mikebrown');

    /**
     *
     * Math.random(): creates a number between 0 - 1
     *
     */

    const email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;

    cy.get('input[name="email"]').type(email);

    const password = `test${Math.floor(100000 + Math.random() * 900000)}`;

    cy.get('input[name="password"]').type(password);

    const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`;

    cy.get('input[name="phone"]').type(phoneNumber);

    cy.get('input[name="birthday"]').type('01/01/1992');
    
  });

  xit('Check different radio button actions',  () => {

    cy.get('.radio').find('[type=radio]').then((radio => {

      //get all the radio buttons, we want to select first one and verify that is selected
      //cy.wrap(radio).first().check().should('be.checked'); //cypress works in chainable functions structure

      /**
       * 
       * Radio is JQuery element -> then with cy.wrap(radio) we turn it into Cypress object
       * first(): selects first element of radio buttons
       * check(): checks
       * should(): verify whatever we provide as parameter
       * 
       */

      //get all the radio buttons, select second one and verify that it is checked and confirmation label is visible
      cy.wrap(radio).eq(1).check().should('be.checked');

      cy.get('[data-bv-icon-for="gender"]').should('be.visible');

      //verify that third radio button is not checked

      cy.wrap(radio).eq(2).should('not.be.checked');

      

    }))

  })

  xit('Check different checkbox actions',  () => {

    //get all checkboxes from the application and then select java and verify
    cy.get('[type="checkbox"]').then((checkboxes) => {

      cy.wrap(checkboxes).eq(1).check().should('be.checked');

      //uncheck JAVA checkbox

      cy.wrap(checkboxes).eq(1).uncheck().should('not.be.checked');

      //verify third one has a value JavaScript and then check and verify

      cy.wrap(checkboxes).eq(2).should('have.value', 'javascript').check().should('be.checked');
    })

  })

  xit('Select dropdown - single choice selection', ()=> {

    cy.get('select[name="job_title"]').select("SDET");

    //assert that dropdown has correct text after selecting

    cy.get('select[name="job_title"]').contains('SDET');


  })

  it('Check selection of all list options', ()=> {

    //we will provide our test data through fixtures folder as JSON object, then use that data to verify select values

    cy.fixture('departments').then((departments) => {

      //get all options from the menu, and then iterate through all options

      cy.get('select[name="department"] > option').each((option, index) => {

        //get each option text
        const optionText = option.text();

       // cy.log(optionText);

       // cy.log(index);

       // cy.log(departments[index]);

       cy.get('select[name="department"]').select(optionText)
       .should('have.value', option.val())
       .contains(departments[index]);

      })

    })


  })


});
