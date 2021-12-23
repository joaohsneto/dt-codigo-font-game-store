const connect = require('./connections');

const createProduct = async ({name, price, quantity, image}) => {
  const db = await connect();
  const { insertedId: id } = await db.collection('products').insertOne({ name, price, quantity, image });
  return { id, name, price, quantity, image };
};

const getAllProducts = async () => {
  const db = await connect();
  const allProducts = db.collection('products').find().toArray();
  return allProducts;
};

module.exports = {
  createProduct,
  getAllProducts,
};