import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  email: string;
  phone?: string;
  address?: any;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: Schema.Types.Mixed }
}, {
  timestamps: true
});

export default mongoose.model<ICustomer>('Customer', CustomerSchema);
