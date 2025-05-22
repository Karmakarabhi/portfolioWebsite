import React from "react";
import RightSide from "../assets/RightSide.png";

function Home() {
  return (
    <div className=" md:flex md:justify-around md:p-20">
      <div className="flex flex-col justify-center items-center py-35 md:py-0  ">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Abhijit 👋</h1>
        <p className="text-xl mb-6">Frontend Developer • React Enthusiast</p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer ">
            <a href="#projects"> View Projects</a>
          </button>
          <button className="px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-lg hover:text-white transition duration-300">
            <a href="/AbhijitKarmakarNEW.pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex relative group ">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to   bg-purple-400 h-120 w-120 rounded-full blur opacity-75 group-hover:opacity-100 transtion duration-1000"></div>
        <img src={RightSide} className="relative h-120 w-120 rounded-full" />
      </div>
    </div>
  );
}

export default Home;
