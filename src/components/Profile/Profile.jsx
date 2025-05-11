import React from "react";
import "./Profile.scss"; // Import SCSS styles

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    age: 30,
    location: "New York, USA",
  };

  return (
    // <div className="profile-page">
    <div className="profile-card">
      <h2 className="profile-title">User Profile</h2>
      <div className="profile-info">
        <ProfileItem label="Name" value={user.name} />
        <ProfileItem label="Email" value={user.email} />
        <ProfileItem label="Gender" value={user.gender} />
        <ProfileItem label="Age" value={user.age} />
        <ProfileItem label="Location" value={user.location} />
      </div>
    </div>
    // </div>
  );
};

const ProfileItem = ({ label, value }) => (
  <div className="profile-item">
    <span className="label">{label}</span>
    <span className="value">{value}</span>
  </div>
);

export default Profile;
