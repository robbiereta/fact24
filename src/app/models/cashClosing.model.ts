import mongoose, { Schema, Document } from 'mongoose';

export interface ICashClosing extends Document {
  date: Date;
  totalAmount: number;
  receiptCount: number;
  employeeSummary: any;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CashClosingSchema = new Schema({
  date: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  receiptCount: { type: Number, required: true },
  employeeSummary: { type: Schema.Types.Mixed, required: true },
  notes: { type: String }
}, {
  timestamps: true
});

export default mongoose.model<ICashClosing>('CashClosing', CashClosingSchema);
