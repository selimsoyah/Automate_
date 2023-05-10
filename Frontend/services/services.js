import axios from "axios";

function sendOTP(code) {
  // make sure to inser server ip adress
  const url = "http://192.168.0.52:3000/otp";
  const data = {
    code: JSON.stringify(code),
  };
  return axios
    .post(url, data)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", JSON.stringify(error));
    });
}

export { sendOTP };
