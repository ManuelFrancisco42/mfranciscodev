import React from 'react';
import AboutMe from '../Components/AboutComponents/AboutMeSectionA';
import TechnicalSkills from '../Components/AboutComponents/TechnicalSkillsSectionB';
import Logos from '../Components/AboutComponents/LogosSectionC';
import Testimonials from '../Components/AboutComponents/TestimonialsSectionD';


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
