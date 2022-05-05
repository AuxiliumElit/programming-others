import {navigateTo} from "../../support/page_objects/navigationPage"

describe('Counter Test Suite', () => {

    beforeEach('Open application', () => {
        cy.visit('/')
    })

    it('Decrement count', () => {
        navigateTo.counterPage()
        cy.get('[style=""] > :nth-child(1) > :nth-child(2)').click()
        cy.get('[style=""] > :nth-child(1) > div').should('contain.text', 'Current count: -1')    
    })

    it('Increment count', () => {
        navigateTo.counterPage()
        cy.get('[style=""] > :nth-child(1) > :nth-child(3)').click()
        cy.get('[style=""] > :nth-child(1) > :nth-child(3)').click()
        cy.get('[style=""] > :nth-child(1) > div').should('contain.text', 'Current count: 2')
    })

    it('Check current count and status', () => {
        navigateTo.counterPage()
        cy.get('[style=""] > :nth-child(1) > div').should('contain.text', 'Current count: 0')
    })
})