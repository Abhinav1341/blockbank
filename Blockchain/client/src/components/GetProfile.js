import { useState, useEffect } from "react";

const GetProfile = ({ state }) => {
  const [profile, setProfile] = useState({
    address: "",
    name: "",
    creditScore: 0,
    totalBorrowed: 0,
    totalRepaid: 0,
  });

  // useEffect(() => {
  const getProfile = async (event) => {
    event.preventDefault();
    const { contract } = state;
    try {
      const address = document.getElementById("address").value;
      console.log("Fetching profile...");
      const profile = await contract.getUserProfile(address);
      setProfile(profile);
      console.log(profile);
    } catch (error) {
      console.error(error);
    }
  };
  // getProfile();
  // }, [contract]);

  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-400 bg-gray-200 m-auto mt-4 w-1/3 items-center shadow-md">
      <div className="text-2xl font-bold">Get Profile Information</div>
      <div className="flex flex-col gap-2 text-lg">
        <form
          className="flex gap-4 align-middle items-center"
          onSubmit={getProfile}
        >
          <label className="font-semibold">Address: </label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="address"
            placeholder="Enter Address"
            required
          />
          <button
            className="bg-emerald-500 text-white px-5 py-1 rounded-lg"
            type="submit"
          >
            Get Profile
          </button>
        </form>
        <h2>Profile</h2>
        <p>Address: {profile[0]}</p>
        <p>Name: {profile[1]}</p>
        <p>Credit Score: {profile[2] == null ? null : profile[2].toString()}</p>
        <p>
          Total Borrowed: {profile[3] == null ? null : profile[3].toString()}
        </p>
        <p>Total Repaid: {profile[4] == null ? null : profile[4].toString()}</p>
      </div>
    </div>
  );
};

export default GetProfile;
