"use client";

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import GetInTouchModal from '@/app/Forms/Get-in-Touch/GetInTouch';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setNavOpen(false);
  };

  const linkClasses = (path) => 
    `relative group transition-colors duration-300 ease-in-out ${
      activeLink === path ? 'text-[#E76C21] font-satoshi text-base' : 'font-satoshi text-black hover:text-[#E76C21] text-base'
    }`;

  return (
    <>
      <nav className="bg-white shadow-md w-full fixed top-0 md:px-12 left-0 z-10">
        <div className="w-full px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Identify Africa" className="h-12" />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            {['/about', '/products', '/developers'].map((path) => (
              <Link
                key={path}
                href={path}
                className={linkClasses(path)}
                onClick={() => handleLinkClick(path)}
              >
                <span className="relative inline-block font-satoshi">
                  {path === '/about' && 'About Us'}
                  {path === '/products' && 'Products & Solutions'}
                  {path === '/developers' && 'Developers'}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E76C21] transform origin-left transition-all duration-300 ease-in-out scale-x-0 group-hover:scale-x-100"></span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#E76C21] transform origin-left transition-all duration-300 ease-in-out ${activeLink === path ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex font-satoshi">
            <button onClick={toggleModal} className="bg-[#E76C21] text-white px-6 py-2 rounded-3xl hover:bg-[#E76C21] transition duration-300 ease-in-out">
              Get In Touch
            </button>
          </div>
          <div className="md:hidden font-satoshi">
            <button onClick={toggleNav} className="focus:outline-none">
              {navOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="md:hidden bg-white shadow-md w-full font-satoshi">
            {['/about', '/products', '/developers'].map((path) => (
              <Link
                key={path}
                href={path}
                className={`block px-4 py-2 hover:bg-gray-100 ${
                  activeLink === path ? 'text-[#E76C21] font-satoshi' : 'text-black font-satoshi'
                } transition-colors duration-300 ease-in-out`}
                onClick={() => handleLinkClick(path)}
              >
                {path === '/about' && 'About Us'}
                {path === '/products' && 'Products & Solutions'}
                {path === '/developers' && 'Developers'}
              </Link>
            ))}
            <button
              onClick={toggleModal}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 bg-[#E76C21] text-white rounded-3xl font-satoshi transition duration-300 ease-in-out"
            >
              Get In Touch
            </button>
          </div>
        )}
      </nav>

      <GetInTouchModal isOpen={modalOpen} onClose={toggleModal} />
    </>
  );
};

export default Navbar;