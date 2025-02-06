import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.category}</p>
      {/* Add more project details or a link to the project */}
    </div>
  );
};

export default ProjectCard;
