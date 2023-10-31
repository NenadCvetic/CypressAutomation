/// <reference types="cypress" />

describe('Locators practice', () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.visit('multiple_buttons');
  });

  it('Check different button actions', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();

    // contains to check weather there is a element with certain text
    cy.contains('Clicked on button two!').should('be.visible');

    // find elements with class attribute and create a list, then selecet 3rd element from list
    cy.get('.btn.btn-primary').then((buttons) => {
      cy.wrap(buttons).eq(2).click();

      // assert the text
      cy.contains('Clicked on button three!').should('be.visible');

      cy.wrap(buttons).should('have.length', 6);
    });

    // we get all buttons with tagName;each method is creating a loop
    cy.get('button').each((item, index, list) => {
      // assert length of the list, verify number of buttons
      expect(list).to.have.length(6);

      expect(item).to.have.attr('onclick');
    });

    // Getting list of buttons, get only item and check the text of each item if it is equal to Button 4, we should click on it
    cy.get('button').each((item) => {
      if (item.text() == 'Button 4') {
        cy.log(item.text()); // this command write the text at the test console

        cy.wrap(item).click();

        cy.contains('Clicked on button four!').should('be.visible');
      }
    });

    // npx cypress run headless -b chrome
  });
});
