import React from 'react';

import rdStationLogo from '../../assets/svgs/rdstation-logo.svg';

export const Header = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between w-full gap-4 py-10 md:flex-row">
      <h1 className="text-3xl font-black underline text-cyan-950 underline-offset-8 decoration-cyan-600 decoration-wavy">
        Frontend Challenge
      </h1>
      <a
        href="https://www.rdstation.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 ease-in-out hover:opacity-70"
      >
        <img
          src={rdStationLogo}
          alt="RD Station Logo"
          width="300"
          height="48"
          className="color-cyan-950"
        />
      </a>
    </div>
  );
};
