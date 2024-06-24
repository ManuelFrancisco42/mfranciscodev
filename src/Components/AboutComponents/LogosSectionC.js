import React from "react";
/* import htmlLogo from "../../assets/images/icon-skills/html5.svg";
import cssLogo from "../../assets/images/icon-skills/css3.svg";
import javascriptLogo from "../../assets/images/icon-skills/javascript.svg";
import gulpLogo from "../../assets/images/icon-framework/gulp.svg";
import sassLogo from "../../assets/images/icon-framework/sass.svg";
import bootstrapLogo from "../../assets/images/icon-framework/bootstrap.svg";
import githubLogo from "../../assets/images/icon-framework/github.svg";
import mongodbLogo from "../../assets/images/icon-framework/mongodb.svg";
import reactLogo from "../../assets/images/icon-framework/react.svg";
import webpackLogo from "../../assets/images/icon-framework/webpack.svg"; */
import "./_LogosSectionC.scss";


const Logos = () => {
  return (
    <section id="about-c" className="py-4 bg-light">
      <div className="container">
        <div className="about-logos">
          <img src="img/about-logos/logo-envato.png" alt="" />
          <img src="img/about-logos/logo-wordpress.png" alt="" />
          <img src="img/about-logos/logo-woocommerce.png" alt="" />
          <img src="img/about-logos/logo-magento.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
