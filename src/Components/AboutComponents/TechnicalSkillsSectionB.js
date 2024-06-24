import React from 'react';
import  './_TechnicalSkillsSectionB.scss';

const TechnicalSkills = () => {
  return (
    <section id="about-b" className="bg-dark py-3">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line"></div>
        <h4>Photography:</h4>
        <div className="progress">
          <div style={{ width: '100%' }}></div>
        </div>
        <h4>Adobe Photoshop:</h4>
        <div className="progress">
          <div style={{ width: '80%' }}></div>
        </div>
        <h4>Adobe Illustrator:</h4>
        <div className="progress">
          <div style={{ width: '70%' }}></div>
        </div>
        <h4>HTML & CSS:</h4>
        <div className="progress">
          <div style={{ width: '100%' }}></div>
        </div>
        <h4>Wordpress:</h4>
        <div className="progress">
          <div style={{ width: '80%' }}></div>
        </div>
        <h4>Magento:</h4>
        <div className="progress">
          <div style={{ width: '70%' }}></div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
