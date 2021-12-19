const service = require('../services/productServices');
const statusCode = require('http-status-codes');

const createProduct = async (req, res) => {
  const { name, price, quantity, image } = req.body;
  const { id } = await service.createProduct({ name, price, quantity, image });
  return res.status(statusCode.CREATED).json({ _id: id, name, price, quantity, image });
};

module.exports = {
  createProduct,
};