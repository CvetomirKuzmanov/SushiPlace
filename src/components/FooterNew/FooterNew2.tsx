import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Logo and Company Name */}
        <div>
          <img src="/FishLogo.png" alt="Company Logo" className="h-12 mx-auto md:mx-0 mb-2" />
          <h2 className="text-xl font-semibold">YourApp</h2>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/menu" className="hover:text-gray-400">Menu</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
          </ul>
        </div>

        {/* Column 3: Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Find us</h3>
          <a 
            href="https://www.google.com/maps/place/София" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 underline"
          >
            See on map
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6 text-white text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}