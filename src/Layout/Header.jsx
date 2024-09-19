import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/portlogo.png'
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-cyan-600 bg-opacity-40 shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6 lg:px-8">
          <div className='h-20  -m-1 sm:-mx-10 xs:-mx-32'>
          <Link to="/SubhTechies/" className="text-2xl font-bold">
            {/* Add your logo or brand name here */}
            <img src={logo} className='w-80 h-52 -my-16 rounded-2xl '/>
          </Link>
          </div>

          {/* Hamburger Icon for mobile view */}
          <div className="md:hidden  border-2 rounded-full border-purple-400 bg-purple-300 bg-opacity-20  place-items-end justify-end xs:ml-14">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-700 text-2xl font-extrabold focus:outline-none p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:flex md:items-center md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-serif font-semibold text-lg items-center">
              <li>
                <NavLink
                  to="/SubhTechies/"
                  end
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200 ${
                      isActive
                        ? 'text-orange-400 underline underline-offset-8'
                        : 'text-pink-600'
                    } hover:text-red-600`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/SubhTechies/service"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200 ${
                      isActive
                        ? 'text-orange-400 underline underline-offset-8'
                        : 'text-pink-600'
                    } hover:text-red-600`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/SubhTechies/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200 ${
                      isActive
                        ? 'text-orange-400 underline underline-offset-8'
                        : 'text-pink-600'
                    } hover:text-red-600`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/SubhTechies/about"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200 ${
                      isActive
                        ? 'text-orange-400 underline underline-offset-8'
                        : 'text-pink-600'
                    } hover:text-red-600`
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
