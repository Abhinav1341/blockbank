const ethers = require('ethers');

function RegisterUser({state}) {

    const register = async (event) => {
        event.preventDefault();
        const {contract} = state
        const name = document.getElementById('name').value;
        const transaction = await contract.registerUser(name);
        await transaction.wait();
        console.log('User registered');
    }
    return (
        <div>            
            <form onSubmit={register}>
                <label>Name</label>
                <input type="text" id="name" name="name" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterUser;