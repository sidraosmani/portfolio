import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={MyProjects} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/" exact>
            <h1>Welcome to My Portfolio</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
