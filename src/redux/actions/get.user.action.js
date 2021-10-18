import axios from "axios";
import { toast } from "react-toastify";
import { Loading,ErrorMsg } from './error';
const successMsg = (msg) => {
  toast.success(msg);
};
const errorMsg = (msg) => {
  toast.error(msg);
};
export const GetUser = (page) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(Loading(true))
    axios
      .get(`http://34.210.129.167/api/users?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>
        dispatch(SetUser(response.data.users), Loading(false))
      )
      .catch((err) => dispatch(ErrorMsg(err)));
  };
};
export const UpdateUser = (user, id) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .put(`http://34.210.129.167/api/users/${id.id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(successMsg("User updated Successfully")))
      .catch((err) => dispatch(errorMsg("User update Error")));
  };
};
export const DeleteUser = (user) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .delete(`http://34.210.129.167/api/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(successMsg("User deleted Successfully")))
      .catch((err) => console.log(err));
  };
};
export const AddUser = (user, setClose) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(`http://34.210.129.167/api/users`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(setClose(true));
        dispatch(successMsg("User added Successfully"));
      })
      .catch((err) => console.log(err));
  };
};
const SetUser = (data) => {
  return {
    type: "GET_USER",
    payload: data.data,
    pages: data.last_page,
  };
};
export const EditUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};
export const SetPage = (page) => {
  return {
    type: "SET_PAGE",
    payload: page,
  };
};
