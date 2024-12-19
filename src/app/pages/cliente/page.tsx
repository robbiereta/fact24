'use client'
import FormCreator from "@/app/uiComponents/formCreator_general";
import getNote from "../../uiComponents/getNote";
import folioToFact from "../../libComponents/folioToFact";
function FacturaCliente() {
    


    function onSubmit(formData: FormData) {
        const folio = formData.get("folio");
        console.log(folio);
        folioToFact(folio)
      }

let elements =
  [{
    name: "Folio",
    id: 1,
    type: "text",
    placeholder: "Folio"
  
  }
  ]


    return (
        <div>
   <FormCreator elements={elements} />
    </div>
    );
  
  }
  
  export default FacturaCliente 