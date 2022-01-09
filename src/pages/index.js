import React, { useState } from "react";
import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Top from "../components/GoTop";
import CustomCursor from "../components/Cursor";
import Contact from "../components/Contacts";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CustomCursor />
      <Top />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default HomePage;
