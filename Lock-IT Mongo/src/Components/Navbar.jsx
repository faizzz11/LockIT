import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#840cca] bg-gradient-to-br from-[#840cca] to-[#4514a0] shadow-lg shadow-black/30 text-white text-2xl">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-20 font-[McLaren] font-extralight">
        
        <div className="logo font-bold tracking-wide flex items-center">
        <img className="w-10 h-10 mr-1" src="/icons/locket.png" alt="" />
          Lock
          <span className="text-[#16052a] text-[gradient-to-br from-[#840cca] to-[#4514a0]] pl-[2px]">
            IT
          </span>
        </div>
       
        <a href="https://github.com/faizzz11" target="_blank" rel="noopener noreferrer" className="text-white my-5 flex justify-center items-center hover:opacity-80">
          <img
            className="invert w-12 p-1"
            src="/icons/github.svg"
            alt="github"
          />
          <span className="font-bold px-1">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
