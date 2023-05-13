///  <reference types="cypress" />

describe('Context: My First Tests', () => {
  before(() => {
    // runs once before all test cases in this describe block, like in TestNG beforeClass
  });

  beforeEach(() => {
    // runs before each test case, BeforeMethod in TestNG
    cy.clearCookies();
  });

  after(() => {
    // runs after all test cases, afterClass in TestNG
  });

  afterEach(() => {
    // runs after each test case, AfterMethod in TestNG
  });

  it('Opening a web application', () => {
    cy.visit('');
    cy.get(':nth-child(9) > a').click();
  });

  it.skip('Test 2', () => {
    // it.skip -> skips the test case
    expect(false).to.equal(false);
  });

  xit('Test 3', () => {
    // xit -> ignores the test case
    expect(false).not.to.equals(true);
  });

  it('Test 4', () => {
    expect(5).to.equal(5);
  });

  it('Test 5', () => {
    // it.only -> runs only this test case
    expect(true).to.equal('5' == 5);
  });
});
