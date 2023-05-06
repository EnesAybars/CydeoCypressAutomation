///  <reference types="cypress" />

describe('Context: My First Tests', () => {

    before(() => {
        // runs once before all test cases in this describe block, like in TestNG beforeClass

    })

    beforeEach(() => {
        // runs before each test case, BeforeMethod in TestNG
        cy.clearCookies();

    })

    after(() => {
        // runs after all test cases, afterClass in TestNG

    })

    afterEach(() => {
        // runs after each test case, AfterMethod in TestNG
    

    })

    it('Opening a web application',  () => {
        cy.visit('');
        cy.get(':nth-child(9) > a').click();

    })



})