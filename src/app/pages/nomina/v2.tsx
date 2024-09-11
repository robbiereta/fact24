'use server'
import makeNominaMan from "./makeNominaMan";
import axios from "axios";
function NominaV2(id) {
 
        function getEmpleado() {
            axios.get(process.env.url+'/empleados/'+id).then(function (response) {
              let empleado = response.data
              console.log(empleado)
              return empleado
            })
          }
          
    let empleadoObtenido = getEmpleado()
    makeNominaMan(empleadoObtenido)
  
}

export async function getAllEmpleados() {
     axios.get(process.env.url+'/empleados/').then(function (response) {
      let empleados = response.data
      console.log(empleados)
      return empleados
    })
  }
export default  NominaV2