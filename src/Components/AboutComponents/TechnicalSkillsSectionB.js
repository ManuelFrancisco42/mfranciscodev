import React from "react";
import "./_TechnicalSkillsSectionB.scss";
import htmlImage from "../../assets/images/skills/html.png";
import cssImage from "../../assets/images/skills/css.png";
import reactImage from "../../assets/images/skills/react.png";
import nodeImage from "../../assets/images/skills/node.png";
import mongodbImage from "../../assets/images/skills/mongodb.png";
import figmaImage from "../../assets/images/skills/figma.png";
import jsImage from "../../assets/images/skills/javascript.png";

export const TechnicalSkills = () => {
  const history = [

    {
      role: "HTML",
      whatCanIdo: "En tant que développeur web utilisant HTML, je peux :",
      experiences: [
        "Balisage sémantique",
        "Intégration de multimédia",
        "Géolocalisation",
        "Accessibilité",
        "SEO amélioré",
        "...",
      ],
      imageSrc: htmlImage,
    },
    {
      role: "CSS",
      whatCanIdo: "En tant que développeur web utilisant CSS, je peux :",
      experiences: [
        "Créer des designs visuels éblouissants",
        "Mettre en place des mises en page réactives",
        "Réaliser des animations et transitions",
        "Utiliser des requêtes multimédias",
        "Utiliser la mise en page en boîte flexible (Flexbox)",
        "Utiliser la mise en page en grille (Grid Layout)",
        "Créer des formes et effets personnalisés",
        "...",
      ],
      imageSrc: cssImage,
    },
    {
      role: "JAVASCRIPT",
      whatCanIdo: "En tant que développeur web utilisant JAVASCRIPT, je peux :",
      experiences: [
        "Créer une interface utilisateur interactive",
        "Mettre en œuvre la validation côté clien",
        "Gérer les événements utilisateur",
        "Utiliser les API des navigateurs",
        "Frameworks et Bibliothèques or Outils",
        "...",
      ],
      imageSrc: jsImage,
    }
  ];

  const skills = [
    {
      title: "Figma",
      imageSrc: figmaImage,
    },
    {
      title: "HTML",
      imageSrc: htmlImage,
    },
    {
      title: "CSS",
      imageSrc: cssImage,
    },
    {
      title: "Javascript",
      imageSrc: jsImage,
    },
    {
      title: "React",
      imageSrc: reactImage,
    },
    {
      title: "Node",
      imageSrc: nodeImage,
    },
    {
      title: "MongoDB",
      imageSrc: mongodbImage,
    }
  ];

  return (
    <section className="home-c py-2 bg-dark my-4" id="experience">
      <div className="container">
        <h2 className="section-title skills-txt-color" lang="fr">
          Experience
        </h2>
        <div className="content">
          <div className="skills">
            {skills.map((skill, id) => {
              return (
                <div key={id} className="skill">
                  <div className="skillImageContainer">
                    <img src={skill.imageSrc} alt={skill.title} />
                  </div>
                  <p lang="fr">{skill.title}</p>
                </div>
              );
            })}
          </div>
          <ul className="history">
            
            {history.map((historyItem, id) => {
              return (
                
                <li key={id} className="historyItem">

                  <div className="historyItemDetails">

                  <img
                    src={historyItem.imageSrc}
                    alt={`${historyItem.whatCanIdo} Logo`}
                  /> 

                    <h3>{`${historyItem.role}, ${historyItem.whatCanIdo}`}</h3>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li lang="fr" key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
