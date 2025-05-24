import React from 'react';
import '../styles/Components.css';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h3 className="section-title">Calendar - May 2025</h3>
      <div className="calendar-grid">
        {['09:00', '11:00', '13:00', '15:00'].map((time, idx) => (
          <div key={idx} className="calendar-slot">
            <span>{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;