import mongoose, { Schema, Document } from 'mongoose';

export interface IDatosNegocio extends Document {
  razonSocial: string;
  rfc: string;
  regimenFiscal: string;
  codigoPostal: string;
  registroPatronal: string;
  curp: string;
  direccion?: any;
  telefono?: string;
  correoElectronico?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DatosNegocioSchema = new Schema({
  razonSocial: { type: String, required: true },
  rfc: { type: String, required: true },
  regimenFiscal: { type: String, required: true },
  codigoPostal: { type: String, required: true },
  registroPatronal: { type: String, required: true },
  curp: { type: String, required: true },
  direccion: { type: Schema.Types.Mixed },
  telefono: { type: String },
  correoElectronico: { type: String }
}, {
  timestamps: true
});

export default mongoose.model<IDatosNegocio>('DatosNegocio', DatosNegocioSchema);
