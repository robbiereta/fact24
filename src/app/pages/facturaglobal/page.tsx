'use client'
import { FormControl, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FormFactGlobal from "@/app/uiComponents/formFactGlobal";
 function Page() {
    
    let  notasPartidas: {}[]=  [];
      
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
