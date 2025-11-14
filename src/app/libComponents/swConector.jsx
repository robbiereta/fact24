'use server'

import axios from "axios";
import { requireNoAuth } from '@/lib/auth';

requireNoAuth();

function swConnector(fact) {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://services.sw.com.mx/v3/cfdi33/issue/json/v4',
    headers: { 
      'Authorization': 'Bearer ' + process.env.tokenProd,
      'Content-Type': 'application/jsontoxml'
    },
    data: fact
  };
  
  return axios.request(config)
    .then((response) => {
      console.log('SW Connector response:', response);
      return response.data;
    })
    .catch((error) => {
      console.error('Error in swConnector:', error);
      throw error; // Re-throw to allow error handling where the function is called
    });
}

export default swConnector;
