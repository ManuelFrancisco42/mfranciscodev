import React from 'react';
import writingDownImage from "../../assets/images/thumbnail/web-development-thumbnail-4.jpg";
import pointdrawingsImage from "../../assets/images/thumbnail/web-development-thumbnail-2.jpg";
import PhoneontableImage from "../../assets/images/thumbnail/web-development-thumbnail-3.jpg";
import myself from "../../assets/images/myself/myAvatar.png";
import './_AboutMeSectionA.scss';

const AboutMeSectionA = () => (
  <section id="about-a" className="text-center py-3 my-4">
    <div className="container">
      <h2 className="section-title" lang="fr">À Propos de Moi</h2>
      <p className="lead" lang="fr">
        VOTRE VISION, MON ENGAGEMENT...
      </p>
      
      <p className="lead">
        Laissez-moi vous parler un peu de moi et de ce que je fais...
      </p>
      <div className="about-info">
        <img src={myself} alt="Manuel Francisco" className="my-image my-image-cartoon" />
        <div className="bio bg-light">
          <h4 lang="fr">Votre projet est entre de bonnes mains</h4>
          <p lang="fr">
            Bienvenue dans l'univers où la créativité rencontre la fonctionnalité. Je suis Manuel Francisco, un développeur web passionné avec une expertise en HTML, CSS, JavaScript, React, et Node.js. Je crée des sites web dynamiques et conviviaux depuis [X] ans.
          </p>
          <h4 lang="fr">TRANSFORMEZ VOS IDÉES EN RÉALITÉ</h4>
          <p lang="fr">
            Je m'engage à transformer vos concepts en une présence web percutante. Chaque détail compte, et je m'assure que votre site internet dépasse vos attentes.
          </p>
          <h4 lang="fr">Toujours prêt à apprendre et à innover</h4>
          <p lang="fr">
            Je suis constamment à la recherche de nouvelles opportunités pour grandir et collaborer avec des professionnels partageant les mêmes idées. N'hésitez pas à me contacter pour discuter de votre prochain projet web !
          </p>
        </div>
        <div className="row-1">
          <img
            src={writingDownImage}
            alt="Person writing a brainstorm"
            className="my-image"
            title="Maquettes détaillées"
          />
          <h3 lang="fr">Maquettes détaillées</h3>
          <p lang="fr">
            Le plan de conception d'applications innovantes et conviviales
          </p>
        </div>
        <div className="row-2">
          <img
            src={pointdrawingsImage}
            alt="Person drawing mobile sketches"
            className="my-image"
            title="Vous pouvez suivre tout le processus"
          />
          <h3 lang="fr">Vous pouvez suivre tout le processus</h3>
          <p lang="fr">
            Exploration des esquisses UI/UX la base d'interfaces utilisateur intuitives et engageantes
          </p>
        </div>
        <div className="row-3">
          <img
            src={PhoneontableImage}
            alt="Phone on a table"
            className="my-image"
            title="Utilisation des outils"
          />
          <h3 lang="fr">Utilisation des outils</h3>
          <p lang="fr">
            Utilisation d'outils comme Photoshop, Figma ou Marvel pour atteindre vos objectifs
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSectionA;
