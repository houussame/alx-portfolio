import React from "react";
import { Link } from "react-router-dom";


const navgation = [
    {
        name: "HOME",
        path: "/",
    },
    {
        name: "MY WORKS",
        path: "/myworks",
    },
    {
        name: "CONTACT",
        path: "/contact",
    },
]

const Navbar = () => {
  return (
    <header className="pt-6 px-4 lg:px-6 border-b border-gray-700 pb-4">
      <div className="container mx-auto flex items-center justify-between transition-colors duration-100">
        <Link className="flex items-center justify-center" href="#">
          <img className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl" src="/logo.jpeg" alt="" />
          <span className="sr-only">Houssame</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          {navgation.map((item) => (
            <Link
              key={item.name}
              className="text-sm font-bold hover:text-gray-300 transition-colors"
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
