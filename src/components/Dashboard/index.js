import React from "react";
import "./index.css";
const Dashboard = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const role = localStorage.getItem("role");
  return (
    <div className="dashboard-intro">
      <h2>Hi,</h2>
      <h3>Welcome</h3>
      <h4>
        {firstName}
        {""} {lastName}
      </h4>
      <h6>({role})</h6>
    </div>
  );
};

export default Dashboard;
