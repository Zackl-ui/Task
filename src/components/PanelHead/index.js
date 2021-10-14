import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.css";
const PanelHead = () => {
  const history = useHistory();
  return (
    <div className="panel-head">
      <a href="#" class="logo">
        Time Manager<span>&nbsp;.</span>
      </a>
      <div className="panel-top">
        <ul className="panel-link">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link>WorkLog</Link>
          </li>
        </ul>
        <div className="logout">
          <button
            onClick={() => {
              history.push("/");
              localStorage.clear();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelHead;
