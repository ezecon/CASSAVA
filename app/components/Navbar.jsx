'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='font-bold font-mono flex justify-between items-center p-4 bg-[#ffffff2f] m-3 rounded-lg border-2 border-[#ffffff1f] backdrop-blur-md shadow-lg shadow-black/30 relative z-50'>
      {/* Logo Section */}
      <div className='text-xl '>
        <Link href='#herosection'>
         <div className='flex items-center gap-2'>
         <h1 className=' p-1 bg-[goldenrod] font-bold hover:scale-105 duration-300'>C</h1>
         <h1 >A</h1>
         <h1>S</h1>
         <h1>E</h1>
         <h1>V</h1>
         </div>
        </Link>
      </div>

      {/* Navbar Links Section */}
      <div className='hidden md:flex'>
        <ul className='flex gap-4'>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#about'>About</Link>
          </li>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#services'>Services</Link>
          </li>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#contact'>Contact</Link>
          </li>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#gallery'>Gallery</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-2xl text-white transition-transform duration-300 hover:scale-125'>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div className={`md:hidden absolute top-20 right-4 bg-[#ffffff1f] p-4 rounded-lg border border-white/20 backdrop-blur-md shadow-md transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <ul className='flex flex-col gap-4 text-white'>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#about'>About</Link>
          </li>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#services'>Services</Link>
          </li>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#contact'>Contact</Link>
          </li>
          <li className='hover:text-[goldenrod] transition-all duration-300 hover:scale-105'>
            <Link href='#gallery'>Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
