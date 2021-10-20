import axios from "axios";
import { toast } from "react-toastify";
import { Loading } from "./error";
const successMsg = (msg) => {
  toast.success(msg);
};
const errorMsg = (msg) => {
  toast.error(msg);
};
export const GetUser = (page) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(Loading(true));
    axios
      .get(`http://34.210.129.167/api/users?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(Loading(false));
        dispatch(SetUser(response.data.users));
      })
      .catch((err) => errorMsg("Error getting user"));
  };
};
export const UpdateUser = (user, id, closeModal) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(Loading(true));
    axios
      .put(`http://34.210.129.167/api/users/${id.id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        closeModal();
        successMsg("User updated Successfully");
        Loading(false);
      })
      .catch((err) => errorMsg("Error updating user"));
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
      .then((response) => successMsg("User deleted Successfully"))
      .catch((err) => errorMsg("Error deleting user"));
  };
};
export const AddUser = (user, closeModalAdd) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(`http://34.210.129.167/api/users`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        closeModalAdd();
        successMsg("User added Successfully");
      })
      .catch((err) => errorMsg("Error adding user"));
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
