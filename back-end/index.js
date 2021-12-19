const express = require('express');
const statuscode = require('http-status-codes');
const controller = require('./controllers/userControllers');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(statuscode.OK).send('FUNCIONOU!')
});

// Cadastrar usuários
app.post('/register', controller.createUser);

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
