"use client"// Importez le composant Link de next
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex flex-row items-center justify-between sticky top-0 z-20'>
      <Link legacyBehavior href="/">
        <a>
          <Image src="/next.svg" width={50} height={50} alt="" />
        </a>
      </Link>

      <a className='sm:hidden' onClick={toggleMenu}>
        Menu +
      </a>

      <ul className={`sm:flex gap-5 ${isMenuOpen ? 'absolute flex flex-col gap-1 bg-[#080808] top-12 right-0 px-5 py-5 rounded-lg text-left' : 'hidden'}`}>
        <li>
          <Link legacyBehavior href="/course">
            <a>Course</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="https://github.com/ZayToxFF">
            <a className='flex flex-row gap-1 text-xl text-[#B3B3B3] hover:text-white'>

            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
