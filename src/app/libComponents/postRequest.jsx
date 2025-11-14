import axios from "axios";

function postRequest(url, data) {
  return axios.post(url, data)
    .then(function (response) {
      console.log('Post request successful:', response);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error in postRequest:', error);
      throw error; // Re-throw to allow error handling where the function is called
    });
}

export default postRequest;
