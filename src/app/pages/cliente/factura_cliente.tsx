'use client'

import getNote from "../../uiComponents/getNote";
function FacturaCliente() {
    
    function onSubmit(formData: FormData) {
        const folio = formData.get("folio");
        console.log(folio);
        {getNote(folio)}
      }




    return (
        <div>
            
    </div>
    );
  
  }
  
  export default FacturaCliente 