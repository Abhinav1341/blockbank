import { useState } from "react";
const { ethers } = require('ethers');

function CheckStringMatch({ state }) {
    const [id, setId] = useState("");
    const [input, setInput] = useState("");
    const [match, setMatch] = useState(null);

    const checkMatch = async (event) => {
        event.preventDefault();
        const { contract } = state;

        try {
            const matchResult = await contract.checkStringMatch(id, input);
            setMatch(matchResult);
        } catch (error) {
            console.error("Error checking string match:", error);
        }
    };

    return (
        <div>
            <form onSubmit={checkMatch}>
                <label>ID</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <br />
                <label>Input String</label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Check Match</button>
            </form>
            {match !== null && (
                <div>
                    <p>Match: {match ? "True" : "False"}</p>
                </div>
            )}
        </div>
    );
}

export default CheckStringMatch;