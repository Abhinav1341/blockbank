



import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const LoanTable = () => {
  const loanData = [
    { id: 1, loanAmount: 5000, interest: 5.5, createdDate: "2024-11-01", dueDate: "2024-11-15" },
    { id: 2, loanAmount: 10000, interest: 6.2, createdDate: "2024-11-03", dueDate: "2024-11-18" },
    { id: 3, loanAmount: 7500, interest: 4.8, createdDate: "2024-11-05", dueDate: "2024-11-20" },
    { id: 4, loanAmount: 6000, interest: 5.0, createdDate: "2024-11-06", dueDate: "2024-11-21" },
    { id: 5, loanAmount: 9500, interest: 6.1, createdDate: "2024-11-07", dueDate: "2024-11-22" },
    { id: 6, loanAmount: 12000, interest: 5.3, createdDate: "2024-11-08", dueDate: "2024-11-23" },
    { id: 7, loanAmount: 4500, interest: 5.8, createdDate: "2024-11-09", dueDate: "2024-11-24" },
    { id: 8, loanAmount: 8200, interest: 6.5, createdDate: "2024-11-10", dueDate: "2024-11-25" },
    { id: 9, loanAmount: 6700, interest: 4.9, createdDate: "2024-11-11", dueDate: "2024-11-26" },
    { id: 10, loanAmount: 11000, interest: 5.7, createdDate: "2024-11-12", dueDate: "2024-11-27" },
    { id: 11, loanAmount: 9800, interest: 6.3, createdDate: "2024-11-13", dueDate: "2024-11-28" },
    { id: 12, loanAmount: 5600, interest: 5.4, createdDate: "2024-11-14", dueDate: "2024-11-29" },
    { id: 13, loanAmount: 7300, interest: 5.6, createdDate: "2024-11-15", dueDate: "2024-11-30" },
    { id: 14, loanAmount: 9000, interest: 6.0, createdDate: "2024-11-16", dueDate: "2024-12-01" },
    { id: 15, loanAmount: 6500, interest: 5.2, createdDate: "2024-11-17", dueDate: "2024-12-02" },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Loan Data</h1>
      <div className="overflow-x-auto"> {/* Make table horizontally scrollable on small screens */}
        <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left font-semibold border-b border-gray-200">Loan Amount</th>
              <th className="py-3 px-6 text-left font-semibold border-b border-gray-200">Interest (%)</th>
              <th className="py-3 px-6 text-left font-semibold border-b border-gray-200">Created Date</th>
              <th className="py-3 px-6 text-left font-semibold border-b border-gray-200">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((loan) => (
              <tr key={loan.id} className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b border-gray-200">₹{loan.loanAmount.toLocaleString()}</td>
                <td className="py-3 px-6 border-b border-gray-200">{loan.interest}%</td>
                <td className="py-3 px-6 border-b border-gray-200">{loan.createdDate}</td>
                <td className="py-3 px-6 border-b border-gray-200">{loan.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanTable;

