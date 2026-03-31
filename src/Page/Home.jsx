import React from "react";
import Photograph from "../images/Photograph.JPG";
import Resume from "../assets/Karansing_Patil_Frontend_Resume.pdf";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 min-h-screen" id="Home">
      <div className="flex md:flex-row  flex-col justify-around items-center h-full pt-30 md:pt-50 px-8 md:px-20">
        <div className="md:w-1/2 h-1/2 md:h-full flex justify-center items-center">
          <img src={Photograph} className="md:mt-0 mt-8 rounded-full h-60 w-60 md:h-100 md:w-100 mask-cover" alt="Photograph" />
        </div>
        <div className="md:w-1/2 md:space-y-3 space-y-4 text-center h-1/2 md:text-left flex flex-col ">
          <h2 className="text-lg text-slate-800 dark:text-slate-100">
            Hello, I'm
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
            Karansing Patil
          </h1>
          <h3 className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 font-semibold">
            Frontend Developer
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-sm text-justify md:text-base pt-0 md:pt-5">
            I am a passionate software developer with a strong foundation in web development and a keen interest in creating innovative solutions. Currently pursuing B.Tech in Electronic and Computer Engineering, I specialize in modern web technologies including React, Tailwind.CSS. I love building user-friendly applications that solve real-world problems and enhance user experiences.
          </p>
          <div className="flex flex-row gap-4 justify-center text-sm md:text-2xl md:justify-start md:mt-6 ">
            <a
              href="#Contact"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition shadow-md shadow-indigo-500/30 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:shadow-indigo-900/40"
            >
              Contact Me
            </a>
            <a
              href={Resume}
              download
              className="border-2 border-slate-900/10 text-slate-900 px-6 py-2 rounded-md hover:bg-slate-900/5 transition dark:border-slate-200/20 dark:text-slate-100 dark:hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;