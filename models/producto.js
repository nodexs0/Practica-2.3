import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
});

const Product = mongoose.model('Producto', productSchema);

export default Product;
