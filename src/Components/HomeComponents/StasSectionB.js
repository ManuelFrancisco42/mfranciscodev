import React from 'react';
import certificate from '../../assets/images/stats/certificate.svg';
import validator from '../../assets/images/stats/access_time.svg';
import timelapse from '../../assets/images/stats/check_circle_outline.svg';
import './_StasSectionB.scss';

const Stats = () => {
  return (
    <section id="home-b" className="text-center py-2">
      {/* <h2 className="lead" lang="fr">Custom Web Development Solutions</h2> */}
      <div className="stats">
        <StatItem 
          svg={certificate}
          title="Certificat"
          number="20"
          alt="icon termines"
        />
        <StatItem 
          svg={validator}
          title="Heures de Formation"
          number="+ 1125"
          alt="icon project"
        />
        <StatItem 
          svg={timelapse}
          title="Projets Terminés"
          number="+ 35"
          alt="icon project termines"
        />
      </div>
    </section>
  );
};

const StatItem = ({ svg, title, number, alt }) => {
  return (
    <div>
      <ul>
        <li><img src={svg} alt={alt} /></li>
        <li className="stats-title">{title}</li>
        <li className="stats-number">{number}</li>
      </ul>
    </div>
  );
};

export default Stats;
