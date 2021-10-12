import React from "react";
import PanelHead from '../components/PanelHead';
const AppLayout = ({ children }) => {
  return (
    <div className="body-wrapper">
      <div className="dashboard">
        <PanelHead />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
