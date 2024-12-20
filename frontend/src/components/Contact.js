import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto mt-8 px-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-300 mb-6">
        I'm always open to new opportunities, collaborations, and discussions. Feel free to reach out to me directly!
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-300">Email</h3>
          <p className="text-gray-400">
            You can email me at <a href="mailto:adityapatil9537@gmail.com" className="text-indigo-600 hover:text-indigo-800">adityapatil9537@gmail.com</a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-300">Phone</h3>
          <p className="text-gray-400">
            You can also reach me via phone at <a href="tel:+919328036815" className="text-indigo-600 hover:text-indigo-800">+91 9328036815</a>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-300">
          Feel free to contact me through email or phone, and I’ll get back to you as soon as possible!
        </p>
      </div>
    </section>
  );
};

export default Contact;
