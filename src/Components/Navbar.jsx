import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#840cca] bg-gradient-to-br from-[#840cca] to-[#4514a0] shadow-lg shadow-black/30 text-white text-2xl">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-20 font-[McLaren] font-extralight">
        <div className="logo font-bold tracking-wide ">
          Lock
          <span className="text-[#16052a] text-[gradient-to-br from-[#840cca] to-[#4514a0]] pl-[2px]">
            IT
          </span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="#">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
          </li>
        </ul>
        <button className="text-white my-5 flex justify-center items-center">
          <img
            className="invert w-12 p-1"
            src="/icons/github.svg"
            alt="github"
          />
          <span className="font-bold px-1">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
