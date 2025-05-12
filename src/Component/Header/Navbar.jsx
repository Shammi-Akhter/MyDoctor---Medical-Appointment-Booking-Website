import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { ClipLoader } from 'react-spinners';
import { FiMenu, FiX } from 'react-icons/fi'; // <-- Hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = (
    <div className="flex flex-col md:flex-row md:items-center gap-4 text-[12px]">
      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-blue-500 bg-gray-100 px-4 py-2 rounded-lg font-bold'
            : 'hover:border-b-2 hover:bg-gray-100 px-4 py-2 hover:rounded-lg'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/my-booking"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-blue-500 bg-gray-100 px-4 py-2 rounded-lg font-bold'
            : 'hover:border-b-2 hover:bg-gray-100 px-4 py-2 hover:rounded-lg'
        }
      >
        My Bookings
      </NavLink>
      <NavLink
        to="/blog"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-blue-500 bg-gray-100 px-4 py-2 rounded-lg font-bold'
            : 'hover:border-b-2 hover:bg-gray-100 px-4 py-2 hover:rounded-lg'
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/contactUs"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-blue-500 bg-gray-100 px-4 py-2 rounded-lg font-bold'
            : 'hover:border-b-2 hover:bg-gray-100 px-4 py-2 hover:rounded-lg'
        }
      >
        Contact Us
      </NavLink>
    </div>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-[30px] h-[30px]"
            src="https://i.ibb.co.com/7tC2mzkq/logo-DBn-Mtpi3.png"
            alt="Logo"
          />
          <h3 className="font-extrabold text-lg">Phudu</h3>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">{links}</div>

        {/* Emergency Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white font-semibold text-[12px] w-[90px] p-2 rounded-3xl">
            Emergency
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 pb-4">
          {links}
          <button className="bg-blue-600 text-white font-semibold text-[12px] w-full p-2 rounded-3xl">
            Emergency
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
