import React, { useState } from "react";
import Modal from "react-modal";
import { UpdateUser } from "../../redux/actions/get.user.action";
import { useDispatch, useSelector } from "react-redux";
const EditUserModal = ({ modalIsOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.GetUser.user);
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [valid, setValid] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
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
    if (editFirstName && editLastName && editEmail) {
      setEditFirstName("");
      setEditLastName("");
      setEditEmail("");
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const HandleClear = () => {
    setValid(false);
    setEditFirstName("");
    setEditLastName("");
    setEditEmail("");
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModal()}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3 className="pop-head">Edit User</h3>
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
            value={editFirstName}
            onChange={(e) => setEditFirstName(e.target.value)}
          ></input>
          {valid && !editFirstName ? (
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
            value={editLastName}
            onChange={(e) => setEditLastName(e.target.value)}
          ></input>
          {valid && !editLastName ? (
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
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          ></input>
          {valid && !editEmail ? (
            <span className="error-message">Please enter email *</span>
          ) : null}
        </div>
      </div>
      <div className="form-footer">
        <button
          className="save"
          onClick={() => {
            dispatch(
              UpdateUser(
                {
                  firstName: editFirstName,
                  lastName: editLastName,
                  email: editEmail,
                },
                user,
                closeModal
              )
            );
            HandleEmpty();
          }}
        >
          Edit
        </button>
        <button
          type="submit"
          className="cancel-edit"
          onClick={() => {
            closeModal();
            HandleClear();
          }}
        >
          Cancel
        </button>
      </div>
      <div
        className="close-btn"
        onClick={() => {
          closeModal();
          HandleClear();
        }}
      >
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
    </Modal>
  );
};

export default EditUserModal;
