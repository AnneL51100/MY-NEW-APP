import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"


function App() {

   const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
    // 
    // States
    let [pokemonIndex, setPokemonIndex]=useState(0);

    
    const previousPokemonIndex =() => setPokemonIndex(pokemonIndex - 1);
    const nextPokemonIndex =() => setPokemonIndex(pokemonIndex + 1);
    

    


    return (
        <><div>
          <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
          {pokemonIndex>0 ? <button onClick={previousPokemonIndex}> Previous </button> : null}
          {pokemonIndex < pokemonList.length -1 ? <button onClick={nextPokemonIndex}> Next </button> : null}
        </div>

        </>
  );
}

export default App
