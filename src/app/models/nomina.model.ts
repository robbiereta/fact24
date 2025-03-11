import mongoose, { Schema, Document } from 'mongoose';
import { IEmpleado } from './empleado.model';

export interface INomina extends Document {
  employeeId: string;
  employeeName: string;
  totalAmount: number;
  fechaPago: string;
  fechaInicialPago: string;
  fechaFinalPago: string;
  diasTrabajados: number;
  status: string;
  stampedAt?: Date;
  empleadoId: IEmpleado['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const NominaSchema = new Schema({
  employeeId: { type: String, required: true },
  employeeName: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  fechaPago: { type: String, required: true },
  fechaInicialPago: { type: String, required: true },
  fechaFinalPago: { type: String, required: true },
  diasTrabajados: { type: Number, required: true },
  status: { type: String, required: true },
  stampedAt: { type: Date },
  empleadoId: { type: Schema.Types.ObjectId, ref: 'Empleado', required: true }
}, {
  timestamps: true
});

export default mongoose.model<INomina>('Nomina', NominaSchema);
