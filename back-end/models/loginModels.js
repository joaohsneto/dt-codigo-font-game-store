const connect = require('./connections');

const loginUser = async ({ email, password }) => {
  const db = await connect();
  const login = await db.collection('users').findOne({ email, password });
  return login;
};

module.exports = {
  loginUser,
};
