const request = require('supertest');
const app = require('./server');

test('GET /desafio retorna uma mensagem', async () => {
  const resposta = await request(app).get('/desafio');

  expect(resposta.statusCode).toBe(200);
  expect(resposta.body).toEqual({ mensagem: 'Desafio concluído' });
});