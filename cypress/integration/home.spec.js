import homepage from '../pages/HomePage'

describe('Home Page', () => {
  it('App deve estar online', () => {
    homepage.go()
    homepage.homeExpectedMessage("Seja um parceiro entregador pela Buger Eats")
  });
});
