'use client'
import FormFactCliente from "@/app/uiComponents/formFactClienteNew";
import NavScroll from "@/app/uiComponents/nav";

function Page() {
  const partidas = [{
    ClaveProdServ: "",
    ClaveUnidad: "H87",
    Unidad: "Pieza",
    Cantidad: "1",
    Descripcion: "",
    ValorUnitario: "0",
    Importe: "0",
    ImporteRealConImp: "0",
    ObjetoImp: "02",
    Impuestos: {
      Traslados: [{
        Base: "0",
        Impuesto: "002",
        TipoFactor: "Tasa",
        TasaOCuota: "0.160000",
        Importe: "0"
      }]
    }
  }];

  return (
    <div>
      <FormFactCliente {...partidas} />
    </div>
  );
}

export default Page;
