import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';

// import './style.css';
// import Nav from './components/Navigation';
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Home from "./Pages/Home"
import Header from './components/Header';
import Resume from './Pages/Resume';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location= useLocation
  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes Location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
