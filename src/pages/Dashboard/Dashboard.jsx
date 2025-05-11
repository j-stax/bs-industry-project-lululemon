import React from "react";
import Profile from "../../components/Profile/Profile";
import Stats from "../../components/Stats/Stats";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss"; // Import the SCSS file

function Dashboard() {
  return (
    <div className="dashboard">
      <Profile />
      <Stats />
    </div>
  );
}

export default Dashboard;
