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
        {localStorage.getItem("role") === "user" ? (
          <ul className="panel-link">
            <li>
              <Link to="/work-logs">WorkLog</Link>
            </li>
          </ul>
        ) : (
          <ul className="panel-link">
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        )}

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
