import React from "react";
import PanelHead from "../components/PanelHead";
const AppLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <PanelHead />
      {children}
    </div>
  );
};

export default AppLayout;
