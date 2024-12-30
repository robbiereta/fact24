'use client'
import makeNomina from "./makeNomina";
import makeNomina_Finiquito from "./makeNomina_finiquito";
import makeNomina_PrimaV from "./makeNomina_PrimaV";
import dbConnect from '@/lib/mongodb';
import Folio from '@/models/Folio';
import empleados from './empleados.json'
function NominaV1(empleado:any,datos:any) {
 
  
let fecha=new Date();
let RegistroPatronal= "F0546946107"       

let totalOtrasDeducciones=43.61
//empleado.Complemento.Nomina12.Deducciones.TotalOtrasDeducciones
let TotalImpuestosRetenidos=20.66
//isr

//empleado.Complemento.Nomina12.Deducciones.TotalImpuestosRetenidos
let Antiguedad="P82W"
let numDiasPagados="7"
let fechaPago="2024-08-03"
let FechaInicialPago="2024-07-28"
let FechaFinalPago="2024-08-04"
let totalOtrosPagos="0"
let curpPatron="RERR600822HTSTSB01"
let RfcPatronOrigen="RERR6008226N5"
let fechaActual="2024-12-20"

let OtrosPagos =  { 

    "OtrosPagos": [
       {
         "TipoOtroPago": "002",
         "Clave": "002",
         "Concepto": "Subsidio",
         "Importe": "0.00",
         "SubsidioAlEmpleo": {
           "SubsidioCausado": "89.81"
         }
       }
     ]
   }

   let emisor={"Emisor": {
                        "RegistroPatronal": ""+RegistroPatronal+"",
                        "RfcPatronOrigen": ""+RfcPatronOrigen+"",
                        "Curp": ""+curpPatron+"",            
                    },}

     let finiquito=  {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "73",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "3703.26",
        "Descuento": "0.00",
        "Moneda": "MXN",
        "Total": "3703.26",
        "TipoDeComprobante": "N",
        "Exportacion": "01",
        "MetodoPago": "PUE",
        "LugarExpedicion": "87030",
        "Emisor": {
            "Rfc": "RERR6008226N5",
            "Nombre": "ROBERTO RETA RESENDEZ",
            "RegimenFiscal": "612"
        },
        "Receptor":   {
            "Rfc": "",
            "Nombre": "",
            "DomicilioFiscalReceptor": "87130",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "3703.26",
                "Importe": "3703.26",
                "Descuento": "0.00",
                "ObjetoImp": "01"
            }
        ],
        "Complemento": {

                    "Nomina12": {
                        "Version": "1.2",
                        "TipoNomina": "O",
                        "FechaPago": "2024-08-03",
                        "FechaInicialPago": "2024-07-29",
                        "FechaFinalPago": "2024-08-04",
                        "NumDiasPagados": "7",
                        "TotalPercepciones": "3703.26",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "RARS920401MTSMBT04",
                            "NumSeguridadSocial": "09109253790",
                            "FechaInicioRelLaboral": "2024-03-18",
                            "Antiguedad": "P5M28D",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "14",
                            "Departamento": "Ventas",
                            "Puesto": "Empleado general",
                            "RiesgoPuesto": "3",
                            "PeriodicidadPago": "99",
                            "SalarioBaseCotApor": "248.93",
                            "SalarioDiarioIntegrado": "261.21",
                            "ClaveEntFed": "TAM"
                        },
                        "Percepciones": {
                            "TotalSueldos": "3703.26",
                            "TotalGravado": "0.00",
                            "TotalExento": "3703.26",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "PARTE PROPORCIONAL DE VACACIONES",
                                    "ImporteGravado": "0.00",
                                    "ImporteExento": "1481.30"
                                },
                                {
                                    "TipoPercepcion": "002",
                                    "Clave": "002",
                                    "Concepto": "PARTE PROPORCIONAL DE AGUINALDO",
                                    "ImporteGravado": "0.00",
                                    "ImporteExento": "1851.63"
                                },
                                {
                                    "TipoPercepcion": "021",
                                    "Clave": "021",
                                    "Concepto": "PARTE PROPORCIONAL PRIMA VACACIONAL",
                                    "ImporteGravado": "0.00",
                                    "ImporteExento": "370.33"
                                },
                            ]
                        },
            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }
     }
 
     let PrimaV= {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "181",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "1237.50",
        "Moneda": "MXN",
        "Total": "1237.50",
        "TipoDeComprobante": "N",
        "Exportacion": "01",
        "MetodoPago": "PUE",
        "LugarExpedicion": "87030",
        "Emisor": {
            "Rfc": "RERR6008226N5",
            "Nombre": "ROBERTO RETA RESENDEZ",
            "RegimenFiscal": "612"
        },
        "Receptor": {
            "Rfc": "BALA9408074K1",
            "Nombre": "ALDO ANGEL BARRON LADRON DE GUEVARA",
            "DomicilioFiscalReceptor": "87080",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "1237.50",
                "Importe": "1237.50",
                "ObjetoImp": "01"
            }
        ],
        "Complemento": {

                    "Nomina12": {
                        "Version": "1.2",
                        "TipoNomina": "E",
                        "FechaPago": "2024-08-03",
                        "FechaInicialPago": "2024-07-29",
                        "FechaFinalPago": "2024-08-04",
                        "NumDiasPagados": "7",
                        "TotalPercepciones": "1237.50",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                      "Receptor": {
                        "Curp": "BALA940807HTSRDL02",
                        "NumSeguridadSocial": "09129497229",
                        "FechaInicioRelLaboral": "2020-11-03",
                        "Antiguedad": "P212W",
                        "TipoContrato": "01",
                        "TipoJornada": "01",
                        "TipoRegimen": "02",
                        "NumEmpleado": "3",
                        "Departamento": "SERVICIO",
                        "Puesto": "Empleado general",
                        "RiesgoPuesto": "3",
                        "PeriodicidadPago": "02",
                        "SalarioBaseCotApor": "275.00 ",
                        "SalarioDiarioIntegrado": "289.32 ",
                        "ClaveEntFed": "TAM"
                    },
                        "Percepciones": {
                            "TotalSueldos": "1237.50",
                            "TotalGravado": "0",
                            "TotalExento": "1237.50",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "021",
                                    "Clave": "021",
                                    "Concepto"  : "PRIMA VACACIONAL",
                                    "ImporteGravado": "0.00",
                                    "ImporteExento": "1237.50"
                                }
                            ]
                        },

            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }}
    
        let datos2={
            "fechaPago": "2024-12-21",
            "fechaInicialPago": "2024-12-23",
            "fechaFinalPago": "2025-01-13",
            "diasTrabajados": "18",
        }
        
     makeNomina_PrimaV(PrimaV,datos2)
  //  let res= makeNomina(empleados.empleados[6],datos2)
  
return(
    <div>

{/* <button onClick={() => makeNomina(kevin)}>Hacer nomina</button> */}
    </div>  
)

}


export default  NominaV1