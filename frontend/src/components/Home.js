import React, { useState } from "react";
import laptop from "./laptop/laptop.jpeg";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleConnectClick = () => {
    setShowIcons(!showIcons);
  };

  return (
    <section
      id="home"
      className="container mx-auto mt-20 px-6 py-12 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start md:text-left mb-8 md:mb-0">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
            Hi, Aditya! Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-400">
            I am a passionate web developer showcasing my projects and development skills here.
          </p>

          <button
            onClick={handleConnectClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            {showIcons ? "Close" : "Let's Connect"}
          </button>
          {showIcons && (
            <div className="flex mt-4">
              {/* Icons for social media */}
              <div className="flex mt-4 md:mt-0">
                <p className="mr-4">Connect with me on:</p>
                <a
                  href="https://linkedin.com/in/aditya-patil-1955ba251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-1"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    className="w-6 h-6 inline"
                  />
                </a>
                <a
                  href="https://wa.me/9328036815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-1"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-6 h-6 inline"
                  />
                </a>
                <a
                  href="https://instagram.com/adityapatil9090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-1"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    className="w-6 h-6 inline"
                  />
                </a>
                {/* GitHub icon */}
                <a
                  href="https://github.com/aditya-9090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-1"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    className="w-6 h-6 inline"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        {/* Example online tech image with simple fade-in animation */}
        <img
          src={laptop}
          alt="Tech Image"
          className="w-full md:max-w-lg rounded-lg shadow-lg animate-fade-in-slow"
        />
      </div>
    </section>
  );
};

export default Home;
