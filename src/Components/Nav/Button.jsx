import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-3 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}