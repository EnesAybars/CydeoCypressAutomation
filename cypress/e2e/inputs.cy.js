///  <reference types="cypress" />

const { check } = require("prettier");

describe('Input Forms Tests', () => {
  beforeEach('Navigate to registration page', () => {
    // runs before each test case, BeforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  xit('Check different input box fields and verify', () => {
    // fill the form for username and other info
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Tyson');
    cy.get('input[name="username"]').type('Crazy');

    /**
     * Math.random() creates a number between 0 - 1 ex:0.005678
     * Math.floor() makes it a whole number
     *
     */

    // basically this line create random generated number
    const email = `formTest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);

    const password = `test${Math.floor(100000 + Math.random() * 900000)}`;
    cy.get('input[name="password"]').type(password);

    const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`; // four digits number
    cy.get('input[name="phone"]').type(phoneNumber);
    cy.get('input[name="birthday"]').type('01/01/1999');
  });

  xit('Check different input box fields and verify', () => {


  });

  xit('Check different radio box actions', () => {
    cy.get('.radio').find('[type=radio]').then((radio => {
        // get all radio buttons, select the first one, verify that it is checked 
        cy.wrap(radio).first().check().should('be.checked');

        /**
         * radio: is Jquery element,
         * cy.wrap(radio): turns it into Cypress Object so that we can use cypress functions
         * first(): selects first element
         * check(): presses the radio box which also means checks the radio box 
         * should():verifies whatever we provide as parameter
         * be.checked: we provide this statement into should() function
         *              it basically asserts whether it is checked
         */ 


        // get all radio buttons, select the second one, verify that it is checked
        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('data-bv-icon-for="gender"').should('be.visible');

        // third radio button is NOT checked
        cy.wrap(radio).eq(2).should('not.be.checked');

    }))
  });

  xit('Check different checkbox actions', () => {
    //get all checkboxes, select Java and verify
    cy.get('[type="checkbox"]').then((checkbox) => {
        cy.wrap(checkbox).eq(1).check().should('be.checked');
        
        // uncheck JAVA box
        cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');

        // verify third one has a value Javascript and then check and verify
        cy.wrap(checkbox).eq(2)
        .should('have.value','javascript')
        .check().should('be.checked');
    })
  })



  it('Check different checkbox actions', () => {



  })

  xit('Check different checkbox actions', () => {



  })


    // to open cypress console code: npm run cypress-cli
});
