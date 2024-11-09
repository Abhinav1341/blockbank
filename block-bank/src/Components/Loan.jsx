

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Navbar from "./navbar";

const Loan = () => {
  const [formData, setFormData] = useState({
    name: "",
    loanAmount: "",
    loanType: "",
    term: "",
    purpose: "",
  });
  
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Details:", formData);

    // Redirect to /loanprocess route after form submission
    navigate("/loanprocess");
  };

  return (
    <>
    <Navbar />
      <div className="flex justify-center py-28 items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
            Loan Issuance Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form fields */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                Loan Amount
              </label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="loanType" className="block text-sm font-medium text-gray-700">
                Loan Type
              </label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Loan Type</option>
                <option value="personal">Personal</option>
                <option value="home">Home</option>
                <option value="auto">Auto</option>
                <option value="education">Education</option>
              </select>
            </div>

            <div>
              <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                Term (Years)
              </label>
              <input
                type="number"
                id="term"
                name="term"
                value={formData.term}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                Purpose of Loan
              </label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the purpose of the loan"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loan;

