class HomePage {
    go(){
        cy.visit('/')
    }

    homeExpectedMessage(expectedMessage){

        cy.get('#page-home main h1')
            .should('have.text', expectedMessage)
    }
}

export default new HomePage;