'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "../../src/app/globals.css";
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
    setIsClicked(prev => !prev);
  };

  return (
    <header className="flex fixed top-0 w-full flex items-center justify-center px-4 py-4 z-50">
      <div className="pointer-events-auto flex flex-row gap-x-2 items-center fixed sm:left-12 left-6">
        <DarkModeToggle/>
      </div>
      <div className="hidden md:flex flex-col fixed left-30 sm:left-30 w-45 rounded-full bg-white/10 backdrop-blur-sm py-1 px-3">
        <div className="font-semibold text-md ">Neel Oza</div>
        <div className="text-xs whitespace-nowrap">Software Engineer Intern</div>
      </div>
      <nav className="relative flex items-center justify-between w-44 h-12 rounded-full bg-white/10 backdrop-blur text-sm border border-gray-600 overflow-hidden">
        {/* Sliding Nav Indicator */}
        <div className={`toggle-slider bg-white/10 backdrop-blur ${pathname === "/about" ? "right" : ""}`} />


        {/* Work Link */}
        <div>
          <Link
            href="/"
            className={`relative flex justify-center items-center w-20 h-9 rounded-full`}
            data-discover="true"
          >
            Work
          </Link>
        </div>

        {/* About Link */}
        <div>
          <Link
            href="/about"
            className={`relative flex justify-center items-center w-20 h-9 rounded-full`}
            data-discover="true"
          >
            About
          </Link>
        </div>
      </nav>

      <div className="pointer-events-auto hidden lg:flex font-medium fixed md:right-3 lg:right-12">
        <ul className="relative mx-auto flex w-fit rounded-full">
          <li>
            <a className="relative z-10 flex items-center flex-row cursor-pointer mix-blend-difference text-sm px-3 py-2 gap-x-1 rounded-full hover:bg-white/10 backdrop-blur-md transition duration-300 ease-in-out" rel="noopener noreferrer" href="https://www.github.com/Neeloza115" target="_blank">
              GitHub
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g></g>
              <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="relative z-10 flex items-center flex-row cursor-pointer mix-blend-difference text-sm px-3 py-2 gap-x-1 rounded-full hover:bg-white/10 backdrop-blur-md transition duration-300 ease-in-out" rel="noopener noreferrer" href="https://www.linkedin.com/in/neeloza" target="_blank">
              LinkedIn
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g></g>
                <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="relative z-10 flex items-center flex-row cursor-pointer mix-blend-difference text-sm px-3 py-2 gap-x-1 rounded-full hover:bg-white/10 backdrop-blur-md transition duration-300 ease-in-out" rel="noopener noreferrer" href="https://drive.google.com/file/d/14Wi9lySQ0zNB808BRiUmkknFA9Ya3_OU/view?usp=sharing" target="_blank">
              Resume
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g></g>
                <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
              </svg>
            </a>
          </li>
          <li className="absolute h-9 rounded-full bg-custom-light bg-opacity-10" style={{ willChange: "opacity", left: "93px", width: "104.062px", opacity: 0 }}></li>
        </ul>
      </div>

      <div className="block lg:hidden pointer-events-auto fixed right-6 sm:right-12 flex">
        <button
          onClick={toggleDropdown}
          className="w-12 h-12 flex justify-center items-center rounded-full bg-white/10 border border-gray-600 backdrop-blur transition-transform duration-300"
        >
          <div className={`relative transition-transform duration-300 ${isClicked ? 'rotate-90' : 'rotate-0'}`}>
            {/* X Icon */}
            <svg
              className={`absolute inset-0 w-6 h-6 transition-opacity duration-300 ${isClicked ? 'opacity-100' : 'opacity-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"
              >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>

            {/* Menu Icon */}
            <svg
              className={`w-6 h-6 transition-opacity duration-300 ${isClicked ? 'opacity-0' : 'opacity-100'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </button>
        {dropdownOpen && 
        <div className="absolute flex top-full w-32 mt-2 p-4 gap-y-4 right-0 flex-col justify-center items-start font-medium bg-custom-light rounded-xl bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur" style={{ opacity: 1, willChange: "opacity, transform", transform: "none", transformOrigin: "100% 0% 0px" }}>
          <a className="flex flex-row w-full justify-between items-center" rel="noopener noreferrer" href="https://github.com/Neeloza115" target="_blank">
            <span className="flex flex-row justify-start items-center text-sm">GitHub</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ height: "0.875rem", width: "auto" }}>
              <g></g>
              <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
            </svg>
          </a>
          <a className="flex flex-row w-full justify-between items-center" rel="noopener noreferrer" href="https://www.linkedin.com/in/neeloza" target="_blank">
            <span className="flex flex-row justify-start items-center text-sm">LinkedIn</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ height: "0.875rem", width: "auto" }}>
              <g></g>
              <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
            </svg>
          </a>
          <a className="flex flex-row w-full justify-between items-center" rel="noopener noreferrer" href="https://drive.google.com/file/d/14Wi9lySQ0zNB808BRiUmkknFA9Ya3_OU/view?usp=sharing" target="_blank">
            <span className="flex flex-row justify-start items-center text-sm">Resume</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ height: "0.875rem", width: "auto" }}>
              <g></g>
              <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
            </svg>
          </a>
        </div>}    
      </div>
    </header>

    
  );
}