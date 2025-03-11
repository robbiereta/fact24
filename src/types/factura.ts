export interface Partida {
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
      Importe: string;
      Impuesto: string;
      TipoFactor: string;
      TasaOCuota: string;
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

