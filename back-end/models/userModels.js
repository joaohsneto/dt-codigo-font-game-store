const connect = require('./connections');

const createUser = async ({email, password}) => {
  const db = await connect();
  const { insertedId: id } = await db.collection('users').insertOne({ email, password });
  return { id, email, password };
};

module.exports = {
  createUser,
};
