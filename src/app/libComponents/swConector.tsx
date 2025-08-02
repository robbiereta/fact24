'use server'

import axios from "axios";

import { requireNoAuth } from '@/lib/auth';

requireNoAuth();
function swConnector(fact:object) {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://services.sw.com.mx/v3/cfdi33/issue/json/v4',
    headers: { 
      'Authorization': 'Bearer '+process.env.tokenProd,
      'Content-Type': 'application/jsontoxml'
    },
    data: fact
  };
  
  return axios.request(config)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default swConnector