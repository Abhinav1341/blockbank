import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-semibold">
        BlockBank Payment Interface
      </div>
      <div className="flex space-x-4">
        <a
          href="https://blockbank.vercel.app/"
          target="_blank"
          className="text-gray-300 cursor-pointer hover:text-white"
        >
          Back to Website
        </a>
        <Link to="/loan" className="text-gray-300 hover:text-white">
          Manage Loans
        </Link>
        <Link to="/getInfo" className="text-gray-300 hover:text-white">
          Wallet Info
        </Link>
        <Link to="/loanDetails" className="text-gray-300 hover:text-white">
          Loan Details
        </Link>
        <Link to="/" className="text-gray-300 hover:text-white">
          Register User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
