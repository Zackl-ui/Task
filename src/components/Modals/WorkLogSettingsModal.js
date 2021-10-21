import React, { useState } from "react";
import { UpdateHours } from "../../redux/actions/work.logs.actions";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
const WorkLogSettingsModal = ({ setIsOpenSettings, modalIsOpenSettings }) => {
  const dispatch = useDispatch();
  const [workingHours, setWorkingHours] = useState();
  const [valid, setValid] = useState(false);
  const closeModalSettings = () => {
    setIsOpenSettings(false);
  };
  const customStylesSettings = {
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
    if (workingHours) {
      setWorkingHours("");
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const HandleClear = () => {
    setValid(false);
    setWorkingHours("");
  };
  return (
    <Modal
      isOpen={modalIsOpenSettings}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModalSettings()}
      style={customStylesSettings}
      contentLabel="Example Modal"
    >
      <h3 className="pop-head">Ser Working Hours</h3>
      <div className="row pop-content mt-3">
        <div className="form-group col-lg-12 col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Working Hours
          </label>
          <input
            type="text"
            className="form-control"
            cols="10"
            rows="1"
            placeholder=""
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
          ></input>
          {valid && !workingHours ? (
            <span className="error-message">
              Please enter your preffered working hours *
            </span>
          ) : null}
        </div>
      </div>
      <div className="form-footer">
        <button
          className="save"
          onClick={() => {
            dispatch(UpdateHours(workingHours, closeModalSettings));
            HandleClear();
          }}
        >
          Set Working Hours
        </button>
        <button
          className="cancel-edit"
          onClick={() => {
            closeModalSettings();
            HandleEmpty();
          }}
        >
          Cancel
        </button>
      </div>
      <div
        className="close-btn"
        onClick={() => {
          closeModalSettings();
          HandleClear();
        }}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </Modal>
  );
};

export default WorkLogSettingsModal;
