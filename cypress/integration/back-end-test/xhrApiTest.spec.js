/// <reference types = "cypress"/>



describe('API XHR Test Suite', () => {
    beforeEach('Open API application', () => {
        cy.intercept('GET', '**/tags', { fixture: 'apiTags.json' })
        cy.loginToApiApp()
    })


    it.skip('Verify xhr request-response', () => {
        cy.contains('New Article').click()
        cy.intercept('POST', '**/articles').as('intercept')

        cy.get('[formcontrolname="title"]').type('This is Title')
        cy.get('[formcontrolname="description"]').type('This is Description')
        cy.get('[formcontrolname="body"]').type('This is body of the Article')
        cy.contains('Publish Article').click()

        cy.wait('@intercept')
        cy.get('@intercept').then((xhr) => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(307)
            // expect(xhr.request.body.article.body).to.equal('This is body of the Article')
            //  expect(xhr.response.body.article.description).to.equal('This is Description')
        })
    })


    it('Verify mock response', () => {
        cy.get('.tag-list').should('contain', 'test1')
            .and('contain', 'test2')
            .and('contain', 'test3')
            .and('contain', 'test4')
    })

    it('Verify Api request-response', () => {

        const userCredentials = {
            "user": {
                "email": Cypress.env('email'),
                "password": Cypress.env('password')
            }
        }

        const bodyRequest = {
            "article": {
                "tagList": [],
                "title": "test11",
                "description": "test12",
                "body": "test13"
            }
        }

        cy.request('POST', 'https://conduit.productionready.io/api/users/login', userCredentials)
            .its('body').then(body => {
                const token = body.user.token
                cy.log('Comment:'+ token)

                cy.request({
                    url: 'https://conduit.productionready.io/api/articles/',
                    headers: { 'Authorization': 'Token ' + token },
                    method: 'POST',
                    body: bodyRequest
            }).then(response => {
                expect(response.status).to.equal(200)
            })
            

            cy.contains('Global Feed').click()
            cy.get('.article-preview').first().click()
            cy.get('.article-actions').contains('Delete Article').click()

            cy.request({
                url: 'https://conduit.productionready.io/api/articles?limit=10&offset=0',
                headers: { 'Authorization': 'Token ' + token },
                method: 'GET'
            }).its('body').then( body => {
                expect(body.articles[0].title).not.to.equal('test11')
            })
        })
    })
})