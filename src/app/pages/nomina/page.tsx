'use server'
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from "../../uiComponents/lista";
import FormCreator from "../../uiComponents/formCreator";
import NavScroll from "@/app/uiComponents/nav";
import NominaV1 from "./v1";
let url =axios.defaults.baseURL = 'https://express-low5.onrender.com'

let ListaProps= {
  // Define the properties and their types here
  'precio' : String,
  'categoria' : String,
  'descripcion' : String,
  'marca' : String,
  'especificaciones' : String,
  'codigo' : String,
  'moto' : String,
  'compatibilidades' : [],
  'recurso' : String
}

let elements= [{
  name: "fechaPago",
  id: 1,
  type: "date",
  placeholder: "Fecha de pago"

} ,
{
  name: "fechaInicialPago",
  id: 2,
  type: "date",
  placeholder: "Fecha inicial de pago"},
  {
    name: "fechaFinalPago",
    id: 3,
    type: "date",
    placeholder: "Fecha final de pago"
  },
  {
    name: "diasTrabajados",
    id: 4,
    type: "number",
    placeholder: "Dias trabajados"
  },
  
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
          recurso={"http://localhost:3000/pages/nomina"} 
          image={true}
        />

      </div>
    
  );
}
