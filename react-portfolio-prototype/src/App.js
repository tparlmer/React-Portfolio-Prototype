import './App.css';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Project from './pages/Project/Project'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
  <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  </div>
  
  );
}

export default App;
