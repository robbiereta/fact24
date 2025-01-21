import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  order_id: {
    type: String,
    required: true
  },
  pos_reference: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
