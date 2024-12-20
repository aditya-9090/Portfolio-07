import React, { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSetActiveLink = (id) => {
    setActiveLink(id);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 ring-2 ring-gray-400 ring-opacity-50">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          onClick={() => handleSetActiveLink('home')}
          className={`text-xl font-bold text-white hover:text-gray-300 cursor-pointer ${activeLink === 'home' ? 'font-bold' : ''}`}
        >
          Aditya Patil
        </a>
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden relative">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {/* Mobile Menu Overlay and Content */}
          <div className={`absolute top-0 right-0 bg-gray-900 w-48 h-screen z-50 flex flex-col items-center py-4
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            transition duration-300 ease-in-out
          `}>
            <button onClick={closeMobileMenu} className="text-white absolute top-2 right-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <a
                  href="#home"
                  onClick={() => handleSetActiveLink('home')}
                  className={`text-white hover:text-gray-300 cursor-pointer ${activeLink === 'home' ? 'font-bold' : ''}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handleSetActiveLink('about')}
                  className={`text-white hover:text-gray-300 cursor-pointer ${activeLink === 'about' ? 'font-bold' : ''}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => handleSetActiveLink('projects')}
                  className={`text-white hover:text-gray-300 cursor-pointer ${activeLink === 'projects' ? 'font-bold' : ''}`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => handleSetActiveLink('skills')}
                  className={`text-white hover:text-gray-300 cursor-pointer ${activeLink === 'skills' ? 'font-bold' : ''}`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleSetActiveLink('contact')}
                  className={`text-white hover:text-gray-300 cursor-pointer ${activeLink === 'contact' ? 'font-bold' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                onClick={() => handleSetActiveLink('home')}
                className={`nav-link ${activeLink === 'home' ? 'border-b-2 border-white' : ''} hover:text-gray-300 text-white hover:bg-gray-700 px-3 py-2 rounded cursor-pointer`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleSetActiveLink('about')}
                className={`nav-link ${activeLink === 'about' ? 'border-b-2 border-white' : ''} hover:text-gray-300 text-white hover:bg-gray-700 px-3 py-2 rounded cursor-pointer`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleSetActiveLink('projects')}
                className={`nav-link ${activeLink === 'projects' ? 'border-b-2 border-white' : ''} hover:text-gray-300 text-white hover:bg-gray-700 px-3 py-2 rounded cursor-pointer`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleSetActiveLink('skills')}
                className={`nav-link ${activeLink === 'skills' ? 'border-b-2 border-white' : ''} hover:text-gray-300 text-white hover:bg-gray-700 px-3 py-2 rounded cursor-pointer`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleSetActiveLink('contact')}
                className={`nav-link ${activeLink === 'contact' ? 'border-b-2 border-white' : ''} hover:text-gray-300 text-white hover:bg-gray-700 px-3 py-2 rounded cursor-pointer`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
