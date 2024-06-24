import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/HeaderComponents/HeaderComponent';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/FooterComponents/FooterComponent";
import NotFound from "./Pages/NotFound";



const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
     <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
