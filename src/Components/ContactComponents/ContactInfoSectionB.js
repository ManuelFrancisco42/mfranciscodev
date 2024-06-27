import React from 'react';
import  './_ContactInfoSectionB.scss';

const ContactInfo = () => {
  return (
    <section id="contact-b" className="py-3 bg-dark my-4">
      <div className="container">
        <div className="contact-info">
          <div>
            <i className="fas fa-envelope fa-2x"></i>
            <h3>Email</h3>
            <p>anitafrancisco00@gmail.com</p>
          </div>
          <div>
            <i className="fas fa-phone fa-2x"></i>
            <h3>Phone</h3>
            <p>(033) 0611878144</p>
          </div>
          <div>
            <i className="fas fa-address-card fa-2x"></i>
            <h3>Address</h3>
            <p>Saint Etienne, Loire, FRANCE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
