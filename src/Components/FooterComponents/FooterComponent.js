import React from 'react';
import './_FooterComponent.scss'; 



const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>Copyright &copy; 2024. All Rights Reserved</p>
        <div className="social">
        <a href="https://x.com/mfranciscodev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
       
        </a>
        <a href="https://www.facebook.com/Mfranciscodev" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
          
        </a>
        <a href="https://www.linkedin.com/in/mfranciscodev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
         
        </a>
        <a href="https://www.youtube.com/channel/UCU4_7sT8UiQKdIyZFfah0lA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
         
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
