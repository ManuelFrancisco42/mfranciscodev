import React from 'react';
import item2 from '../../assets/images/items/web-development-image-1.jpg';
import item3 from '../../assets/images/items/web-development-image-2.jpg';
import item4 from '../../assets/images/items/web-development-image-3.jpg';
import item5 from '../../assets/images/items/web-development-image-4.jpg';
import item6 from '../../assets/images/items/web-development-image-5.jpg';
import item7 from '../../assets/images/items/web-development-image-6.jpg';
import item8 from '../../assets/images/items/web-development-image-7.jpg';
import item9 from '../../assets/images/items/web-development-image-8.jpg';
import item1 from '../../assets/images/items/web-development-image-10.jpg';
import './_GallerySection.scss';

const Gallery = () => {
  const projects = [
    { imgSrc: item1, category: "Design", title: "Great Gradients" },
    { imgSrc: item2, category: "UI/UX", title: "World Experience" },
    { imgSrc: item3, category: "Photography & Design", title: "Vanishing" },
    { imgSrc: item4, category: "Design", title: "Gap INC" },
    { imgSrc: item5, category: "Mobile UI Design", title: "Face The Experience" },
    { imgSrc: item6, category: "Design Concept", title: "Bezier Curves" },
    { imgSrc: item7, category: "Photography", title: "Dock Ponder" },
    { imgSrc: item8, category: "Web Applications", title: "Restaurant App" },
    { imgSrc: item9, category: "Social Network Concept", title: "FriendFeed" },
  ];

  return (
    <section id="work-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Check out some of my projects
        </p>
        <div className="items">
          {projects.map((project, index) => (
            <div key={index} className="item">
              <div className="item-image">
                <img src={project.imgSrc} alt={project.title} />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">{project.category}</p>
                  <h2 className="item-text-title">{project.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
