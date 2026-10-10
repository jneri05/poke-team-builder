export  function PokemonSprites( {holdTeam} ){
    return (
        <div className="teamHolder">
            {holdTeam.map(pokemon => (
                <div key={pokemon.id} className="pokemonCard">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <p>{pokemon.name}</p>
                </div>    
            ))}
        </div>
    )
}