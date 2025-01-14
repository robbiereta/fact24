'use client'
import swConnector from "./swConector";

function FacturaGlobalMaker(notasPartidas: any) {
    let total3 = 0;
     
    function getTotal(notas: any) {
        notas.map((note: any) => {
            total3 += Number(note.ImporteRealConImp);
            console.log("total3:" + total3);
        });
        return total3;
    }

    let totalConImpuestos: number = getTotal(notasPartidas);
    console.log(totalConImpuestos);
    
    let iva = (totalConImpuestos * 0.16);
    let subtotal = (totalConImpuestos - iva);
    let fecha = new Date();
 
    const facturaGlobal = {
        Version: "4.0",
        Serie: "F",
        Fecha: fecha.toISOString(),
        SubTotal: subtotal.toFixed(2),
        Moneda: "MXN",
        Total: totalConImpuestos.toFixed(2),
        TipoDeComprobante: "I",
        Exportacion: "01",
        MetodoPago: "PUE",
        FormaPago: "01",
        LugarExpedicion: "45079",
        Conceptos: notasPartidas,
        Impuestos: {
            TotalImpuestosTrasladados: iva.toFixed(2),
            Traslados: [{
                Base: subtotal.toFixed(2),
                Impuesto: "002",
                TipoFactor: "Tasa",
                TasaOCuota: "0.160000",
                Importe: iva.toFixed(2)
            }]
        }
    };

    return JSON.stringify(facturaGlobal);
}

export default FacturaGlobalMaker;