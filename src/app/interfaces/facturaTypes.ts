export interface NotaPartida {
  ClaveProdServ: string;
  ClaveUnidad: string;
  Unidad: string;
  Cantidad: string;
  Descripcion: string;
  ValorUnitario: string;
  Importe: string;
  ImporteRealConImp: string;
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

export interface Emisor {
  Rfc: string;
  Nombre: string;
  RegimenFiscal: string;
}

export interface Receptor {
  Rfc: string;
  Nombre: string;
  DomicilioFiscalReceptor: string;
  RegimenFiscalReceptor: string;
  UsoCFDI: string;
}

export interface Factura {
  Version: string;
  FormaPago: string;
  Serie: string;
  Folio: string;
  Fecha: string;
  MetodoPago: string;
  Sello: string;
  NoCertificado: string;
  Certificado: string;
  SubTotal: string;
  Moneda: string;
  Total: string;
  TipoDeComprobante: string;
  Exportacion: string;
  LugarExpedicion: string;
  Emisor: Emisor;
  Receptor: Receptor;
  Conceptos: Omit<NotaPartida, 'ImporteRealConImp'>[];
  Impuestos: {
    TotalImpuestosTrasladados: string;
    Traslados: Array<{
      Base: string;
      Importe: string;
      Impuesto: string;
      TipoFactor: string;
      TasaOCuota: string;
    }>;
  };
}
