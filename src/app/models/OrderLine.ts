import mongoose from 'mongoose';

const orderLineSchema = new mongoose.Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  product_id: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price_unit: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const OrderLine = mongoose.models.OrderLine || mongoose.model('OrderLine', orderLineSchema);

export default OrderLine;
