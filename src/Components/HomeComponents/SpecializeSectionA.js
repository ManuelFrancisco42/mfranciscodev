import React from 'react';
import  './_SpecializeSectionA.scss';

const Specialize = () => {
  return (
    <section id="home-a" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">I Specialize In</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
        <div className="specials">
          <SpecializeItem
            iconClass="fas fa-file-alt fa-2x"
            title="Concepting"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem."
          />
          <SpecializeItem
            iconClass="fas fa-desktop fa-2x"
            title="UI/UX"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem."
          />
          <SpecializeItem
            iconClass="fas fa-object-ungroup fa-2x"
            title="Visual Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem."
          />
          <SpecializeItem
            iconClass="fas fa-thumbs-up fa-2x"
            title="Interaction"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem."
          />
        </div>
      </div>
    </section>
  );
};

const SpecializeItem = ({ iconClass, title, description }) => {
  return (
    <div>
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Specialize;
