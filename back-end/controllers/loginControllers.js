const service = require('../services/loginServices');
const statusCode = require('http-status-codes');

const loginUser = async (req, res) => {
  try {
    const { body: loginInfo } = req;
    const result = await service.loginUser(loginInfo);
    const { message } = result;

    return message
      ? res.status(statusCode.NOT_FOUND).json({ message })
      : res.status(statusCode.OK).json(result); 
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ message: error });
  }
};

module.exports = {
  loginUser,
};