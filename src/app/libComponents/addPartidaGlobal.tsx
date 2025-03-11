function addPartida(pu: any, cantidad: any, Descripcion: string) {
    let importeConImp = pu * cantidad;
    let iva = Number(importeConImp) * 0.16;
    let impSinImp = Number(importeConImp - iva);
    let puSinImp = Number(pu - iva) / cantidad;
    
    const partida = {
        ClaveProdServ: "01010101",
        ClaveUnidad: "ACT",
        Unidad: "Actividad",
        Cantidad: cantidad,
        Descripcion: Descripcion,
        ValorUnitario: `${pu}`,
        Importe: `${impSinImp}`,
        ImporteRealConImp: `${Number(importeConImp)}`,
        ObjetoImp: "02",
        Impuestos: {
            Traslados: [
                {
                    Base: `${importeConImp}`,
                    Impuesto: "002",
                    TipoFactor: "Tasa",
                    TasaOCuota: "0.160000",
                    Importe: `${iva.toFixed(2)}`,
                }
            ]
        }
    };
    
    return partida;
}

export default addPartida;