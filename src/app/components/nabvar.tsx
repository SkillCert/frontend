"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiBell } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="bg-[#1F1F2E] text-white py-3 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between space-x-10">
        
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image
                src="/skillcert_logo.png"
                alt="Skillcert Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-[#9F47F2]">Skillcert</span>
            </div>
          </Link>

          <Link href="/" className="text-gray-300 hover:text-[#9F47F2] transition-colors text-lg ml-6">
            Explore
          </Link>
        </div>

        <div className="flex items-center space-x-10">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full bg-[#2C2C3C] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9F47F2] transition-all w-64"
          />

          {!isConnected ? (
            <>
              <Link href="/" className="text-gray-300 hover:text-[#9F47F2] transition-colors">
                Home
              </Link>
              <Link href="/" className="text-gray-300 hover:text-[#9F47F2] transition-colors">
                Contact
              </Link>
              <button
                onClick={handleConnect}
                className="bg-[#9F47F2] text-white px-4 py-2 rounded-full hover:bg-[#7C3AB5] transition"
              >
                Connect
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-6">
                <GiGraduateCap className="text-white text-2xl cursor-pointer hover:text-[#9F47F2] transition-colors" />
                <FiBell className="text-white text-2xl cursor-pointer hover:text-[#9F47F2] transition-colors" />
                <Image
                  src="/user.jpeg"
                  alt="User Icon"
                  width={34}
                  height={34}
                  className="rounded-full border-2 border-[#9F47F2] cursor-pointer"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
