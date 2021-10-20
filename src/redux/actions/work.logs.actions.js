import axios from "axios";
import { toast } from "react-toastify";
import { Loading } from "./error";
const successMsg = (msg) => {
  toast.success(msg);
};
const errorMsg = (msg) => {
  toast.error(msg);
};
export const GetLogs = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(Loading(true));
    axios
      .get(`http://34.210.129.167/api/work-logs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(Loading(false));
        dispatch(logData(response.data.workLogs.data));
      })
      .catch((err) => errorMsg("Error getting WorkLogs"));
  };
};
export const GetSpecLogs = (id) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(Loading(true));
    axios
      .get(`http://34.210.129.167/api/user/${id}/work-logs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(Loading(false));
        dispatch(logData(response.data.workLogs.data));
      })
      .catch((err) => errorMsg("Error getting WorkLogs"));
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
      .then((response) => {
        dispatch(logData(response.data.workLogs));
      })
      .catch((err) => errorMsg("Error filtering WorkLogs"));
  };
};
export const CreateLogs = (data, closeModal) => {
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
      .then((response) => {
        closeModal();
        successMsg("WorkLogs Created Successfully");
      })
      .catch((err) => errorMsg("Error creating WorkLogs"));
  };
};
export const DeleteLogs = (id) => {
  const token = localStorage.getItem("token");
  return () => {
    axios
      .delete(`http://34.210.129.167/api/work-logs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        successMsg("WorkLogs Deleted Successfully");
      })
      .catch((err) => errorMsg("Error deleting WorkLogs"));
  };
};
export const UpdateLogs = (logChange, id, closeModalUpdate) => {
  const token = localStorage.getItem("token");
  return () => {
    axios
      .put(`http://34.210.129.167/api/work-logs/${id}`, logChange, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        closeModalUpdate();
        successMsg("WorkLogs Updated Successfully");
      })
      .catch((err) => errorMsg("Error updating WorkLogs"));
  };
};
export const UpdateHours = (workingHours, closeModalSettings) => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  return () => {
    axios
      .patch(
        `http://34.210.129.167/api/users/${id}/preferred-working-hours`,
        { workingHours: `${workingHours}` },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        closeModalSettings();
        successMsg("Preffered hours Updated Successfully");
      })
      .catch((err) => errorMsg("Error updating Preffered hours"));
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
