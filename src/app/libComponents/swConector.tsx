'use server'

import axios from "axios";

const Authentication = require('sw-sdk-nodejs').Authentication;


function swConnector(fact) {
    

let obj = {
	url : "http://services.test.sw.com.mx",
	user: "robbie.reta67@gmail.com",
	password: "9pgG:l2W0IH>"
}

let auth = Authentication.auth(obj);

let callback = (err, data) => {
	if(err) {
		console.log(err)
	} else{
		console.log(data)
		let token = data.token
		sendFactura(token)
	}
};

auth.Token(callback);
 function sendFactura(token){
let config = {
	method: 'post',
	maxBodyLength: Infinity,
	url: 'http://services.test.sw.com.mx/v3/cfdi33/issue/json/v4',
	headers: { 
	  'Authorization': 'Bearer'+token, 
	  'Content-Type': 'application/jsontoxml'
	},
	data : fact
  };
  
  axios.request(config)
  .then((response) => {
	console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
	console.log(error);
  });
  
}
}

export default swConnector