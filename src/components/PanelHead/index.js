import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const PanelHead = () => {
  return (
    <div className="panel-head">
      <a href="#" class="logo">
        Bilal<span>&nbsp;.</span>
      </a>
      <ul className="panel-link">
        <li>
          <Link>Users</Link>
        </li>
        <li>
          <Link>WorkLog</Link>
        </li>
      </ul>
    </div>
  );
};

export default PanelHead;
