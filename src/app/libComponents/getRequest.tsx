
'use server'
import axios from "axios";
function getRequest(url) {
  let data = '';
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://express-low5.onrender.com/empleados',
    headers: { },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
   }
   export default getRequest;