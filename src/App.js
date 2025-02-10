import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/" element={<h1>Welcome to My Portfolio</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
