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
	  'Authorization': 'Bearer T2lYQ0t4L0RHVkR4dHZ5Nkk1VHNEakZ3Y0J4Nk9GODZuRyt4cE1wVm5tbXB3YVZxTHdOdHAwVXY2NTdJb1hkREtXTzE3dk9pMmdMdkFDR2xFWFVPUXpTUm9mTG1ySXdZbFNja3FRa0RlYURqbzdzdlI2UUx1WGJiKzViUWY2dnZGbFloUDJ6RjhFTGF4M1BySnJ4cHF0YjUvbmRyWWpjTkVLN3ppd3RxL0dJPQ.T2lYQ0t4L0RHVkR4dHZ5Nkk1VHNEakZ3Y0J4Nk9GODZuRyt4cE1wVm5tbFlVcU92YUJTZWlHU3pER1kySnlXRTF4alNUS0ZWcUlVS0NhelhqaXdnWTRncklVSWVvZlFZMWNyUjVxYUFxMWFxcStUL1IzdGpHRTJqdS9Zakw2UGRFVDcvR281d3ZoNFdWejk5QzJXdEVaaWhHeXBUWDgxeHVUbHRTdi83Y3laclF4SVZKaCtrZ2ZIWGQ1ZFlxMlZkbGoyZi9Ec2JpeWdsQnR5cXQyNWszcDFhcVZHeDVGNC9ac3NOM2U1YjJvZkN6VkJITEJsRUVEMkNBanR6aTdma2I4Q1gxVkZnKzhENUdWTkdrWGFmZjM3WjVEdW9sVG0vUXdvTkVPZGgwMWVQcjJ5NmFzclkwTWt1NU13Y1o3ZWtzendkUGRISWJ6UnRxSnI1SVBYVXU1c1J4OGc4R09yc0ZVSy82SUhxSlV3S0cvV0x1RkpyaGlFSEtvQUp5ZmwwUGZXL044d3F6NlpSWmdrVmxEb2Nha2VLYjJYY1hmZWRIOHNrZW5Xck5ydnFkNzNJa2JWSG9tZDVRZnNhWG9vSFZZcnRURGJqRFdDVFhRc3RaekxJMy82N3F0dUFYblp6Q21pWVNmTkd6S2EyeDFTSW0vMjJYOHNRNTcrTkR3UWY.Geioh8aP58v7f297-Mju-lEO9m_tnTGYQwc-0zHHVfA', 
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