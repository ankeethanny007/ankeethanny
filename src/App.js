import './styles/App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import Blog from './pages/blog/blog'
import Skills from './pages/skills/skills'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
