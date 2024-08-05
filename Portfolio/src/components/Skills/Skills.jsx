import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiCplusplus, SiPowerbi, SiOracle, SiMysql, SiNumpy, SiPandas } from 'react-icons/si';
import '../About/About.css';
export default function Skills() {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-4xl text-blue-600" /> },
    { name: 'Python', icon: <FaPython className="text-4xl text-yellow-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-400" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-4xl text-blue-400" /> },
    { name: 'Django', icon: <SiDjango className="text-4xl text-green-500" /> },
    { name: 'React.js', icon: <FaReact className="text-4xl text-blue-300" /> },
    { name: 'MySQL', icon: <SiMysql className="text-4xl text-blue-600" /> },
    { name: 'Oracle', icon: <SiOracle className="text-4xl text-red-600" /> },
    { name: 'Power BI', icon: <SiPowerbi className="text-4xl text-yellow-600" /> },
    { name: 'Numpy', icon: <SiNumpy className="text-4xl text-blue-500" /> },
    { name: 'Pandas', icon: <SiPandas className="text-4xl text-black" /> }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <h1 className="text-5xl font-bold text-center mb-8 text-white neon-text">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            {skill.icon}
            <p className="mt-2 text-white text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
