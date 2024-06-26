import React from 'react';
import Specialize from '../Components/HomeComponents/SpecializeSectionA.js';
import Stats from '../Components/HomeComponents/StasSectionB.js';
import Process from '../Components/HomeComponents/ProcessSectionC.js';

const HomePage = () => {
  return (
    <div className="App">
      <Specialize />
      <Stats />
      <Process />
    </div>
  );
};

export default HomePage;
