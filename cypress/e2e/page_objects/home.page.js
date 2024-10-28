class homePage {
    get joinOurTalentCommunityLabel() {return cy.get('[id="js-talent-link-nav"]')};
    get emailInput() {return cy.get('input[data-automation="textfield/input"]').eq(1)};
    get phoneNumberInput(){return cy.get('input[data-automation="textfield/input"]').eq(2)};
    get fullNameInput() {return  cy.get('input[data-automation="textfield/input"]').eq(0)};
    get stateInput() {return cy.get('input[type="text"]').eq(1)};
    get resumeUploadButton() {return cy.get('div[data-automation="file-drop-zone"]').find('input[type="file"]')}
}
export default new homePage();   