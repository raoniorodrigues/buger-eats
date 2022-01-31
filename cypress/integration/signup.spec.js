import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'

describe('Signup', () => {

  // beforeEach(() => {
  //   cy.fixture("deliver").then(function (d) {
  //     this.deliver = d;
  //   })
  // });

  it('User should be deliver', function () {

    var deliver = signupFactory.deliver()
    

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalConstantShouldBe(expectedMessage)
  });

  it('incorrect document', function () {
    
    //altera o cpf inválido
    var deliver = signupFactory.deliver()
    deliver.cpf = 'as3d213as21d'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe("Oops! CPF inválido")
  });

  it('incorrect email', function () {

    //altera o email inválido
    var deliver = signupFactory.deliver()
    deliver.email = 'raoni.rodriguess.com'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe("Oops! Email com formato inválido.")
  });

  context('Required Fields - Primary Approach', function() {
    
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP'  },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH'  }
    ]

    before(function() {
      signup.go()
      signup.submit()
    })

    messages.forEach(function(msg){
      it(`${msg.field} is required`, function() {
          signup.alertMessageShouldBe(msg.output)
      });
    });
  });

  it('Required fields - Secondary Approach', function () {

    //altera o email inválido
    var deliver = signupFactory.deliver()

    signup.go()
    signup.submit()
    signup.alertMessageShouldBe("É necessário informar o nome")
    signup.alertMessageShouldBe("É necessário informar o CPF")
    signup.alertMessageShouldBe("É necessário informar o email")
    signup.alertMessageShouldBe("É necessário informar o CEP")
    signup.alertMessageShouldBe("É necessário informar o número do endereço")
    signup.alertMessageShouldBe("Selecione o método de entrega")

  });
});
