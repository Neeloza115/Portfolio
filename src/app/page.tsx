'use client';
import { useEffect } from 'react';
import '../app/globals.css';
import MyIcon from '../assets/latex.svg';
import Matplotlib from '../assets/Matplotlib.svg';
import Pandas from '../assets/pandas.svg';
import Image from "next/image";


export default function Home() {
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
    // Matrix effect setup
    const canvas = document.getElementById("matrix") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");
    const container = document.querySelector(".matrix-container") as HTMLDivElement;

    if (!canvas || !ctx || !container) return;

    // Match canvas size to container
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const matrixChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array.from({ length: columns }).fill(1) as number[];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    let intervalId: number | null = null;
    const startAnimation = () => {
      if (intervalId === null) intervalId = window.setInterval(draw, 50);
    };
    const stopAnimation = () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    // Hover listeners
    container.addEventListener("mouseenter", startAnimation);
    container.addEventListener("mouseleave", stopAnimation);

    // Cleanup
    return () => {
      glowCards.forEach((card) => card.replaceWith(card.cloneNode(true)));
      stopAnimation();
      container.removeEventListener("mouseenter", startAnimation);
      container.removeEventListener("mouseleave", stopAnimation);
    };
  }, []);

  return (
    <main className="bg-main-page-mobile md:bg-work-page bg-no-repeat bg-cover bg-center relative flex flex-col items-center transition-opacity duration-300">
      <section
        id="hero"
        className="w-full flex justify-center pt-32 pb-8 px-4"
      >
        <div
          className="w-full h-full flex flex-col justify-center items-center relative z-10">
          <div className=" shine relative w-full  max-w-5xl rounded-xl border border-gray-700 p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_10px_30px_rgba(51,184,100,0.7)] ">
            {/* Text Content */}
            <div className="pt-10">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold">
                <span className="typing-line block" >Hi, I&apos;m <span>Neel.</span></span>
                <span className="typing-line block mt-2">I like to{" "}
                  <span className="italic font-semibold">fix things</span>
                </span>
              </h1>

              <span className="mt-6 text-lg font-mediumt yping-line block mt-3">
                Data Analyst Intern at Scotiabank
              </span>
              <p className="mt-1 text-sm">Previously at Quotograph.io</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center pb-8 px-4 ">
        <div className="relative w-full max-w-5xl rounded-xl border border-gray-700 p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.7)]  flex flex-col relative z-10">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">My Projects</div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 p-4">
                <a target="_blank" href="https://github.com/Neeloza115/ShortestPathsAnalyzer/tree/main" className="kill-link-style group">
                  <div
                    className="relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small" style={{'--glow-r': 227, '--glow-g': 116, '--glow-b': 0 } as React.CSSProperties}
                  >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 pb-4 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-left sm:items-center md:items-center w-full z-40 pointer-events-none">
                        <h3 className='text-2xl md:text-4xl font-extrabold'>Path Finding Experiment</h3>
                        
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                      <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                        <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                          <div>
                            <h5 className="heading font-bold text-lg ">My Role</h5>
                            <p className="body-text">
                              Software Developer — <span className="highlight">Helped to implement various shortest path and their experiments</span>
                            </p>
                          </div>

                          <div>
                            <h5 className="font-bold text-lg heading">Team</h5>
                            <p className="body-text">Austin B, Team Member </p>
                            <p className="body-text">Joshua Finemore, Team Member</p>
                          </div>
                          <div>
                            <h5 className="heading font-bold text-lg ">Timeline & Status</h5>
                            <p className="body-text">
                              <span className="highlight font-medium">Completed:</span> March 2025 - April 2025
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-y-4 md:w-1/2 text-left">
                          <div>
                            <h5 className="heading font-bold text-lg">Overview</h5>
                            <p className="body-text">
                              Implemented and compared shortest path algorithms (Dijkstra, Bellman-Ford, A*, All-Pairs) on synthetic and London Subway networks. Evaluated performance tradeoffs and built a UML adapter for flexible, object-oriented integration.
                            </p>
                          </div>

                          <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-8 items-center body-text">
                            <div className="relative inline-block group">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                              </svg>
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                Python
                              </div>                    
                            </div>
                            <div className="relative inline-block group">
                              <MyIcon className="w-12 h-10" fill="currentColor" />
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                Latex
                              </div>                         
                            </div>
                            <div className="relative inline-block group">
                              <Matplotlib className="w-12 h-10" fill="currentColor" />
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                Matplotlib
                              </div>                         
                            </div>
                            <div className="relative inline-block group">
                              <Pandas className="w-12 h-10" fill="currentColor" />
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                Pandas
                              </div>                    
                            </div>
                            <div className="relative inline-block group">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                              </svg>
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm rounded body-text opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                Github
                              </div>                         
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div
                      className="hidden lg:block w-full h-[300px] rounded to-white overflow-hidden transition-transform duration-300 ease-in-out"
                      style={{ transform: 'translateY(40px)' }}
                    >
                      <Image alt="" src="https://media.licdn.com/dms/image/v2/D4E12AQHiXDfWPoVqbQ/article-cover_image-shrink_720_1280/B4EZb0D5h5GUAQ-/0/1747851385692?e=2147483647&v=beta&t=u6NACMvfE4w9iwJg_sVKpd-ACa8fz2B2E7FPxQx1pyQ" width={1200} height={400}/>

                    </div>
                  </div>
                </a>
            </div>
            <div className="col-span-12 p-4">
                <a target="_blank" href="https://github.com/Neeloza115/CollisionDetector" className="kill-link-style group">
                  <div
                    className="relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small" style={{ '--glow-r': 244, '--glow-g': 180, '--glow-b': 0 } as React.CSSProperties}
                  >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 pb-4 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-left sm:items-center md:items-center w-full z-40 pointer-events-none">
                        <h3 className='text-2xl md:text-4xl font-extrabold'>Collision Detection</h3>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                      <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                        <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                          <div>
                            <h5 className="heading font-bold text-lg ">My Role</h5>
                            <p className="body-text">
                              Sole Designer — <span className="highlight">Developed the collision detection algorithms alone</span>
                            </p>
                          </div>
                          <div>
                            <h5 className="heading font-bold text-lg ">Timeline & Status</h5>
                            <p className="body-text">
                              <span className="highlight font-medium">Completed:</span> October 2024 - December 2024
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-y-4 md:w-1/2 text-left">
                          <div>
                            <h5 className="heading font-bold text-lg">Overview</h5>
                            <p className="body-text">
                              Developed a Java 2D collision detection system (AABB, circle, polygon) with JUnit testing for accuracy.
                            </p>
                          </div>

                          <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-8 items-center body-text">
                            <div className="relative inline-block group">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 509 509" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path>
                              </svg>
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                Java
                              </div>                    
                            </div>
                            <div className="relative inline-block group">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M11.886 9.769c1.647 0 2.95.436 3.912 1.307.961.872 1.442 2.06 1.442 3.566 0 1.744-.548 3.107-1.643 4.09-1.088.977-2.638 1.465-4.65 1.465-1.826 0-3.26-.294-4.303-.883v-2.38a7.89 7.89 0 002.079.793c.782.186 1.509.28 2.18.28 1.184 0 2.086-.265 2.704-.794.619-.53.928-1.304.928-2.325 0-1.952-1.245-2.929-3.733-2.929-.35 0-.783.038-1.297.112-.514.067-.965.145-1.352.235l-1.174-.693.626-7.98H16.1v2.335H9.919l-.37 4.046c.262-.044.578-.096.95-.156.38-.06.843-.09 1.387-.09zM12 0C5.373 0 0 5.373 0 12a11.998 11.998 0 006.65 10.738v-3.675h.138c.01.004 4.86 2.466 8.021 0 3.163-2.468 1.62-5.785 1.08-6.557-.54-.771-3.317-2.083-5.708-1.851-2.391.231-2.391.308-2.391.308l.617-7.096 7.687-.074V.744A12 12 0 0011.999 0zm4.095.744V3.793l-7.688.074-.617 7.096s0-.077 2.391-.308c2.392-.232 5.169 1.08 5.708 1.851.54.772 2.083 4.089-1.08 6.557-3.16 2.467-8.013.004-8.02 0h-.14v3.675A12 12 0 0012 24c6.628 0 12-5.373 12-12A12.007 12.007 0 0016.35.83c-.085-.03-.17-.059-.255-.086zM6.299 22.556z"></path>
                              </svg>
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                JUnit
                              </div>                         
                            </div>
                            <div className="relative inline-block group">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                              </svg>
                              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm rounded body-text opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                Github
                              </div>                         
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div
                      className="hidden lg:block w-full h-[300px] rounded to-white overflow-hidden transition-transform duration-300 ease-in-out"
                      style={{ transform: 'translateY(40px)' }}
                    >
                      <Image alt="" src="https://static.vecteezy.com/system/resources/previews/002/056/890/non_2x/geometric-shapes-background-with-memphis-style-free-vector.jpg"   width={1200} height={400}/>

                    </div>
                  </div>
                </a>
            </div>
            <div className="col-span-12 p-4">
              <a target="_blank" href="https://github.com/Neeloza115/MacEngComp24" className="kill-link-style group">
                  <div className="matrix-container relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small"  style={{ '--glow-r': 51, '--glow-g': 184, '--glow-b': 100 } as React.CSSProperties} >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 pb-4 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                        <h3 className=' text-2xl md:text-4xl font-extrabold'>Cybersecurity System</h3>
                        
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                          <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading">My Role</h5>
                              <p className="body-text">
                                Team Member — <span className="highlight">Developed facial regonition and encryption algorithms</span>
                              </p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading">Team</h5>
                              <p className="body-text">Harsh Shukla, Team Member </p>
                              <p className="body-text">Dharav Shah, Team Member</p>
                              <p className="body-text">Mahad Hassan, Team Member</p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading">Timeline & Status</h5>
                              <p className="body-text">
                                <span className="highlight">Completed</span>, December 2025 - December 2025
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-y-4 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading">Overview</h5>
                              <p className="body-text ">
                                Designing and developing a secure encryption software with facial recogonition capabilities. Came in second place out of 30+ teams
                              </p>
                            </div>

                            <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-8 items-center body-text ">
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 body-text text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Python
                                </div>                    
                              </div>
                              <div className="relative inline-block group overflow-visible">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 15 40" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >

                                <path
                                      d="M 0,9.4370741 V 9.3741482 L 0.29166667,9.1454075 0.58333333,8.9166667 0.35459255,9.2083333 0.12585176,9.5 H 0.06292588 0 Z M 14.359649,5.3333333 V 4.9166667 L 14.443713,5.125 14.527778,5.3333333 14.443713,5.5416667 14.359649,5.75 Z"
                                      id="path1442" />
                                <path
                                      d="m 18.625,28.556287 0.208333,-0.08407 0.208334,0.08407 0.208333,0.08406 h -0.416667 -0.416666 z m 2.086505,-0.0051 0.294839,-0.07683 0.205161,0.08301 0.205162,0.08301 -0.5,-0.0062 -0.5,-0.0062 z M 8.4088246,23.791667 7.75,23.083333 8.4583333,23.742158 9.1666667,24.400983 V 24.450491 24.5 H 9.117158 9.0676493 Z"
                                      id="path1441"
                                      sodipodi-nodetypes="ccccccccccccccccccccccc" />
                                <path
                                      d="M 8.1439407,30.648054 C 7.6675675,30.543581 7.1669051,30.477085 6.7148292,30.334631 6.2627533,30.192177 5.4401041,29.803739 5.4401041,29.803739 L 4.1653789,29.272846 2.9181432,28.453875 1.6709074,27.634903 0.5883496,26.639003 -0.49420845,25.643102 3.9925116,23.342685 8.4792314,21.042268 h 0.1268717 0.1268728 l 0.3948453,0.74429 0.3948455,0.744291 0.8937483,1.083534 c 0,0 0.321573,0.546129 0.89375,1.083534 0.572177,0.537405 0.562764,0.488001 1.281077,0.940063 0.718313,0.452062 1.281078,0.773611 1.281078,0.773611 l 1.297045,0.406992 1.297046,0.406992 1.207371,0.118732 1.207373,0.118731 0.515968,-0.113326 0.515968,-0.113326 v -0.218439 -0.21844 l 0.462359,-0.174561 0.746423,-0.266691 0.173879,0.223288 0.718973,-0.314132 0.320906,-0.142957 0.297875,-0.08154 0.533126,0.796092 0.479386,0.765382 -0.09547,0.248801 -0.09547,0.248802 -0.678139,0.271337 -0.67814,0.271338 -0.153548,0.08458 0.153548,0.207418 -0.378294,0.244686 -0.401327,0.167912 -0.439327,0.190451 -0.347198,0.121357 -0.04606,-0.30881 -0.06909,-0.239714 h -0.06405 -0.06405 l -1.142944,0.430204 -1.142944,0.430203 -1.693263,0.421557 -1.693263,0.421557 -2.521961,0.0727 c 0,0 -1.569226,0.217973 -2.5219595,0.0727 -0.9527331,-0.145273 -0.9527546,-0.20894 -1.4291278,-0.313413 z m -10.7304991,-7.798382 -0.8210335,-1.218947 -0.2893372,-0.562049 -0.2893372,-0.56205 0.05443,-0.03888 0.05443,-0.03888 L 1.2505809,18.142134 6.3785682,15.8554 C 6.5652583,15.778 6.7102793,15.728248 6.8750861,15.638665 l 0.4485284,1.85358 0.4945939,1.746098 -0.047292,0.03415 -0.047302,0.03415 -4.65624,2.380993 -4.65624,2.380995 h -0.088329 -0.088329 z m -2.7162651,-4.948631 -0.3483028,-0.787396 -0.4330115,-1.388819 -0.4330114,-1.388819 -0.3614357,-0.05152 -0.3614359,-0.05152 -0.5569807,-1.053256 -0.5569808,-1.053256 0.097334,-0.30667 0.097333,-0.30667 6.7645496,-2.8901015 6.7645497,-2.890102 c 0,0 0.2182268,-0.1043294 0.3426951,-0.133462 C 5.8369473,5.5703198 5.878594,5.765409 5.878594,5.765409 l 0.028309,0.5023763 0.051339,0.5254086 0.057071,1.0221233 0.064748,1.0298007 0.1623317,2.4336531 0.2237496,2.295461 c 0,0 0.010177,0.07526 -0.047615,0.163271 -0.057792,0.08802 -0.1244093,0.09416 -0.1244093,0.09416 l -5.42115472,2.397676 -5.50560608,2.459095 h -0.1609384 -0.1609383 z"
                                      id="path1439"
                                      sodipodi-nodetypes="zzccccccccccccczzcccccccccccccccccccccccccccccccccccczzcccccccccccccccccccccccccccccczccccccczcccccc" />
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 body-text text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Flask
                                </div>                         
                              </div>
                              <div className="relative inline-block group overflow-visible">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 48 48" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <defs><path d="M-69.65 120.638a139.301 139.301 120 1 1 139.301 0L27.71 47.993a55.418 55.418 120 1 0-55.418 0z" id="A"/></defs><g transform="matrix(1.275322 0 0 1.275322 -38.047246 -14.965624)"><use transform="matrix(.063405 0 0 .063405 29.66229 12.95855)" y="140" x="298" xlinkHref="#A"/><use transform="matrix(-.063405 0 0 -.063405 87.614835 65.58504)" y="415" x="457" xlinkHref="#A"/><use transform="matrix(-.031703 -.054911 .054911 -.031703 20.379704 60.225737)" y="415" x="142" xlinkHref="#A"/></g>        
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm rounded body-text opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  OpenCV
                                </div>                         
                              </div>                        
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm rounded body-text opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  MySQL
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm rounded body-text opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Github
                                </div>                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block w-full h-[300px] rounded to-white overflow-hidden transition-transform duration-300 ease-in-out"
                      style={{ transform: 'translateY(40px)' }}
                    >
                    <canvas id="matrix"></canvas>

                    </div>
                  </div>
              </a>
            </div>
            <div className="col-span-12 p-4">
              <a target="_blank" href="https://moodflix-2d6f5aefae7e.herokuapp.com/moodflix/" className="kill-link-style group">
                  <div
                    className="relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small"  style={{'--glow-r': 255, '--glow-g': 90, '--glow-b': 90 } as React.CSSProperties} 
                                >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 pb-4 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                        <h3 className=' text-2xl md:text-4xl font-extrabold'>Moodflix App</h3>
                        
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                          <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">My Role</h5>
                              <p className="body-text ">
                                Sole Developer — <span className="highlight">Developed and deployed the website</span>
                              </p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading">Timeline & Status</h5>
                              <p className="body-text ">
                                <span className="  font-medium">Completed</span>, July 2024 - July 2024
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-y-5 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading">Overview</h5>
                              <p className="body-text ">
                              Created a full-stack web app recommending movies based on user mood and language, where users can filter movies based on various paramaters
                              </p>
                            </div>

                            <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-x-10 gap-y-12 items-center body-text">
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Python
                                </div>                    
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 65 65" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M27.724 0H38.2v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56V16.16zM44.372.056h10.465v10.737H44.372z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Django
                                </div>                         
                              </div>
                            <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 7 7" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <defs><linearGradient x1="2.983" y1=".53" x2="2.983" y2="4.744" id="A" gradientUnits="userSpaceOnUse"><stop offset="0%"/><stop offset="92.024%"/><stop offset="100%"/></linearGradient></defs><path d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z"/><path d="M4.81.437H.847c-.196 0-.355.16-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z"/><path d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022c-.038-.087-.14-.272-.187-.352a8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002"/>         
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  SQLite
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
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  HTML5
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  CSS3
                                </div>                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="movie-rec hidden lg:block relative w-full h-[300px] rounded to-white overflow-hidden transition-transform duration-300 ease-in-out"
                      style={{ transform: 'translateY(40px)' }}
                    >
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-span-12 p-4">
              <a target="_blank" href="https://neelsweatherapp-b698fb795223.herokuapp.com" className="kill-link-style group">
                  <div
                    className="relative cursor-pointer text-left sm:text-center md:text-left duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-2 md:p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small" style={{'--glow-r': 92, '--glow-g': 136, '--glow-b': 218 } as React.CSSProperties}
                  >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 pb-4 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                        <h3 className=' text-2xl md:text-4xl font-extrabold'>Weather App</h3>
                        
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                          <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">My Role</h5>
                              <p className="body-text ">
                                Sole Developer — <span className="highlight">Developed and deployed the website alone</span>
                              </p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading ">Timeline & Status</h5>
                              <p className="body-text ">
                                <span className="highlight font-medium">Completed</span>, June 2024 - June 2024
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-y-5 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading ">Overview</h5>
                              <p className="body-text ">
                              Created a full-stack web app where users can input locations to get real time weather data and forecasting with dynamic backgrounds.
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
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 65 65" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M27.724 0H38.2v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56V16.16zM44.372.056h10.465v10.737H44.372z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm  rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  Django
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 7 7" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <defs><linearGradient x1="2.983" y1=".53" x2="2.983" y2="4.744" id="A" gradientUnits="userSpaceOnUse"><stop offset="0%"/><stop offset="92.024%"/><stop offset="100%"/></linearGradient></defs><path d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z"/><path d="M4.81.437H.847c-.196 0-.355.16-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z"/><path d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022c-.038-.087-.14-.272-.187-.352a8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002"/>         
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  SQLite
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  JavaScript
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  HTML5
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  CSS3
                                </div>                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="clouds"
                      className="hidden lg:block w-full h-[300px] bg-gradient-to-b from-[#c9dbe9] rounded to-white overflow-hidden transition-transform duration-300 ease-in-out"
                      style={{ transform: 'translateY(40px)' }}
                    >
                      <div className="cloud x1"></div>
                      <div className="cloud x2"></div>
                      <div className="cloud x3"></div>
                      <div className="cloud x4"></div>
                      <div className="cloud x5"></div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-span-12 p-4">
              <a target="_blank" href="https://neeloza115.github.io" className="kill-link-style group">
                  <div
                    className="relative cursor-pointer text-center md:text-start duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 rounded-lg overflow-hidden glow-hover glow-hover-small group " style={{'--glow-r': 128 , '--glow-g': 128, '--glow-b': 128 } as React.CSSProperties}
                  >
                    <div className="flex flex-col justify-start w-full gap-y-2 pt-2 pb-4 px-2 md:pt-4 md:px-8 ">
                      <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                        <h3 className=' text-2xl md:text-4xl font-extrabold'>First Portfolio Website</h3>
                        <svg stroke="currentColor" fill="currentColor"  strokeWidth="0" version="1.1" viewBox="0 0 17 17" className="2xl:text-4xl text-2xl transition-all duration-200 ease-in group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <g></g>
                          <path d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-x-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl ">
                      <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-10 md:gap-y-0 w-full">
                        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 w-full text-left text-gray-300">

                          <div className="flex flex-col gap-y-6 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading">My Role</h5>
                              <p className="body-text ">
                                Sole Developer — <span className="highlight">Developed and deployed the website alone</span>
                              </p>
                            </div>

                            <div>
                              <h5 className="font-bold text-lg heading">Timeline & Status</h5>
                              <p className="body-text ">
                                <span className="highlight font-medium">Completed</span>, May 2024 - May 2024
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-y-5 md:w-1/2 text-left">
                            <div>
                              <h5 className="font-bold text-lg heading">Overview</h5>
                              <p className="body-text ">
                              Created a starter porfolio  to showcase general skills and get proper web dev experience.
                              </p>
                            </div>

                            <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-x-10 gap-y-12 items-center body-text">
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  JavaScript
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  HTML5
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                                </svg>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                  CSS3
                                </div>                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image alt='' src="https://miro.medium.com/v2/resize:fit:1200/1*E4IIoarCsV0k79c2EM1r4w.jpeg"
                      className="hidden lg:block w-full rounded h-[400px] overflow-hidden transition-transform duration-300 ease-in-out" style={{ transform: 'translateY(50px)' }} width={1200} height={400}/>
                  </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
