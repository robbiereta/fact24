'use server'

import axios from "axios";

import { requireNoAuth } from '@/lib/auth';

requireNoAuth();
function swConnector(fact:object) {
    


function sendFactura(){
let config = {
	method: 'post',
	maxBodyLength: Infinity,
	url: 'http://services.sw.com.mx/v3/cfdi33/issue/json/v4',
	headers: { 
	  'Authorization': 'Bearer '+process.env.tokenPro,
	  'Content-Type': 'application/jsontoxml'
	},
	data : fact
  };
  
  axios.request(config)
  .then((response) => {
   return response.data
})
  .catch((error) => {
	console.log(error);
  });
  
}
sendFactura()
}

export default swConnector