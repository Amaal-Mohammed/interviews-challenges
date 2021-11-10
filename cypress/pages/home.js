export default {
   clickSignInBtn(){
   cy.get('a[class=login]').click()
   .log("Sign in button Clicked!");
   }
}