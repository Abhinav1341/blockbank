const ethers = require("ethers");

function RegisterUser({ state }) {
  const register = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.getElementById("name").value;
    const transaction = await contract.registerUser(name);
    await transaction.wait();
    console.log("User registered");
  };
  return (
    <div className="flex flex-col gap-3 p-4 border border-slate-400 bg-gray-200 m-auto mt-4 w-1/3 items-center shadow-md">
      <div className="text-2xl font-bold">Register User</div>
      <div className="text-lg">
        <form
          className="flex gap-4 align-middle items-center"
          onSubmit={register}
        >
          <label className="font-semibold">Name</label>
          <input
            className="border border-gray-500 pl-2 py-1"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
          />
          <button
            className="bg-emerald-500 text-white px-5 py-1 rounded-lg"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
