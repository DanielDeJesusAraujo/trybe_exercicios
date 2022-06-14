const { sum } = require('./sum');

describe('test de soma', () => {
  it('Ao somar 2 e 3 deve retornar 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
