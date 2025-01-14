'use client'
import { NotaPartida, Factura, Emisor, Receptor } from '../interfaces/facturaTypes';

interface FacturaMakerProps {
  notasPartidas: NotaPartida[];
  foza: Emisor;
  rerr: Receptor;
  subtotal: number;
  totalConImpuestos: number;
  iva: number;
}

export function createFactura({
  notasPartidas,
  foza,
  rerr,
  subtotal,
  totalConImpuestos,
  iva
}: FacturaMakerProps): Factura {
  return {
    Version: "4.0",
    FormaPago: "01",
    Serie: "RL",
    Folio: "7",
    Fecha: "2024-12-21",
    MetodoPago: "PUE",
    Sello: "",
    NoCertificado: "",
    Certificado: "",
    SubTotal: subtotal.toFixed(2),
    Moneda: "MXN",
    Total: totalConImpuestos.toFixed(2),
    TipoDeComprobante: "I",
    Exportacion: "01",
    LugarExpedicion: "87000",
    Emisor: foza,
    Receptor: rerr,
    Conceptos: notasPartidas.map(({ImporteRealConImp, ...rest}) => rest),
    Impuestos: {
      TotalImpuestosTrasladados: iva.toFixed(2),
      Traslados: [
        {
          Base: Number(totalConImpuestos).toFixed(2),
          Importe: Number(iva).toFixed(2),
          Impuesto: "002",
          TipoFactor: "Tasa",
          TasaOCuota: "0.160000",
        }
      ]
    }
  };
}
