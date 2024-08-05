'use server'
const Authentication = require('sw-sdk-nodejs').Authentication;


function swConnector() {
    

let obj = {
	url : "http://services.test.sw.com.mx",
	user: "robbie.reta67@gmail.com",
	password: "9pgG:l2W0IH>"
}

let auth = Authentication.auth(obj);

let callback = (err, data) => {
	if(err) {
		console.log(err)
	} else{
		console.log(data)
	 return data.token
	}
};

auth.Token(callback);

}

export default swConnector