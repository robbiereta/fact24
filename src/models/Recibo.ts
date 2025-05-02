import mongoose, { Schema, Document } from 'mongoose';

interface LineaVenta {
  ClaveProdServ: string;
  ClaveUnidad: string;
  NoIdentificacion: string;
  Unidad: string;
  Cantidad: number;
  Descripcion: string;
  ValorUnitario: string;
  Importe: string;
  ImporteRealConImp: number;
  ObjetoImp: string;
  Impuestos: {
    Traslados: Array<{
      Base: string;
      Impuesto: string;
      TipoFactor: string;
      TasaOCuota: string;
      Importe: string;
    }>;
  };
}

export interface IRecibo {
  _id?: string;
  folio_venta?: string;
  date?: string;
  client_id?: string;
  cliente?: string;
  total_amount?: number;
  total?: number;
  estatus?: string;
  facturada?: boolean;
  observaciones?: string;
  items?: Array<{
    description: string;
    quantity: string | number;
    unitPrice: number;
    total: number;
  }>;
  payment_method?: string;
}

const ReciboSchema: Schema = new Schema({
  folio_venta: {
    type: String,
    required: true,
    unique: true
  },
  fecha: {
    type: String,
    required: true
  },
  cliente: {
    type: String,
    required: true
  },
  lineas_venta: [{
    ClaveProdServ: {
      type: String,
      required: true
    },
    ClaveUnidad: {
      type: String,
      required: true
    },
    NoIdentificacion: {
      type: String,
      required: true
    },
    Unidad: {
      type: String,
      required: true
    },
    Cantidad: {
      type: Number,
      required: true
    },
    Descripcion: {
      type: String,
      required: true
    },
    ValorUnitario: {
      type: String,
      required: true
    },
    Importe: {
      type: String,
      required: true
    },
    ImporteRealConImp: {
      type: Number,
      required: true
    },
    ObjetoImp: {
      type: String,
      required: true
    },
    Impuestos: {
      Traslados: [{
        Base: {
          type: String,
          required: true
        },
        Impuesto: {
          type: String,
          required: true
        },
        TipoFactor: {
          type: String,
          required: true
        },
        TasaOCuota: {
          type: String,
          required: true
        },
        Importe: {
          type: String,
          required: true
        }
      }]
    }
  }],
  total: {
    type: Number,
    required: true
  },
  estatus: {
    type: String,
    required: true,
    enum: ['pagado', 'pendiente', 'cancelado'],
    default: 'pendiente'
  },
  anticipo: {
    type: Number,
    required: true,
    default: 0
  },
  observaciones: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Recibo || mongoose.model<IRecibo>('Recibo', ReciboSchema);
