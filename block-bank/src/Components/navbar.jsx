import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import React Icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <nav
      className={`fixed w-screen px-2 z-20 top-0 text-white transition-all duration-300 ${
        isScrolled ? "bg-green-700 shadow-lg" : "bg-green-600"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link to="/home">
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="Logo" className="h-10" />
            <h1 className="text-2xl font-bold text-white">Block-Bank</h1>
          </div>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/profile" className="hover:text-gray-200 transition-colors">
            Edit/Complete Profile
          </Link>
          <Link to="/getloan" className="hover:text-gray-200 transition-colors">
            Get Loan
          </Link>
          <Link className="hover:text-gray-200 transition-colors">
            Deposit
          </Link>
          <Link className="hover:text-gray-200 transition-colors">
            Review Credit Score
          </Link>
          <Link className="hover:text-red-400 transition-colors">LOGOUT</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu} // Toggle mobile menu on click
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" /> // Close icon when menu is open
            ) : (
              <FaBars className="w-6 h-6" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-600 text-white flex flex-col items-center py-4 gap-4">
          <Link
            to="/profile"
            className="hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu when link is clicked
          >
            Edit/Complete Profile
          </Link>
          <Link
            to="/getloan"
            className="hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Loan
          </Link>
          <Link
            className="hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Your Wallet
          </Link>
          <Link
            className="hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Review Credit Score
          </Link>
          <Link
            className="hover:text-red-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LOGOUT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
