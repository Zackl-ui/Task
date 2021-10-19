import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { SetPage, GetUser } from "../../redux/actions/get.user.action";
import { useDispatch, useSelector } from "react-redux";
const UsersPagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.GetUser.page);
  const totalPage = useSelector((state) => state.GetUser.totalPage);
  useEffect(() => {
    dispatch(GetUser(page));
  }, [page]);
  return (
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
        onClick={() => (page < totalPage ? dispatch(SetPage(page + 1)) : null)}
      />
    </Pagination>
  );
};

export default UsersPagination;
