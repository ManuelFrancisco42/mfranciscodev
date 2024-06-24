import React from 'react';
import img_01 from '../../assets/images/about-logos/01.jpg';
import img_02 from '../../assets/images/about-logos/02.jpg';
import img_03 from '../../assets/images/about-logos/03.jpg';
import img_04 from '../../assets/images/about-logos/04.jpg';
import './_TestimonialsSectionD.scss';

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",
      imgSrc: img_01,
      name: "Sam Smith, New York",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",
      imgSrc: img_02,
      name: "Sara Williams, Michigan",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",
      imgSrc: img_03,
      name: "Jill Johnson, London",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",
      imgSrc: img_04,
      name: "Steve Thompson, Boston",
    },
  ];

  return (
    <section id="about-d" className="py-4">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="bottom-line"></div>
        <p className="lead text-center">Take a look at what my clients say...</p>
        <div className="testimonials">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial
              key={index}
              text={testimonial.text}
              imgSrc={testimonial.imgSrc}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ text, imgSrc, name }) => {
  return (
    <div>
      <p>{text}</p>
      <ul>
        <li><img src={imgSrc} alt={name} /></li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

export default Testimonials;
