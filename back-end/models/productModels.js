const connect = require('./connections');
const { ObjectId } = require('mongodb');

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

const updateQuantity = async ({ quantity }, id) => {
  const db = await connect();
  const update = await db.collection('products').updateOne({ _id: ObjectId(id) }, { $set:{ quantity } });
  return update;
};

module.exports = {
  createProduct,
  getAllProducts,
  updateQuantity
};