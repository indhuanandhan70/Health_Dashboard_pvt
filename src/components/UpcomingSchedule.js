import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/Components.css';

const scheduleData = [
  { day: 'On Thursday', appointments: [{ title: 'Cardiologist', time: '10:30 AM' }, { title: 'Dentist', time: '01:00 PM' }] },
  { day: 'On Saturday', appointments: [{ title: 'Neurologist', time: '11:00 AM' }] }
];

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>
      {scheduleData.map((day, index) => (
        <div key={index} className="day-group">
          <h4 className="day-label">{day.day}</h4>
          {day.appointments.map((appt, idx) => (
            <SimpleAppointmentCard key={idx} title={appt.title} time={appt.time} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;