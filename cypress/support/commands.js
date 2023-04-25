Cypress.Commands.add('DadosMsg', () => { 
    cy.get('[data-testid="ContactName"]').type('jader')
    cy.get('[data-testid="ContactEmail"]').type('jabasili@gmail.com')
    cy.get('[data-testid="ContactPhone"]').type('51999999999')
    cy.get('[data-testid="ContactSubject"]').type('assunto')
    cy.get('[data-testid="ContactDescription"]').type('teste de texto para testar')
})

