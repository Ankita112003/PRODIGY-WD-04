import React from "react";
import './About.css'; // Assuming you have a CSS file for custom styles

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="flex flex-row w-full max-w-5xl mx-auto">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center w-1/2 p-4">
          <h1 className="text-5xl font-bold text-center mb-8 text-white neon-text">
            Ankita Agarwal
          </h1>
          <img
            src="/Ankita.jpg"
            alt="Profile"
            className="w-55 h-60 rounded-xl border-4 border-white mb-8"
          />
          <a
            href="/Ankita's resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white text-xl w-70 font-bold py-4 px-6 rounded-full hover:bg-yellow-700 text-center"
          >
            Resume
          </a>
        </div>
        
        {/* Right Side */}
        <div className="flex flex-col justify-center w-1/2 p-4 text-white">
          <h2 className="text-3xl font-bold mb- neon-text">About Me</h2>
          <p className="text-lg">
          I'm  Ankita Agarwal, a passionate and dedicated professional with a diverse skill set in web development, data analysis, and beyond. My journey into the tech world began with a fascination for technology and a desire to understand how things work. Over the years, I have honed my skills through various projects, both personal and professional, which have allowed me to tackle diverse challenges and continuously learn new techniques.

I have a strong foundation in front-end technologies like React, Vite, and Tailwind CSS, which I use to create dynamic and responsive web applications. Additionally, my analytical skills enable me to delve deep into data, uncover insights, and drive informed decision-making.
          </p>
        </div>
      </div>
    </div>
  );
}
