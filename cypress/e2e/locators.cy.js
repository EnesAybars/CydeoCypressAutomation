///  <reference types="cypress" />

describe('Find or Get Elements by Using Different Locators', () => {
  beforeEach(() => {
    // runs before each test case, BeforeMethod in TestNG
    cy.clearCookies();
    cy.visit('login');
  });

  it('Check different locator strategies', () => {
    // By CSS locator
    cy.get("input[name='username']").type('CydeoStudent');
    // Every statement creates an object to be interacted, and next command makes operation created at the previous statement

    // attribute name and value
    cy.get("[type='text']").clear(); // clear what is typed

    // tagName
    cy.get('input').each((item, index, list) => {
      // assert the length of the list is 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });

    // by attrtibute name
    cy.get('[type]');

    // by className
    cy.get('.btn.btn-primary');

    // by id
    cy.get('#wooden_spoon');

    // if we want to use text: no xpath in cypress, but still possible with a different approach(to use xpath we need extention)
    cy.get('button').should('contain', 'Login').click();
  });

  it('Check finding elements by travelling through DOM', () => {
    // travel to find the login button: locate username box- go to partent form - then find button
    cy.get("input[name='username']")
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it('Check different type of assertions', () => {
    // Cypress itself bundles assertions provided by Chai, Sinon and jQuery libraries
    // Should Assertion: does the assertion directly on the object itself
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');

    //  Expect Assertion: Creates a subject of our test, then you implement different actions
    cy.get('#wooden_spoon').then((buttonElement) => {
      expect(buttonElement).to.have.text('Login');
      expect(buttonElement).to.have.class('btn btn-primary');
    });
  });
});
