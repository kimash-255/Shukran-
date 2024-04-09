// /src/components/common/Footer.js

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 lg:mb-0">
          <Link href="/"
             className="text-xl font-bold">Shukran
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="mb-4 lg:mb-0">
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li>
              <Link href="/about"
                 className="hover:text-gray-300">About Us
              </Link>
            </li>
            <li>
              <Link href="/menu"
                 className="hover:text-gray-300">Menu
              </Link>
            </li>
            <li>
              <Link href="/locations"
                 className="hover:text-gray-300">Locations
              </Link>
            </li>
            <li>
              <Link href="/contact"
                 className="hover:text-gray-300">Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Social Media Icons */}
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shukran Restaurant. Made for the SCO 207 assignment project. <br />
          <span className="font-serif">Courtesy of Web Dev TEchnologies Class</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
