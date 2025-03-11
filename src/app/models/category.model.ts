import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String }
}, {
  timestamps: true
});

export default mongoose.model<ICategory>('Category', CategorySchema);
