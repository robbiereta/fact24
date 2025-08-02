'use client'
import swConnector from "@/app/libComponents/swConector"

function makeNomina(empleado: any, datos: any, Emisor: any) {
    // Calculate values
    const percepciones = ((empleado.Nomina.Percepciones.TotalSueldos / 15) * datos.diasTrabajados).toFixed(2);
    const od = ((empleado.Nomina.Deducciones.TotalOtrasDeducciones / 15) * datos.diasTrabajados);
    const ir = ((empleado.Nomina.Deducciones.TotalImpuestosRetenidos / 15) * datos.diasTrabajados);
    const TotalDeducciones = (od + ir).toFixed(2);
    const fechaActual = new Date().toISOString().split('T')[0];
    
    // Build the CFDI object
    const nomina = {
        "Version": "4.0",
        "Serie": "nfn",
        "Folio": "1",
        "Fecha": `${fechaActual}T00:00:00`,
        "Sello": "",
        "NoCertificado": "",
        "Certificado": "",
        "SubTotal": percepciones,
        "Descuento": TotalDeducciones,
        "Moneda": "MXN",
        "Total": (parseFloat(percepciones) - parseFloat(TotalDeducciones)).toFixed(2),
        "TipoDeComprobante": "N",
        "Exportacion": "01",
        "MetodoPago": "PUE",
        "LugarExpedicion": "87100",
        "ClaveEntFed": "TAM",
        "Emisor": {
            "Rfc": Emisor.rfc,
            "Nombre": Emisor.razonSocial,
            "RegimenFiscal": Emisor.regimenFiscal
        },
        "Receptor": {
            "Rfc": empleado.rfc,
            "Nombre": empleado.nombreCompleto,
            "DomicilioFiscalReceptor": empleado.domicilioFiscalReceptor,
            "RegimenFiscalReceptor": empleado.regimenFiscal,
            "UsoCFDI": "CN01"
        },
        "Conceptos": [{
            "ClaveProdServ": "84111505",
            "Cantidad": "1",
            "ClaveUnidad": "ACT",
            "Descripcion": "Pago de nómina",
            "ValorUnitario": percepciones,
            "Importe": percepciones,
            "Descuento": TotalDeducciones,
            "ObjetoImp": "01"
        }],
        "Complemento": {
            "Any":[
                {
            "Nomina12:Nomina": {
                "Version": "1.2",
                "TipoNomina": "O",
                "FechaPago": datos.fechaPago,
                "FechaInicialPago": datos.fechaInicialPago,
                "FechaFinalPago": datos.fechaFinalPago,
                "NumDiasPagados": datos.diasTrabajados.toString(),
                "TotalPercepciones": percepciones,
                "TotalDeducciones": TotalDeducciones,
                "Emisor": {
                    "RegistroPatronal": Emisor.registroPatronal,
                    "RfcPatronOrigen": Emisor.rfc,
                    "Curp": Emisor.curp
                },
                "Receptor": {
                    "Curp": empleado.curp,
                    "NumSeguridadSocial": empleado.numeroSeguridadSocial,
                    "FechaInicioRelLaboral": empleado.fechaIngreso,
                    "Antigüedad": "P1W",
                    "TipoContrato": empleado.tipoContrato,
                    "TipoJornada": empleado.tipoJornada,
                    "TipoRegimen": empleado.regimenContratacion,
                    "NumEmpleado": "1",
                    "Departamento": empleado.departamento,
                    "Puesto": empleado.puesto,
                    "RiesgoPuesto": empleado.riesgoPuesto,
                    "PeriodicidadPago": empleado.periodicidadPago,
                    "SalarioBaseCotApor": empleado.salarioBaseCotizacion.toFixed(2),
                    "SalarioDiarioIntegrado": empleado.salarioDiarioIntegrado.toFixed(2),
                    
                },
                "Percepciones": {
                    "TotalSueldos": percepciones,
                    "TotalGravado": percepciones,
                    "TotalExento": "0.00",
                    "Percepcion": empleado.Nomina.Percepciones.Percepcion.map((p: any) => ({
                        "TipoPercepcion": p.TipoPercepcion,
                        "Clave": p.Clave,
                        "Concepto": p.Concepto,
                        "ImporteGravado": p.ImporteGravado,
                        "ImporteExento": "0.00"
                    }))
                },
                "Deducciones": {
                    "TotalOtrasDeducciones": od.toFixed(2),
                    "TotalImpuestosRetenidos": ir.toFixed(2),
                    "Deduccion": empleado.Nomina.Deducciones.Deduccion.map((d: any) => ({
                        "TipoDeduccion": d.TipoDeduccion,
                        "Clave": d.Clave,
                        "Concepto": d.Concepto,
                        "Importe": ((d.Importe / 15) * datos.diasTrabajados).toFixed(2)
                    }))
                }
            }
        }
        ]
    }  
    };

    
    
    //  let xml=toXML(nomina,config)
    //     console.log(xml)
    
    let response = swConnector(nomina);
    return response;
}

export default makeNomina;
       