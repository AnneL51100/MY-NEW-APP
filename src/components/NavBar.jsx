


const NavBar =({pokemonList, pokemonIndex, setPokemonIndex}) =>
{
    


    return (
        <div>
                   {pokemonList.map((pokemon, index) => (<button type="button" onClick={() => setPokemonIndex(index)} key={index}> {pokemon.name} </button>))}

        </div>
     
  );
}

export default NavBar