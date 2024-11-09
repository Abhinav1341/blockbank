import React, { useState } from "react";
import States from "./states/States";
import PieChartBox from "./pieCartBox/PieChartBox";
import Navbar from "./navbar";
import Profile from "./profile/profile";
import { singleUser } from "./data";
import LoanTable from "./loantable";
import PrevLoanTable from "./previousloan";
import { FaHome, FaChartPie, FaUserAlt, FaFileInvoice } from "react-icons/fa"; // Import icons
import { GiTakeMyMoney } from "react-icons/gi";
import { RiBankCardFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import ChatLoan from "./chatbot";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Current Loan");

  const handleGetDetails = () => {
    window.open("/dev/getInfo", "_blank");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Current Loan":
        return <LoanTable />;
      // case "Previous Loans":
      //   return <PrevLoanTable />;
      case "Stats":
        return <States />;
      case "get-details":
        return (
          <>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleGetDetails}
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
              >
                Get Details
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-[#e6f4f1] flex flex-col">
        <div className="fixed z-50 right-0 bottom-0">
          <ChatLoan />
        </div>
        {/* Main Content */}
        <div className="flex flex-grow pt-20 px-4">
          {/* Left Side - Mini Navbar */}
          <div className=" md:w-1/5 px-3 py-8 text-center bg-white shadow-lg font-semibold text-xl rounded-lg border border-green-700">
            <ul className="space-y-5 text-green-700">
              <li
                className={`cursor-pointer p-3 rounded-md flex items-center justify-start space-x-3 hover:bg-green-200 group`}
                onClick={() => setActiveTab("Current Loan")}
              >
                <GiTakeMyMoney className="text-xl" />
                {/* Text is hidden on mobile */}
                <span className="hidden sm:inline-block ml-3">
                  Current Loan
                </span>
              </li>
              <li
                className={`cursor-pointer p-3 rounded-md flex items-center justify-start  hover:bg-green-200 group`}
                onClick={() => setActiveTab("Stats")}
              >
                <FaChartPie className="text-xl" />
                {/* Text is hidden on mobile */}
                <span className="hidden sm:inline-block ml-3">
                  Stats & Info
                </span>
              </li>{" "}
              <li
                className={`cursor-pointer p-3 rounded-md flex items-center justify-start  hover:bg-green-200 group`}
                onClick={() => setActiveTab("get-details")}
              >
                <FaUser className="text-xl" />
                {/* Text is hidden on mobile */}
                <span className="hidden sm:inline-block ml-3">Get Details</span>
              </li>
            </ul>

            {/* Credit Score Display */}
            <div className="pt-12 lg:block hidden">
              <PieChartBox />
            </div>
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="w-full md:w-4/5 p-8 ml-4 bg-white shadow-lg rounded-lg border border-green-700">
            {/* Render content based on activeTab */}
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
