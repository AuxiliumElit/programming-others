export class LoginSubmissionPage{

    enterCredentials(username, password){
        cy.get('#username-field').type(username)
        cy.get('#password-field').type(password)
        cy.get('button').click()
    }

    verifyGreetingMessage(username){
        cy.wait(2)
        cy.get('[style=""] > :nth-child(1)').should('contain', 'Welcome ' + username)
    }

}

export const onLoginSubmissionPage = new LoginSubmissionPage()