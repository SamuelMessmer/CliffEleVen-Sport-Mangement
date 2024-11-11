import React from "react";

const Footer = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-28 w-screen bg-[#0F0F0F] rotate-12 sm:rotate-6 -mb-28 ml-40  sm:ml-20 sm:-mb-20 "></div>
      <div className="h-28 w-screen bg-[#0F0F0F] -rotate-6 -mb-5 -ml-10 sm:-rotate-3 sm:-mb-5 sm:-ml-10"></div>
      <div className="h-20 bg-white"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between text-black bg-white px-4 pb-2 -mt-3 sm:p-8 2xl:p-14 xl:px-20">
        <p>@Allrightsreserved</p>
        <div className="flex gap-10 md:gap-5 self-center md:self-auto py-5 md:p-0 opacity-55 sm:opacity-95">
          <p>Impressum</p>
          <p>Datenschutz</p>
          <p>Hilfe</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
