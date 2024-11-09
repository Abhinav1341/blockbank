import { useState } from "react";
const { ethers } = require("ethers");

function GetLoans({ state }) {
  const [loans, setLoans] = useState([]);
  const [address, setAddress] = useState("");

  const fetchLoans = async (event) => {
    event.preventDefault();
    const { contract } = state;

    try {
      const loansArray = await contract.getLoans(address);
      const loansFormatted = loansArray.map((loan) => ({
        borrower: loan.borrower,
        amount: ethers.formatEther(loan.amount),
        interest: ethers.formatEther(loan.interest),
        dueDate: loan.dueDate.toString(),
        repaid: loan.repaid,
      }));
      setLoans(loansFormatted);
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-400 bg-gray-200 m-auto mt-4 w-1/2 items-center shadow-md">
      <h1 className="text-2xl font-bold">Get Loan History</h1>
      <form
        className="text-lg flex w-3/4 flex-col align-middle items-center"
        onSubmit={fetchLoans}
      >
        <label>Wallet Address</label>
        <input
          type="text"
          className="border border-gray-500 pl-2 py-1"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <div className="p-2">
          <button
            className="bg-emerald-500 rounded text-white px-3 py-1 font-semibold"
            type="submit"
          >
            Get Loans
          </button>
        </div>
      </form>
      <div>
        {loans.length > 0 && (
          <table className="w-full border-collapse border border-gray-300 text-black text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border border-gray-300">Borrower</th>
                <th className="p-4 border border-gray-300">Amount (ETH)</th>
                <th className="p-4 border border-gray-300">Interest (ETH)</th>
                <th className="p-4 border border-gray-300">Due Date</th>
                <th className="p-4 border border-gray-300">Repaid</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 border border-gray-300">
                    {loan.borrower}
                  </td>
                  <td className="p-4 border border-gray-300">{loan.amount}</td>
                  <td className="p-4 border border-gray-300">
                    {loan.interest}
                  </td>
                  <td className="p-4 border border-gray-300">{loan.dueDate}</td>
                  <td className="p-4 border border-gray-300">
                    {loan.repaid ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default GetLoans;
