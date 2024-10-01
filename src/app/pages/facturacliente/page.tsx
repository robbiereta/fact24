'use client'
import FacturaGlobalMaker from "./facturaGlobalMaker";
import getNotes from "../../libComponents/getNotes";
import FormCreator from "@/app/uiComponents/formCreator";
import NavScroll from "@/app/uiComponents/nav";
 function Page() {
    
    
    
      
 let elements =
  [{
    name: "Descripcion",
    id: 1,
    type: "text",
    placeholder: "Descripcion"
  
  } ,
  {
    name: "importe",
    id: 2,
    type: "number",
    placeholder: "Importe"},
    {
      name: "claveprodserv",
      id: 3,
      type: "text",
      placeholder: "Clave SAT"}
  ]
    return (
        <div>
          <NavScroll/>
          <FormCreator 
          // Pass the elements array as a prop
          elements={elements} 
          // Pass the URL for the productos resource as a prop
          recurso={""} 
          image={false}
        />

    </div>
    );
  
  }
  
  export default Page
