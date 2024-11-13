'use client'
import FormPos from "@/app/uiComponents/formPos";
 function Page() {
        
        let elements =
        [
              
        {
          name: "Cantidad",
          id: 3,
          type: "number",
          placeholder: "Cantidad"},
        {
          name: "Descripcion",
          id: 1,
          type: "Text",
          placeholder: "Descripcion"},
        {
          name: "importe",
          id: 2,
          type: "number",
          placeholder: "Importe"},
        ]
      
    return (
        <div>
          <FormPos elements={elements} />
    </div>
    );
  
  }
  
  export default Page
