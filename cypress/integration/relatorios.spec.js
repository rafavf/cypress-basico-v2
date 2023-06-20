/// <reference types="Cypress" />

describe('Verificação de Lastros', function () {

       
    


    it('acessar o site', function () {
    cy.visit('https://ee37-2804-1b2-1083-eaa6-56-ff8f-7fc-5489.ngrok-free.app/')
    cy.get('button[type="button"]')
    .click()
    cy.get('#email').type('admpanel@singulare.com.br')
    cy.get('#password').type('Eps45!98_*')
    cy.get('.btnLogin').click()
    // acessando tela de relatorios
    cy.get(':nth-child(8) > :nth-child(2) > .item > div > .link > p')
    .click()

    
    // escolhendo fundo
    cy.get('.classContainerItem > .multiselect > .multiselect__tags')
    .click()
    // selecionando fundo
    cy.get('.classContainerItem > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
    .click()
    // selecionado registradora disponivel
    cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__tags > .multiselect__placeholder')
    .click()
    // escolhendo registradora disponivel CERC
    cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option')
    .click()
    // selecionnando o tipo de movimentação
    cy.get('.multiselect__placeholder')
    .click()
    // selecionando aquisição
   // cy.get('.classContainerItem > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
    cy.get(':nth-child(2) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option')
    .click()
    
    // pesquisar
    cy.get('.button-filled')
    .click().wait(5000)
    
    
    // limpar filtros
    cy.get('.button-outline').click()



    })

    it('acessar o site', function () {
        cy.visit('https://ee37-2804-1b2-1083-eaa6-56-ff8f-7fc-5489.ngrok-free.app/')
        cy.get('button[type="button"]')
        .click()
        cy.get('#email').type('admpanel@singulare.com.br')
        cy.get('#password').type('Eps45!98_*')
        cy.get('.btnLogin').click()
        // acessando tela de relatorios
        cy.get(':nth-child(8) > :nth-child(2) > .item > div > .link > p')
        .click()
        // escolhendo fundo
        cy.get('.classContainerItem > .multiselect > .multiselect__tags')
        .click()
        // selecionando fundo
        cy.get('.classContainerItem > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
        .click()
        // selecionado registradora disponivel
        cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__tags > .multiselect__placeholder')
        .click()
        // escolhendo registradora disponivel CERC
        cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option')
        .click()
        // selecionnando o tipo de movimentação
        cy.get('.multiselect__placeholder')
        .click()
        // selecionando aquisição
       // cy.get('.classContainerItem > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
        cy.get(':nth-child(2) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option')
        .click()
        
        // pesquisar
        cy.get('.button-filled')
        .click()

        // Selecionando FIDC
        cy.get(':nth-child(1) > .item-header > .checkbox > .containerCheckBoxPerso > .checkmarkBox').click().wait(3000)

        // fazendo download
        cy.get('.col-buttons > :nth-child(1)').click()

    })


    it.only('acessar o site', function () {
        cy.visit('https://ee37-2804-1b2-1083-eaa6-56-ff8f-7fc-5489.ngrok-free.app/')
        cy.get('button[type="button"]')
        .click()
        cy.get('#email').type('admpanel@singulare.com.br')
        cy.get('#password').type('Eps45!98_*')
        cy.get('.btnLogin').click()
        // acessando tela de relatorios
        cy.get(':nth-child(8) > :nth-child(2) > .item > div > .link > p')
        .click()
        // escolhendo fundo
        cy.get('.classContainerItem > .multiselect > .multiselect__tags')
        .click()
        // selecionando fundo
        cy.get('.classContainerItem > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span')
        .click()
        // selecionado registradora disponivel
        cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__tags > .multiselect__placeholder')
        .click()
        // escolhendo registradora disponivel CERC
        cy.get(':nth-child(1) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option')
        .click()
        // selecionnando o tipo de movimentação
        cy.get('.multiselect__placeholder')
        .click()
        // selecionando aquisição
        cy.get(':nth-child(2) > .containerSelect > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option')
        .click()
        
        // pesquisar
        cy.get('.button-filled')
        .click()

        // Selecionando FIDC
        cy.get(':nth-child(1) > .item-header > .checkbox > .containerCheckBoxPerso > .checkmarkBox').click().wait(3000)

        // fazendo download
        cy.get('.col-buttons > :nth-child(2)').click()

    })
})