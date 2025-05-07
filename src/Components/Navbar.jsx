import React from "react";

function Navbar() {
  return (
    <div className="bg-slate-950 flex justify-between p-6 sticky top-0">
      <div>
        <p>Logo</p>
        <img src="" alt="" srcset="" />
      </div>
      <div>
        <ul className=" hidden md:flex ">
          <li className="mx-5 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]"><a href="#home">Home</a></li>
          <li className="mx-5 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]"><a href="#about">About</a></li>
          <li className="mx-5 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]"><a href="#projects" >Projects</a></li>
          <li className="mx-5 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      {/* <div>Toggle Menu</div> */}
    </div>
  );
}

export default Navbar;
