import {navigateTo} from "../../support/page_objects/navigationPage"
import {onLoginSubmissionPage} from "../../support/page_objects/loginSubmissionPage"


describe('Counter-Hook Test Suite', () => {

    const username = 'Test1'

    beforeEach('Open application', () => {
        cy.openHomePage()
    })

    it('Verify main header', () => {
        navigateTo.loginSubmissionPage()
        onLoginSubmissionPage.enterCredentials(username, 'TestPassword')
        onLoginSubmissionPage.verifyGreetingMessage(username)
    })
})


