import axios from "axios";
export const GetUser = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .get("http://34.210.129.167/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(SetUser(response.data.users.data)))
      .catch((err) => console.log(err));
  };
};
export const UpdateUser = (user) => {
  const token = localStorage.getItem("token");
  return () => {
    axios
      .put(`http://34.210.129.167/api/users/${user.id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response)
      .catch((err) => console.log(err));
  };
};
export const DeleteUser = (user) => {
  const token = localStorage.getItem("token");
  return () => {
    axios
      .delete(`http://34.210.129.167/api/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response)
      .catch((err) => console.log(err));
  };
};
const SetUser = (users) => {
  return {
    type: "GET_USER",
    payload: users,
  };
};
export const EditUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};
