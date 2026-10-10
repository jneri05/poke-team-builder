import './App.css'
import { useState } from 'react'
import {AddPokemon} from './addPokemon'
import {findPokemon} from './findPokemon'
import {DeletePokemon} from './deletePokemon'
import {PokemonSprites} from './pokemonSprites'

function App() {
  const [pokeName, setPokeName] = useState('');
  const [deletePoke, setDeletePoke] = useState('');
  const [holdTeam, setHoldTeam] = useState([]);
  const [teamSize, setTeamSize] = useState(0);

  return (
    <div className='mainBackground'>

      <h1 className='theTitle'>Create your team</h1>

      <div className='secondBackground'>

        <div className='buttonHolder'>
          <form onSubmit={e => e.preventDefault()}>
            <input value={pokeName} onChange={e => setPokeName(e.target.value)} placeholder='Type your Pokemon'/>
          </form>

          <AddPokemon thisPoke={findPokemon(pokeName)} holdTeam={holdTeam} setHoldTeam={setHoldTeam} teamSize={teamSize} setTeamSize={setTeamSize}/>

          <form onSubmit={e => e.preventDefault()}>
            <input value={deletePoke} onChange={e => setDeletePoke(e.target.value)} placeholder='Type your Pokemon'/>
          </form>
          <DeletePokemon deletePoke={deletePoke} holdTeam={holdTeam} setHoldTeam={setHoldTeam} teamSize={teamSize} setTeamSize={setTeamSize}/>
        </div>
          <PokemonSprites holdTeam={holdTeam} teamSize={teamSize}/>
        </div>

    </div>
  )
}

export default App
