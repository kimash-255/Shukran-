import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ModeToggler from '../modetoggler';

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-gray-800 ml-2">Shukran</span>
          </Link>
        </div>
        <nav className="flex justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Login Icon */}
        <div>
          <Link href="/login" className="text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>
        </div>
      </div>

      {/* Light and Dark Backgrounds */}
      <div className="mt-4">
        <div className="bg-gray-200 dark:bg-gray-800 py-4">
          <h2 className="text-center text-xl font-bold">Light Background</h2>
        </div>
        <div className="bg-gray-800 dark:bg-gray-200 py-4">
          <h2 className="text-center text-xl font-bold">Dark Background</h2>
        </div>
      </div>

      {/* Mode Toggler */}
      <ModeToggler />
    </header>
  );
};

export default Header;
