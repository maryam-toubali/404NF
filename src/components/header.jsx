import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 shadow-md">
      <div className="text-2xl font-bold text-blue-600">blog</div>

      <nav className="hidden md:flex space-x-8 font-medium">
        <a href="#" className="text-gray-700 hover:text-green-600">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-green-600">
          Blogs
        </a>
        <a href="#" className="text-gray-700 hover:text-green-600">
          Contact
        </a>
      </nav>

      <div>
        <a
          href="#"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition"
        >
          Log in
        </a>
      </div>
    </header>
  );
};

export default Header;
