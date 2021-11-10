import Helpers from '../../util/helpers'
import Home from '../../pages/home'
import Register from '../../pages/registeraccount'
import MyAccount from '../../pages/myaccount'
import SignIn from '../../pages/signin'

const { fake } = require('faker');
const faker = require("faker");
context('Actions', () => {
  let firstname = ""
  let lastname = ""
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify User is able to register when adding all mandatory fields', () => {
    firstname = faker.name.firstName()
    lastname = faker.name.lastName()
    Home.clickSignInBtn()
    SignIn.createEmailToRegister(faker.internet.email())
    SignIn.clickCreateAccountBtn()
    Register.insertCustomerFirstName(firstname)
    Register.insertCustomerLastName(lastname)
    Register.insertCustometPassword(faker.internet.password())
    Register.selectDayMonthYear(Helpers.generateRandomDay, faker.date.month(), Helpers.generateRandomYear)
    Register.insertFirstName(firstname)
    Register.insertLastName(lastname)
    Register.insertAddress1(faker.address.streetName())
    Register.insertCity(faker.address.city())
    Register.insertState(faker.address.state())
    Register.insertZipCode(Helpers.zipcode)
    Register.insertMobilePhone(Helpers.generateRandomMobileNum)
    Register.insertAlias(firstname)
    Register.clickSubmitAccount()
    MyAccount.verifyUserisRegistered(firstname, lastname)
  })
  it('Verify User is not able to register when non of mandatory fields are added', () => {
    firstname = faker.name.firstName()
    lastname = faker.name.lastName()
    Home.clickSignInBtn()
    SignIn.createEmailToRegister(faker.internet.email())
    SignIn.clickCreateAccountBtn()
    Register.clickSubmitAccount()
    Register.verifyValidationMsgIsDisplayed()

  })
  it('Verify User is not able to register when an password less than 5 characters', () => {
    firstname = faker.name.firstName()
    lastname = faker.name.lastName()
    Home.clickSignInBtn()
    SignIn.createEmailToRegister(faker.internet.email())
    SignIn.clickCreateAccountBtn()
    Register.insertCustomerFirstName(firstname)
    Register.insertCustomerLastName(lastname)
    cy.fixture("register.json", "binary").then(data => {
      Register.insertCustometPassword(data.invalidpassword)
    })

    Register.selectDayMonthYear(Helpers.generateRandomDay, faker.date.month(), Helpers.generateRandomYear)
    Register.insertFirstName(firstname)
    Register.insertLastName(lastname)
    Register.insertAddress1(faker.address.streetName())
    Register.insertCity(faker.address.city())
    Register.insertState(faker.address.state())
    Register.insertZipCode(Helpers.zipcode)
    Register.insertMobilePhone(Helpers.generateRandomMobileNum)
    Register.insertAlias(firstname)
    Register.clickSubmitAccount()
    Register.verifyPasswordValidationMsgIsDisplayed()


  })
  it('Verify User is not able to register when phone is invalid format', () => {
    firstname = faker.name.firstName()
    lastname = faker.name.lastName()
    Home.clickSignInBtn()
    SignIn.createEmailToRegister(faker.internet.email())
    SignIn.clickCreateAccountBtn()
    Register.insertCustomerFirstName(firstname)
    Register.insertCustomerLastName(lastname)

    Register.insertCustometPassword(faker.internet.password())


    Register.selectDayMonthYear(Helpers.generateRandomDay, faker.date.month(), Helpers.generateRandomYear)
    Register.insertFirstName(firstname)
    Register.insertLastName(lastname)
    Register.insertAddress1(faker.address.streetName())
    Register.insertCity(faker.address.city())
    Register.insertState(faker.address.state())
    Register.insertZipCode(Helpers.zipcode)
    cy.fixture("register.json", "binary").then(data => {
      Register.insertMobilePhone(data.invalidmobilephone)
    })

    Register.insertAlias(firstname)
    Register.clickSubmitAccount()
    Register.verifyMobileValidationMsgIsDisplayed()

  })

  it('Verify User is not able to register when zipcode is invalid format', () => {
    firstname = faker.name.firstName()
    lastname = faker.name.lastName()
    Home.clickSignInBtn()
    SignIn.createEmailToRegister(faker.internet.email())
    SignIn.clickCreateAccountBtn()
    Register.insertCustomerFirstName(firstname)
    Register.insertCustomerLastName(lastname)
    Register.insertCustometPassword(faker.internet.password())
    Register.selectDayMonthYear(Helpers.generateRandomDay, faker.date.month(), Helpers.generateRandomYear)
    Register.insertFirstName(firstname)
    Register.insertLastName(lastname)
    Register.insertAddress1(faker.address.streetName())
    Register.insertCity(faker.address.city())
    Register.insertState(faker.address.state())

    cy.fixture("register.json", "binary").then(data => {
      Register.insertZipCode(data.invalidzipcode)
    })

    Register.insertMobilePhone(Helpers.generateRandomMobileNum)
    Register.insertAlias(firstname)
    Register.clickSubmitAccount()
    Register.verifyZipCodeValidationMsgIsDisplayed()

  })

  it('Verify User is not able to register with same email twice', () => {
    firstname = faker.name.firstName()
    lastname = faker.name.lastName()
    Home.clickSignInBtn()
    cy.fixture("register.json", "binary").then(data => {
      SignIn.createEmailToRegister(data.registeredemail)
    })

    SignIn.clickCreateAccountBtn()
    Register.verifyDuplicateAccountRegisteration()

  })

})