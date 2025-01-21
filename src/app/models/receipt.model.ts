import mongoose, { Schema, Document } from 'mongoose';
import { IEmpleado } from './empleado.model';

export interface IReceipt extends Document {
  date: Date;
  amount: number;
  status: string;
  items?: any;
  empleadoId: IEmpleado['_id'];
  cashClosingId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReceiptSchema = new Schema({
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  status: { type: String, default: 'completed' },
  items: { type: Schema.Types.Mixed },
  empleadoId: { type: Schema.Types.ObjectId, ref: 'Empleado', required: true },
  cashClosingId: { type: String, ref: 'CashClosing' }
}, {
  timestamps: true
});

export default mongoose.model<IReceipt>('Receipt', ReceiptSchema);
