const express = require('express');
const statuscode = require('http-status-codes');
const { createUser } = require('./controllers/userControllers');
const { createProduct, getAllProducts } = require('./controllers/productControllers');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.status(statuscode.OK).send('FUNCIONOU!')
});

// Cadastrar usuários
app.post('/register', createUser);

// Cadastrar produtos
app.post('/products', createProduct);

// Listar todos os produtos
app.get('/products', getAllProducts); 

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
