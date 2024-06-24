import React from 'react';
import  './_ProcessSectionC.scss';

const Process = () => {
  return (
    <section id="home-c" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">My Creative Process</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          All of my UI/UX and design projects are based off of a practiced
          formula to get the result that I am looking for
        </p>
        <div className="process">
          <ProcessStep
            iconClass="fas fa-file-alt fa-4x process-icon my-2"
            stepNumber="1"
            title="Discuss The Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate."
          />
          <ProcessStep
            iconClass="fas fa-desktop fa-4x process-icon my-2"
            stepNumber="2"
            title="Brainstorming & Concept"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate."
          />
          <ProcessStep
            iconClass="fas fa-object-ungroup fa-4x process-icon my-2"
            stepNumber="3"
            title="UI/UX Planning"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate."
          />
          <ProcessStep
            iconClass="fas fa-thumbs-up fa-4x process-icon my-2"
            stepNumber="4"
            title="Interaction"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate."
          />
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ iconClass, stepNumber, title, description }) => {
  return (
    <div>
      <i className={iconClass}>
        <div className="process-step">{stepNumber}</div>
      </i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Process;
