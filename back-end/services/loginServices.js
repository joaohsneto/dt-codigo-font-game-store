const model = require('../models/loginModels');
const { createToken } = require('../middleware/tokenGeneration');
const CryptoJS = require('crypto-js');

const loginUser = async ({ email, password }) => {
  const encryptedPassword = CryptoJS.MD5(password).toString();
  const login = await model.loginUser({ email, password: encryptedPassword });
  if (!login) return { message: 'Usuário não cadastrado!' };
  const token = createToken(login);
  const userWithtoken = { ...login, token };
  return userWithtoken;
};

module.exports = {
  loginUser,
};