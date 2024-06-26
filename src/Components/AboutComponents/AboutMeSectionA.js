import React from 'react';
import writingDownImage from "../../assets/images/thumbnail/web-development-thumbnail-4.jpg";
import pointdrawingsImage from "../../assets/images/thumbnail/web-development-thumbnail-2.jpg";
import PhoneontableImage from "../../assets/images/thumbnail/web-development-thumbnail-3.jpg";
import myself from "../../assets/images/myself/AvatarMaker.png";
import './_AboutMeSectionA.scss';

const AboutMeSectionA = () => (
  <section id="about-a" className="text-center py-3">
    <div className="container">
      <h2 className="section-title" lang="fr">About Me</h2>
      <p className="lead" lang="fr">
        VOTRE VISION, MON ENGAGEMENT...
      </p>
      <div className="bottom-line"></div>
      <p className="lead">
      Laissez-moi vous parler un peu de moi et de ce que je fais...
      </p>
      <div className="about-info">
        <img src={myself} alt="Manuel Francisco" className="bio-image" />
        <div className="bio bg-light">
          <h4 lang="fr">Votre projet est entre de bonnes mains</h4>
          <p lang="fr">
            Bienvenue dans l'univers où la créativité rencontre la
            fonctionnalité, où vos idées prennent vie sur le web. En tant
            qu'intégrateur web passionné, je m'engage à donner vie
            à votre projet avec une expertise méticuleuse et une passion
            inébranlable.
          </p>
          <h4 lang="fr">TRANSFORMEZ VOS IDÉES EN RÉALITÉ</h4>
          <p lang="fr">
            Laissez-moi transformer vos concepts en une présence web
            percutante. Chaque détail compte, et je m'assure que votre
            site internet non seulement répond à vos attentes, mais les
            dépasse.
          </p>
        </div>
        <div className="award-1">
          <img
            src={writingDownImage}
            alt="Person writing a brainstorm"
            className="bio-image"
            title="Maquettes détaillées"
          />
          <h3 lang="fr">Maquettes détaillées</h3>
          <p lang="fr">
            Le plan de conception d'applications innovantes et conviviales
          </p>
        </div>
        <div className="award-2">
          <img
            src={pointdrawingsImage}
            alt="Person drawing mobile sketches"
            className="bio-image"
            title="Vous pouvez suivre tout le processus"
          />
          <h3 lang="fr">Vous pouvez suivre tout le processus</h3>
          <p lang="fr">
            Exploration des esquisses UI/UX  la base d'interfaces
            utilisateur intuitives et engageantes
          </p>
        </div>
        <div className="award-3">
          <img
            src={PhoneontableImage}
            alt="Phone on a table"
            className="bio-image"
            title="Utilisation des outils"
          />
          <h3 lang="fr">Utilisation des outils</h3>
          <p lang="fr">
            Utilisation d'outils comme Photoshop, Figma ou Marvel pour
            atteindre vos objectifs
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSectionA;
