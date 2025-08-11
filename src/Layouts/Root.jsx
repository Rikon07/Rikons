import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Nav/Navbar';

const Root = () => {
  return (
    <div className="min-h-screen w-full relative text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
      {/* Light Mode Background */}
      <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: "40px 40px",
      }}
    />


      {/* Dark Mode Background */}
      <div
        className="absolute inset-0 z-0 hidden dark:block pointer-events-none"
        style={{
          backgroundColor: '#101014',
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
            radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
          `,
          backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
          backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
