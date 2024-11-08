// import React, { useState, useEffect } from "react";
// import States from "./states/States";
// import PieChartBox from "./pieCartBox/PieChartBox";

// const HomePage = () => {
//   const [activeTab, setActiveTab] = useState("SHG Details");
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="h-screen bg-[#f1f9f9] flex  flex-col">
//       <nav
//         className={`fixed w-full z-10 top-0 text-black ${
//           isScrolled ? "bg-transparent" : "bg-blue-600"
//         } transition-all duration-300`}
//       >
//         <div className="flex justify-between items-center px-8 py-4 text-white">
//           <h1 className="text-xl font-semibold">Block-Bank</h1>
//           <div className="flex gap-8">
//             <button className="hover:text-blue-200">
//               Edit/Complete Profile
//             </button>
//             <button className="hover:text-blue-200">Get Loan</button>
//             <button className="hover:text-blue-200">Your Wallet</button>
//             <button className="hover:text-blue-200">Review Credit Score</button>
//             <button className="hover:text-blue-200">LOGOUT</button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="flex flex-grow pt-20 px-8">
//         {/* Left Side - Mini Navbar */}
//         <div className="w-1/5 px-3 text-center bg-slate-100 shadow-lg font-semibold text-xl rounded-lg">
//           <ul className="space-y-5">
//             <li
//               className={`cursor-pointer ${
//                 activeTab === "Current Loan"
//                   ? "text-blue-600 font-semibold"
//                   : ""
//               }`}
//               onClick={() => setActiveTab("Current Loan")}
//             >
//               Current Loan
//             </li>
//             <li
//               className={`cursor-pointer ${
//                 activeTab === "Previous Loans"
//                   ? "text-blue-600 font-semibold"
//                   : ""
//               }`}
//               onClick={() => setActiveTab("Previous Loans")}
//             >
//               Previous Loan Details
//             </li>
//             <li
//               className={`cursor-pointer ${
//                 activeTab === "Stats" ? "text-blue-600 font-semibold" : ""
//               }`}
//               onClick={() => setActiveTab("Stats")}
//             >
//               Stats & Info
              
//             </li>
//             <li
//               className={`cursor-pointer ${
//                 activeTab === "SHG Details" ? "text-blue-600 font-semibold" : ""
//               }`}
//               onClick={() => setActiveTab("SHG Details")}
//             >
//               SHG Details
//             </li>
//           </ul>
//           {/* Credit Score Display */}
//           <div className="mt-8 text-lg text-gray-500">
//             Credit Score:{" "}
//             <span className="font-semibold text-green-500">720</span>
//           </div>

//           <div className="pt-14" >
//         <PieChartBox />
//       </div>
//         </div>

//         {/* Right Side - Dynamic Content */}
//         <div className="w-4/5 p-6 ml-4 bg-white shadow-lg rounded-lg">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//             {activeTab}
//           </h2>
//           <div>
//             {/* Content for each tab */}
//             {activeTab === "Current Loan" && (
//               <p>Your current loan details...</p>
//             )}
//             {activeTab === "Previous Loans" && (
//               <p>Your previous loan history...</p>
//             )}
//             {activeTab === "Stats" && (
//               <States/>
//               // <div className="grid grid-cols-2 gap-4">
//               //   {/* Placeholder for graphic stats */}
//               //   <div className="p-4 bg-[#e0f7f9] rounded-lg shadow-md text-center">
//               //     <h3 className="text-xl font-semibold text-blue-600">
//               //       Total Loans
//               //     </h3>
//               //     <p className="text-2xl font-bold">25</p>
//               //   </div>
//               //   <div className="p-4 bg-[#e0f7f9] rounded-lg shadow-md text-center">
//               //     <h3 className="text-xl font-semibold text-blue-600">
//               //       Repayment Rate
//               //     </h3>
//               //     <p className="text-2xl font-bold">98%</p>
//               //   </div>
//               // </div>
//             )}
//             {activeTab === "SHG Details" && (
//               <p>Details about the Self-Help Group (SHG)...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import States from "./states/States";
import PieChartBox from "./pieCartBox/PieChartBox";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("SHG Details");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen bg-[#f1f9f9] flex flex-col">
      <nav
        className={`fixed w-full z-10 top-0 text-black ${
          isScrolled ? "bg-transparent" : "bg-blue-600"
        } transition-all duration-300`}
      >
        <div className="flex justify-between items-center px-8 py-4 text-white">
          <h1 className="text-xl font-semibold">Block-Bank</h1>
          <div className="flex gap-8">
            <button className="hover:text-blue-200">
              Edit/Complete Profile
            </button>
            <button className="hover:text-blue-200">Get Loan</button>
            <button className="hover:text-blue-200">Your Wallet</button>
            <button className="hover:text-blue-200">Review Credit Score</button>
            <button className="hover:text-blue-200">LOGOUT</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-grow pt-20 px-8">
        {/* Left Side - Mini Navbar */}
        <div className="w-1/5 px-3 text-center bg-slate-100 shadow-lg font-semibold text-xl rounded-lg">
          <ul className="space-y-5">
            <li
              className={`cursor-pointer p-2 ${
                activeTab === "Current Loan"
                  ? "text-blue-600 font-semibold"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("Current Loan")}
            >
              Current Loan
            </li>
            <li
              className={`cursor-pointer p-2 ${
                activeTab === "Previous Loans"
                  ? "text-blue-600 font-semibold"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("Previous Loans")}
            >
              Previous Loan Details
            </li>
            <li
              className={`cursor-pointer p-2 ${
                activeTab === "Stats"
                  ? "text-blue-600 font-semibold"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("Stats")}
            >
              Stats & Info
            </li>
            <li
              className={`cursor-pointer p-2 ${
                activeTab === "SHG Details"
                  ? "text-blue-600 font-semibold"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("SHG Details")}
            >
              SHG Details
            </li>
          </ul>
          {/* Credit Score Display */}
          <div className="mt-8 text-lg text-gray-500">
            Credit Score:{" "}
            <span className="font-semibold text-green-500">720</span>
          </div>

          <div className="pt-14">
            <PieChartBox />
          </div>
        </div>

        {/* Right Side - Dynamic Content */}
        <div className="w-4/5 p-6 ml-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            {activeTab}
          </h2>
          <div>
            {/* Content for each tab */}
            {activeTab === "Current Loan" && (
              <p>Your current loan details...</p>
            )}
            {activeTab === "Previous Loans" && (
              <p>Your previous loan history...</p>
            )}
            {activeTab === "Stats" && <States />}
            {activeTab === "SHG Details" && (
              <p>Details about the Self-Help Group (SHG)...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

