
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './Components/HeaderComponents/HeaderComponent.js';
import Hero from './Components/HeroComponents/HeroComponent.js';
import HomePage from "./Pages/HomePage.js";
import AboutPage from "./Pages/AboutPage.js";
import ProjectsPage from "./Pages/ProjectsPage.js";
import ContactPage from "./Pages/ContactPage.js";
import Footer from "./Components/FooterComponents/FooterComponent.js";
import NotFound from "./Pages/NotFound.js";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" && <Hero />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
);

export default AppWrapper;
