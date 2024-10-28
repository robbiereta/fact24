'use server'

import axios from "axios";

const Authentication = require('sw-sdk-nodejs').Authentication;


function swConnector(fact:object) {
    


function sendFactura(){
let config = {
	method: 'post',
	maxBodyLength: Infinity,
	url: 'http://services.test.sw.com.mx/v3/cfdi33/issue/json/v4',
	headers: { 
	  'Authorization': 'Bearer '+process.env.tokenTest, 
	  'Content-Type': 'application/jsontoxml'
	},
	data : fact
  };
  
  axios.request(config)
  .then((response) => {
	console.log(JSON.stringify(response.data));
   return response.data
})
  .catch((error) => {
	console.log(error);
  });
  
}
sendFactura()
}

export default swConnector