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
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
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
