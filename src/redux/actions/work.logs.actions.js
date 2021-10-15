import axios from "axios";
export const GetLogs = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .get(`http://34.210.129.167/api/work-logs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(logData(response.data.workLogs.data)))
      .catch((err) => console.log(err));
  };
};
export const FilterLogs = (from, to) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .get(`http://34.210.129.167/api/work-logs/${from}/${to}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(logData(response.data.workLogs)))
      .catch((err) => console.log(err));
  };
};
export const CreateLogs = (data) => {
  const token = localStorage.getItem("token");
  return () => {
    axios
      .post(
        `http://34.210.129.167/api/work-logs`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => response)
      .catch((err) => console.log(err));
  };
};
export const UpdateLogs = (logChange, id) => {
  const token = localStorage.getItem("token");
  return () => {
    axios
      .put(`http://34.210.129.167/api/work-logs/${id}`, logChange, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response)
      .catch((err) => console.log(err));
  };
};
export const logData = (data) => {
  return {
    type: "GET_LOGS",
    payload: data,
  };
};
export const EditData = (logChange) => {
  return {
    type: "SET_LOGS",
    payload: logChange,
  };
};
