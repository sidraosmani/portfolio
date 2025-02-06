import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/about" element={<AboutMe />} /> {/* Use element instead of component */}
          <Route path="/projects" element={<MyProjects />} /> {/* Use element instead of component */}
          <Route path="/contact" element={<ContactForm />} /> {/* Use element instead of component */}
          <Route path="/" exact element={<h1>Welcome to My Portfolio</h1>} /> {/* Use element instead of component */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;