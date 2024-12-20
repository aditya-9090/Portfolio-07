import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [animateProject, setAnimateProject] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        const projectPosition = projectSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        setAnimateProject(projectPosition < screenHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="projects" className="container mx-auto mt-8 px-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div 
        className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 ${animateProject ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} 
        w-full sm:w-11/12 md:w-8/12 lg:w-2/3 xl:w-1/3 mx-auto`}>
        
        <h3 className="text-2xl font-semibold mb-3">Infinity Blog</h3>
        
        {/* Image of the project */}
        <img 
          src={require('../components/laptop/projectimage.png')} 
          alt="Infinity Blog Screenshot" 
          className="w-full max-w-full h-auto rounded-md mb-4"
        />
        
        <p className={`text-gray-300 mb-4 ${isExpanded ? 'block' : 'line-clamp-3'}`}>
          Infinity Blog is a dynamic and feature-rich blog platform where users can easily create, manage, and explore blog posts. 
          It includes secure user authentication with JWT, allowing users to create, read, update, and delete blog posts. The platform's responsive design ensures a seamless experience across devices.
        </p>
        {/* Read More / Read Less Link */}
        <span 
          onClick={toggleDescription}
          className="text-indigo-400 cursor-pointer hover:underline"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
        
        {/* Button container with Flexbox */}
        <div className="flex space-x-4 mt-4">
          <a href="https://infinity-blogs.onrender.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-300">
            Visit Project
          </a>
          <a href="https://github.com/aditya-9090/Infinity-Blogs" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition duration-300">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
