const ethers = require("ethers");

function DepositFunds({ state }) {
  const deposit = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const amount = document.getElementById("amount").value;
    const transaction = await contract.depositFunds({
      value: ethers.parseEther(amount),
    });
    await transaction.wait();
    console.log("Funds deposited");
  };
  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-400 bg-gray-200 m-auto mt-4 w-1/3 items-center shadow-md">
      <div className="text-2xl font-bold">Deposit in BlockBank</div>
      <div className="text-lg">
        <form
          className="flex gap-4 align-middle items-center"
          onSubmit={deposit}
        >
          <label className="font-semibold">Amount</label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter Amount"
            required
          />
          <button
            className="bg-emerald-500 text-white px-5 py-1 rounded-lg"
            type="submit"
          >
            Deposit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DepositFunds;
