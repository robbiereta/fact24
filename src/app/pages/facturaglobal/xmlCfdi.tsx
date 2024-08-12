'use server'
import { 
    CFDI, CFDIAttributes, Concepto, Emisor, Impuestos, 
    ObjetoImpEnum, Receptor, Relacionado,
  } from '@cfdi/xml';
  
  export default function xmlCfdi() {
      
   const StyleSheet= '/home/dev/cfdi/cfdi-sat/resources/ecc12.xslt'
  const key = `/home/dev/certificados/LAN7008173R5.pem`;
  const cer = `/home/dev/certificados/LAN7008173R5.pem`;
  
  const comprobanteAttribute: CFDIAttributes = {
      Serie: 'E',
      Folio: 'ACACUN-27',
      Fecha: '2014-07-08T12:16:50',
      NoCertificado:'',
      Certificado: '',
      SubTotal: '5000.00',
      Moneda: 'MXN',
      Total: '5000.00',
      LugarExpedicion: '87000',
      TipoDeComprobante: 'N',
      Exportacion: '01'
  };
  
  const cfd = new CFDI(comprobanteAttribute, {
      debug: true,
      xslt: {
        path: styleSheet,
      },
  });
  cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });
  
  cfd.informacionGlobal({
      Periodicidad: '1',
      Meses: '1',
      Año: '2',
  });
  
  const emisor = new Emisor({
      Rfc: 'TCM970625MB1',
      Nombre: 'FACTURACION MODERNA SA DE CV',
      RegimenFiscal: 601,
      FacAtrAdquirente: 'asdasd',
  });
  cfd.emisor(emisor);

}