class CommonUtilities {
   log(msg) {
    //cy.log(msg);
   cy.task("log", `\t${msg}`);
  }

  clickElement(elementToBeClicked, timeout) {
    cy.get(elementToBeClicked, { timeout: timeout })
      .should("be.visible")
      .click({ force: true });
    return this;
  }

  enterValue(element, valueToBeEntered) {
    cy.get(element)
      .should("be.visible")
      .type(valueToBeEntered, { force: true });
    return this;
  }

  selectDropDownValue(dropDownValue, valueToBeSelect) {
    cy.get(dropDownValue)
      .should("be.visible")
      .select(valueToBeSelect, { force: true });
    return this;
  }

  verifyPageTitle(expectedTitle) {
    cy.title().should("include", expectedTitle);
    return this;
  }

  verifyElementIsVisible(elementToBeVerified, msg) {
    cy.get(elementToBeVerified).scrollIntoView().should("be.visible");
    this.log(msg);
    return this;
  }

  verifyElementsText(element, textToBeVerified) {
    cy.get(element).should("have.text", textToBeVerified);
    return this;
  }

  verifyElementContainsText(element, textToBeVerified) {
    cy.get(element).should("include", textToBeVerified);
    return this;
  }
}
export default CommonUtilities;
