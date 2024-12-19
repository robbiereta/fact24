import axios from "axios";
function getRequest(url:any) {
    axios.get(url)
    .then(function (response) {
      console.log(response.data);
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   export default getRequest;