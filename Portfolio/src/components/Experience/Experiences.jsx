import React from 'react';
import '../About/About.css';
export default function Experience() {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Prodigy InfoTech',
      duration: '1 July 2024 - 31 July 2024',
      description: 'During the internship I made several apps like weather forecast , stopwatch , tic-tac-toe and also made portfolio . during this internship i use tech stack such as React.js, javascript , tailwind css , HTML '
    },
    
  ];

  const certifications = [
    {
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/1pz6p4ObMa5ykTti9fEM8QXpZRs7XQ4nP/view?usp=drive_link'
    },
    {
      title: 'Ethical Hacking',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/13WGNgZARHMBt73aTo1CYX_Aw65Ei2uWJ/view?usp=drive_link'
    },
    {
      title: 'Agile Methodology Job Simulation',
      issuer: 'Forage',
      link: 'https://drive.google.com/file/d/1BV9Yqn66luDzjigYtXXCjVFr53pWAQLd/view?usp=drive_link'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 text-white">
      <h1 className="text-5xl font-bold text-center mb-8 neon-text">Experience & Certifications</h1>

      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
            <p className="text-xl mb-1">{exp.company}</p>
            <p className="text-md mb-4">{exp.duration}</p>
            <p className="text-md">{exp.description}</p>
          </div>
        ))}

        <h2 className="text-3xl font-bold mb-4 mt-12">Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
            <p className="text-xl">{cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
