import React, { useEffect } from "react";
import "./index.css";
import {
  GetUser,
  EditUser,
  DeleteUser,
} from "../../redux/actions/get.user.action";
import { useDispatch, useSelector } from "react-redux";
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.GetUser.data);
  const user = useSelector((state) => state.GetUser.user);
  useEffect(() => {
    dispatch(GetUser());
  }, []);
  return (
    <div className="users">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.roles[0].name}</td>
                <td>
                  <button onClick={() => dispatch(EditUser(user))}>Edit</button>
                  <button onClick={() => dispatch(DeleteUser(user))}>
                    DeleteUser
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
