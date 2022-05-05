import {navigateTo} from "../../support/page_objects/navigationPage"


describe('Easy-Button Test Suite', () => {

    beforeEach('Open application', () => {
        cy.visit('/')
    })

    it('Verify easy button header', () => {
        navigateTo.easyButtonPage()
        cy.get('h1').should('contain.text', 'Hit the easy button!')
    })

    it('Click Toggle Theme button: - Light', () => {
        navigateTo.easyButtonPage()
        cy.get('div > :nth-child(5)').then((button) => {
            if (button.text() === "Toggle theme: dark") {
                cy.get('div > :nth-child(5)').click()
                cy.get('[style="color: black; background-color: white;"]').invoke('attr', 'style').should('contain', 'color: black; background-color: white;')
            } else {
                cy.get('[style="color: black; background-color: white;"]').invoke('attr', 'style').should('contain', 'color: black; background-color: white;')
            }
        })
    })


    it('Click Toggle Theme button: - Dark', () => {
        navigateTo.easyButtonPage()
        cy.get('div > :nth-child(5)').then((button) => {
            if (button.text() === "Toggle theme: light") {
                cy.get('div > :nth-child(5)').click()
                cy.get('[style="color: white; background-color: black;"]').invoke('attr', 'style').should('contain', 'color: white; background-color: black;')
            } else {
                cy.get('[style="color: white; background-color: black;"]').invoke('attr', 'style').should('contain', 'color: white; background-color: black;')
            }
        })
    })

    it('Verify Easy Toggle button', () => {
        navigateTo.easyButtonPage()
        cy.get('button:contains("Easy!")').click()
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('that was easy')
        })
    })
})