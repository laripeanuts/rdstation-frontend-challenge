import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen p-4 mx-auto max-w-7xl lg:p-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
