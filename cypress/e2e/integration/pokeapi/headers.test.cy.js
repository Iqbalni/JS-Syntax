describe('Validate Header',()=>{
    it('Succesfully  validate content-type',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    })
    it('Succesfully validate Content-Length',()=> {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-length').should('include', '2023')
    })
    it('Succesfully validate Connection',()=> {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('connection').should('include', 'keep-alive')
    })
    it('Succesfully validate Cache-Control',()=> {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('cache-control').should('include', 'public, max-age=86400, s-maxage=86400')
    })
        it('Succesfully validate etag',()=> {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('etag').should('include', 'W/"5e0d-5fWRaxlbpjY4eNJNjWKLzaZ/amE"')
    })
        it('Succesfully validate strict-transport-security',()=> {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('strict-transport-security').should('include', 'max-age=31556926')
    })
     it('Succesfully validate x-country-code',()=> {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('x-country-code').should('include', 'US')
    })
})