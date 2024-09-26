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

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-700 transition-colors duration-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:px-12 md:mb-0">
            <img
              className="h-12 w-12 rounded-2xl"
              src="/logo.jpeg"
              alt="Logo"
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 uppercase">
            {navgation.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-sm font-bold hover:text-gray-300 transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Houssame. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
