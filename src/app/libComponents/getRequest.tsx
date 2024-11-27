import axios from "axios";
function getRequest(url:any,data:any) {
    axios.get(url,data)
    .then(function (response) {
      console.log(response.data);
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   export default getRequest;