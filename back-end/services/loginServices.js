const model = require('../models/loginModels');
const { createToken } = require('../middleware/tokenGeneration');
const { validatePassword } = require('../middleware/validationsRules');

const loginUser = async ({ email, password }) => {
  const login = await model.loginUser({ email, password });
  const verifyPassword = validatePassword(login, password);
  if (!verifyPassword) return { message: 'Usuário não cadastrado ou Senha incorreta!'};
  const token = createToken(login);
  const userWithtoken = { ...login, token };
  return userWithtoken;
};

module.exports = {
  loginUser,
};