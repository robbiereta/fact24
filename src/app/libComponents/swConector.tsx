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
      'Authorization': 'Bearer '+process.env.tokenTest,
      'Content-Type': 'application/jsontoxml'
    },
    data: fact
  };
  
  return axios.request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

export default swConnector