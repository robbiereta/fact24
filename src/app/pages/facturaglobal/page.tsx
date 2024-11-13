'use client'
import FormFactGlobal from "@/app/uiComponents/formFactGlobal";
 function Page() {
        
        let elements =
        [
        {
          name: "importe",
          id: 2,
          type: "number",
          placeholder: "Importe"},
        ]
      
    return (
        <div>
          <FormFactGlobal elements={elements} />
    </div>
    );
  
  }
  
  export default Page
