const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET_KEY;

const jwtConfig = {
  expiresIn: "7d",
  algorithm: "HS256",
};

const createToken = (payload) => jwt.sign({ data: payload }, SECRET, jwtConfig);

module.exports = {
  createToken,
};
