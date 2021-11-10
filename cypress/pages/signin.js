export default{
    insertEmailAddress(email){
        cy.get('input[id=email]').type(email)
    },
    insertPassword(password){
        cy.get('input[id=passwd]').type(password)
    },
    clickSubmitLogin(){
        cy.get('button[id=SubmitLogin]').click()
    },
    verifyValidationMsgIsDisplayed(){
        cy.get('ol > li').should('have.text','Invalid password.')
    },
    createEmailToRegister(email){
        cy.get('input[id=email_create]').type(email)
    },
    clickCreateAccountBtn(){
        cy.get('button[id=SubmitCreate]').click()
        
    }
 
}