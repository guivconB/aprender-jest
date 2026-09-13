const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.json({ mensagem: 'Bem-vindo à API' });
});

app.post('/usuarios', (req, res) => {
	if (typeof req.body.nome !== 'string' || req.body.nome.trim() === '') {
		return res.status(400).json({ erro: 'O nome é obrigatório' });
	}

	res.status(201).json({ usuario: req.body });
});

app.get('/desafio', (req, res) => {
  res.status(200).json({ mensagem: 'Desafio concluído' });
});

module.exports = app;