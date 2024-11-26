import axios from "axios";
function getRequest(url:any,data:any) {
    axios.get(url,data)
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   export default getRequest;