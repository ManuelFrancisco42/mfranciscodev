
import React from 'react';
/* import writingDownImage from "../../assets/images/thumbnail/web-development-thumbnail-4.jpg";
import pointdrawingsImage from "../../assets/images/thumbnail/web-development-thumbnail-2.jpg";
import PhoneontableImage from "../../assets/images/thumbnail/web-development-thumbnail-3.jpg"; */
import myself from "../../assets/images/myself/manuel-francisco.jpg";
import './_AboutMeSectionA.scss';

const AboutMeSectionA = () => (
  <section id="about-a" className="text-center py-3">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="bottom-line"></div>
      <p className="lead">
        Let me tell you a little about myself and what I do...
      </p>
      <div className="about-info">
        <img src={myself} alt="Manuel Francisco" className="bio-image" />
        <div className="bio bg-light">
          <h4>Your Project Is In Safe Hands</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam nesciunt unde nihil voluptatum commodi consequuntur molestiae? Fugiat, perspiciatis reprehenderit. Architecto delectus vitae deserunt!</p>
        </div>
        <div className="award-1">
          <i className="fas fa-award fa-3x"></i>
          <h3>Award One</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni!</p>
        </div>
        <div className="award-2">
          <i className="fas fa-award fa-3x"></i>
          <h3>Award Two</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni!</p>
        </div>
        <div className="award-3">
          <i className="fas fa-award fa-3x"></i>
          <h3>Award Three</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni!</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSectionA;
