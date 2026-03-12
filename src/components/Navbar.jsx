import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 text-white py-3 w-full">
      <div className="flex items-center justify-between px-6">
        
        {/* Logo */}
        <div className="text-xl font-bold">iTask</div>

        {/* Menu */}
        <ul className="flex gap-6 list-none">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">Your Task</li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;