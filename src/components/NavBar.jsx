import PropTypes from "prop-types"
import PokemonCard from "./PokemonCard";


const NavBar =({pokemons, pokemonIndex, setPokemonIndex}) =>
{
    const previousPokemonIndex =() => setPokemonIndex(pokemonIndex - 1);
    const nextPokemonIndex =() => setPokemonIndex(pokemonIndex + 1);
    

    


    return (
        <><div>
          {/* <PokemonCard pokemon={pokemonList[pokemonIndex]}/> */}
          {pokemonIndex>0 ? <button onClick={previousPokemonIndex}> Previous </button> : null}
          {pokemonIndex < pokemons -1 ? <button onClick={nextPokemonIndex}> Next </button> : null}
        </div>

        </>
  );
}

export default NavBar