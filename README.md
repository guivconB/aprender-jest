# 🧪 Aprender Jest

Repositório de estudo de testes automatizados em JavaScript com **Jest** e **Supertest**, usando uma pequena API **Express 5**.

## O que tem aqui

| Arquivo | O que é |
|---|---|
| `app.js` | Funções puras (`somar`, `subtrair`, `dividir`) para os primeiros testes unitários |
| `app.test.js` | Testes unitários, incluindo o erro de divisão por zero |
| `server.js` | App Express com `GET /`, `POST /usuarios` (valida `nome`) e `GET /desafio` |
| `server.test.js` | Testes de rota com Supertest (sucesso e erro 400) |
| `desafio-404.test.js` | Desafio: rota `GET /desafio` escrita a partir do teste |
| `index.js` | Exemplo mínimo usando `somar` |

O `server.js` exporta o `app` sem chamar `listen`, para o Supertest testar as rotas sem subir um servidor.

## Rodar

```powershell
npm install
npm test
```
