/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verificar o título da aplicação', function () {
        cy.title().should("be.equal", 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatorios e envia o formulario', function () {
        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam lacinia, nisl nunc aliquet nunc, sed aliquam nisl'
        
        cy.get('#firstName').type('Rafa')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('rafael.silva@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    
    })

    it('Exibe mensagem de erro ao submeter o formulário com email com formatação inválida', function () {

        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam lacinia, nisl nunc aliquet nunc, sed aliquam nisl'

        cy.get('#firstName').type('Rafa')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('rafael.silva@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')   

    })

    it('Campo telefone continua vazio quando preenchido com valor não-númerico', function() {
        cy.get('#phone')
        .type('abc')
        .should('have.value', '')
    })

    it('Exibe mensagem de erro quando telefone se torna obrigátorio mas não é preenchido antes do envio do formulário', function() {
    
        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam lacinia, nisl nunc aliquet nunc, sed aliquam nisl'
        cy.get('#firstName').type('Rafa')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('rafael.silva@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.contains('button', 'Enviar').click()
        
        // cy.get('#phone')
        // .focus()
        // .blur()

        cy.get('.error').should('be.visible')
    })

    it('Selecionando opções em campos de seleção suspensa youtube', function()  {

        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam lacinia, nisl nunc aliquet nunc, sed aliquam nisl'
        cy.get('#firstName').type('Rafa')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('rafael.silva@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('#product').select('youtube')
        
    
     
    })

    it('Dando check na caixa de ajuda', function()  {
       // cy.get('input [type="radio"] [value="feedback"]')
       cy.get("#support-type > label:nth-child(3) > input[type=radio]")
        .check()
        .should('have.value', 'feedback')

    })

    it('Dando check na caixa de ajuda', function()  {
        cy.get("#support-type > input[type=radio] ")
        .should('have.value', 'lenght', 3)
        .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })

    })

    it('Marca Ambos Check Box e depois desmarca o ultimo', function()  {
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
     })

     it('Seleciona um arquivo da pasta Fixture', function()  {
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
     })

     it.only('Lidando com Links que abrem em outras guias', function()  {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it.only('Lidando com Links que abrem em outras guias', function()  {
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        // pode ser usado .visit tbm
        .click()
        
        cy.contains
    })
})

