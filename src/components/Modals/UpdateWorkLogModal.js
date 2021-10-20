import React, { useState } from "react";
import { UpdateLogs } from "../../redux/actions/work.logs.actions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
const UpdateWorkLogModal = ({ modalIsOpenUpdate, setIsOpenUpdate }) => {
  const dispatch = useDispatch();
  const [updateLogDate, setUpdateLogDate] = useState("");
  const [updateHours, setUpdateHours] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const logChange = useSelector((state) => state.WorkData.logChange);
  const [valid, setValid] = useState(false);
  const closeModalUpdate = () => {
    setIsOpenUpdate(false);
  };
  const customStylesUpdate = {
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
    if (updateLogDate && updateHours && updateDescription) {
      setUpdateDescription("");
      setUpdateHours("");
      setUpdateDescription("");
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const HandleClear = () => {
    setValid(false);
    setUpdateDescription("");
    setUpdateHours("");
    setUpdateDescription("");
  };
  return (
    <Modal
      isOpen={modalIsOpenUpdate}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModalUpdate}
      style={customStylesUpdate}
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
            value={updateLogDate}
            onChange={(e) => setUpdateLogDate(e.target.value)}
          ></input>
          {valid && !updateLogDate ? (
            <span className="error-message">Please enter date *</span>
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
            value={updateHours}
            onChange={(e) => setUpdateHours(e.target.value)}
          ></input>
          {valid && !updateHours ? (
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
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
          ></input>
          {valid && !updateHours ? (
            <span className="error-message">Please enter description *</span>
          ) : null}
        </div>
      </div>
      <div className="form-footer">
        <button
          className="save"
          onClick={() => {
            dispatch(
              UpdateLogs(
                {
                  logDate: updateLogDate,
                  hours: updateHours,
                  description: updateDescription,
                },
                logChange.id,
                closeModalUpdate
              )
            );
            HandleEmpty();
          }}
        >
          Update Work Log
        </button>
        <button
          className="cancel-edit"
          onClick={() => {
            closeModalUpdate();
            HandleClear();
          }}
        >
          Cancel
        </button>
      </div>
      <div
        className="close-btn"
        onClick={() => {
          closeModalUpdate();
          HandleClear();
        }}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </Modal>
  );
};

export default UpdateWorkLogModal;
