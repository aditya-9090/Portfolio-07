import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto mt-8 px-6 py-12 bg-gray-900 text-white rounded-xl shadow-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-indigo-100">
          About Me
        </h2>
        <div className="text-lg text-gray-300 space-y-6">
          <p>
            Hello, I'm <span className="text-indigo-300">Aditya Patil</span>. I completed my schooling at Don Bosco High School, followed by a diploma from MSU. 
            I pursued my Bachelor's degree in Information Technology at GEC Modasa. As a passionate web developer, I specialize in building 
            full-stack web applications using the <span className="font-semibold text-indigo-300">MERN Stack</span> (MongoDB, Express, React, Node.js).
          </p>
          <p>
            I developed—<span className="font-semibold text-indigo-300">Infinity Blog</span>. This dynamic, feature-rich platform 
            allows users to create, manage, and explore blog posts seamlessly. The project  demonstrates my proficiency in both frontend and backend development 
            but also reflects my skills in handling complex data with the MERN stack.
          </p>
          <p>
            I am constantly eager to learn, innovate, and contribute to the ever-evolving world of web development. If you're interested in collaborating on exciting projects 
            or simply want to discuss technology, feel free to reach out—I'd love to connect!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
