const model = require('../models/userModels');
const { createToken } = require('../middleware/tokenGeneration');

const createUser = async ({email, password}) => {
  const create = await model.createUser({email, password});
  const token = createToken(create);
  const userWithToken = { ...create, token};
  return userWithToken;
};

module.exports = {
  createUser,
};
