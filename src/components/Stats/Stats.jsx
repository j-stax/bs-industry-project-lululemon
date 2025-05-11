import React from "react";
import "./Stats.scss";

const Stats = () => {
  const stats = {
    calories: 2450,
    classes: 12,
    distance: "18.6 km",
    points: 320,
  };
  return (
    <div className="profile-stats">
      <h3 className="stats-title">Stats</h3>
      <div className="stats-grid">
        <StatItem label="Calories" value={`${stats.calories} kcal`} />
        <StatItem label="Attended Classes" value={stats.classes} />
        <StatItem label="Run/Walk Distance" value={stats.distance} />
        <StatItem label="Award Points" value={stats.points} />
      </div>
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div className="stat-item">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default Stats;
