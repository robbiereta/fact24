'use server'
import swConnector from "@/app/libComponents/swConector"

function makeNomina(empleado,datos) {
    let fecha=new Date();
    let nomina= {
       "Version": "4.0",
       "Serie": "bvic",
       "Folio": ""+empleado.Folio+"",
       "Fecha":""+fecha.toISOString().split('T')[0]+"",
       "Sello": "",
       "NoCertificado": "",
       "Certificado": "",
       "SubTotal": ""+empleado.SubTotal+"",
       "Descuento": ""+empleado.Descuento+"",
       "Moneda": "MXN",
       "Total": ""+empleado.Total+"",
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
              "ValorUnitario": concepto.ValorUnitario,
              "Importe": concepto.Importe,
              "Descuento": concepto.Descuento,
              "ObjetoImp": concepto.ObjetoImp,
               
          }
            }),
       "Complemento": {
           "Any":[
               {
                   "Nomina12:Nomina": {
                       "Version": "1.2",
                       "TipoNomina": "O",
                       "FechaPago": ""+datos.fechaPago+"",
                       "FechaInicialPago": ""+datos.fechaInicialPago+"",
                       "FechaFinalPago": ""+datos.fechaFinalPago+"",
                       "NumDiasPagados": ""+datos.diasTrabajados+"",  "TotalPercepciones": ""+empleado.Complemento.Nomina12.TotalPercepciones+"",
                       "TotalDeducciones": ""+empleado.Complemento.Nomina12.TotalDeducciones+"",
                       "TotalOtrosPagos": ""+empleado.Complemento.Nomina12.TotalOtrosPagos+"",
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
                           "PeriodicidadPago": ""+empleado.Complemento.Nomina12.Receptor.PeriodicidadPago+"",
                           "SalarioBaseCotApor": ""+empleado.Complemento.Nomina12.Receptor.SalarioBaseCotApor+"",
                           "SalarioDiarioIntegrado": ""+empleado.Complemento.Nomina12.Receptor.SalarioDiarioIntegrado+"",
                           "ClaveEntFed": ""+empleado.Complemento.Nomina12.Receptor.ClaveEntFed+"",
                       },
                       "Percepciones": {
                           "TotalSueldos": ""+empleado.Complemento.Nomina12.Percepciones.TotalSueldos+"",
                           "TotalGravado": ""+empleado.Complemento.Nomina12.Percepciones.TotalGravado+"",
                           "TotalExento": ""+empleado.Complemento.Nomina12.Percepciones.TotalExento+"",
                           "Percepcion": 
                           empleado.Complemento.Nomina12.Percepciones.Percepcion.map((percepcion:any) => {
                               return {
                                   "TipoPercepcion": ""+percepcion.TipoPercepcion+"",
                                   "Clave": ""+percepcion.Clave+"",
                                   "Concepto": ""+percepcion.Concepto+"",
                                   "ImporteGravado": ""+percepcion.ImporteGravado+"",
                                   "ImporteExento": ""+percepcion.ImporteExento+"",    
                                }
                           })
                           
                       },
                       "Deducciones": {
                           "TotalOtrasDeducciones": ""+empleado.Complemento.Nomina12.Deducciones.TotalOtrasDeducciones+"",
                           "TotalImpuestosRetenidos":""+empleado.Complemento.Nomina12.Deducciones.TotalImpuestosRetenidos+"",
                           "Deduccion":
                           empleado.Complemento.Nomina12.Deducciones.Deduccion.map((deduccion:any) => {
                               return {
                                   "TipoDeduccion": ""+deduccion.TipoDeduccion+"",
                                   "Clave": ""+deduccion.Clave+"",
                                   "Concepto": ""+deduccion.Concepto+"",
                                   "Importe": ""+deduccion.Importe+"",
                               }
                           })
                       },
   
               "OtrosPagos": 
                   empleado.Complemento.Nomina12.OtrosPagos.map((otro:any) => {
                       return {
                           "TipoOtroPago": ""+otro.TipoOtroPago+"",
                           "Clave": ""+otro.Clave+"",
                           "Concepto": ""+otro.Concepto+"",
                           "Importe": ""+otro.Importe+"",
                       "SubsidioAlEmpleo": {
                           "SubsidioCausado": ""+otro.SubsidioAlEmpleo.SubsidioCausado+"",
                       } ,
                        }
                   })
                                     
                   }
               }
           ]
       }              
                   }   
           
   
   //  let xml=toXML(nomina,config)
   //     console.log(xml)
     
   
        let token = swConnector(nomina) 
                   return token
       } 

       export default makeNomina