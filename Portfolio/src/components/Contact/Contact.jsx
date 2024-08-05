import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../About/About.css'; // Assuming you have this CSS file

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 p-4 text-white">
      <h1 className="text-5xl font-bold text-center mb-8 neon-text">Contact Me</h1>
      <div className="text-center mb-8">
        <p className="text-2xl mb-4">
          <FaEnvelope className="inline mr-2 text-white" />
          Email: <a href="mailto:ankitaagarwal112003@gmail.com" className="text-blue-500 hover:underline">ankitaagarwal112003@gmail.com</a>
        </p>
      </div>
      <div className="flex space-x-8">
        <a href="https://www.linkedin.com/in/ankita-agarwal-55333a263/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-5xl hover:text-blue-700" style={{ color: '#0e76a8' }} />
        </a>
        <a href="https://github.com/Ankita112003" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-5xl hover:text-gray-500" style={{ color: '#FFFFFF' }} />
        </a>
        <a href="https://www.instagram.com/ankitaagarwal743?igsh=dHNwcjdycTFma3E1" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-5xl hover:text-pink-600" style={{ color: '#E1306C' }} />
        </a>
      </div>
      <footer className="text-center text-lg text-gray-500 mt-8">
        &copy; 2024 Ankita Agarwal. All rights reserved
      </footer>
    </div>
  );
}
