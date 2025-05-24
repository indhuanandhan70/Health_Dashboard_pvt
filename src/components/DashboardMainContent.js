// src/components/DashboardMainContent.jsx
import React from 'react';
import '../styles/Dashboard.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <div className="dashboard-middle">
        <CalendarView />
        <UpcomingSchedule />
      </div>
      <div className="dashboard-bottom">
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardMainContent;
