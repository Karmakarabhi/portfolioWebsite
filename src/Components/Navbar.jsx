import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import myLogoNew from "../assets/myLogoNew.png";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-slate-950 flex justify-between p-4 md:p-6 sticky top-0">
      <div className="m-[-16px]">
        <div className="flex items-center pl-6 ">
          <img src={myLogoNew} alt="Abhijit Logo" className="h-15" />
          <span className="font-bold text-4xl ml-[-10px] mt-[15px]">K</span>

        </div>
      </div>
      <div>
        {/* Desktop menu */}
        <ul className="hidden md:flex ">
          <li className="mx-5 my-5 md:my-0 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]">
            <a href="#home">Home</a>
          </li>
          <li className="mx-5 my-5 md:my-0 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]">
            <a href="#about">About</a>
          </li>
          <li className="mx-5 my-5 md:my-0 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]">
            <a href="#projects">Projects</a>
          </li>
          <li className="mx-5 my-5 md:my-0 font-medium text-xl cursor-pointer hover:underline hover:text-[21px]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            openMenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {openMenu && (
            <ul className="md:hidden px-4 pb-4 mt-10 mr-0 transition-all ease-in duration-300">
              <li>
                <a
                  href="#home"
                  className="block py-2 "
                  onClick={() => setOpenMenu(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 "
                  onClick={() => setOpenMenu(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 "
                  onClick={() => setOpenMenu(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2"
                  onClick={() => setOpenMenu(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div class="md:hidden block text-3xl">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer"
        >
          {openMenu ? <IoClose /> : <RiMenu3Fill />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
