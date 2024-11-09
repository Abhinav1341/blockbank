

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PrevLoanTable = () => {
  const loanData = [
    { id: 1, loanAmount: 5000, interest: 5.5, createdDate: "2024-11-01", dueDate: "2024-11-15", paidDate: "2024-11-14" },
    { id: 2, loanAmount: 10000, interest: 6.2, createdDate: "2024-11-03", dueDate: "2024-11-18", paidDate: "2024-11-19" },
    { id: 3, loanAmount: 7500, interest: 4.8, createdDate: "2024-11-05", dueDate: "2024-11-20", paidDate: "2024-11-20" },
    { id: 4, loanAmount: 6000, interest: 5.0, createdDate: "2024-11-06", dueDate: "2024-11-21", paidDate: "2024-11-22" },
    { id: 5, loanAmount: 9500, interest: 6.1, createdDate: "2024-11-07", dueDate: "2024-11-22", paidDate: "2024-11-21" },
    { id: 6, loanAmount: 12000, interest: 5.3, createdDate: "2024-11-08", dueDate: "2024-11-23", paidDate: "2024-11-24" },
    { id: 7, loanAmount: 4500, interest: 5.8, createdDate: "2024-11-09", dueDate: "2024-11-24", paidDate: "2024-11-23" },
    { id: 8, loanAmount: 8200, interest: 6.5, createdDate: "2024-11-10", dueDate: "2024-11-25", paidDate: "2024-11-26" },
    { id: 9, loanAmount: 6700, interest: 4.9, createdDate: "2024-11-11", dueDate: "2024-11-26", paidDate: "2024-11-25" },
    { id: 10, loanAmount: 11000, interest: 5.7, createdDate: "2024-11-12", dueDate: "2024-11-27", paidDate: "2024-11-28" },
    { id: 11, loanAmount: 9800, interest: 6.3, createdDate: "2024-11-13", dueDate: "2024-11-28", paidDate: "2024-11-27" },
    { id: 12, loanAmount: 5600, interest: 5.4, createdDate: "2024-11-14", dueDate: "2024-11-29", paidDate: "2024-11-30" },
    { id: 13, loanAmount: 7300, interest: 5.6, createdDate: "2024-11-15", dueDate: "2024-11-30", paidDate: "2024-11-29" },
    { id: 14, loanAmount: 9000, interest: 6.0, createdDate: "2024-11-16", dueDate: "2024-12-01", paidDate: "2024-12-02" },
    { id: 15, loanAmount: 6500, interest: 5.2, createdDate: "2024-11-17", dueDate: "2024-12-02", paidDate: "2024-12-01" },
  ];

  const checkSubmission = (dueDate, paidDate) => {
    return new Date(paidDate) <= new Date(dueDate);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-5 text-center">Previous Loan Data</h1>
      <div className="overflow-x-auto">
        <table className="bg-white border border-gray-200 w-full table-auto">
          <thead>
            <tr className="font-semibold">
              <th className="py-2 px-4 border-b">Loan Amount</th>
              <th className="py-2 px-4 border-b">Interest (%)</th>
              <th className="py-2 px-4 border-b">Created Date</th>
              <th className="py-2 px-4 border-b">Due Date</th>
              <th className="py-2 px-4 border-b">Paid Date</th>
              <th className="py-2 px-4 border-b">Paid Within Time</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((loan) => (
              <tr key={loan.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">₹{loan.loanAmount.toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{loan.interest}%</td>
                <td className="py-2 px-4 border-b">{loan.createdDate}</td>
                <td className="py-2 px-4 border-b">{loan.dueDate}</td>
                <td className="py-2 px-4 border-b">{loan.paidDate}</td>
                <td className="py-2 px-4 border-b text-center">
                  {checkSubmission(loan.dueDate, loan.paidDate) ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrevLoanTable;

