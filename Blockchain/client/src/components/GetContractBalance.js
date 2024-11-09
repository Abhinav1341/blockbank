import { useState } from "react";
const { ethers } = require("ethers");
function GetContractBalance({ state }) {
  const [balance, setBalance] = useState(null);
  const getBalance = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const balanceW = await contract.getContractBalance();
    const balance = ethers.formatEther(balanceW);
    console.log(balance.toString());
    setBalance(balance.toString());
  };
  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-400 bg-gray-200 m-auto mt-4 w-1/3 items-center shadow-md text-lg">
      <form onSubmit={getBalance}>
        <button
          className="font-semibold bg-rose-600 text-white px-4 py-1 rounded-md"
          type="submit"
        >
          Get Contract Balance
        </button>
      </form>
      <p>Contract balance: {balance}</p>
    </div>
  );
}

export default GetContractBalance;
