describe('Validate Pokemon Abilities API',()=>{
   it('Validates the response body of abilities', () => {
    cy.request({
                    method: 'GET',
                    url:'https://pokeapi.co/api/v2/pokemon/ditto',
    })
    .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.status).equal(200);
        expect(response.body.abilities[0].ability.name).to.eq('limber')
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')

        expect(response.body.abilities[1].ability.name).to.eq('imposter')
        expect(response.body.abilities[1].ability.url).to.eq('https://pokeapi.co/api/v2/ability/150/')


        expect(response.body.cries.latest).to.eq('https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg')

        expect(response.body.forms[0].name).to.eq('ditto')
        expect(response.body.forms[0].url).to.eq('https://pokeapi.co/api/v2/pokemon-form/132/')
    })
   })
})