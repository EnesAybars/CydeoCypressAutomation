///  <reference types="cypress" />

describe('Find or Get Elements by Using Different Locators', () => {

    beforeEach(() => {
        // runs before each test case, BeforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');

    })

    it('Check different locator strategies',  () => {  
        // By CSS locator 
        cy.get("input[name='username']").type("CydeoStudent");
        // Every statement creates an object to be interacted, and next command makes operation created at the previous statement 
        

        // attribute name and value
        cy.get("[type='text']").clear();  // clear what is typed

        cy.get("input").each((item, index, list) => {
            // assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

    })

   
})