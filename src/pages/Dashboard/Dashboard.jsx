import React from "react";
import Profile from "../../components/Profile/Profile";
import Stats from "../../components/Stats/Stats";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss"; // Import the SCSS file

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__inner">
        <Profile />
        <Stats />
      </div>
    </div>
  );
}

export default Dashboard;
