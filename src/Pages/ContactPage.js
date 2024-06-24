import React from 'react';
import ContactForm from '../Components/ContactComponents/ContactFormSectionA';
import ContactInfo from '../Components/ContactComponents/ContactInfoSectionB';
import ContactSlogan from '../Components/ContactComponents/ContactSloganSectionC';

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
