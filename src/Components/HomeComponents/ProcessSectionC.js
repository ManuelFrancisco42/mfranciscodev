import React from "react";
import "./_ProcessSectionC.scss";

const Process = () => {
  return (
    <section id="home-c" className="text-center py-3 bg-dark">
      <div className="container">
        <h2 className="section-title" lang="fr">
          Mon Processus Créatif
        </h2>
       
        <p className="lead" lang="fr">
          Chaque projet et design dans mon univers créatif suit une formule
          éprouvée pour atteindre les résultats recherchés.
        </p>
        <div className="process">
          <ProcessStep
            iconClass="fas fa-book fa-4x process-icon my-2"
            title="Discussion du Projet"
            description="Nous entamons chaque projet par une discussion approfondie, explorant ensemble les détails cruciaux pour une mise en œuvre réussie."
          />
          <ProcessStep
            iconClass="fas fa-desktop fa-4x process-icon my-2"
            title="Brainstorming du Concept"
            description="Le processus créatif prend vie lors d'une session de brainstorming dynamique, où chaque idée trouve sa place pour définir le concept unique de votre projet."
          />
          <ProcessStep
            iconClass="fas fa-calendar-alt fa-4x process-icon my-2"
            title="Planning"
            description="La planification méticuleuse assure une expérience utilisateur fluide sur votre site ou application."
          />
          <ProcessStep
            iconClass="fas fa-exchange-alt fa-4x process-icon my-2"
            title="Interaction au CŒUR"
            description="Chaque étape respire l'interaction. Des icônes de qualité transforment vos idées en une interface interactive, ajustée en collaboration étroite avec votre approbation."
          />
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ iconClass, title, description }) => {
  return (
    <div>
      <i className={iconClass} aria-hidden="true"></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Process;
