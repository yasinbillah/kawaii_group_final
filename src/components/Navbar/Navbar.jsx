import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/kawaii_group.png';
import {  FaTimes, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import DarkMode from './DarkMode'; // Ensure this is correctly imported and implemented

const Menu = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Sister Concerns', path: '/verticals', hasDropdown: true },
  { id: 4, name: 'Projects', path: '/projects', hasDropdown: true },
  { id: 5, name: 'Gallery', path: '/gallery' },
  { id: 6, name: 'Career', path: '/career' },
  { id: 7, name: 'Contact', path: '/contact' }
];

const sisterConcerns = [
  { name: "M/S Sanjana International (RL -711)", link: "https://sanjanahr.com/" },
  { name: "Japan World SSW Training Center Ltd.", path: "/japan-world-ssw-training-center-ltd" },
  { name: "Achieve Japan", link: "https://achievejapanssw.com/" },
  { name: "Kawaii Advanced Technology & Solution Ltd.", link: "https://kawaiitechsolution/" },
  { name: "Kawaii Human Consultant Ltd.", path: "/kawaii-human-consultant-ltd" },
  { name: "Kawaii Engineering & Constructions Ltd.", path: "/kawaii-construction" },
  { name: "Kawaii Fashion Ltd", path: "/kawaii-fashion-ltd" },
  { name: "Kawaii Group Japan Ltd.", link: "https://kawaiijapanbd.com/" },
  { name: "Japan Kawaii design and development Ltd", path: "/japan-kawaii-design-and-development-ltd" },
  { name: "Kawaii International Education Centre Ltd.", path: "/kawaii-international-education-centre-ltd" },
  { name: "Japan Kawaii Development Ltd.", path: "/japan-kawaii-development-ltd" },
  { name: "Kawaii Group Canada Inc.", path: "/kawaii-group-canada-inc" }
];


const projects = [
  { name: "Japan World SSW Training Center Ltd.", path: "/japan-world-ssw-training-center-ltd" },
  { name: "Kawaii Engineering & Constructions Ltd.", path: "/kawaii-construction" },
  { name: "Japan Business Center.", path: "/kawaii-construction" },
  { name: "Japan Green City.", path: "/kawaii-construction" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const renderLink = (item) => {
    if (item.link) {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeAllDropdowns}>
          {item.name}
        </a>
      );
    }
    return (
      <Link to={item.path} className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeAllDropdowns}>
        {item.name}
      </Link>
    );
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white fixed top-0 left-0 right-0 z-20">
        <div className="container py-3 sm:py-0 flex justify-between items-center">
          <DarkMode />
          <Link to="/" className="flex-grow text-center sm:flex-none" onClick={closeAllDropdowns}>
            <img src={Logo} alt="Logo" className="w-20 sm:w-40 mx-auto" />
          </Link>
          <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
          <ul className="hidden sm:flex items-center gap-4">
            {Menu.map((item) => (
              <li key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div>
                    <button className="inline-block py-4 px-4 hover:text-yellow-500 flex items-center"
                      onClick={() => toggleDropdown(item.name)}>
                      {item.name}
                      {activeDropdown === item.name ? <FaCaretUp className="ml-2" /> : <FaCaretDown className="ml-2" />}
                    </button>
                    {activeDropdown === item.name && (
                      <ul className="absolute mt-1 rounded-md grid grid-cols-2 gap-2 p-2 shadow-md bg-white dark:bg-gray-900" style={{ minWidth: '300px' }}>
                        {(item.name === 'Sister Concerns' ? sisterConcerns : projects).map((entry) => renderLink(entry))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link to={item.path} className="inline-block py-4 px-4 hover:text-yellow-500" onClick={closeAllDropdowns}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {isMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md sm:hidden">
            {Menu.map((item) => (
              <li key={item.id} className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
                {item.hasDropdown ? (
                  <div onClick={() => toggleDropdown(item.name)} className="px-4 py-3 flex justify-between items-center">
                    {item.name}
                    {activeDropdown === item.name ? <FaCaretUp /> : <FaCaretDown />}
                  </div>
                ) : (
                  <Link to={item.path} className="block px-4 py-3" onClick={closeAllDropdowns}>{item.name}</Link>
                )}
                {activeDropdown === item.name && (
                  <ul>
                    {(item.name === 'Sister Concerns' ? sisterConcerns : projects).map((entry) => renderLink(entry))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
