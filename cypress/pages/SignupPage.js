

class SignupPage {
    go(){
         // cy.viewport(1920, 1080)
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver){
         //Preenche cadastro
        cy.get('input[name=fullName]').type(deliver.name)
        cy.get('input[name=cpf]').type(deliver.cpf)
        cy.get('input[name=email]').type(deliver.email)
        cy.get('input[name=whatsapp]').type(deliver.whatsapp)
        //Preenche preenche endereço
        cy.get('input[name=postalcode]').type(deliver.address.postalcode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name=address-number]').type(deliver.address.number)
        cy.get('input[name=address-details]').type(deliver.address.details)

        //Validar campos preenchidos automaticamente
        cy.get('input[name=address]').should('have.value', deliver.address.street)
        cy.get('input[name=district]').should('have.value', deliver.address.district)
        cy.get('input[name=city-uf]').should('have.value', deliver.address.city)

        //Seleciona método de entrega
        cy.contains('.delivery-method li', deliver.delivery_method).click();

        // Realiza o upload da CNH
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh);
    }

    submit(){
        cy.get('button[class=button-success]').click()
    }

    modalConstantShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
      .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(errorMessage){
      // cy.get('.alert-error')
        // .should('have.text', errorMessage)

      cy.contains('.alert-error', errorMessage).should('be.visible')
    }
}

export default new SignupPage;