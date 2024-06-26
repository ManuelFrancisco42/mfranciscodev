import React from 'react';
import './_TestimonialsSectionC.scss';

const Testimonials = () => {
  return (
    <section id="about-d" className="py-4 ">
      <div className="container">
        <h2 className="section-title" lang="fr">
          Mon Engagement
        </h2>
        <p className="lead text-center" lang="fr">
          Pendant que je construis mon portfolio, voici ce que vous pouvez
          attendre en travaillant avec moi :
        </p>
        <div className="testimonials">
          <div>
            <h4 lang="fr">Qualité avant tout</h4>
            <p lang="fr">
              Je suis dédié à fournir des designs de haute qualité,
              conviviaux, qui répondent à vos besoins et dépassent vos
              attentes.
            </p>
          </div>
          <div>
            <h4 lang="fr">Approche centrée sur le client</h4>
            <p lang="fr">
              Votre vision est ma priorité. Je travaille en étroite
              collaboration avec les clients pour m'assurer que le produit
              final s'aligne parfaitement avec leurs objectifs.
            </p>
          </div>
          <div>
            <h4 lang="fr">Apprentissage continu</h4>
            <p lang="fr">
              En tant que débutant passionné, j'apprends toujours et applique
              les dernières tendances et technologies à mon travail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
