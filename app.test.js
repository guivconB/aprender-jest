const { somar, subtrair, dividir } = require('./app');

describe('funções matemáticas', () => {
  test('soma dois números', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('subtrai dois números', () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  test('divide dois números', () => {
    expect(dividir(12, 3)).toBe(4);
  });

  test('impede divisão por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Não é possível dividir por zero');
  });
});