'use server'
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from "../../../uiComponents/lista";
import FormCreator from "../../../uiComponents/formAddEmpleado";
import NavScroll from "@/app/uiComponents/nav";
let url =axios.defaults.baseURL = 'https://express-low5.onrender.com'


let elements= [{
  name: "Nombre";
  id: number;
  type: string;
  placeholder: string;

}
  
]
export default async function Nomina  () {
  // Render the main container
  return (
  
      <div>
        <NavScroll/>
        {/* Render the form creator */}
        <FormCreator 
          // Pass the elements array as a prop
          elements={elements} 
          // Pass the URL for the productos resource as a prop
          recurso={url+"/pages/nomina"} 
          image={true}
        />

      </div>
    
  );
}
