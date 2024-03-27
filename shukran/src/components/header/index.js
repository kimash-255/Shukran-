// /src/components/common/Header.js

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/"
             className="flex items-center">
              <Image src="/img/SHUKRAN.png" alt="Shukran Logo" width={40} height={40} />
              <span className="text-xl font-bold text-gray-800 ml-2">Shukran</span>
            
          </Link>
        </div>
        <nav className="flex justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/accommodation" className="text-gray-600 hover:text-gray-800">
                Accommodation
              </Link>
            </li>
            <li>
              <Link href="/dining" className="text-gray-600 hover:text-gray-800">
                Dining
              </Link>
            </li>
            <li>
              <Link href="/recreation" className="text-gray-600 hover:text-gray-800">
                Recreation
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-gray-600 hover:text-gray-800">
                Events
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
    </header>
  );
};

export default Header;
