import React from 'react';
import '../styles/Sidebar.css';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaUserMd, FaChartBar, FaVial, FaComments, FaLifeRing, FaCog } from 'react-icons/fa';

const navLinks = [
  { label: 'Dashboard', icon: <FaTachometerAlt /> },
  { label: 'History', icon: <FaHistory /> },
  { label: 'Calendar', icon: <FaCalendarAlt /> },
  { label: 'Appointments', icon: <FaUserMd /> },
  { label: 'Statistics', icon: <FaChartBar /> },
  { label: 'Tests', icon: <FaVial /> },
  { label: 'Chat', icon: <FaComments /> },
  { label: 'Support', icon: <FaLifeRing /> },
  { label: 'Setting', icon: <FaCog /> }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li className="nav-item" key={index}>
            <span className="icon">{link.icon}</span>
            <span className="label">{link.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;