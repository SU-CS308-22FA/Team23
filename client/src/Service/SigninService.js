import axios, * as others from "axios";

export default async function SigninService(props) {
  let email = props[0];
  let password = props[1];
  var data = JSON.stringify({
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    url: "http://localhost:3000/users/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
