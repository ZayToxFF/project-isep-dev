"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed bottom-0 right-0 flex-col m-4'> 
        <Link className='fixed bottom-0 right-0' legacyBehavior href="">
            <a onClick={toggleMenu} className={` ${!isMenuOpen ? 'fixed bottom-0 right-0 m-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#2f363f]' : 'hidden'}`}>
                <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g fill="#fff"><path d="m17 9a5 5 0 0 0 -10 0 1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-1.1a5 5 0 0 0 4-4.9z"/><circle cx="12" cy="19" r="1"/></g></svg>
            </a>
        </Link>
        {isMenuOpen ? (
            <div className='flex flex-col gap-3 w-64 h-96 rounded-xl p-4 bg-[#2f363f] cursor-pointer'>
                <div className='flex flex-row items-center border-b justify-between'>
                    <h1>Help</h1>
                    <a onClick={toggleMenu}>
                    <svg viewBox="0 0 24 24" width={30} xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><path d="m13.41 12 4.3-4.29a1 1 0 1 0 -1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0 -1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" fill="#fff"/></svg>
                    </a>
                </div>
                <div className='w-full h-full flex flex-col gap-2 bg-orange-400'>
                  <Link legacyBehavior   href="">
                    <a className='h-1/4 w-full bg-red-500'>
                      test
                    </a>
                  </Link>
                  <Link legacyBehavior   href="">
                    <a className='h-1/4 w-full bg-red-500'>
                      test
                    </a>
                  </Link>
                  <Link legacyBehavior   href="">
                    <a className='h-1/4 w-full bg-red-500'>
                      test
                    </a>
                  </Link>
                  <Link legacyBehavior   href="">
                    <a className='h-1/4 w-full bg-red-500'>
                      test
                    </a>
                  </Link>
                </div>

            </div>
        ) : null}
    </div>
  );
};

export default Navbar;
