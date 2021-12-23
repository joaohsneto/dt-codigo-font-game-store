const service = require('../services/userServices');
const statusCode = require('http-status-codes');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const { id, token } = await service.createUser({ email, password });
  return res.status(statusCode.CREATED).json({ _id: id, email, password, token});
};

module.exports = {
  createUser,
};
