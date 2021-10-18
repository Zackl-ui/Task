import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetLogs,
  CreateLogs,
  UpdateLogs,
  EditData,
  FilterLogs,
  UpdateHours,
  GetSpecLogs,
} from "../../redux/actions/work.logs.actions";
import { Form } from "react-bootstrap";
import Modal from "react-modal";
const WorkLog = (props) => {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenSettings, setIsOpenSettings] = useState(false);
  const [modalIsOpenUpdate, setIsOpenUpdate] = useState(false);
  const [logDate, setLogDate] = useState("");
  const [hours, setHours] = useState("");
  const [workingHours, setWorkingHours] = useState();
  const [description, setDescription] = useState("");
  const [updateLogDate, setUpdateLogDate] = useState("");
  const [updateHours, setUpdateHours] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const handleEmpty = () => {
    setFromDate("");
    setToDate("");
  };
  const openModal = () => {
    setIsOpen(true);
  };
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
  const openModalUpdate = () => {
    setIsOpenUpdate(true);
  };
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
  const openModalSettings = () => {
    setIsOpenSettings(true);
  };
  const closeModalSettings = () => {
    setIsOpenSettings(false);
  };
  const dispatch = useDispatch();
  const logChange = useSelector((state) => state.WorkData.logChange);
  const log = useSelector((state) => state.WorkData.data);
  const role = useSelector((state) => state.User.role);
  const userId = useSelector((state) => state.User.userId);
  useEffect(() => {
    role === "user" ? dispatch(GetLogs()) : dispatch(GetSpecLogs(id));
  }, [role]);
  return (
    <div className="work-log">
      <h2 className="text-center">WorkLogs</h2>
      <div className="work-top">
        <div className="filter">
          <Form.Group
            className="mr-3 mb-0"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-0">
            <Form.Control
              type="date"
              placeholder="Search by First Name"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </Form.Group>
          <button onClick={() => dispatch(FilterLogs(fromDate, toDate))}>
            Filter
          </button>
          <button
            onClick={() => {
              dispatch(GetLogs());
              handleEmpty();
            }}
          >
            All WorkLogs
          </button>
          {localStorage.getItem("role") === "user" ? (
            <button onClick={openModalSettings}>
              <i class="fa fa-cog mr-2" aria-hidden="true"></i>Settings
            </button>
          ) : null}
        </div>
        <div className="add">
          <button onClick={openModal} className="d-flex align-items-center">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            <h6 className="mb-0 ml-2">Add WorkLog</h6>
          </button>
        </div>
      </div>
      <div className="work-bottom">
        {log.map((item) => {
          return (
            <div className="box">
              <div className="box-top">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>Id:</h3>
                    <p>{item.id}</p>
                  </div>

                  <div>
                    <h3>Log Date:</h3>
                    <p>{item.log_date}</p>
                  </div>
                </div>
                <div className="box-column">
                  <h3>Created At:</h3>
                  <p>{item.created_at}</p>
                </div>
                <div className="box-column">
                  <h3>Description:</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <div
                className={`box-bottom d-flex justify-content-between ${
                  item.is_under_hours && "red"
                }`}
              >
                <div className="box-text d-flex">
                  <h3>Hours:</h3>
                  <p>{item.hours}</p>
                </div>
                <div className="box-button">
                  <button
                    onClick={() => {
                      dispatch(EditData(item));
                      openModalUpdate();
                    }}
                  >
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpenSettings}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalSettings}
        style={customStyles}
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
          </div>
        </div>
        <div className="form-footer">
          <button
            className="save"
            onClick={() => {
              dispatch(UpdateHours(workingHours, userId));
            }}
          >
            Set Working Hours
          </button>
          <button className="cancel-edit" onClick={closeModalSettings}>
            Cancel
          </button>
        </div>
        <div className="close-btn" onClick={closeModalSettings}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
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
          </div>
        </div>
        <div className="form-footer">
          <button
            className="save"
            onClick={() =>
              dispatch(CreateLogs({ logDate, hours, description }))
            }
          >
            Add WorkLog
          </button>
          <button className="cancel-edit" onClick={closeModal}>
            Cancel
          </button>
        </div>
        <div className="close-btn" onClick={closeModal}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </Modal>
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
          </div>
        </div>
        <div className="form-footer">
          <button
            className="save"
            onClick={() =>
              dispatch(
                UpdateLogs(
                  {
                    logDate: updateLogDate,
                    hours: updateHours,
                    description: updateDescription,
                  },
                  logChange.id
                )
              )
            }
          >
            Update Work Log
          </button>
          <button className="cancel-edit" onClick={closeModalUpdate}>
            Cancel
          </button>
        </div>
        <div className="close-btn" onClick={closeModalUpdate}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </Modal>
    </div>
  );
};

export default WorkLog;
