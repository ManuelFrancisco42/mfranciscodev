import React from 'react';
import CertificateIcon from './certificateIcon.js';
import ValidatorIcon from './ValidatorIcon.js';
import TimelapseIcon from './TimelapseIcon.js';
import './_StasSectionB.scss';

const Stats = () => {
  return (
    <section id="home-b" className="text-center py-2 my-4">
      <div className="stats">
        <StatItem
          IconComponent={CertificateIcon}
          title="Certificat"
          number="20"
          alt="icon termines"
        />
        <StatItem
          IconComponent={ValidatorIcon}
          title="Heures de Formation"
          number="+ 1125"
          alt="icon project"
        />
        <StatItem
          IconComponent={TimelapseIcon}
          title="Projets Terminés"
          number="+ 35"
          alt="icon project termines"
        />
      </div>
    </section>
  );
};

const StatItem = ({ IconComponent, title, number, alt }) => {
  return (
    <div>
      <ul>
        <li>
          <IconComponent className='svgColor' />
        </li>
        <li className="stats-title">{title}</li>
        <li className="stats-number">{number}</li>
      </ul>
    </div>
  );
};

export default Stats;
