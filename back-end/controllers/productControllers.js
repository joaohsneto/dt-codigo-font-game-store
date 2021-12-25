const service = require('../services/productServices');
const statusCode = require('http-status-codes');

const createProduct = async (req, res) => {
  const { name, price, quantity, image } = req.body;
  const { id } = await service.createProduct({ name, price, quantity, image });
  return res.status(statusCode.CREATED).json({ _id: id, name, price, quantity, image });
};

const getAllProducts = async (_req, res) => {
  const allproducts = await service.getAllProducts();
  return res.status(statusCode.OK).json(allproducts);
};

const updateQuantity = async (req, res) => {
  const { quantity } = req.body;
  const { id } = req.params;
  const update = await service.updateQuantity({ quantity }, id)
  return res.status(statusCode.OK).json(update);
};

module.exports = {
  createProduct,
  getAllProducts,
  updateQuantity,
};