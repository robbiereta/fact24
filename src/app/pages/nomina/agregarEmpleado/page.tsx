'use server'
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from "../../../uiComponents/lista";
import FormAddEmpleado from "../../../uiComponents/formAddEmpleado";
import NavScroll from "@/app/uiComponents/nav";
let url =axios.defaults.baseURL = 'https://express-low5.onrender.com'


let elements= [{
  name: "Nombre Completo",
  id: 1,
  type: "text",
  placeholder: "Nombre Completo",

}, {
  name: "RFC",
  id: 2,
  type: "text",
  placeholder: "RFC",

}, {
  name: "CURP",
  id: 3,
  type: "text",
  placeholder: "CURP",

}, {   
  name: "No. de Seguridad Social",
  id: 4,      
  type: "text",
  placeholder: "No. de Seguridad Social",
  
  


},
{
  name: "Codigo postal",
  id: 5,
  type: "text",
  placeholder: "Codigo postal",

},
{
  name: "Antiguedad actual",
  id: 6,
  type: "text",
  placeholder: "Antiguedad actual",

},
{
  name: "No. de empleado",
  id: 7,
  type: "text",
  placeholder: "No. de empleado",

},
{
  name: "Departamento",
  id: 8,
  type: "text",
  placeholder: "Departamento",

},
{
  name: "Puesto",
  id: 9,
  type: "text",
  placeholder: "Puesto",

},
{
  name: "Codigo postal del receptor",
  id: 10,
  type: "text",
  placeholder: "Codigo postal del receptor",

},
{
  name: "Salario diario",
  id: 11,
  type: "number",
  placeholder: "Salario diario",

},
{
  name: "Salario base",
  id: 12,
  type: "number",
  placeholder: "Salario base",

},
  
]
export default async function Nomina  () {
  // Render the main container
  return (
  
      <div>
        <NavScroll/>
       <h2>Agregar Empleado</h2>
        {/* Render the form creator */}
        <FormAddEmpleado
          // Pass the elements array as a prop
          elements={elements} 
          // Pass the URL for the plproductos resource as a prop
          recurso={url+"/empleados"} 
        />
      </div>
    
  );
}
