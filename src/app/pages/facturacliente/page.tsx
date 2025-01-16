'use client'
import FormFactCliente from "@/app/uiComponents/formFactClienteNew";
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
         <FormFactCliente elements={elements} />

    </div>
    );
  
  }
  
  export default Page
