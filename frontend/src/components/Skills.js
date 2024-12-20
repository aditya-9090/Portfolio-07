import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        setAnimateSkills(skillsPosition < screenHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
    { name: 'Tailwind CSS', logo: 'https://tailwindcss.com/_next/static/media/logo.d3db823b.svg' }, // Updated URL
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
    { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Expressjs.png' }, // Updated URL
    { name: 'MongoDB', logo: 'https://www.mongodb.com/assets/images/global/leaf.png' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  ];

  const orderedSkills = [
    'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'Node.js', 'Express', 'MongoDB', 'GitHub', 'C++'
  ];

  return (
    <section id="skills" className="container mx-auto mt-10 p-8 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {orderedSkills.map((skillName, index) => {
          const skill = skills.find(skill => skill.name === skillName);
          if (!skill) return null; // Handle case if skill not found
          return (
            <div
              key={index}
              className={`relative overflow-hidden bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform duration-500 ${
                animateSkills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto mb-4" />
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-600 opacity-75 transform scale-0 transition-transform duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-500">
                <a href={`#${skill.name.toLowerCase()}`}>
                  <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14H8v-2h2v2zm0-4H8V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
