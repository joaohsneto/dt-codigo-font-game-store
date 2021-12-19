const express = require('express');
const statuscode = require('http-status-codes');
const { createUser } = require('./controllers/userControllers');
const { createProduct } = require('./controllers/productControllers');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(statuscode.OK).send('FUNCIONOU!')
});

// Cadastrar usuários
app.post('/register', createUser);

app.post('/product', createProduct);

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
