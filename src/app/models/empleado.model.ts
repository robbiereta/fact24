import mongoose, { Schema, Document } from 'mongoose';

export interface IEmpleado extends Document {
  nombreCompleto: string;
  rfc: string;
  curp: string;
  numeroSeguridadSocial: string;
  codigoPostal: string;
  fechaIngreso: Date;
  regimenContratacion: string;
  tipoContrato: string;
  tipoJornada: string;
  salarioBaseCotizacion: number;
  salarioDiarioIntegrado: number;
  periodicidadPago: string;
  riesgoPuesto: string;
  departamento: string;
  puesto: string;
  banco?: string;
  cuentaBancaria?: string;
  correoElectronico: string;
  telefono: string;
  createdAt: Date;
  updatedAt: Date;
}

const EmpleadoSchema = new Schema({
  nombreCompleto: { type: String, required: true },
  rfc: { type: String, required: true, unique: true },
  curp: { type: String, required: true, unique: true },
  numeroSeguridadSocial: { type: String, required: true, unique: true },
  codigoPostal: { type: String, required: true },
  fechaIngreso: { type: Date, required: true },
  regimenContratacion: { type: String, required: true },
  tipoContrato: { type: String, required: true },
  tipoJornada: { type: String, required: true },
  salarioBaseCotizacion: { type: Number, required: true },
  salarioDiarioIntegrado: { type: Number, required: true },
  periodicidadPago: { type: String, required: true },
  riesgoPuesto: { type: String, required: true },
  departamento: { type: String, required: true },
  puesto: { type: String, required: true },
  banco: { type: String },
  cuentaBancaria: { type: String },
  correoElectronico: { type: String, required: true },
  telefono: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.models.Empleado || mongoose.model<IEmpleado>('Empleado', EmpleadoSchema);
