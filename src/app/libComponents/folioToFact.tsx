'use client'
import axios, { AxiosResponse } from "axios";
import getRequest from "./getRequest";
import postRequest from "./postRequest";
const orderid = require('order-id')('key');
import swConnector from "./swConector";

interface NotaVenta {
    lineas_venta: Array<{
        importeRealConImp: number;
        // Add other properties as needed
    }>;
    // Add other properties as needed
}

async function folioToFact(folio: string) {
    let nota: NotaVenta;
    let total3 = 0;
     
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://express-low5.onrender.com/notas_venta/?folio=${folio}`,
        headers: { }
    };
  
    try {
        const response: AxiosResponse<NotaVenta> = await axios.request(config);
        nota = response.data;
        console.log(nota);
        
        function getTotal(nota: NotaVenta) {
            nota.lineas_venta.map((linea) => {
                total3 += Number(linea.importeRealConImp);
                console.log("total3:" + total3);
            });
            return total3;
        }
        
        let totalConImpuestos: number = getTotal(nota)
        let iva : number = totalConImpuestos * 0.16
        let subtotal: number =totalConImpuestos-iva
        let fecha = new Date();
        let fechaActual = fecha.toLocaleDateString();
  


        let facturaGlobal={
        
      }
      console.log(facturaGlobal)
      // swConnector(facturaGlobal)
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default folioToFact;