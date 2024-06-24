import React from 'react';
import Specialize from '../Components/HomeComponents/SpecializeSectionA';
import Stats from '../Components/HomeComponents/StasSectionB';
import Process from '../Components/HomeComponents/ProcessSectionC';

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
