describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/"); // visits the main page
  });

  it("Can navigate to routers page", () => {
    cy.get("a").contains("Routers").click(); // replace 'Routers' with the actual link text
    cy.url().should("include", "/routers"); // asserts that URL contains '/routers'
  });

  it("Can navigate to obstacles page", () => {
    cy.get("a").contains("Obstacles").click(); // replace 'Obstacles' with the actual link text
    cy.url().should("include", "/obstacles"); // asserts that URL contains '/obstacles'
  });

  it("Can navigate to first floor charts", () => {
    cy.get("a").contains("First Floor Charts").click(); // replace 'First Floor Charts' with the actual link text
    cy.url().should("include", "/charts/first-floor"); // asserts that URL contains '/charts/first-floor'
  });

  // add similar tests for the other routes
});
