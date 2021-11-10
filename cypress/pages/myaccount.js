export default{
    verifyUserisRegistered(firstname,lastname){
        cy.get('.account > span').should('have.text', firstname+' ' +lastname)
    }
}