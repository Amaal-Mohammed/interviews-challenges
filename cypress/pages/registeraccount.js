//import { contains } from 'cypress/types/jquery';
import Verifications from '../verifications/register'
export default {
    insertCustomerFirstName(customerfirstname) {
        cy.wait(5000)
        cy.get('input[id=customer_firstname]').type(customerfirstname).log("insert customer first name");
    },
    insertCustomerLastName(customerlastname) {
        cy.get('input[id=customer_lastname]').type(customerlastname).log("insert customer last name");
    },
    insertCustometPassword(password) {
        cy.get('input[id=passwd]').type(password).log("insert password");
    },
    selectDayMonthYear(day, month, year) {
        cy.get('select[id=days]').select(day)
        cy.get('select[id=months]').select(month)
        cy.get('select[id=years]').select(year).log("insert date");
    },
    insertFirstName(firstname) {
        cy.get('input[id=firstname]').type(firstname).log("insert first name");
    },
    insertLastName(lastname) {
        cy.get('input[id=lastname]').type(lastname).log("insert last name");
    },
    insertAddress1(address1) {
        cy.get('input[id=address1]').type(address1).log("insert address1");
    },
    insertCity(city) {
        cy.get('input[id=city]').type(city).log("insert city");
    },
    insertState(state) {
        cy.get('#id_state').select(state).log("insert state");
    },

    insertZipCode(zipcode) {
        cy.get('#postcode').type(zipcode).log("insert zipcode");
    },
    insertMobilePhone(mobile) {
        cy.get('input[id=phone_mobile]').type(mobile).log("insert mobilenumber");
    },
    insertAlias(alias) {
        cy.get('input[id=alias]').type(alias).log("insert alias");
    },
    clickSubmitAccount() {
        cy.get('button[id=submitAccount]').click().log("Click Submit account");
    },

    verifyValidationMsgIsDisplayed() {
        cy.get('.alert').should('be.visible')
        cy.get('ol > li')
            .should('have.length', 8)
        cy.get('ol').invoke('text').should('contain', Verifications.validationmeg)
    },

    verifyPasswordValidationMsgIsDisplayed() {
        cy.get('.alert').should('be.visible')
        cy.get('ol > li')
            .should('have.length', 1)
        cy.get('ol').invoke('text').should('contain', Verifications.passwordvalidationmsg)
    },
    verifyZipCodeValidationMsgIsDisplayed() {

        cy.get('ol').invoke('text').should('contain', Verifications.zipcodevalidationmsg)
    },
    verifyMobileValidationMsgIsDisplayed() {

        cy.get('ol').invoke('text').should('contain', Verifications.invalidmobilenumvalidationmsg)
    },
    verifyDuplicateAccountRegisteration() {
        cy.contains(Verifications.duplicateaccountvalidationmsg).should('be.visible')
    },
    verifyInvalidEmailAddress() {
        cy.contains(Verifications.invalidemailmsg).should('be.visible')
    },
    verifyDescriptiveLabelsISDisplayed() {
        cy.contains(Verifications.addresslabel).should('be.visible')
        cy.contains(Verifications.phonelabel).should('be.visible')
        cy.contains(Verifications.passwordlabel).should('be.visible')
    }


}