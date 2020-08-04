/* global describe , it, cy */

describe('Instapet', function() {
    it('para ver si la app funciona', function() {
        cy.visit('/')
    })
    it('navegamos a una categoria y vemos fotos', function() {
        cy.visit('/pet/1')
        cy.get('article')
    })
    it('Si podemos navegar con la navbar a la home', function() {
      cy.visit('/pet/1')
        cy.get('nav a').first().click()
      cy.url().should('include', '/')
    })
    it('los usuarios no registrados ven el login', function() {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})
