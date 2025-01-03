import mongoose, { Schema, Document } from 'mongoose';

export interface IRecibo extends Document {
  fecha: Date;
  cliente: string;
  items: Array<{
    descripcion: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
  }>;
  total: number;
  metodoPago: string;
  estado: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReciboSchema: Schema = new Schema({
  fecha: {
    type: Date,
    required: true,
    default: Date.now
  },
  cliente: {
    type: String,
    required: true
  },
  items: [{
    descripcion: {
      type: String,
      required: true
    },
    cantidad: {
      type: Number,
      required: true,
      min: 0
    },
    precioUnitario: {
      type: Number,
      required: true,
      min: 0
    },
    subtotal: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  total: {
    type: Number,
    required: true,
    min: 0
  },
  metodoPago: {
    type: String,
    required: true,
    enum: ['efectivo', 'tarjeta', 'transferencia']
  },
  estado: {
    type: String,
    required: true,
    enum: ['pendiente', 'pagado', 'cancelado'],
    default: 'pendiente'
  }
}, {
  timestamps: true
});

export default mongoose.model<IRecibo>('Recibo', ReciboSchema);
