describe('Create New user',() => {
    it('Succesfully create name', () => {
        let user = {
            "name": "Eduwork",
            "job": "Education"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).to.eq(user.name);
        expect(response.body.job).eq(user.job);
        })
    })
})