import React, { useEffect, useState } from "react";
import "./index.css";
import {
  GetUser,
  EditUser,
  DeleteUser,
} from "../../redux/actions/get.user.action";
import { SET_ID } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const User = ({ openModal, openModalAdd }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.GetUser.data);
  const page = useSelector((state) => state.GetUser.page);
  const loading = useSelector((state) => state.Helper.loading);
  console.log(loading);
  const [filteredUsers, setFilteredUsers] = useState(users);
  useEffect(() => {
    dispatch(GetUser(page));
  }, [page]);
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);
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
          <button onClick={openModalAdd} className="d-flex align-items-center">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            <h6 className="mb-0 ml-2">Add User</h6>
          </button>
        </div>
      </div>
      {loading ? (
        <div className="loader">
          <div className="loading"></div>
        </div>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Working Hours</th>
                <th>Role</th>
                <th>WorkLogs</th>
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
                        <Link
                          to={`/work-logs/${user.id}`}
                          onClick={() => {
                            dispatch(SET_ID(user.id));
                          }}
                          className="view"
                        >
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                      </td>
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
        </>
      )}
    </>
  );
};

export default User;
