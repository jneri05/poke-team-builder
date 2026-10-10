import { useState } from 'react'
import './App.css'

export function AddPokemon({ thisPoke, holdTeam, setHoldTeam, teamSize, setTeamSize }) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    

    async function handleAddPokemon() {
        setLoading(true);
        setError(null);

        try {
            const hold = await fetch(`https://pokeapi.co/api/v2/pokemon/${thisPoke}/`)

            if(!hold.ok) {
                throw new Error(`Pokemon doesn't exist try again`);
            }

            const data = await hold.json();

            if(teamSize === 6){
                setMessage("Your team is full")
            }
            else {
                setHoldTeam([...holdTeam, data]);
                setTeamSize(teamSize + 1);
            }
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }   
        
    }

    return (
        <div>
            <button onClick={() => handleAddPokemon()}>
                Add Pokemon
            </button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {message && <p>{message}</p>}

        </div>
        
    );
}