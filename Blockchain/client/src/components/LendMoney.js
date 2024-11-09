import { useState } from "react";
const {ethers} = require('ethers');
function LendMoney({state, account}) {
    const lend = async (event) => {
        event.preventDefault();
        const {contract} = state;
        const interest = document.getElementById('interests').value;
        const dueDate = document.getElementById('dueDate').value;
        const amount = document.getElementById('amounts').value;
        // console.log(account[0]);
        console.log(amount, interest, dueDate);
        const amountInWei = ethers.parseEther(amount);
        const interestInWei = ethers.parseEther(interest);
        console.log(amountInWei);
        console.log(interestInWei);
        const transaction = await contract.lendMoney(account[0], amountInWei, interestInWei, dueDate);
        await transaction.wait();
        console.log('Money lent');
    }

    return (
        <div>
            <form onSubmit={lend}>
            <label>Amount</label>
                <input type="text" id="amounts" name="amount" required />
                <br />
                <label>Interest</label>
                <input type="text" id="interests" name="interest" required />
                <br />
                <label>Due Date (in days)</label>
                <input type="text" id="dueDate" name="dueDate" required />
                <br />
                <button type="submit">Lend Money</button>
                </form>
        </div>
    );
}

export default LendMoney;