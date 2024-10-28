'use client'
import FormCreator from "@/app/uiComponents/formCreator_general";
import getNote from "../../uiComponents/getNote";

function FacturaCliente() {
    


    function onSubmit(formData: FormData) {
        const folio = formData.get("folio");
        console.log(folio);
        {getNote(folio)}
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