import React from 'react';

import githubLogo from '../../assets/svgs/github-logo.svg';

export const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 lg:flex-row lg:justify-between">
      <a
        href="http://github.com/laripeanuts"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 ease-in-out hover:opacity-70"
      >
        <img
          src={githubLogo}
          alt="GitHub Logo"
          width="48"
          height="48"
          className="color-cyan-950"
        />
      </a>
      <p className="text-cyan-950">
        Desafio solucionado por{' '}
        <a
          href="http://www.larissarabelo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          Larissa Rabelo
        </a>
      </p>
    </div>
  );
};
