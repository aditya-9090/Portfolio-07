import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white text-center py-6 mt-8 ring-2 ring-gray-700 ring-opacity-50">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Footer Links */}
        <div className="flex flex-col space-y-4">
          <a
            href="#home"
            className="text-white hover:text-gray-300 text-sm sm:text-base transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-white hover:text-gray-300 text-sm sm:text-base transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-white hover:text-gray-300 text-sm sm:text-base transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 text-sm sm:text-base transition-colors duration-300"
          >
            About
          </a>
        </div>

        {/* Contact Link */}
        <div>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 text-sm sm:text-base transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/aditya-patil-1955ba251"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-8 h-8 transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://wa.me/9328036815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-8 h-8 transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://instagram.com/adityapatil9090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8 transition-transform transform hover:scale-110"
            />
          </a>
          {/* GitHub Link */}
          <a
            href="https://github.com/aditya-9090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="w-8 h-8 transition-transform transform hover:scale-110"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base mt-4">&copy; 2024 Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
