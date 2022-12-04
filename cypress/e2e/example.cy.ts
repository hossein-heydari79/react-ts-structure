///<reference types="cypress" />

describe('layout page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display title', () => {
    cy.get('p').should('exist').should('contain', 'hossein')
  })
})
