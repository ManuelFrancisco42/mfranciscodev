
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './Components/HeaderComponents/HeaderComponent';
import Hero from './Components/HeroComponents/HeroComponent';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/FooterComponents/FooterComponent";
import NotFound from "./Pages/NotFound";

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
