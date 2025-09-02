'use client';
import Profile from "../../assets/pixelcut-export.png";
import McMaster from "../../assets/imgbin-mcmaster-university-medical-centre-mcmaster-faculty-of-science-mcmaster-faculty-of-social-sciences-student-xNy2S8ZgpjF80csA4UuU4mjyM_t.jpg"
import Software from "../../assets/software.png";
import SQL from "../../assets/database-svgrepo-com.svg";
import PowerBI from "../../assets/powerbi-svgrepo-com.svg";
import Pandas from "../../assets/pandas.svg";
import NumPy from "../../assets/numpy-svgrepo-com.svg";
import Reactjs from "../../assets/react-svgrepo-com.svg";
import SCSS from "../../assets/scss-svgrepo-com.svg"
import Zoho from "../../assets/zoho-svgrepo-com.svg";
import "../../../src/app/globals.css";
import { useEffect } from "react";
export default function Aboutpage () {
  useEffect(() => {
    // Glow hover setup
      if (window.innerWidth < 1024) return; // skip mobile/tablet

    const glowCards = document.querySelectorAll<HTMLElement>(".glow-hover");
    if (window.matchMedia("(min-width: 768px)").matches) { 
      if (glowCards.length) {
        glowCards.forEach((card) => {
          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
          });
        });
      }
    }
   
    return () => {
      glowCards.forEach((card) => card.replaceWith(card.cloneNode(true)));
    };
  }, []);
    return (
      <main className="max-w-4xl mx-auto px-4 py-20 relative bg-main-page-mobile md:bg-info-page bg-no-repeat flex flex-col justify-start items-center bg-custom-dark text-custom-light">
        <div className=" shine relative w-full  max-w-5xl rounded-xl border border-gray-700 p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_10px_30px_rgba(51,184,100,0.7)] ">
            {/* Text Content */}
          <div className="pt-10">
            <h1 className="typing-line text-3xl sm:text-6xl lg:text-7xl font-bold">
              Some info
              <span className="typing-line mt-2 italic font-semibold">{" "}
                about me
              </span>
            </h1>
          </div>
        </div>
        <section>
          <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl pt-8">
            <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
              <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">
                <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                  <div>
                    <img src={Profile.src} style={{borderRadius:"50%"}}></img>
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 md:w-1/2 text-left pt-32">
                  <div>
                    <h5 className="font-bold text-lg heading">About me</h5>
                    <p className="body-text ">
                      Welcome to my corner of the web! I enjoy solving challenging problems and learning new technologies to create meaningful projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <div className="flex flex-col md:flex-row-reverse justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
              <div className="flex flex-col md:flex-row-reverse gap-x-16 gap-y-8 w-full text-left text-gray-300">
                <div className="flex flex-col gap-y-6 md:w-1/2 text-right">
                  <div>
                    <img src={McMaster.src} style={{borderRadius:"10%"}}></img>
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 md:w-1/2 text-left pt-32">
                  <div>
                    <h5 className="font-bold text-lg heading">My Education</h5>
                    <p className="body-text ">
                      In May 2027, I am set to graduate from Computer Science at McMaster University.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl pb-16">
            <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
              <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">
                <div className="flex flex-col gap-y-6 md:w-1/2 text-left pt-14">
                  <div>
                    <img src={Software.src} style={{borderRadius:"5%"}}></img>
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 md:w-1/2 text-left pt-16">
                  <div>
                    <h5 className="font-bold text-lg heading">Why computer science?</h5>
                    <p className="body-text ">
                      From building legos to even attempting to build a drone, I have always been fascinated by technology and how things work. I discovered my passion during my high school computer science class where I was exposed to Web Dev. This passion was further ignited through my experiences at McMaster 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="relative w-full max-w-5xl rounded-xl border border-gray-700 p-12 shadow-[0_10px_30px_rgba(0,0,0,0.7)] overflow-visible">
          <div className="w-full">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold">
            My skills
            </h1>
            <h2 className="typing-line-skills overflow-visible text-xl break-words break-normal whitespace-normal leading-relaxed">
              Formal Education in:  
              <span className="body-text overflow-visible">
                Python, Java, SQL, C, Bash, Elm, Assembly, OOP, UML, SDLC, MATLAB, Git/Github
              </span>
            </h2>
            <h2 className="typing-line-skills text-xl break-words break-normal whitespace-normal leading-relaxed">
              Also skilled in: 
              <span className="body-text">
                HTML, CSS, JavaScript, TypeScript, React, Next, Node, C++, FastAPI, Django, Power BI, Tableau, MS Suite
              </span>
            </h2>
          </div>
        </div>
        <div className="relative w-full max-w-5xl flex flex-col relative z-10" >
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">My Experience</div>          
            <div className="col-span-12 p-4">
              <a target="_blank" href="" className="kill-link-style group">
                <div
                    className="relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 pb-10 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small" style={{ ['--glow-r' as any]: 255, ['--glow-g' as any]: 0, ['--glow-b' as any]: 0 }}
                  >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                        <h3 className=' text-2xl md:text-4xl font-extrabold'>Scotiabank</h3>
                        
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl pb-16 ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                          <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">My Role</h5>
                              <p className="body-text ">
                                Data Analyst Intern
                              </p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading ">Timeline & Status</h5>
                              <p className="body-text ">
                                <span className="highlight font-medium">On-going</span>, September 2024 - Present
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-y-5 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">Overview</h5>
                              <p className="body-text ">
                                Optimized SQL queries and ETL pipelines, and built scalable Power BI dashboards for data-driven decisions.   
                              </p>
                            </div>

                            <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-x-10 gap-y-12 items-center body-text">
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Python
                                </div>                    
                              </div>
                              <div className="relative inline-block group">
                                <SQL className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" fill="currentColor" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm  rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  SQL
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <PowerBI className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em"  fill="currentColor" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  PowerBI
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <NumPy className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em"  fill="currentColor" /> 
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Numpy
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                              < Pandas className="w-10 h-10" fill="currentColor" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Pandas
                                </div>                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </a>
            </div>
            <div className="col-span-12 p-4">
              <a target="_blank" href="" className="kill-link-style group">
                <div
                    className="relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 pb-10 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small" style={{ ['--glow-r' as any]: 255, ['--glow-g' as any]: 140, ['--glow-b' as any]: 0 }}
                  >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                        <h3 className=' text-2xl md:text-4xl font-extrabold'>Quotograph.io</h3>
                        
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl pb-16 ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                          <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">My Role</h5>
                              <p className="body-text ">
                                Full Stack Devevloper Intern
                              </p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading ">Timeline & Status</h5>
                              <p className="body-text ">
                                <span className="highlight font-medium">Completed</span>, July 2024 - August 2024
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-y-5 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">Overview</h5>
                              <p className="body-text ">
                                Developed React.js browser games, integrated ML features, and improved performance with CI/CD and async APIs.</p>
                            </div>

                            <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-x-10 gap-y-12 items-center body-text">
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Python
                                </div>                    
                              </div>
                              <div className="relative inline-block group">
                                <Reactjs className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" fill="currentColor" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm  rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  React
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  HTML5
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  JavaScript
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <SCSS className="w-10 h-10" fill="currentColor" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  SCSS
                                </div>                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </a>
            </div>
            <div className="col-span-12 p-4">
              <a target="_blank" href="" className="kill-link-style group">
                <div
                    className="relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 pb-10 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small" style={{ ['--glow-r' as any]: 75, ['--glow-g' as any]: 0, ['--glow-b' as any]: 130 }}
                  >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                        <h3 className=' text-2xl md:text-4xl font-extrabold'>Absolute Finance</h3>
                        
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl pb-16 ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                          <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">My Role</h5>
                              <p className="body-text ">
                                Data Analyst Intern
                              </p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading ">Timeline & Status</h5>
                              <p className="body-text ">
                                <span className="highlight font-medium">Completed</span>, May 2025 - July 2025
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-y-5 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">Overview</h5>
                              <p className="body-text ">
                                Automated ETL pipelines with SQL/Deluge, built Zoho Analytics dashboards, and delivered insights to improve forecasting.
                              </p>
                            </div>

                            <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-x-10 gap-y-12 items-center body-text">
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Python
                                </div>                    
                              </div>
                              <div className="relative inline-block group">
                                <SQL className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" fill="currentColor" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm  rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  SQL
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <Zoho className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em"  fill="currentColor" />
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Zoho
                                </div>                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </a>
            </div>
        </div>

      </main>
      
    )
}