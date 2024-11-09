// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full px-6 z-10 top-0 text-black ${
//         isScrolled ? "bg-transparent" : "bg-blue-600"
//       } transition-all duration-300`}
//     >
//       <div className="flex justify-between items-center px-8 py-4 text-white">
//         <Link to={"*"}>
//           <div className="flex gap-5 items-center">
//             <img src="/icon.png" className="h-8" />
//             <h1 className="text-xl font-semibold">Block-Bank</h1>
//           </div>
//         </Link>
//         <div className="flex gap-8">
//           <Link to={"/profile"} className="hover:text-blue-200">
//             Edit/Complete Profile
//           </Link>
//           <Link to={"/getloan"} className="hover:text-blue-200">
//             Get Loan
//           </Link>
//           <Link className="hover:text-blue-200">Your Wallet</Link>
//           <Link className="hover:text-blue-200">Review Credit Score</Link>
//           <Link className="hover:text-blue-200">LOGOUT</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
      className={`fixed w-full px-6 z-20 top-0 text-white transition-all duration-300 ${
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
            Your Wallet
          </Link>
          <Link className="hover:text-gray-200 transition-colors">
            Review Credit Score
          </Link>
          <Link className="hover:text-gray-200 transition-colors">Chatbot</Link>
          <Link className="hover:text-red-400 transition-colors">LOGOUT</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
