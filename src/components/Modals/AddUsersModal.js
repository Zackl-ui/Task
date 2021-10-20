import React, { useState } from "react";
import { AddUser } from "../../redux/actions/get.user.action";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
const AddUsersModal = ({ setIsOpenAdd, modalIsOpenAdd }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  const [userType, setUserType] = useState("");
  const [valid, setValid] = useState(false);
  const closeModalAdd = () => {
    setIsOpenAdd(false);
  };
  const customStylesAdd = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 999999,
    },
    content: {
      top: "50%",
      left: "55%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      maxWidth: 500,
      width: "100%",
      borderRadius: "15px",
      padding: "32px 36px 52px 36px",
    },
  };
  const HandleEmpty = () => {
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      password_confirmation &&
      userType
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const HandleClear = () => {
    setValid(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPassword_Confirmation("");
    setUserType("");
  };
  return (
    <Modal
      isOpen={modalIsOpenAdd}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModalAdd()}
      style={customStylesAdd}
      contentLabel="Example Modal"
    >
      <h3 className="pop-head">Add User</h3>
      <div className="row pop-content mt-3">
        <div className="form-group col-lg-12 col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          {valid && !firstName ? (
            <span className="error-message">Please enter first name *</span>
          ) : null}
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          {valid && !lastName ? (
            <span className="error-message">Please enter last name *</span>
          ) : null}
        </div>
        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {valid && !email ? (
            <span className="error-message">Please enter email *</span>
          ) : null}
        </div>
        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {valid && !password ? (
            <span className="error-message">Please enter password *</span>
          ) : null}
        </div>
        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label htmlFor="inputPassword4" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={password_confirmation}
            onChange={(e) => setPassword_Confirmation(e.target.value)}
          ></input>
          {valid && !password_confirmation ? (
            <span className="error-message">
              Please enter confirm_password *
            </span>
          ) : null}
        </div>
        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label htmlFor="inputPassword4" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          ></input>
          {valid && !userType ? (
            <span className="error-message">Please enter role *</span>
          ) : null}
        </div>
      </div>
      <div className="form-footer">
        <button
          className="save"
          onClick={() => {
            dispatch(
              AddUser(
                {
                  firstName,
                  lastName,
                  email,
                  password,
                  password_confirmation,
                  userType,
                },
                closeModalAdd
              )
            );
            HandleEmpty();
          }}
        >
          Add
        </button>
        <button
          className="cancel-edit"
          onClick={() => {
            closeModalAdd();
            HandleClear();
          }}
        >
          Cancel
        </button>
      </div>
      <div
        className="close-btn"
        onClick={() => {
          closeModalAdd();
          HandleClear();
        }}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </Modal>
  );
};

export default AddUsersModal;
