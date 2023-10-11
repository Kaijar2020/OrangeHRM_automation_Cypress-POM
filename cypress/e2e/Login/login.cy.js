//open url

describe('Login function automation of Orange HRM project',()=>{
    it('open url',()=>{
        cy.visit(Cypress.env('URL'))
    })
})