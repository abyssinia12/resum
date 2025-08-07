// import { useState } from 'react'

import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import WhatIDo from "./Components/WhatIDo";
import ProjectsSection from "./Components/ProjectsSection";
import "./index.css";
import ContactSection from "./Components/ContactSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhatIDo />
      <ProjectsSection />
      <ContactSection/>
    </>
  );
}

export default App;
