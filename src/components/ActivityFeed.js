import React from 'react';
import '../styles/Components.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3 className="section-title">Activity</h3>
      <p>3 appointments this week</p>
      <div className="activity-bars">
        {[60, 40, 80, 50, 90].map((val, idx) => (
          <div key={idx} className="bar" style={{ height: `${val}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;