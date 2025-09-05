import "../../src/app/globals.css";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center relative bottom-0 bg-custom-dark text-custom-light border-t border-opacity-10 border-custom-light h-auto py-8">
      <div className="w-page-default max-w-2xl flex flex-col items-center gap-y-8">
        <div className="p-4 text-4xl md:text-6xl font-extrabold text-center">
          Thanks for visiting
        </div>

        <div className="flex flex-wrap md:flex-row w-full justify-evenly items-center gap-x-10 gap-y-12 items-center body-text">
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 15 15" className="w-10 h-10 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z" fill="currentColor"/>
                                </svg>
                                <div className="footer absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded  pointer-events-none transition-opacity duration-200">
                                  Next.js
                                </div>                    
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                                </svg>
                                <div className="footer absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded  pointer-events-none transition-opacity duration-200">
                                  HTML5
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                </svg>
                                <div className="footer absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded  pointer-events-none transition-opacity duration-200">
                                  JavaScript
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox=".15 .13 799.7 479.6" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z" fill="currentColor"/>
                                </svg>
                                <div className="footer absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded  pointer-events-none transition-opacity duration-200">
                                  Tailwind CSS
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                  <path d="M12 1L24 22H0L12 1Z" fill="currentColor"/>
                                </svg>
                                <div className="footer absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded  pointer-events-none transition-opacity duration-200">
                                  Vercel
                                </div>                         
                              </div>
                              <div className="relative inline-block group">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 " xmlns="http://www.w3.org/2000/svg" >
                                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                                </svg>
                                <div className="footer absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1   text-sm body-text rounded  pointer-events-none transition-opacity duration-200">
                                  Typescript
                                </div>                         
                              </div>
                            </div>
        <div className="p-4 text-xl md:text-xl text-center">
          Last updated August 5, 2025
        </div>
      </div>
    </footer>

);
}