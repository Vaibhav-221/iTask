import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#020617]/70 border-b border-white/10">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3 text-white">

        <div className="font-bold text-lg md:text-xl tracking-wide text-cyan-400">
          iTask
        </div>

        <ul className="flex items-center gap-6 text-sm md:text-base font-medium">
          <li className="cursor-pointer hover:text-cyan-400 transition">
            Home
          </li>
        </ul>

      </div>

    </nav>
  );
};

export default Navbar;