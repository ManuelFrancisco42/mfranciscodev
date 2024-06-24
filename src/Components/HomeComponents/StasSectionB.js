import React from 'react';
import  './_StasSectionB.scss';

const Stats = () => {
  return (
    <section id="home-b" className="text-center py-2">
      <div className="stats">
        <StatItem iconClass="fas fa-users fa-3x" title="Clients" number="100" />
        <StatItem iconClass="fas fa-award fa-3x" title="Awards" number="3" />
        <StatItem
          iconClass="fas fa-hourglass-start fa-3x"
          title="Hours Worked"
          number="3500"
        />
        <StatItem
          iconClass="fas fa-code-branch fa-3x"
          title="Projects Completed"
          number="135"
        />
      </div>
    </section>
  );
};

const StatItem = ({ iconClass, title, number }) => {
  return (
    <div>
      <ul>
        <li><i className={iconClass}></i></li>
        <li className="stats-title">{title}</li>
        <li className="stats-number">{number}</li>
      </ul>
    </div>
  );
};

export default Stats;
