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
    <div className="App">
      <Navbar />
      <main>
<Intro />
<Education />
<Skills />
<Projects />
      </main>
      <Footer />
    </div>
    </Router>
  )
}

export default App