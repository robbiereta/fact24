import { Partida, Emisor, Receptor } from '../types/factura';

interface FacturaMakerProps {
  notasPartidas: Partida[];
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
}: FacturaMakerProps) {
  return {
    "Version": "4.0",
    "Serie": "A",
    "Folio": "1",
    "Fecha": new Date().toISOString(),
    "Sello": "",
    "FormaPago": "01",
    "NoCertificado": "",
    "Certificado": "",
    "SubTotal": subtotal.toFixed(2),
    "Moneda": "MXN",
    "Total": totalConImpuestos.toFixed(2),
    "TipoDeComprobante": "I",
    "MetodoPago": "PUE",
    "Exportacion": "01",
    "LugarExpedicion": "87000",
    "Emisor": foza,
    "Receptor": rerr,
    "Conceptos": notasPartidas.map(({ ImporteRealConImp, ...rest }) => rest),
    "Impuestos": {
      "TotalImpuestosTrasladados": iva.toFixed(2),
      "Traslados": [
        {
          "Base": Number(totalConImpuestos).toFixed(2),
          "Importe": Number(iva).toFixed(2),
          "Impuesto": "002",
          "TasaOCuota": "0.160000",
          "TipoFactor": "Tasa"
        }
      ]
    }
  };
}
