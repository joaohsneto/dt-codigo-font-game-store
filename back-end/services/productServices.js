const model = require('../models/productModels');

const createProduct = async ({name, price, quantity, image}) => {
  const create = await model.createProduct({name, price, quantity, image});
  return create;
};

const getAllProducts = async () => {
  const allProducts = model.getAllProducts();
  return allProducts;
};

module.exports = {
  createProduct,
  getAllProducts,
};
