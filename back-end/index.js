const express = require('express');
const cors = require('cors');
const statuscode = require('http-status-codes');
const { loginUser } = require('./controllers/loginControllers');
const { createUser } = require('./controllers/userControllers');
const { createProduct, getAllProducts } = require('./controllers/productControllers');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.status(statuscode.OK).send('FUNCIONOU!')
});

// Cadastrar usuários
app.post('/register', createUser);

// Login do usuário
app.post('/login', loginUser);

// Cadastrar produtos
app.post('/products', createProduct);

// Listar todos os produtos
app.get('/products', getAllProducts); 

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
