import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetLogs,
  EditData,
  FilterLogs,
  GetSpecLogs,
  DeleteLogs,
} from "../../redux/actions/work.logs.actions";
import { Form } from "react-bootstrap";
import UpdateWorkLogModal from "../Modals/UpdateWorkLogModal";
import CreateWorkLogModal from "../Modals/CreateWorkLogModal";
import WorkLogSettingsModal from "../Modals/WorkLogSettingsModal";
const WorkLog = (props) => {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenSettings, setIsOpenSettings] = useState(false);
  const [modalIsOpenUpdate, setIsOpenUpdate] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const handleEmpty = () => {
    setFromDate("");
    setToDate("");
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const openModalUpdate = () => {
    setIsOpenUpdate(true);
  };
  const openModalSettings = () => {
    setIsOpenSettings(true);
  };
  const dispatch = useDispatch();
  const log = useSelector((state) => state.WorkData.data);
  const role = useSelector((state) => state.User.role);
  const loading = useSelector((state) => state.Helper.loading);
  useEffect(() => {
    role === "user" ? dispatch(GetLogs()) : dispatch(GetSpecLogs(id));
  }, [role, dispatch, id]);
  return (
    <>
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
                <i className="fa fa-cog mr-2" aria-hidden="true"></i>Settings
              </button>
            ) : null}
          </div>
          <div className="add">
            <button onClick={openModal} className="d-flex align-items-center">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              <h6 className="mb-0 ml-2">Add WorkLog</h6>
            </button>
          </div>
        </div>
        {loading ? (
          <div className="loader">
            <div className="loading"></div>
          </div>
        ) : (
          <>
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
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                    {localStorage.getItem("role") === "user" ? (
                      <div
                        className="box-delete"
                        onClick={() => dispatch(DeleteLogs(item.id))}
                      >
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <WorkLogSettingsModal
              modalIsOpenSettings={modalIsOpenSettings}
              setIsOpenSettings={setIsOpenSettings}
            />
            <CreateWorkLogModal
              modalIsOpen={modalIsOpen}
              setIsOpen={setIsOpen}
            />
            <UpdateWorkLogModal
              modalIsOpenUpdate={modalIsOpenUpdate}
              setIsOpenUpdate={setIsOpenUpdate}
            />
          </>
        )}
      </div>
    </>
  );
};

export default WorkLog;
