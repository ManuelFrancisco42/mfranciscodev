import React from 'react';
import AboutMe from '../Components/AboutComponents/AboutMeSectionA.js';
import TechnicalSkills from '../Components/AboutComponents/TechnicalSkillsSectionB.js';
import Logos from '../Components/AboutComponents/LogosSectionC.js';
import Testimonials from '../Components/AboutComponents/TestimonialsSectionD.js';


const AboutPage = () => {
  return (
    <div className="App">
      <AboutMe />
      <TechnicalSkills />
      <Logos />
      <Testimonials />
    </div>
  );
};

export default AboutPage;
