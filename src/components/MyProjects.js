import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const MyProjects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { name: 'Project 1', category: 'Web Development' },
    { name: 'Project 2', category: 'Design' },
    // Add more projects here
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section className="projects">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Web Development')}>Web Development</button>
        <button onClick={() => setFilter('Design')}>Design</button>
      </div>
      <motion.div 
        className="project-list"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.3 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyProjects;
