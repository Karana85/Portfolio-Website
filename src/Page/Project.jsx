import React from "react";

const projectList = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS.",
    tech: "React, Tailwind CSS, Vite",
  },
  {
    title: "Task Manager App",
    description: "A user-friendly task management interface with add/edit/delete functionality.",
    tech: "React, JavaScript, CSS",
  },
  {
    title: "Blog Landing Page",
    description: "A modern blog landing page layout with cards, sections, and responsive design.",
    tech: "HTML, CSS, JavaScript",
  },
];

const Project = () => {
  return (
    <div id="Project" className="min-h-screen px-4 sm:px-6 md:px-16 lg:px-24 py-10 pt-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">Projects</h1>

      <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-lg hover:shadow-xl transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-sm text-blue-600">{project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
