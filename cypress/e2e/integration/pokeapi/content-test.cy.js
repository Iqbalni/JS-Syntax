describe('Automation API with Pokeapi', ()=> {
    it('Succesfully validate content-body',()=> {
        cy.request('https://pokeapi.co/api/v2/pokemon/squirtle').as('squirtle')
        cy.get('@squirtle').its('body').should('include', {name : 'squirtle'})
         })
     it('Succesfully validate content-body-tugas', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/ability').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.results[6].name).to.eq("limber");
        expect(response.body.results[6].url).to.eq("https://pokeapi.co/api/v2/ability/7/");   
        })
    })
})