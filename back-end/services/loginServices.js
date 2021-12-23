const model = require('../models/loginModels');
const { createToken } = require('../middleware/tokenGeneration');
const CryptoJS = require('crypto-js');

const loginUser = ({ email, password }) => {
  const encryptedPassword = CryptoJS.MD5(password).toString();
  const login = model.loginUser({ email, password: encryptedPassword });
  const token = createToken(login);
  const userWithtoken = { ...login, token };
  return userWithtoken;
};

module.exports = {
  loginUser,
};