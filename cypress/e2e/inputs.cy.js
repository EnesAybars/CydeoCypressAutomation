///  <reference types="cypress" />

const { curry } = require('cypress/types/lodash');
const { check } = require('prettier');

describe('Input Forms Tests', () => {
  beforeEach('Navigate to registration page', () => {
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it('Check different input box fields and verify', () => {
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

  it('Check different radio box actions', () => {
    cy.get('.radio')
      .find('[type=radio]')
      .then((radio) => {
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

        // get all radio buttons, select the second one, verify that it is checked and confirmation label is visible
        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('data-bv-icon-for="gender"').should('be.visible');  // <- Check this out!
        // !!! NO SUCH ELEMENT BCZ PAGE IS NOT AS ORIGINAL FIND OUT WHY !!!

        // third radio button is NOT checked
        cy.wrap(radio).eq(2).should('not.be.checked');
      });
  });

  it('Check different checkbox actions', () => {
    // get all checkboxes, select Java and verify
    cy.get('[type="checkbox"]').then((checkbox) => {
      cy.wrap(checkbox).eq(1).check().should('be.checked');

      // uncheck JAVA box
      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');

      // verify third one has a value Javascript and then check and verify
      cy.wrap(checkbox).eq(2).should('have.value', 'javascript').check().should('be.checked');
    });
  });

  it('Check different input box fields and verify', () => {

    // get all input boxes, type some information 

    cy.get("input[name='firstname']").type('Enes Aybars');
    cy.get("input[name='lastname']").type('Aydin');
    cy.get("input[name='username']").type('iBars');
    cy.get("input[name='password']").type('ronaldo7');

    let email = `aybars@gmail.com`
    cy.get("input[name='email']").type(email);

    let phoneNummer = `05${Math.floor(100000000 + Math.random() * 900000000)}`;
    cy.get("input[name='phone']").type(phoneNummer);
    cy.get("input[name='birthday']").type('10/02/1998');

  });

  it('Check selection of a single choice from a dropdown', () => {

    // select one element
    cy.get("select[name='job_title']").select("SDET");
    
    // assert that dropdown has correct text after selecting
    cy.get("select[name='job_title']").contains("SDET");

  });

  it.only('Check selection of all select dropdowns option', () => {
  
    // we will provide our test data through fixtures folder as JSON object, then use that data to verify select values
    cy.fixture("departments").then((eachDepartment) => {
     
      // get all options in the menu, iterate through these options one by one
      cy.get("select[name='department'] > option").each((option, index) => {
        
        // get each option text
        const optionText = option.text();
        cy.log(optionText);
        cy.log(index);
        cy.log(eachDepartment[index]);

        cy.get("select[name='department']").select()(optionText)
        .should('have.value', option.val())        
        .contains(eachDepartment[index]);

      });
    });
    
  });


  // to open cypress console code: npm run cypress-cli
});
