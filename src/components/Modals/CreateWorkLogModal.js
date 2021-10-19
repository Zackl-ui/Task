import React, { useState } from "react";
import Modal from "react-modal";
import { CreateLogs } from "../../redux/actions/work.logs.actions";
import { useDispatch } from "react-redux";
const CreateWorkLogModal = ({ modalIsOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [logDate, setLogDate] = useState("");
  const [hours, setHours] = useState("");
  const [description, setDescription] = useState("");
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
    if (logDate && hours && description) {
      setValid(false);
      setLogDate("");
      setHours("");
      setDescription("");
    } else {
      setValid(true);
    }
  };
  const HandleClear = () => {
    setValid(false);
    setLogDate("");
    setHours("");
    setDescription("");
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModal()}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3 className="pop-head">Add WorkLog</h3>
      <div className="row pop-content mt-3">
        <div className="form-group col-lg-12 col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Log Date
          </label>
          <input
            type="date"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={logDate}
            onChange={(e) => setLogDate(e.target.value)}
          ></input>
          {valid && !logDate ? (
            <span className="error-message">Please enter log date *</span>
          ) : null}
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Hours
          </label>
          <input
            type="number"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          ></input>
          {valid && !hours ? (
            <span className="error-message">Please enter hours *</span>
          ) : null}
        </div>
        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label htmlFor="inputPassword4" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          {valid && !description ? (
            <span className="error-message">Please enter description *</span>
          ) : null}
        </div>
      </div>
      <div className="form-footer">
        <button
          className="save"
          onClick={() => {
            dispatch(CreateLogs({ logDate, hours, description }, closeModal));
            HandleEmpty();
          }}
        >
          Add WorkLog
        </button>
        <button
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

export default CreateWorkLogModal;
