import React from 'react';
import AboutMe from '../Components/AboutComponents/AboutMeSectionA.js';
import TechnicalSkills from '../Components/AboutComponents/TechnicalSkillsSectionB.js';
import Testimonials from '../Components/AboutComponents/TestimonialsSectionC.js';


const AboutPage = () => {
  return (
    <div className="App">
      <AboutMe />
      <TechnicalSkills />
      <Testimonials />
    </div>
  );
};

export default AboutPage;
