import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 text-black ${
        isScrolled ? "bg-transparent" : "bg-blue-600"
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center px-8 py-4 text-white">
        <h1 className="text-xl font-semibold">Block-Bank</h1>
        <div className="flex gap-8">
          <button className="hover:text-blue-200">Edit/Complete Profile</button>
          <button className="hover:text-blue-200">Get Loan</button>
          <button className="hover:text-blue-200">Your Wallet</button>
          <button className="hover:text-blue-200">Review Credit Score</button>
          <button className="hover:text-blue-200">LOGOUT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
