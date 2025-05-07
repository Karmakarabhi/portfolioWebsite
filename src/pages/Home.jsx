import React from "react";
import RightSide from "../assets/RightSide.png";

function Home() {
  return (
    <div className="md:flex md:justify-around md:p-20">
      <div className="flex flex-col justify-center items-center py-35 md:py-0  ">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Abhijit 👋</h1>
        <p className="text-xl mb-6">Frontend Developer • React Enthusiast</p>
        <div className="flex gap-4">
          <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded hover:bg-gray-100">
           <a href="#projects"> View Projects</a>
          </button>
          <a
  href="/AbhijitKarmakarNEW.pdf"
  download
  className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-blue-700"
>
  Download Resume
</a>

        </div>
      </div>
      <div className="hidden lg:flex">
        <img src={RightSide} className="h-120 w-120 rounded-full  " />
      </div>
    </div>
  );
}

export default Home;
