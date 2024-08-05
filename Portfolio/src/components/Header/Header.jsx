
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>
        <div className="space-x-6">
        <Link to="/" className="text-gray-300 hover:text-white">About me</Link>
          <Link to="/skills" className="text-gray-300 hover:text-white">Skills</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="/experiences" className="text-gray-300 hover:text-white">Experiences</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}


