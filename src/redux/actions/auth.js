import axios from "axios";
const SignIn = (data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .post("http://34.210.129.167/api/login", { ...data }, {})
      .then((response) => dispatch(Sign_In(response.data)))
      .catch((err) => console.log(err));
  };
};
const SignUP = (data, setLoginLeft) => {
  console.log(data);
  return () => {
    axios
      .post("http://34.210.129.167/api/register", { ...data }, {})
      .then((response) => setLoginLeft(false))
      .catch((err) => console.log(err));
  };
};
const Sign_In = (data) => {
  localStorage.setItem("token", data.token);
  return {
    type: "LOGIN",
    payload: data,
    token: data.token,
  };
};
const SetToken = () => {
  const token = localStorage.getItem("token");
  return {
    type: "SET_TOKEN",
    token: token === "undefined" ? undefined : token,
  };
};
export { SignIn, Sign_In, SetToken, SignUP };
