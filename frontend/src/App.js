import React from 'react';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <AboutMe/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
