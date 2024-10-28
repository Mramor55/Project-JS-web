import { faker } from "@faker-js/faker";
import homePage from "../page_objects/home.page";
import userDetails from "../../fixtures/userDetails.json";
import jobData from "../../fixtures/jobData.json";

let name = faker.person.firstName().toString();
let lastName = faker.person.lastName().toString();
let email = faker.internet.email().toString();
let number = faker.phone.number();

describe("Should aviable apply for QA job", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should user apply for job", () => {
    cy.url().should("include", "en/talent-community/");
    homePage.fullNameInput.type(name, lastName);
    homePage.emailInput.type(email);
    homePage.phoneNumberInput.type(number);
    homePage.resumeUploadButton.attachFile(userDetails.resumePath);
    homePage.stateInput.type(userDetails.state, { delay: 200 });
    cy.contains(jobData.stateSelection).click({ force: true });
    cy.contains(jobData.primaryInterest).type(userDetails.areasOfInterest);
    cy.contains(jobData.industriesExpience).type(userDetails.typeOfIndustry);
    cy.contains(jobData.graduateRole).type(userDetails.graduateRole);
    cy.contains(jobData.sponsorshipStatus).type(userDetails.sponsorshipToWork);
  });
});
