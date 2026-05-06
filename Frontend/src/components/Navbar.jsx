import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar w-full bg-base-300">
      <div className="px-4 text-3xl font-bold select-none">
        <span className="text-yellow-300">S</span>
        <span className="text-secondary">p</span>
        <span className="text-accent">e</span>
        <span className="text-success">n</span>
        <span className="text-warning">d</span>
        <span className="text-error">y</span>
        <span className="text-info">x</span>
      </div>
    </nav>
  );
}