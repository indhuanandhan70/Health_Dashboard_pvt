import React from 'react';
import '../styles/Components.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <h3 className="section-title">Body Overview</h3>
      <div className="anatomy-content">
        <img src="https://cdn.pixabay.com/photo/2013/07/13/10/19/body-157483_1280.png" alt="Human Anatomy" className="anatomy-image" />
        <div className="anatomy-tags">
          <span className="tag healthy">Healthy Heart</span>
          <span className="tag danger">Lungs: Issue</span>
          <span className="tag warning">Teeth: Checkup</span>
          <span className="tag info">Bone: Good</span>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;