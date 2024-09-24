'use client'
import makeNomina from "./makeNomina";
import makeNomina_Finiquito from "./makeNomina_finiquito";
import makeNomina_PrimaV from "./makeNomina_PrimaV";
function NominaV1(empleado,datos) {
   
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
   let aly=    {
    "Version": "4.0",
    "Serie": "bvic",
    "Folio": "72",
    "Fecha":fechaActual,
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
            "ValorUnitario": "1750.00",
            "Importe": "1750.00",
            "Descuento": "71.18",
            "ObjetoImp": "01"
        }
    ],
    "Complemento": {
                "Nomina12": {
                    "Version": "1.2",
                    "TipoNomina": "O",
                    "FechaPago": "2024-08-10",
                    "FechaInicialPago": "2024-08-05",
                    "FechaFinalPago": "2024-08-11",
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
                        "Antiguedad": "P29W",
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
 
    let robbie=    {
        "Version": "4.0",
        "Serie": "bvic",
        "Folio": "71",
        "Fecha":fechaActual,
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
            "Rfc": "REOR9106285FA",
            "Nombre": "ROBERTO ANTONIO RETA OLVERA",
            "DomicilioFiscalReceptor":"87030",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "1750.00",
                "Importe": "1750.00",
                "Descuento": "71.18",
                "ObjetoImp": "01"
            }
        ],
        "Complemento": {
                    "Nomina12": {
                        "Version": "1.2",
                        "TipoNomina": "O",
                        "FechaPago": "2024-08-10",
                        "FechaInicialPago": "2024-08-05",
                        "FechaFinalPago": "2024-08-11",
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
                            "Curp": "REOR910628HTSTLB04",
                            "NumSeguridadSocial": "09119123561",
                            "FechaInicioRelLaboral": "2023-01-02",
                            "Antiguedad": "P89W",     
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "10",
                            "Departamento": "Ventas",
                            "Puesto": "Empleado general",
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
        let kevin=    {
            "Version": "4.0",
            "Serie": "bvic",
            "Folio": "70",
            "Fecha":fechaActual,
            "Sello": "",
            "NoCertificado": "",
            "Certificado": "",
            "SubTotal": "2000.04",
            "Descuento": "104.68",
            "Moneda": "MXN",
            "Total": "1895.36",
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
                "Rfc": "VAMK960929H23",
                "Nombre": "KEVIN ALEJANDRO VASQUEZ MACIAS",
                "DomicilioFiscalReceptor":"87100",
                "RegimenFiscalReceptor": "605",
                "UsoCFDI": "CN01"
            },
            "Conceptos": [
                {
                    "ClaveProdServ": "84111505",
                    "Cantidad": "1",
                    "ClaveUnidad": "ACT",
                    "Descripcion": "Pago de nómina",
                    "ValorUnitario": "2000.04",
                    "Importe": "2000.04",
                    "Descuento": "104.68",
                    "ObjetoImp": "01"
                }
            ],
            "Complemento": {
                        "Nomina12": {
                            "Version": "1.2",
                            "TipoNomina": "O",
                            "FechaPago": "2024-08-10",
                            "FechaInicialPago": "2024-08-05",
                            "FechaFinalPago": "2024-08-11",
                            "NumDiasPagados": "7",
                            "TotalPercepciones": "2004.04",
                            "TotalDeducciones": "104.68",
                            "TotalOtrosPagos": "0.00 ",
                            "Emisor": {
                                "RegistroPatronal": ""+RegistroPatronal+"",
                                "RfcPatronOrigen": ""+RfcPatronOrigen+"",
                                "Curp": ""+curpPatron+"",            
                            },
                            "Receptor": {
                                "Curp": "VAMK960929HTSSCV09",
                                "NumSeguridadSocial": "56169682574",
                                "FechaInicioRelLaboral": "2022-10-17",         
                                "Antiguedad": "P100W",     
                                "TipoContrato": "01",
                                "TipoJornada": "01",
                                "TipoRegimen": "02",
                                "NumEmpleado": "8",
                                "Departamento": "Ventas",
                                "Puesto": "Empleado general",
                                "RiesgoPuesto": "3",
                                "PeriodicidadPago": "02",
                                "SalarioBaseCotApor": "285.72",
                                "SalarioDiarioIntegrado": "300.20",
                                "ClaveEntFed": "TAM"
                            },
                            "Percepciones": {
                                "TotalSueldos": "2000.04",
                                "TotalGravado": "2000.04",
                                "TotalExento": "0",
                                "Percepcion": [
                                    {
                                        "TipoPercepcion": "001",
                                        "Clave": "001",
                                        "Concepto": "Sueldo",
                                        "ImporteGravado": "2000.04",
                                        "ImporteExento": "0.00"
                                    }
                                ]
                            },
                            "Deducciones": {
                                "TotalOtrasDeducciones": "49.91",
                                "TotalImpuestosRetenidos":"54.77",
                                "Deduccion": [
                                    {
                                        "TipoDeduccion": "001",
                                        "Clave": "001",
                                        "Concepto": "Seguridad Social",
                                        "Importe": "26.27"
                                    },
                                    {
                                        "TipoDeduccion": "002",
                                        "Clave": "002",
                                        "Concepto": "ISR",
                                        "Importe": "54.77"
                                    },
         {
                                        "TipoDeduccion": "003",
                                        "Clave": "003",
                                        "Concepto": "RCV",
                                        "Importe": "23.64"
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
        "Folio": "69",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "1925.00",
        "Descuento": "94.71",
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
                "ValorUnitario": "1925.00",
                "Importe": "1925.00",
                "Descuento": "94.71",
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
                        "TotalPercepciones": "1925.00",
                        "TotalDeducciones": "94.71",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "BALA940807HTSRDL02",
                            "NumSeguridadSocial": "09129497229",
                            "FechaInicioRelLaboral": "2020-11-03",
                            "Antiguedad": "P201W",
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
                            "TotalSueldos": "1925.00",
                            "TotalGravado": "1925.00",
                            "TotalExento": "0",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "SUELDO",
                                    "ImporteGravado": "1925.00",
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
        "Folio": "68",
        "Fecha":fechaActual,
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
                "ValorUnitario": "1750.00",
                "Importe": "1750.00",
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
                        "TotalPercepciones": "1750.00",
                        "TotalDeducciones": "71.18",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "RATJ990125HTSMRN01",
                            "NumSeguridadSocial": "27189918991",
                            "FechaInicioRelLaboral": "2022-09-26",
                            "Antiguedad": "P103W",
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
                            "TotalSueldos": "1750.00",
                            "TotalGravado": "1750.00",
                            "TotalExento": "0",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "SUELDO",
                                    "ImporteGravado": "1750.00",
                                    "ImporteExento": "0.00"
                                }
                            ]
                        },
                        "Deducciones": {
                            "TotalOtrasDeducciones": "43.61",
                            "TotalImpuestosRetenidos":"27.57  ",
                            "Deduccion": [
                                {
                                    "TipoDeduccion": "001",
                                    "Clave": "001",
                                    "Concepto": "CUOTA OBRERO IMSS",
                                    "Importe": "22.95"
                                },
                                {
                                    "TipoDeduccion": "002",
                                    "Clave": "002",
                                    "Concepto": "RETENCION ISR",
                                    "Importe": "27.57"
                                },
     {
                                    "TipoDeduccion": "003",
                                    "Clave": "003",
                                    "Concepto": " CUOTA OBRERO RCV",
                                    "Importe": "20.66"
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
        "Folio": "67",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "1742.51",
        "Descuento": "70.18",
        "Moneda": "MXN",
        "Total": "1672.33",
        "TipoDeComprobante": "N",
        "Exportacion": "01",
        "MetodoPago": "PUE",
        "LugarExpedicion": "87030",
        "Emisor": {
            "Rfc": "RERR6008226N5",
            "Nombre": "ROBERTO RETA RESENDEZ",
            "RegimenFiscal": "612"
        },
        "Receptor":  {
            "Rfc": "PIRM051209167",
            "Nombre": "MISAEL ALEXANDER PITONES RAMOS",
            "DomicilioFiscalReceptor": "87048",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "1742.51",
                "Importe": "1742.51",
                "Descuento": "70.18",
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
                        "TotalPercepciones": "1742.51",
                        "TotalDeducciones": "70.18",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "PIRM051209HTSTMSA3",
                            "NumSeguridadSocial": "02240563086",     
                            "FechaInicioRelLaboral": "2024-01-15",
                            "Antiguedad": "P35W",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "12",
                            "Departamento": "Ventas",
                            "Puesto": "Empleado general",
                            "RiesgoPuesto": "3",
                            "PeriodicidadPago": "02",
                            "SalarioBaseCotApor": "248.93",
                            "SalarioDiarioIntegrado": "261.21",
                            "ClaveEntFed": "TAM"
                        },
                        "Percepciones": {
                            "TotalSueldos": "1742.51",
                            "TotalGravado": "1742.51",
                            "TotalExento": "0",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "SUELDO",
                                    "ImporteGravado": "1742.51",
                                    "ImporteExento": "0.00"
                                }
                            ]
                        },
                        "Deducciones": { 
                            "TotalOtrasDeducciones": "43.43",
                            "TotalImpuestosRetenidos":"26.75",
                            "Deduccion": [
                                {
                                    "TipoDeduccion": "001",
                                    "Clave": "001",
                                    "Concepto": "CUOTA OBRERO IMSS",
                                    "Importe": "22.86"
                                },
                                {
                                    "TipoDeduccion": "002",
                                    "Clave": "002",
                                    "Concepto": "RETENCION ISR",
                                    "Importe": "26.75"
                                },
     {
                                    "TipoDeduccion": "003",
                                    "Clave": "003",
                                    "Concepto": " CUOTA OBRERO RCV",
                                    "Importe": "20.57"
                                }
     
     
                            ]
     
                        },
            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }
     }
     let fany_finiquito=  {
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
            "Rfc": "RARS920401JP4",
            "Nombre": "STEPHANY RAMIREZ ROBLEDO",
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
 
     let homero= {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "66",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "1925.00",
        "Descuento": "94.71",
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
        "Receptor":  {
            "Rfc": "SALH901227U20",
            "Nombre": "HOMERO SANCHEZ LOPEZ",
            "DomicilioFiscalReceptor": "87100",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "1925.00",
                "Importe": "1925.00",
                "Descuento": "94.71",
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
                        "TotalPercepciones": "1925.00",
                        "TotalDeducciones": "94.71",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "SALH901227HTSNPM09",
                            "NumSeguridadSocial": "09099011364",     
                            "FechaInicioRelLaboral": "2020-11-03",
                            "Antiguedad": "P202W",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "2",
                            "Departamento": "SERVICIO",
                            "Puesto": "Empleado general",
                            "RiesgoPuesto": "3",
                            "PeriodicidadPago": "02",
                            "SalarioBaseCotApor": "289.32",
                            "SalarioDiarioIntegrado": "275.00",
                            "ClaveEntFed": "TAM"
                        },
                        "Percepciones": {
                            "TotalSueldos": "1925.00",
                            "TotalGravado": "1925.00",
                            "TotalExento": "0",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "001",
                                    "Clave": "001",
                                    "Concepto": "SUELDO",
                                    "ImporteGravado": "1925.00",
                                    "ImporteExento": "0.00"
                                }
                            ]
                        },
                        "Deducciones": { 
                            "TotalOtrasDeducciones": "48.10",
                            "TotalImpuestosRetenidos":"46.61",
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
     let luis= {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "65",
        "Fecha":fechaActual,
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
        "LugarExpedicion": "87030",
        "Emisor": {
            "Rfc": "RERR6008226N5",
            "Nombre": "ROBERTO RETA RESENDEZ",
            "RegimenFiscal": "612"
        },
        "Receptor":  {
            "Rfc": "LOSL890628U96",
            "Nombre": "LUIS ANGEL LOPEZ SANCHEZ",
            "DomicilioFiscalReceptor": "87037",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "1750.00",
                "Importe": "1750.00",
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
                        "TotalPercepciones": "1750.00",
                        "TotalDeducciones": "71.18",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "LOSL890628HDFPNS05 ",
                            "NumSeguridadSocial": "09128930774",
                            "FechaInicioRelLaboral": "2022-08-01",
                            "Antiguedad": "P111W",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "5",
                            "Departamento": "SERVICIO",
                            "Puesto": "Empleado general",
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
                                    "Concepto": "SUELDO",
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
                                    "Concepto": "CUOTA OBRERO IMSS",
                                    "Importe": "22.95"
                                },
                                {
                                    "TipoDeduccion": "002",
                                    "Clave": "002",
                                    "Concepto": "RETENCION ISR",
                                    "Importe": "27.57"
                                },
     {
                                    "TipoDeduccion": "003",
                                    "Clave": "003",
                                    "Concepto": " CUOTA OBRERO RCV",
                                    "Importe": "20.66"
                                }
     
     
                            ]
     
                        },
            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }
     }
     let luis_PrimaV= {
        "Version": "4.0",
        "Serie": "Bvic",
        "Folio": "28",
        "Fecha":fechaActual,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": "962.50",
        "Moneda": "MXN",
        "Total": "962.50",
        "TipoDeComprobante": "N",
        "Exportacion": "01",
        "MetodoPago": "PUE",
        "LugarExpedicion": "87030",
        "Emisor": {
            "Rfc": "RERR6008226N5",
            "Nombre": "ROBERTO RETA RESENDEZ",
            "RegimenFiscal": "612"
        },
        "Receptor":  {
            "Rfc": "LOSL890628U96",
            "Nombre": "LUIS ANGEL LOPEZ SANCHEZ",
            "DomicilioFiscalReceptor": "87037",
            "RegimenFiscalReceptor": "605",
            "UsoCFDI": "CN01"
        },
        "Conceptos": [
            {
                "ClaveProdServ": "84111505",
                "Cantidad": "1",
                "ClaveUnidad": "ACT",
                "Descripcion": "Pago de nómina",
                "ValorUnitario": "962.50",
                "Importe": "962.50",
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
                        "TotalPercepciones": "962.50",
                        "TotalOtrosPagos": "0.00",
                        "Emisor": emisor.Emisor,
                        "Receptor": {
                            "Curp": "LOSL890628HDFPNS05 ",
                            "NumSeguridadSocial": "09128930774",
                            "FechaInicioRelLaboral": "2022-08-01",
                            "Antiguedad": "P2Y26D",
                            "TipoContrato": "01",
                            "TipoJornada": "01",
                            "TipoRegimen": "02",
                            "NumEmpleado": "5",
                            "Departamento": "SERVICIO",
                            "Puesto": "Empleado general",
                            "RiesgoPuesto": "3",
                            "PeriodicidadPago": "99",
                            "SalarioBaseCotApor": "250.00",
                            "SalarioDiarioIntegrado": "262.33",
                            "ClaveEntFed": "TAM"
                        },
                        "Percepciones": {
                            "TotalSueldos": "962.50",
                            "TotalGravado": "0",
                            "TotalExento": "962.50",
                            "Percepcion": [
                                {
                                    "TipoPercepcion": "021",
                                    "Clave": "021",
                                    "Concepto"  : "PRIMA VACACIONAL",
                                    "ImporteGravado": "0.00",
                                    "ImporteExento": "962.50"
                                }
                            ]
                        },

            "OtrosPagos":OtrosPagos.OtrosPagos
                       
                    }
                
        }}
    
        let datos2={
            "fechaPago": "2024-09-21",
            "fechaInicialPago": "2024-09-15",
            "fechaFinalPago": "2024-09-22",
            "diasTrabajados": "7",
        }
    

    makeNomina(kevin,datos2)
return(
    <div>

{/* <button onClick={() => makeNomina(kevin)}>Hacer nomina</button> */}
    </div>  
)

}


export default  NominaV1