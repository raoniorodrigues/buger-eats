var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    
    deliver: function () {

        var firstName = faker.name.firstName()
        var lasttName = faker.name.lastName()

        var data = {
            name: firstName,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11933400902',
            address: {
                postalcode: '06325040',
                street: 'Rua Guanabara',
                number: '14',
                details: 'Apartamento 31',
                district: 'Conjunto Habitacional Presidente Castelo Branco',
                city: 'Carapicuíba/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}