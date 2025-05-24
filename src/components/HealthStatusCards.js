import React from 'react';
import '../styles/Components.css';

const healthStatuses = [
  { title: 'Lungs', status: 'Needs Attention', color: 'red', date: '23 May 2025' },
  { title: 'Teeth', status: 'Scheduled', color: 'orange', date: '25 May 2025' },
  { title: 'Bone', status: 'Healthy', color: 'green', date: '28 May 2025' }
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      <h3 className="section-title">Health Overview</h3>
      <div className="card-container">
        {healthStatuses.map((item, index) => (
          <div key={index} className="health-card">
            <h4>{item.title}</h4>
            <p className={`status ${item.color}`}>{item.status}</p>
            <span className="date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCards;