// / <reference types ="cypress"/>
describe("Buscar Dispositivos", () => {

    it('Buscar dispositivo específico', () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/3"
        })
            .then((resultado) => {
                // será executado quando a requisição responder
                expect(resultado.status).equal(200);
                expect(resultado.body.id).equal('3');
                // expect(resultado.body.id).not.empty;
                expect(resultado.body.name).equal('Apple iPhone 12 Pro Max');
            })

    })

    it('Buscar dispositivo inexistente', () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/iddofinotti",
            failOnStatusCode: false
        })
            .then((resultado) => {
                // será executado quando a requisição responder
                expect(resultado.status).equal(404);
                expect(resultado.body.error).equal('Oject with id=iddofinotti was not found.')
                
            })

    })
})