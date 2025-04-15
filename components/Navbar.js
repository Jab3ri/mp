import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-blue-900 text-white p-4 shadow-lg transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full z-50 bg-opacity-90' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link className="text-white hover:text-blue-400 transition duration-200" href="/">Margbrook Pure</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">Home</Link>
          <Link href="/about" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">About</Link>
          <Link href="/products-services" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">Products & Services</Link>
          <Link href="/contact" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">Contact Us</Link>
        </div>

        {/* Sliding Menu for Mobile */}
        <div className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-blue-900 bg-opacity-80 backdrop-blur-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
          <div className="flex flex-col items-center mt-16 space-y-4">
            <Link href="/" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">Home</Link>
            <Link href="/about" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">About</Link>
            <Link href="/products-services" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">Products & Services</Link>
            <Link href="/contact" className="no-underline text-white hover:bg-blue-800 p-2 rounded-lg transition duration-200 ease-in-out">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}