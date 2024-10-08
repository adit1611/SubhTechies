import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white mt-auto py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo and Description */}
          <div className="mb-0 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">ShubhTechies</h2>
            <p className="mt-2 text-gray-400">Delivering excellence in every project.</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
              <li><NavLink to="/SubhTechies/" className="block py-1 md:py-0 hover:text-gray-400">Home</NavLink></li>
              <li><NavLink to="/SubhTechies/about" className="block py-1 md:py-0 hover:text-gray-400">About</NavLink></li>
              <li><NavLink to="/SubhTechies/service" className="block py-1 md:py-0 hover:text-gray-400">Services</NavLink></li>
              <li><NavLink to="/SubhTechies/contact" className="block py-1 md:py-0 hover:text-gray-400">Contact</NavLink></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mb-6 md:mb-0 text-center md:text-right">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li><a href="https://www.facebook.com/100065960079994/" className="text-gray-400 hover:text-white"><FaFacebookF /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ShubhTechies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
