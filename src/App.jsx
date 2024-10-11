import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className={`App bg-neutral-950 max-w-[1280px] m-auto ${isLoaded ? 'fade-in' : ''}`}>
        <Navbar />
        <main>
          <section id="intro"><Intro /></section>
          <section id="education"><Education /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;