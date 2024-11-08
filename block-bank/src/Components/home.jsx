import React, { useState, useEffect } from "react";
import States from "./states/States";
import PieChartBox from "./pieCartBox/PieChartBox";
import Navbar from "./navbar";
import Profile from "./profile/profile";
import { singleUser } from "./data";
import KYC from "./profile/kyc";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("SHG Details");
  return (
    <div className="h-screen bg-[#f1f9f9] flex flex-col">
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
            </li> <li
              className={`cursor-pointer p-2 ${
                activeTab === "Profile"
                  ? "text-blue-600 font-semibold"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("Profile")}
            >
              Profile
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
            )}{activeTab === "Stats" && <States />}
            {activeTab === "Profile" && (
              <div   >
                <Profile {...singleUser} />
               
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
