export class NavigationPage{

    counterHookPage(){
        cy.contains('/counter-hook').click()
    }
    counterPage(){
        cy.contains('/counter').click()
    }
    easyButtonPage(){
        cy.contains('/easy-button').click()
    }
    loginSubmissionPage(){
        cy.contains('/login-submission').click()
    }


}

export const navigateTo = new NavigationPage()