import React from 'react';
import logo from '../../assets/images/showcase/web-development-showcase-2.jpg';
import img1 from '../../assets/images/showcase/web-development-showcase-3.jpg';
import img2 from '../../assets/images/showcase/web-development-showcase-5.jpg';
import img3 from '../../assets/images/showcase/web-development-showcase-1.jpg';
import  './_SpecializeSectionA.scss';

const Specialize = () => {
  return (
    <section id="home-a" className="text-center py-2 my-4">
      <div className="container">
        <h2 className="section-title" lang="fr">Je me consacre à la</h2>
      
        <p className="lead" lang="fr">
            Création d&apos;expériences numériques uniques pour sites web et applications.
          </p>
        <p className="lead" lang="fr">
        Services professionnels de développeur web et d&apos;intégrateur web
          </p>
        <div className="specials">
          <SpecializeItem
              imgSrc={logo}
              alt="Web integration services"
              title="Discutions Votre Website"
              description="Donnons vie à votre projet avec dévouement et professionnalisme."
          />
          <SpecializeItem
              imgSrc={img1}
              alt="Web developer working on code"
              title="Brainstorming Site internet"
              description="Définissons ensemble le concept unique de votre projet lors d&apos;une session où chaque idée prend vie."
          />
          <SpecializeItem
              imgSrc={img2}
              alt="Web integration services"
              title="Planification et Discussion"
              description="Discutons des détails et établissons des plans solides pour assurer le succès de votre website."
          />
          <SpecializeItem
              imgSrc={img3}
              alt="Web integration services"
              title="Interaction au CŒUR"
              description="Collaborons étroitement à chaque étape pour un processus transparent et des résultats qui dépassent vos attentes."
          />
        </div>
      </div>
    </section>
  );
};

const SpecializeItem = ({ imgSrc, alt, title, description }) => {
  return (
    <div>
      <img src={imgSrc} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Specialize;
