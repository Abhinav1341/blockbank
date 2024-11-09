// import React, { useState, useEffect } from "react";
// import States from "./states/States";
// import PieChartBox from "./pieCartBox/PieChartBox";
// import Navbar from "./navbar";
// import Profile from "./profile/profile";
// import { singleUser } from "./data";
// import KYC from "./profile/kyc";
// import NumberTicker from "../../components/number-ticker";
// import Loan from "./Loan";
// import LoanTable from "./loantable";
// import PrevLoanTable from "./previousloan";

// const HomePage = () => {
//   const [activeTab, setActiveTab] = useState("Current Loan");
//   return (
//     <>
//       <Navbar />
//       <div className="h-screen bg-[#f1f9f9] flex flex-col">
//         {/* Main Content */}
//         <div className="flex flex-grow pt-20 px-8">
//           {/* Left Side - Mini Navbar */}
//           <div className="w-1/5 px-3 text-center bg-slate-100 shadow-lg font-semibold text-xl rounded-lg">
//             <ul className="space-y-5">
//               <li
//                 className={`cursor-pointer p-2 ${
//                   activeTab === "Current Loan"
//                     ? "text-blue-600 font-semibold"
//                     : "hover:bg-blue-100 hover:text-blue-600"
//                 }`}
//                 onClick={() => setActiveTab("Current Loan")}
//               >
//                 Current Loan
//               </li>
//               <li
//                 className={`cursor-pointer p-2 ${
//                   activeTab === "Previous Loans"
//                     ? "text-blue-600 font-semibold"
//                     : "hover:bg-blue-100 hover:text-blue-600"
//                 }`}
//                 onClick={() => setActiveTab("Previous Loans")}
//               >
//                 Previous Loan Details
//               </li>
//               <li
//                 className={`cursor-pointer p-2 ${
//                   activeTab === "Stats"
//                     ? "text-blue-600 font-semibold"
//                     : "hover:bg-blue-100 hover:text-blue-600"
//                 }`}
//                 onClick={() => setActiveTab("Stats")}
//               >
//                 Stats & Info
//               </li>
//               {/* <li
//               className={`cursor-pointer p-2 ${
//                 activeTab === "SHG Details"
//                   ? "text-blue-600 font-semibold"
//                   : "hover:bg-blue-100 hover:text-blue-600"
//               }`}
//               onClick={() => setActiveTab("SHG Details")}
//             >
//               SHG Details
//             </li>  */}
//               {/* <li
//               className={`cursor-pointer p-2 ${
//                 activeTab === "Profile"
//                   ? "text-blue-600 font-semibold"
//                   : "hover:bg-blue-100 hover:text-blue-600"
//               }`}
//               onClick={() => setActiveTab("Profile")}
//             >
//               Profile
//             </li> */}
//             </ul>
//             {/* Credit Score Display */}

//             <div className="pt-14">
//               <PieChartBox />
//             </div>
//           </div>

//           {/* Right Side - Dynamic Content */}
//           <div className="w-4/5 p-6 ml-4 bg-white shadow-lg rounded-lg">
//             <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//               {activeTab}
//             </h2>
//             <div>
//               {/* Content for each tab */}
//               {activeTab === "Current Loan" && (
//                <div>
//                 <LoanTable/>
//                </div>
//               )}
//               {activeTab === "Previous Loans" && (
//                <div>
//                <PrevLoanTable/>
//               </div>
//               )}

//               {activeTab === "Stats" && <States />}
              
//               {activeTab === "Profile" && (
//                 <div>
//                   <Profile {...singleUser} />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;







import React, { useState } from "react";
import States from "./states/States";
import PieChartBox from "./pieCartBox/PieChartBox";
import Navbar from "./navbar";
import Profile from "./profile/profile";
import { singleUser } from "./data";
import LoanTable from "./loantable";
import PrevLoanTable from "./previousloan";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Current Loan");

  const renderContent = () => {
    switch (activeTab) {
      case "Current Loan":
        return <LoanTable />;
      case "Previous Loans":
        return <PrevLoanTable />;
      case "Stats":
        return <States />;
      case "Profile":
        return <Profile {...singleUser} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-[#e6f4f1] flex flex-col">
        {/* Main Content */}
        <div className="flex flex-grow pt-20 px-8">
          {/* Left Side - Mini Navbar */}
          <div className="w-1/5 px-3 py-8 text-center bg-white shadow-lg font-semibold text-xl rounded-lg border border-green-700">
            <ul className="space-y-5 text-green-700">
              <li
                className={`cursor-pointer p-3 rounded-md ${
                  activeTab === "Current Loan"
                    ? "bg-green-700 text-white"
                    : "hover:bg-green-200"
                }`}
                onClick={() => setActiveTab("Current Loan")}
              >
                Current Loan
              </li>
              <li
                className={`cursor-pointer p-3 rounded-md ${
                  activeTab === "Previous Loans"
                    ? "bg-green-700 text-white"
                    : "hover:bg-green-200"
                }`}
                onClick={() => setActiveTab("Previous Loans")}
              >
                Previous Loan Details
              </li>
              <li
                className={`cursor-pointer p-3 rounded-md ${
                  activeTab === "Stats"
                    ? "bg-green-700 text-white"
                    : "hover:bg-green-200"
                }`}
                onClick={() => setActiveTab("Stats")}
              >
                Stats & Info
              </li>
            </ul>

            {/* Credit Score Display */}
            <div className="pt-12">
              <PieChartBox />
            </div>
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="w-4/5 p-8 ml-4 bg-white shadow-lg rounded-lg border border-green-700">
            {/* Render content based on activeTab */}
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
