'use server'
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormNom from "@/app/uiComponents/formNom";
import NavScroll from "@/app/uiComponents/nav";
import NominaV1 from "./v1";
import dbConnect from '@/lib/mongodb';
import Folio from '@/models/Folio';
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
async function getFolioFromMongoDB() {
  try {
    // Ensure database connection
    await dbConnect();

    // Find the folio by its number
    const folio = await Folio.find();

    if (!folio) {
      console.log(`No folio found `);
      return null;
    }

    return folio;
  } catch (error) {
    console.error('Error retrieving folio:', error);
    throw error;
  }
}

// In your NominaV1 component
const folioData = async () => await getFolioFromMongoDB(); 
export default async function Nomina  () {
  // Render the main container
 
 
  return (
  
      <div>
                {/* Render the form creator */}
        <FormNom 
          // Pass the elements array as a prop
            elements={elements} 
        />

      </div>
    
  );
}
