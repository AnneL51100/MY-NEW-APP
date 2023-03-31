import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'
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


    return (
        <><div>
          <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
          <NavBar pokemons={pokemonList.length} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />
        </div>

        </>
  );
}

export default App
