import React, { useState } from "react";
import User from "../components/Users";
import AddUsersModal from "../components/Modals/AddUsersModal";
import EditUsersModal from "../components/Modals/EditUserModal";
import UsersPagination from "../components/Pagination";
const Users = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const openModalAdd = () => {
    setIsOpenAdd(true);
  };
  return (
    <>
      <div className="users">
        <h2 className="text-center">Users</h2>
        <User openModal={openModal} openModalAdd={openModalAdd} />
        <UsersPagination />
        <AddUsersModal
          modalIsOpenAdd={modalIsOpenAdd}
          setIsOpenAdd={setIsOpenAdd}
        />
        <EditUsersModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Users;
