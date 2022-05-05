/// <reference types = "cypress"/>

describe('My First Test', () => {
    it('Verify main header', () => {
        cy.visit('/')
        cy.contains('Volodymyrs URL:').should('contain.text', 'Volodymyrs URL:')
        expect(true).to.equal(true)
    })
})