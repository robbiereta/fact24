'use client'
import makeNomina from "./makeNomina";
function Nomina() {
   
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
let fechaActual=fecha.toISOString().split('T')[0]

let OtrosPagos =  { 

    "OtrosPagos": [
       {
         "TipoOtroPago": "002",
         "Clave": "002",
         "Concepto": "SubsidiO",
         "Importe": "0.0",
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
   let aly=    {
    "Version": "4.0",
    "Serie": "bvic",
    "Folio": "3",
    "Fecha":"08/08/2024",
    "Sello": "",
    "NoCertificado": "",
    "Certificado": "",
    "SubTotal": "1750.00",
    "Descuento": "71.18",
    "Moneda": "MXN",
    "Total": "1678.82",
    "TipoDeComprobante": "N",
    "Exportacion": "01",
    "MetodoPago": "PUE",
    "LugarExpedicion": "87000",
    "Emisor": {
        "Rfc": "RERR6008226N5",
        "Nombre": "ROBERTO RETA RESENDEZ",
        "RegimenFiscal": "612"
    },
    "Receptor": {
        "Rfc": "FOZA8801257C2",
        "Nombre": "ALMA ALICIA FLORES ZAVALA",
        "DomicilioFiscalReceptor":"87000",
        "RegimenFiscalReceptor": "605",
        "UsoCFDI": "CN01"
    },
    "Conceptos": [
        {
            "ClaveProdServ": "84111505",
            "Cantidad": "1",
            "ClaveUnidad": "ACT",
            "Descripcion": "Pago de nómina",
            "ValorUnitario": "1750",
            "Importe": "1750.",
            "Descuento": "71.18",
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
                    "TotalPercepciones": "1750.00 ",
                    "TotalDeducciones": "71.18 ",
                    "TotalOtrosPagos": "0.00 ",
                    "Emisor": {
                        "RegistroPatronal": ""+RegistroPatronal+"",
                        "RfcPatronOrigen": ""+RfcPatronOrigen+"",
                        "Curp": ""+curpPatron+"",            
                    },
                    "Receptor": {
                        "Curp": "FOZA880125MTSLVL01",
                        "NumSeguridadSocial": "09128814648",
                        "FechaInicioRelLaboral": "2024-02-19",
                        "Antiguedad": "P23W",
                        "TipoContrato": "01",
                        "TipoJornada": "01",
                        "TipoRegimen": "02",
                        "NumEmpleado": "13",
                        "Departamento": "Ventas",
                        "Puesto": "empleado general",
                        "RiesgoPuesto": "3",
                        "PeriodicidadPago": "02",
                        "SalarioBaseCotApor": "250.00",
                        "SalarioDiarioIntegrado": "262.33",
                        "ClaveEntFed": "TAM"
                    },
                    "Percepciones": {
                        "TotalSueldos": "1750.00",
                        "TotalGravado": "1750.00",
                        "TotalExento": "0",
                        "Percepcion": [
                            {
                                "TipoPercepcion": "001",
                                "Clave": "001",
                                "Concepto": "Sueldo",
                                "ImporteGravado": "1750.00",
                                "ImporteExento": "0.00"
                            }
                        ]
                    },
                    "Deducciones": {
                        "TotalOtrasDeducciones": "43.61",
                        "TotalImpuestosRetenidos":"27.57",
                        "Deduccion": [
                            {
                                "TipoDeduccion": "001",
                                "Clave": "001",
                                "Concepto": "Seguridad Social",
                                "Importe": "22.95"
                            },
                            {
                                "TipoDeduccion": "002",
                                "Clave": "002",
                                "Concepto": "ISR",
                                "Importe": "27.57"
                            },
 {
                                "TipoDeduccion": "003",
                                "Clave": "003",
                                "Concepto": "RCV",
                                "Importe": "20.66"
                            }
 
 
                        ]
                    },
                    "OtrosPagos": OtrosPagos.OtrosPagos
                   
                }
            }
    }
 
 
    let aldo=  {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "4",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "1625.00",
        "Descuento": "66.10",
        "Moneda": "MXN",
        "Total": "1830.29",
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
                "ValorUnitario": "1625.00",
                "Importe": "1625.00",
                "Descuento": "66.10",
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
                        "TotalPercepciones": "1625.00",
                        "TotalDeducciones": "66.10",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "BALA940807HTSRDL02",
                            "NumSeguridadSocial": "09129497229",
                            "FechaInicioRelLaboral": "2020-11-03",
                            "Antiguedad": "P195W",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "3",
                            "Departamento": "Ventas",
                            "Puesto": "empleado general",
                            "RiesgoPuesto": "3",
                            "PeriodicidadPago": "02",
                            "SalarioBaseCotApor": "275.00 ",
                            "SalarioDiarioIntegrado": "289.32 ",
                            "ClaveEntFed": "TAM"
                        },
                        "Percepciones": {
                            "TotalSueldos": "1625.00",
                            "TotalGravado": "1625.00",
                            "TotalExento": "0",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "SUELDO",
                                    "ImporteGravado": "1625.00",
                                    "ImporteExento": "0.00"
                                }
                            ]
                        },
                        "Deducciones": {
                            "TotalOtrasDeducciones": "48.10",
                            "TotalImpuestosRetenidos":"46.61  ",
                            "Deduccion": [
                                {
                                    "TipoDeduccion": "001",
                                    "Clave": "001",
                                    "Concepto": "CUOTA OBRERO IMSS",
                                    "Importe": "25.32"
                                },
                                {
                                    "TipoDeduccion": "002",
                                    "Clave": "002",
                                    "Concepto": "RETENCION ISR",
                                    "Importe": "46.61"
                                },
     {
                                    "TipoDeduccion": "003",
                                    "Clave": "003",
                                    "Concepto": " CUOTA OBRERO RCV",
                                    "Importe": "22.78"
                                }
     
     
                            ]
                        },
            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }
     }
     
 
     let daniel=  {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "5",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "1625.00",
        "Descuento": "66.10",
        "Moneda": "MXN",
        "Total": "1558.90",
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
            "Rfc": "RATJ990125TS1",
            "Nombre": "JUAN DANIEL RAMIREZ TREJO",
            "DomicilioFiscalReceptor": "87930",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "1625.00",
                "Importe": "1625.00",
                "Descuento": "66.10",
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
                        "TotalPercepciones": "1625.00",
                        "TotalDeducciones": "66.10",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "RATJ990125HTSMRN01",
                            "NumSeguridadSocial": "27189918991",
                            "FechaInicioRelLaboral": "2022-09-26",
                            "Antiguedad": "P96W",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "3",
                            "Departamento": "Ventas",
                            "Puesto": "Empleado general",
                            "RiesgoPuesto": "3",
                            "PeriodicidadPago": "02",
                            "SalarioBaseCotApor": "250.00",
                       "SalarioDiarioIntegrado": "262.33",
                            "ClaveEntFed": "TAM"
                        },
                        "Percepciones": {
                            "TotalSueldos": "1625.00",
                            "TotalGravado": "1625.00",
                            "TotalExento": "0",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "SUELDO",
                                    "ImporteGravado": "1625.00",
                                    "ImporteExento": "0.00"
                                }
                            ]
                        },
                        "Deducciones": {
                            "TotalOtrasDeducciones": "40.50",
                            "TotalImpuestosRetenidos":"25.60  ",
                            "Deduccion": [
                                {
                                    "TipoDeduccion": "001",
                                    "Clave": "001",
                                    "Concepto": "CUOTA OBRERO IMSS",
                                    "Importe": "21.32"
                                },
                                {
                                    "TipoDeduccion": "002",
                                    "Clave": "002",
                                    "Concepto": "RETENCION ISR",
                                    "Importe": "25.60"
                                },
     {
                                    "TipoDeduccion": "003",
                                    "Clave": "003",
                                    "Concepto": " CUOTA OBRERO RCV",
                                    "Importe": "19.18"
                                }
     
     
                            ]
                        },
            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }
     }
     
     let misael=  {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "4",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "1625.00",
        "Descuento": "66.10",
        "Moneda": "MXN",
        "Total": "1830.29",
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
                "ValorUnitario": "1625.00",
                "Importe": "1625.00",
                "Descuento": "66.10",
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
                        "TotalPercepciones": "1625.00",
                        "TotalDeducciones": "66.10",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "BALA940807HTSRDL02",
                            "NumSeguridadSocial": "09129497229",
                            "FechaInicioRelLaboral": "2020-11-03",
                            "Antiguedad": "P195W",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "3",
                            "Departamento": "Ventas",
                            "Puesto": "empleado general",
                            "RiesgoPuesto": "3",
                            "PeriodicidadPago": "02",
                            "SalarioBaseCotApor": "275.00 ",
                            "SalarioDiarioIntegrado": "289.32 ",
                            "ClaveEntFed": "TAM"
                        },
                        "Percepciones": {
                            "TotalSueldos": "1625.00",
                            "TotalGravado": "1625.00",
                            "TotalExento": "0",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "SUELDO",
                                    "ImporteGravado": "1625.00",
                                    "ImporteExento": "0.00"
                                }
                            ]
                        },
                        "Deducciones": {
                            "TotalOtrasDeducciones": "48.10",
                            "TotalImpuestosRetenidos":"46.61  ",
                            "Deduccion": [
                                {
                                    "TipoDeduccion": "001",
                                    "Clave": "001",
                                    "Concepto": "CUOTA OBRERO IMSS",
                                    "Importe": "25.32"
                                },
                                {
                                    "TipoDeduccion": "002",
                                    "Clave": "002",
                                    "Concepto": "RETENCION ISR",
                                    "Importe": "46.61"
                                },
     {
                                    "TipoDeduccion": "003",
                                    "Clave": "003",
                                    "Concepto": " CUOTA OBRERO RCV",
                                    "Importe": "22.78"
                                }
     
     
                            ]
                        },
            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }
     }
 

return(
    <div>

<button onClick={() => makeNomina(daniel)}>Facturar</button>
    </div>  
)

}


export default  Nomina