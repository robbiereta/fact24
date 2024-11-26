'use client'
import getNotes from "../../libComponents/getNotesFromO";
import FormFactCliente from "@/app/uiComponents/formFactCliente";
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
         <FormFactCliente elements={elements} />

    </div>
    );
  
  }
  
  export default Page
