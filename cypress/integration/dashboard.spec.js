/// <reference types="Cypress" />

describe('Verificação de Lastros', function () {
    this.beforeEach(function () {
        cy.visit('https://ee37-2804-1b2-1083-eaa6-56-ff8f-7fc-5489.ngrok-free.app/')
       
    })

    it('acessar o site e testar botão de filtro', function () {
    
    cy.get('button[type="button"]')
    .click()
    cy.get('#email').type('admpanel@singulare.com.br')
    cy.get('#password').type('Eps45!98_*')
    cy.get('.btnLogin').click()

    // acessando tela de dashboard
    cy.get(':nth-child(8) > :nth-child(1) > .item > div > .link > p').click()

    // selecionando registradora disponivel
    cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__select')
    .click()
    cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
    .click()

    // selecionando fundo disponível
    cy.get(':nth-child(2) > .containerSelect > .multiselect > .multiselect__tags')
    .click()

    cy.get(':nth-child(11) > .multiselect__option > span')
    .click().wait(5000)

    // clicando no botão limpar filtro
    cy.get('.button-outline').click()

    })




    it('acessar o site', function () {
    
    cy.get('button[type="button"]')
        .click()
        cy.get('#email').type('admpanel@singulare.com.br')
        cy.get('#password').type('Eps45!98_*')
        cy.get('.btnLogin').click()
    
        // acessando tela de dashboard
        cy.get(':nth-child(8) > :nth-child(1) > .item > div > .link > p').click()
    
        // selecionando registradora disponivel
        cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__select')
        .click()
        cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
        .click()
    
        // selecionando fundo disponível
        cy.get(':nth-child(2) > .containerSelect > .multiselect > .multiselect__tags')
        .click()
    
        // clickando no botão pesquisar
        cy.get(':nth-child(11) > .multiselect__option > span')
        .click()

        // selecionando botoões no dashboard aba de aquisição!

        cy.get(':nth-child(1) > header > .labels > .label-green-light').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-green-dark').click().wait(1504)
    
        cy.get(':nth-child(1) > header > .labels > .label-yellow').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-purple').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-orange').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-red').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-green-light').click().wait(1504)
        
        cy.get(':nth-child(1) > header > .labels > .label-green-dark').click().wait(1504)
    
        cy.get(':nth-child(1) > header > .labels > .label-yellow').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-purple').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-orange').click().wait(1504)

        cy.get(':nth-child(1) > header > .labels > .label-red').click().wait(1504)

    })



    it.only('acessar o site', function () {
    
        cy.get('button[type="button"]')
            .click()
            cy.get('#email').type('admpanel@singulare.com.br')
            cy.get('#password').type('Eps45!98_*')
            cy.get('.btnLogin').click()
        
            // acessando tela de dashboard
            cy.get(':nth-child(8) > :nth-child(1) > .item > div > .link > p').click()
        
            // selecionando registradora disponivel
            cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__select')
            .click()
            cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
            .click()
        
            // selecionando fundo disponível
            cy.get(':nth-child(2) > .containerSelect > .multiselect > .multiselect__tags')
            .click()
        
            // clickando no botão pesquisar
            cy.get(':nth-child(11) > .multiselect__option > span')
            .click()
    
            // selecionando botoões no dashboard aba de liquidação!
    
            cy.get(':nth-child(2) > header > .labels > .label-green-light').click().wait(1504)
    
            cy.get(':nth-child(2) > header > .labels > .label-green-dark').click().wait(1504)
        
            cy.get(':nth-child(2) > header > .labels > .label-yellow').click().wait(1504)
    
            cy.get(':nth-child(2) > header > .labels > .label-purple').click().wait(1504)


            
    
            cy.get(':nth-child(2) > header > .labels > .label-orange').click().wait(1504)
    
            cy.get(':nth-child(2) > header > .labels > .label-red').click().wait(1504)
    
            cy.get(':nth-child(2) > header > .labels > .label-green-light').click().wait(1504)
            
            cy.get(':nth-child(2) > header > .labels > .label-green-dark').click().wait(1504)
        
            cy.get(':nth-child(2) > header > .labels > .label-yellow').click().wait(1504)
    
            cy.get(':nth-child(2) > header > .labels > .label-purple').click().wait(1504)
    
            cy.get(':nth-child(2) > header > .labels > .label-orange').click().wait(1504)
    
            cy.get(':nth-child(2) > header > .labels > .label-red').click().wait(1504)
    
        })

})