import axios from "axios";
function postRequest(url:string,data:any) {
    axios.post(url,data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   export default postRequest;