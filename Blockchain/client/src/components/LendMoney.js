import { useState } from "react";
const { ethers } = require("ethers");
function LendMoney({ state, account }) {
  const lend = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const interest = document.getElementById("interests").value;
    const dueDate = document.getElementById("dueDate").value;
    const amount = document.getElementById("amounts").value;
    // console.log(account[0]);
    console.log(amount, interest, dueDate);
    const amountInWei = ethers.parseEther(amount);
    const interestInWei = ethers.parseEther(interest);
    console.log(amountInWei);
    console.log(interestInWei);
    const transaction = await contract.lendMoney(
      account[0],
      amountInWei,
      interestInWei,
      dueDate
    );
    await transaction.wait();
    console.log("Money lent");
  };

  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-400 bg-gray-200 m-auto mt-4 w-1/3 items-center shadow-md">
      <h1 className="text-2xl font-semibold">Get Loan</h1>
      <form
        className="text-lg gap-2 flex flex-col align-middle items-center"
        onSubmit={lend}
      >
        <div className="flex gap-3">
          <label>Amount</label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="amounts"
            name="amount"
            required
          />
        </div>
        <div className="flex gap-3">
          <label>Interest</label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="interests"
            name="interest"
            required
          />
        </div>
        <div className="flex gap-3">
          <label>Due Date (in days)</label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="dueDate"
            name="dueDate"
            required
          />
        </div>
        <div className="p-1">
          <button
            className="bg-rose-600 rounded text-white px-3 py-1 font-semibold"
            type="submit"
          >
            Lend Money
          </button>
        </div>
      </form>
    </div>
  );
}

export default LendMoney;
