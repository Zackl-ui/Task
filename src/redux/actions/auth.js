import axios from "axios";
import { Loading, ErrorMsg } from "./error";
const SignIn = (data, history) => {
  return (dispatch) => {
    dispatch(Loading(true));
    axios
      .post("http://34.210.129.167/api/login", { ...data }, {})
      .then((response) => {
        dispatch(Sign_In(response.data), Loading(false));
        history.push("/dashboard");
      })
      .catch((err) => dispatch(ErrorMsg(err.response.data)));
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
  localStorage.setItem("role", data.user.roles[0].name);
  localStorage.setItem("id", data.user.id);
  localStorage.setItem("firstName", data.user.firstName);
  localStorage.setItem("lastName", data.user.lastName);
  return {
    type: "LOGIN",
    payload: data,
    token: data.token,
    role: data.user.roles[0].name,
    id: data.user.id,
    firstName: data.user.firstName,
    lastName: data.user.lastName,
  };
};
const SetToken = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return {
    type: "SET_TOKEN",
    token: token === "undefined" ? undefined : token,
    role: role === "undefined" ? undefined : role,
  };
};
const SET_ID = (id) => {
  return {
    type: "SET_ID",
    userId: id,
  };
};
export { SignIn, Sign_In, SetToken, SignUP, SET_ID };
