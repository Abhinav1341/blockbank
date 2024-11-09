import { useState } from "react";
const { ethers } = require('ethers');

function GetLoans({ state }) {
    const [loans, setLoans] = useState([]);
    const [address, setAddress] = useState("");

    const fetchLoans = async (event) => {
        event.preventDefault();
        const { contract } = state;

        try {
            const loansArray = await contract.getLoans(address);
            const loansFormatted = loansArray.map(loan => ({
                borrower: loan.borrower,
                amount: ethers.formatEther(loan.amount),
                interest: ethers.formatEther(loan.interest),
                dueDate: loan.dueDate.toString(),
                repaid: loan.repaid
            }));
            setLoans(loansFormatted);
        } catch (error) {
            console.error("Error fetching loans:", error);
        }
    };

    return (
        <div>
            <form onSubmit={fetchLoans}>
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Get Loans</button>
            </form>
            <div>
                {loans.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Borrower</th>
                                <th>Amount (ETH)</th>
                                <th>Interest (ETH)</th>
                                <th>Due Date</th>
                                <th>Repaid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loans.map((loan, index) => (
                                <tr key={index}>
                                    <td>{loan.borrower}</td>
                                    <td>{loan.amount}</td>
                                    <td>{loan.interest}</td>
                                    <td>{loan.dueDate}</td>
                                    <td>{loan.repaid ? "Yes" : "No"}</td>
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