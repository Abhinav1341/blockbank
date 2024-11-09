import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Importing check icon
import Navbar from "./navbar";

const LoanProcess = () => {
  const navigate = useNavigate();

  // Generate a random date within 7 days from today
  const generateRandomDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 8); // Random number between 0 and 7
    const randomDate = new Date(today);
    randomDate.setDate(today.getDate() + randomDays);
    return randomDate;
  };

  const randomDate = generateRandomDate();
  const dayOfWeek = randomDate.toLocaleString("en-US", { weekday: "long" });
  const formattedDate = randomDate.toLocaleDateString();

  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <FaCheckCircle className="text-green-600 text-3xl mr-2" />
          <h2 className="text-2xl font-semibold text-green-700">Thank You!</h2>
        </div>

        <p className="text-lg mb-6 text-center text-gray-700">
          Thanks for filling out the form. Your loan request is being processed.
        </p>

        <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-600">Your meeting scheduled on:</h3>
          <p className="text-lg text-blue-700">{formattedDate}</p>
          <p className="text-sm text-gray-500">{dayOfWeek}</p>
        </div>
      </div>
    </div></>
  );
};

export default LoanProcess;
