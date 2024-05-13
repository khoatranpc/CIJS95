import PokemonCard from './PokemonCard';
import png001 from './assets/001.png';
import png002 from './assets/002.png';
import png006 from './assets/006-Gmax.png';
import './App.css';
import { useState } from 'react';

function App() {
  // 5p viết 4 state tương ứng cho 4 component card
  const [bulbasaur, setBulbasaur] = useState({
    name: 'Bulbasaur',
    image: png001,
    pokemonClass: 'Grass',
    age: 10
  });
  const [ivysaur, setIvysaur] = useState({
    name: 'ivysaur',
    image: png002,
    pokemonClass: 'Grass',
    age: 12
  });
  const [venusaur, setVenusaur] = useState({
    name: 'venusaur',
    image: png002,
    pokemonClass: 'Grass',
    age: 57
  });
  const [charmander, setCharmander] = useState({
    name: 'charmander',
    image: png006,
    pokemonClass: 'Fire',
    age: 30
  });

  return (
    <div className='listPokemonCard'>
      <PokemonCard name={bulbasaur.name} image={bulbasaur.image} pokemonClass={bulbasaur.pokemonClass} age={bulbasaur.age} />
      <PokemonCard name={ivysaur.name} image={ivysaur.image} pokemonClass={ivysaur.pokemonClass} age={ivysaur.age} />
      <PokemonCard name={venusaur.name} image={venusaur.image} pokemonClass={venusaur.pokemonClass} age={venusaur.age} />
      <PokemonCard name={charmander.name} image={charmander.image} pokemonClass={charmander.pokemonClass} age={charmander.age} />
    </div>
  )
}

export default App
