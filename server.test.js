const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  test('retorna uma mensagem de boas-vindas', async () => {
    const resposta = await request(app).get('/');

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body).toEqual({ mensagem: 'Bem-vindo à API' });
  });
});

describe('POST /usuarios', () => {
  test('cria um usuário válido', async () => {
    const resposta = await request(app)
      .post('/usuarios')
      .send({ nome: 'Ana', email: 'ana@example.com' });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body.usuario).toEqual({
      nome: 'Ana',
      email: 'ana@example.com',
    });
  });

  test('recusa usuário sem nome', async () => {
    const resposta = await request(app)
      .post('/usuarios')
      .send({ email: 'ana@example.com' });

    expect(resposta.statusCode).toBe(400);
    expect(resposta.body).toEqual({ erro: 'O nome é obrigatório' });
  });
});