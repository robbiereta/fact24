'use client'
import swConnector from "@/app/libComponents/swConector"

function makeNomina(empleado:any,datos:any) {
    let fecha=new Date();
    let percepciones=((empleado.SubTotal/7)*datos.diasTrabajados).toFixed(2)
    let deducciones= ((empleado.Descuento/7)*datos.diasTrabajados).toFixed(2)
    let od=((empleado.Complemento.Nomina12.Deducciones.TotalOtrasDeducciones/7)*datos.diasTrabajados)
    let ir=((empleado.Complemento.Nomina12.Deducciones.TotalImpuestosRetenidos/7)*datos.diasTrabajados)
    let TotalDeducciones=od+ir
    
        let nomina= {
       "Version": "4.0",
       "Serie": "bvic",
       "Folio": ""+empleado.Folio+"",
       "Fecha":""+fecha.toISOString().split('T')[0]+"",
       "Sello": "",
       "NoCertificado": "",
       "Certificado": "",
       "SubTotal": ""+percepciones+"",
       "Descuento": ""+TotalDeducciones.toFixed(2)+"",
       "Moneda": "MXN",
       "Total": ""+(Number(percepciones)-TotalDeducciones).toFixed(2)+"",
       "TipoDeComprobante": "N",
       "Exportacion": "01",
       "MetodoPago": "PUE",
       "LugarExpedicion": ""+empleado.LugarExpedicion+"",
       "Emisor": {
           "Rfc": empleado.Emisor.Rfc,
           "Nombre": empleado.Emisor.Nombre,
           "RegimenFiscal": empleado.Emisor.RegimenFiscal,
       },
       "Receptor": {
           "Rfc": empleado.Receptor.Rfc,
           "Nombre": empleado.Receptor.Nombre,
           "DomicilioFiscalReceptor": empleado.Receptor.DomicilioFiscalReceptor,
           "RegimenFiscalReceptor": empleado.Receptor.RegimenFiscalReceptor,
           "UsoCFDI": empleado.Receptor.UsoCFDI,
       },           
       "Conceptos": 
      empleado.Conceptos.map((concepto:any) => {
   
          return {
              "ClaveProdServ": concepto.ClaveProdServ,
              "Cantidad": concepto.Cantidad,
              "ClaveUnidad": concepto.ClaveUnidad,
              "Descripcion": concepto.Descripcion,
              "ValorUnitario": percepciones,
              "Importe": percepciones,
              "Descuento": TotalDeducciones.toFixed(2),
              "ObjetoImp": concepto.ObjetoImp,
               
          }
            }),
       "Complemento": {
           "Any":[
               {
                   "Nomina12:Nomina": {
                       "Version": "1.2",
                       "TipoNomina": "E",
                       "FechaPago": ""+datos.fechaPago+"",
                       "FechaInicialPago": ""+datos.fechaInicialPago+"",
                       "FechaFinalPago": ""+datos.fechaFinalPago+"",
                       "NumDiasPagados": ""+datos.diasTrabajados+"", 
                       "TotalPercepciones": ""+percepciones+"",
                       "TotalDeducciones": ""+TotalDeducciones.toFixed(2)+"",
                       "Emisor": {
                           "RegistroPatronal": ""+empleado.Complemento.Nomina12.Emisor.RegistroPatronal+"",
                           "RfcPatronOrigen": ""+empleado.Complemento.Nomina12.Emisor.RfcPatronOrigen+"",
                           "Curp": ""+empleado.Complemento.Nomina12.Emisor.Curp+"",
                       },
                       "Receptor": {
                           "Curp": ""+empleado.Complemento.Nomina12.Receptor.Curp+"",
                           "NumSeguridadSocial":""+empleado.Complemento.Nomina12.Receptor.NumSeguridadSocial+"",
                           "FechaInicioRelLaboral": ""+empleado.Complemento.Nomina12.Receptor.FechaInicioRelLaboral+"",
                           "Antigüedad": ""+empleado.Complemento.Nomina12.Receptor.Antiguedad+"",
                           "TipoContrato": ""+empleado.Complemento.Nomina12.Receptor.TipoContrato+"",
                           "TipoJornada": ""+empleado.Complemento.Nomina12.Receptor.TipoJornada+"",
                           "TipoRegimen": ""+empleado.Complemento.Nomina12.Receptor.TipoRegimen+"",
                           "NumEmpleado": ""+empleado.Complemento.Nomina12.Receptor.NumEmpleado+"",
                           "Departamento": ""+empleado.Complemento.Nomina12.Receptor.Departamento+"",
                           "Puesto": ""+empleado.Complemento.Nomina12.Receptor.Puesto+"",
                           "RiesgoPuesto": ""+empleado.Complemento.Nomina12.Receptor.RiesgoPuesto+"",
                           "PeriodicidadPago": "99",
                           "SalarioBaseCotApor": ""+empleado.Complemento.Nomina12.Receptor.SalarioBaseCotApor+"",
                           "SalarioDiarioIntegrado": ""+empleado.Complemento.Nomina12.Receptor.SalarioDiarioIntegrado+"",
                           "ClaveEntFed": ""+empleado.Complemento.Nomina12.Receptor.ClaveEntFed+"",
                       },
                       "Percepciones": {
                           "TotalSueldos": ""+percepciones+"",
                           "TotalGravado": ""+percepciones+"",
                           "TotalExento": ""+empleado.Complemento.Nomina12.Percepciones.TotalExento+"",
                           "Percepcion": 
                           empleado.Complemento.Nomina12.Percepciones.Percepcion.map((percepcion:any) => {
                               return {

                                   "TipoPercepcion": ""+percepcion.TipoPercepcion+"",
                                   "Clave": ""+percepcion.Clave+"",
                                   "Concepto": ""+percepcion.Concepto+"",
                                   "ImporteGravado": ""+percepciones+"",
                                   "ImporteExento": ""+percepcion.ImporteExento+"",    
                                }
                           })
                           
                       },
                       "Deducciones": {
                           "TotalOtrasDeducciones": ""+od.toFixed(2)+"",
                           "TotalImpuestosRetenidos":""+ir.toFixed(2)+"",
                           "Deduccion":
                           empleado.Complemento.Nomina12.Deducciones.Deduccion.map((deduccion:any) => {
                               return {
                                   "TipoDeduccion": ""+deduccion.TipoDeduccion+"",
                                   "Clave": ""+deduccion.Clave+"",
                                   "Concepto": ""+deduccion.Concepto+"",
                                   "Importe": ""+((deduccion.Importe/7)*datos.diasTrabajados).toFixed(2)+"",
                               }
                           })
                       }               
                   }
               }
           ]
       }              
                   }   
           
   
   //  let xml=toXML(nomina,config)
   //     console.log(xml)
     
   
        let response = swConnector(nomina) 
                   return response
       } 

       export default makeNomina