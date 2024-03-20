/// <reference types="cypress"/>

describe('Funcionalida Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('nope@gmail.com')
        cy.get('#password').type('nope')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, nope (não é nope? Sair)')
    })
})