import { useState } from "react";
const {ethers} = require('ethers');
function LendMoney({state, account}) {
    const lend = async (event) => {
        event.preventDefault();
        const {contract} = state;
        // const interest = document.getElementById('interest').value;
        // const dueDate = document.getElementById('dueDate').value;
        // console.log(document.getElementById('amount').innerText.length);
        // console.log(document.getElementById('address').innerText.length);
        // const amount = document.getElementById('amount').innerText;
        // const address = document.getElementById('address').innerText;
        // console.log(interest, dueDate, amount, address);
        // console.log(amount);
        // console.log(address);
        // const amountInWei = parseInt(amount);
        // const interestInWei = parseInt(interest);
        // const dueDateTimestamp = parseInt(dueDate);
        // console
        console.log(account[0]);
        const transaction = await contract.lendMoney(account[0], 0, 0, 2000);
        await transaction.wait();
        console.log('Money lent');
    }

    return (
        <div>
            <form onSubmit={lend}>
                <label>Amount</label>
                <input type="text" id="amount" name="amount" required />
                <label>Interest</label>
                <input type="text" id="interest" name="interest" required />
                <label>Due Date</label>
                <input type="text" id="dueDate" name="dueDate" required />
                <label>Address</label>
                <input type="text" id="address" name="address" required />
                <button type="submit">Lend</button>
                </form>
        </div>
    );
}

export default LendMoney;