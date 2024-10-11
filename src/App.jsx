import './App.css'
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App bg-black max-w-[1280px] m-auto">
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
  )
}

export default App