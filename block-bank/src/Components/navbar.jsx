import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      className={`fixed w-full px-6 z-10 top-0 text-black ${
        isScrolled ? "bg-transparent" : "bg-blue-600"
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center px-8 py-4 text-white">
        <Link to={"*"}>
          <div className="flex gap-5 items-center">
            <img src="/icon.png" className="h-8" />
            <h1 className="text-xl font-semibold">Block-Bank</h1>
          </div>
        </Link>
        <div className="flex gap-8">
          <Link to={"/profile"} className="hover:text-blue-200">
            Edit/Complete Profile
          </Link>
          <Link to={"/getloan"} className="hover:text-blue-200">
            Get Loan
          </Link>
          <Link className="hover:text-blue-200">Your Wallet</Link>
          <Link className="hover:text-blue-200">Review Credit Score</Link>
          <Link className="hover:text-blue-200">LOGOUT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
