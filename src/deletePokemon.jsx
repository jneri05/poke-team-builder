import { useState } from 'react';

export function DeletePokemon({ deletePoke, holdTeam, setHoldTeam, setTeamSize }) {
    const [message, setMessage] = useState("");

    function handleDeletePokemon() {
        const target = deletePoke.trim().toLowerCase();
        const exists = holdTeam.some(p => p.name.toLowerCase() === target);

        if (!exists) {
            setMessage("Pokemon not in your team or team empty");
            return;
        }

        const updatedTeam = holdTeam.filter(p => p.name.toLowerCase() !== target);
        setHoldTeam(updatedTeam);
        setTeamSize(updatedTeam.length);
        setMessage("");
    }

    return (
        <div>
            <button onClick={handleDeletePokemon}>Delete Pokemon</button>
            {message && <p>{message}</p>}
        </div>
    );
}