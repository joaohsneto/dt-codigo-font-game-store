const connect = require('./connections');

const findUserByEmail = async (email) => {
  const db = await connect();
  const findByEmail = await db.collection('users').findOne(email);
  return findByEmail;
};

module.exports = {
  findUserByEmail,
};
