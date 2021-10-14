import React, { useEffect, useState } from "react";
import "./index.css";
import {
  GetUser,
  EditUser,
  DeleteUser,
  AddUser,
  SetPage,
  UpdateUser,
} from "../../redux/actions/get.user.action";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Form, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.GetUser.data);
  const user = useSelector((state) => state.GetUser.user);
  const page = useSelector((state) => state.GetUser.page);
  const totalPage = useSelector((state) => state.GetUser.totalPage);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [close, setClose] = useState(false);
  const [userType, setUserType] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    dispatch(GetUser(page));
  }, [page]);
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);
  const [modalIsOpen, setIsOpen] = useState(false);
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
  const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
  const openModalAdd = () => {
    setIsOpenAdd(true);
  };
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
  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    if (text.length >= 3) {
      const newUsers = users.filter(
        (ele) =>
          ele.firstName.toLowerCase().includes(text) ||
          ele.lastName.toLowerCase().includes(text)
      );
      setFilteredUsers(newUsers);
    }

    if (text.length === 0) {
      setFilteredUsers(users);
    }
  };
  return (
    <>
      <div className="users">
        <div className="users-top">
          <div className="filter">
            <Form.Group className="mr-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Search by First Name"
                onChange={handleChange}
              />
              <i class="fa fa-search" aria-hidden="true"></i>
            </Form.Group>
          </div>
          <div className="add">
            <button onClick={openModalAdd}>
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Working Hours</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers
              .filter((users) => users.id !== 1)
              .map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.working_hours}</td>
                    <td>{user.roles[0].name}</td>
                    <td>
                      <button
                        onClick={() => dispatch(EditUser(user), openModal())}
                        className="edit"
                      >
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                      <button
                        onClick={() => dispatch(DeleteUser(user))}
                        className="delete"
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.Prev
            onClick={() => (page > 1 ? dispatch(SetPage(page - 1)) : null)}
          />
          {page === 1 ? null : (
            <Pagination.Item
              onClick={() => (page > 1 ? dispatch(SetPage(page - 1)) : null)}
            >
              {page - 1}
            </Pagination.Item>
          )}
          <Pagination.Item active>{page}</Pagination.Item>
          {page === 51 ? null : (
            <Pagination.Item
              onClick={() =>
                page < totalPage ? dispatch(SetPage(page + 1)) : null
              }
            >
              {page + 1}
            </Pagination.Item>
          )}
          <Pagination.Next
            onClick={() =>
              page < totalPage ? dispatch(SetPage(page + 1)) : null
            }
          />
        </Pagination>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
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
          </div>
        </div>
        <div className="form-footer">
          <button
            className="save"
            onClick={() =>
              dispatch(
                UpdateUser(
                  {
                    firstName: editFirstName,
                    lastName: editLastName,
                    email: editEmail,
                  },
                  user
                )
              )
            }
          >
            Edit
          </button>
          <button type="submit" className="cancel-edit">
            Cancel
          </button>
        </div>
        <div className="close-btn" onClick={closeModal}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpenAdd}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalAdd}
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
          </div>
        </div>
        <div className="form-footer">
          <button
            className="save"
            onClick={() => (
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
                  history
                )
              ),
              setClose
            )}
          >
            Add
          </button>
          <button className="cancel-edit" onClick={closeModalAdd}>
            Cancel
          </button>
        </div>
        <div className="close-btn" onClick={closeModalAdd}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </Modal>
    </>
  );
};

export default Users;
