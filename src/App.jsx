import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App