import axios from "axios";

function getRequest(url) {
  return axios.get(url)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error in getRequest:', error);
      throw error; // Re-throw to allow error handling where the function is called
    });
}

export default getRequest;
