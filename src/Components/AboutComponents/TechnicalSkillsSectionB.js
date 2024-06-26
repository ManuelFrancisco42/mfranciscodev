import React from "react";
import './_TechnicalSkillsSectionB.scss';
import googleImage from '../../assets/images/history/google.png'
import microsoftImage from '../../assets/images/history/microsoft.png'
import netflixImage from '../../assets/images/history/netflix.png'
import htmlImage from '../../assets/images/skills/html.png'
import cssImage from '../../assets/images/skills/css.png'
import reactImage from '../../assets/images/skills/react.png'
import nodeImage from '../../assets/images/skills/node.png'
import graphQLImage from '../../assets/images/skills/graphql.png'
import mongodbImage from '../../assets/images/skills/mongodb.png'
import figmaImage from '../../assets/images/skills/figma.png'


export const TechnicalSkills = () => {
const history = [
  {
    "role": "Software Engineer",
    "organisation": "Google",
    "startDate": "Sept, 2022",
    "endDate": "Present",
    "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
    "imageSrc": googleImage,
  },
  {
    "role": "UI Designer",
    "organisation": "Mirosoft",
    "startDate": "Aug, 2021",
    "endDate": "Aug, 2022",
    "experiences": ["Worked on Windows 11", "Designed the control panel"],
    "imageSrc": microsoftImage,
  },
  {
    "role": "SWE Intern",
    "organisation": "Netflix",
    "startDate": "Apr, 2020",
    "endDate": "Jun, 2020",
    "experiences": [
      "Worked on component library",
      "Helped create UI components"
    ],
    "imageSrc": netflixImage,
  }
]

const skills = [
  {
    "title": "HTML",
    "imageSrc": htmlImage,
  },
  {
    "title": "CSS",
    "imageSrc": cssImage,
  },
  {
    "title": "React",
    "imageSrc": reactImage,
  },
  {
    "title": "Node",
    "imageSrc": nodeImage,
  },
  {
    "title": "GraphQL",
    "imageSrc": graphQLImage,
  },
  {
    "title": "MongoDB",
    "imageSrc": mongodbImage,
  },
  {
    "title": "Figma",
    "imageSrc": figmaImage,
  }
]


  return (
    <section className="home-c  py-2" id="experience">
      <div className="container">
      <h2 className="section-title skills-txt-color" lang="fr">Experience</h2>
      <div className="content">
        <div className="skills">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className="history">
          {history.map((historyItem, id) => {
            return (
              <li key={id} className="historyItem">
              
                 <img src={historyItem.imageSrc}  alt={`${historyItem.organisation} Logo`} />
                <div className="historyItemDetails">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
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