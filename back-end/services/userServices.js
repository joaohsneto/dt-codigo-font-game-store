const model = require('../models/userModels');

const createUser = async ({email, password}) => {
  const create = await model.createUser({email, password});
  return create;
};

module.exports = {
  createUser,
};
