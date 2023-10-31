/// <reference types="cypress" />

describe('Context: My first Tests', () => {
  before(() => {
    // runs once before all test cases within this describe block
  });

  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearAllCookies();
  });

  after(() => {
    // runs once after all the test cases within describe block are finished
  });

  it('Opening a web application', () => {
    cy.visit('/registration_form');

    cy.get('.nav-link').click();
  });

  xit('Test 2', () => {
    expect(false).to.equal(false);
  });

  it('Test 3', () => {
    expect(false).not.to.equal(true);
  });

  it.skip('Test 4', () => {
    expect(5).not.to.equal(4);
  });

  it('Test 4', () => {
    expect(true).to.equal('5' == 5);
  });
});
