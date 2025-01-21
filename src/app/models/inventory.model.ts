import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from './product.model';

export interface IInventory extends Document {
  quantity: number;
  productId: IProduct['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const InventorySchema = new Schema({
  quantity: { type: Number, required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true, unique: true }
}, {
  timestamps: true
});

export default mongoose.model<IInventory>('Inventory', InventorySchema);
