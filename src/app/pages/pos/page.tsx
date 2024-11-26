'use client'
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormPos from "@/app/uiComponents/formPos";
import NavScroll from "@/app/uiComponents/nav";
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
          <NavScroll />
          <FormPos elements={elements} />
    </div>
    );
  
  }
  
  export default Page
