import Link from 'next/link';
import { FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image'; // Import Image for the logo

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold">Margbrook Pure</h2>
            <p className="text-gray-300">
              Providing premium-quality purified water tailored to meet your hydration needs.
            </p>
            <div className="mt-2 text-gray-300">
              <p>Email: <Link href="mailto:info@margbrookpure.co.ke" className="text-white underline">info@margbrookpure.co.ke</Link></p>
              <p>Sales: <Link href="mailto:sales@margbrookpure.co.ke" className="text-white underline">sales@margbrookpure.co.ke</Link></p>
            </div>
            <div className="flex space-x-2 mt-2">
              <Link href="https://www.tiktok.com/@margbrookpure" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="TikTok">
                <FaTiktok />
              </Link>
              <Link href="https://www.instagram.com/margbrookpure_official" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Instagram">
                <FaInstagram />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Twitter">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/logow.webp" // Ensure this path matches your public folder placement
              alt="Margbrook Pure Logo"
              width={150} // Adjust width as needed
              height={75} // Adjust height as needed
              className="h-auto"
            />
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="no-underline text-white">Home</Link></li>
              <li><Link href="/about" className="no-underline text-white">About</Link></li>
              <li><Link href="/products-services" className="no-underline text-white">Products & Services</Link></li>
              <li><Link href="/contact" className="no-underline text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-1">Subscribe to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-1 rounded-md text-gray-800"
            />
            <button
              type="submit"
              className="mt-1 w-full bg-blue-700 hover:bg-blue-600 text-white py-1 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="mt-2 flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p className="text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Margbrook Pure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}