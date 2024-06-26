import React from 'react';
import ContactForm from '../Components/ContactComponents/ContactFormSectionA.js';
import ContactInfo from '../Components/ContactComponents/ContactInfoSectionB.js';
import ContactSlogan from '../Components/ContactComponents/ContactSloganSectionC.js';

const ContactPage = () => {
  return (
    <div className="App">
      <ContactForm />
      <ContactInfo />
      <ContactSlogan />
    </div>
  );
};

export default ContactPage;
