describe('Validação de campos', () => {
    it('preencher campos', () => {
        //visitar o site
        cy.visit('')
        // preencher dados da mensagem
        cy.DadosMsg()
        // routing
        cy.route('POST', '**/message').as('postMsg')
        // clique para enviar mensagem
        cy.get('#submitContact').click()
        // validação com cy.wait
        cy.wait('@postMsg').then((xhr) =>{
            expect(xhr.status).be.eq(201)
            expect(xhr.response.body).has.property('messageid')
            expect(xhr.response.body.messageid).is.not.null
        })
        })
    })