const projects = [
    {
      title: "Project 1",
      description: "A web-based tool I created for managing tasks and deadlines.",
      link: "https://link-to-project1.com",
      screenshot: "project1.jpg"
    },
    {
      title: "Project 2",
      description: "A portfolio website showcasing my web development skills.",
      link: "https://link-to-project2.com",
      screenshot: "project2.jpg"
    },
    {
      title: "Project 3",
      description: "A JavaScript game I developed with interactive features.",
      link: "https://link-to-project3.com",
      screenshot: "project3.jpg"
    }
  ];
  
  // Display projects dynamically
  const projectList = document.getElementById("project-list");
  
  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
  
    projectCard.innerHTML = `
      <img src="${project.screenshot}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
  
    projectList.appendChild(projectCard);
  });
  
  // Form validation
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return false;
    }
    return true;
  }  