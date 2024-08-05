import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: 'Grocery Store',
    description: 'Developed a dynamic and user-friendly online grocery store using the Django web framework. Provided a seamless shopping experience with easy navigation and product management. Modernized traditional grocery shopping processes.',
    technologies: 'Python, Django, Bootstrap, SQLite',
    image: '/grocery.jpg',
    link: 'https://github.com/Ankita112003/Grocery-Shop-Management-System'
  },
  {
    name: 'Hardware Shop Management System',
    description: 'Created a comprehensive Hardware Shop Management System using Visual Basic 6.0 for the frontend and Oracle 10g for the backend. Streamlined inventory management, sales, and customer interactions for a hardware retail business.',
    technologies: 'Visual Basic 6.0, Oracle 10g',
    image: '/hardware.jpg',
    link: 'https://github.com/Ankita112003/Hardware-Shop-Management-System'
  },
  {
    name: 'Blog App',
    description: 'Utilized Appwrite for backend services, including user authentication and data management. Developed a blog application using React.js for the frontend and Appwrite for the backend. Demonstrated strong abilities in full-stack development with user-friendly interfaces and efficient frontend-backend communication.',
    technologies: 'React.js, Appwrite, HTML, Tailwind CSS, JavaScript',
    image: '/blog-category.jpg',
    link: 'https://github.com/Ankita112003/blog-app'
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold text-center mb-8 neon-text">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-yellow-500">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
            <p className="mb-4">{project.description}</p>
            <p className="text-yellow-500 mb-4">Technologies: {project.technologies}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
