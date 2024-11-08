import { useState, useEffect } from "react";

const GetProfile = ({ state }) => {
    const [profile, setProfile] = useState({
        address: '',
        name: '',
        creditScore: 0,
        totalBorrowed: 0,
        totalRepaid: 0
    });

    // useEffect(() => {
        const getProfile = async (event) => {
            event.preventDefault();
            const {contract} = state;
            try {
                const address = document.getElementById('address').value;
                console.log("Fetching profile...");
                const profile = await contract.getUserProfile(address);
                setProfile(profile);
                console.log(profile);
            } catch (error) {
                console.error(error);
            }
        };
        // getProfile();
    // }, [contract]);

    return (
        <div>
            <form onSubmit={getProfile}>
                <label>Address: </label>
                <input type="text" id="address" placeholder="Enter Address" required/>
                <button type="submit">Get Profile</button>
            </form>
            <h2>Profile</h2>
            <p>Address: {profile[0]}</p>
            <p>Name: {profile[1]}</p>
            <p>Credit Score: {(profile[2] == null)? null : profile[2].toString()}</p>
            <p>Total Borrowed: { (profile[3] == null)? null : profile[3].toString() }</p>
            <p>Total Repaid: {(profile[4] == null)? null : profile[4].toString()}</p>
        </div>
    );
}

export default GetProfile;