import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";

function KYC() {
 
  const [userData, setUserData] = useState({
    name: "",
    mobile: "",
    address: "",
    aadhaarFile: null,
  });

  const navigate = useNavigate(); // For navigation after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) => {
    setUserData({ ...userData, aadhaarFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    if (
      userData.name &&
      userData.mobile &&
      userData.address &&
      userData.aadhaarFile
    ) {
      localStorage.setItem("userData", JSON.stringify(userData));

      // // Redirect to the Profile page
      navigate('/profile');
    } else {
      alert("Please fill in all the fields and upload Aadhaar file");
    }
   
  };

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">KYC Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={userData.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Aadhaar Card (PDF/JPEG)
            </label>
            <input
              type="file"
              name="aadhaarFile"
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default KYC;
