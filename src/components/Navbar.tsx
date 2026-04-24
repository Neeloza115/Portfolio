'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "../../src/app/globals.css";
import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrolledState);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
    setIsClicked(prev => !prev);
  };

  return (
    <header className={`nav-shell fixed top-0 z-50 flex w-full items-center justify-center px-4 py-4 ${isScrolled ? 'nav-shell-settled' : ''}`}>
      <div className="pointer-events-auto flex flex-row gap-x-2 items-center fixed sm:left-12 left-6">
        <DarkModeToggle/>
      </div>
      <div className={`hidden md:flex fixed left-30 sm:left-30 w-45 flex-col rounded-full py-1 px-3 ${isScrolled ? 'nav-badge nav-badge-settled' : 'nav-badge'}`}>
        <div className="font-semibold text-md ">Neel Oza</div>
        <div className="text-xs whitespace-nowrap">Software Engineer Intern</div>
      </div>
      <nav className={`nav-pill relative flex h-12 w-44 items-center justify-between overflow-hidden rounded-full text-sm ${isScrolled ? 'nav-pill-settled' : ''}`}>
        {/* Sliding Nav Indicator */}
        <div className={`toggle-slider bg-white/10 backdrop-blur ${pathname === "/about" ? "right" : ""}`} />


        {/* Work Link */}
        <div>
          <Link
            href="/"
            className={`nav-link relative flex h-9 w-20 items-center justify-center rounded-full transition-colors duration-300 ${pathname === "/" ? 'nav-link-active' : 'nav-link-inactive'}`}
            data-discover="true"
          >
            Work
          </Link>
        </div>

        {/* About Link */}
        <div>
          <Link
            href="/about"
            className={`nav-link relative flex h-9 w-20 items-center justify-center rounded-full transition-colors duration-300 ${pathname === "/about" ? 'nav-link-active' : 'nav-link-inactive'}`}
            data-discover="true"
          >
            About
          </Link>
        </div>
      </nav>

      <div className="pointer-events-auto hidden lg:flex font-medium fixed md:right-3 lg:right-12">
        <ul className="relative mx-auto flex w-fit rounded-full">
          <li>
            <a className={`nav-action-link relative z-10 flex cursor-pointer flex-row items-center gap-x-1 rounded-full px-3 py-2 text-sm transition duration-300 ease-in-out ${isScrolled ? 'nav-action-link-settled' : ''}`} rel="noopener noreferrer" href="https://www.github.com/Neeloza115" target="_blank">
              GitHub
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g></g>
              <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className={`nav-action-link relative z-10 flex cursor-pointer flex-row items-center gap-x-1 rounded-full px-3 py-2 text-sm transition duration-300 ease-in-out ${isScrolled ? 'nav-action-link-settled' : ''}`} rel="noopener noreferrer" href="https://www.linkedin.com/in/neeloza" target="_blank">
              LinkedIn
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g></g>
                <path d="M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className={`nav-action-link relative z-10 flex cursor-pointer flex-row items-center gap-x-1 rounded-full px-3 py-2 text-sm transition duration-300 ease-in-out ${isScrolled ? 'nav-action-link-settled' : ''}`} rel="noopener noreferrer" href="https://drive.google.com/file/d/1z_yPwyal5fSx4CvdctRsyt835w80UObI/view?usp=sharing" target="_blank">
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
          type="button"
          onClick={toggleDropdown}
          aria-expanded={dropdownOpen}
          aria-label={dropdownOpen ? 'Close menu' : 'Open menu'}
          className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${isScrolled ? 'nav-mobile-button nav-mobile-button-settled' : 'nav-mobile-button'}`}
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
        <div className={`nav-dropdown absolute top-full right-0 mt-2 flex w-32 flex-col items-start justify-center gap-y-4 rounded-xl border p-4 text-sm font-medium ${isScrolled ? 'nav-dropdown-settled' : ''}`} style={{ opacity: 1, willChange: "opacity, transform", transform: "none", transformOrigin: "100% 0% 0px" }}>
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
          <a className="flex flex-row w-full justify-between items-center" rel="noopener noreferrer" href="https://drive.google.com/file/d/1PD2C7OjLzXytncJ9UC2h5pw1NMw2z88f/view?usp=sharing" target="_blank">
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
