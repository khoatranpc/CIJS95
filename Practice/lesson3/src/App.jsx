import { useState } from 'react';
import png001 from './assets/001.png';
import png002 from './assets/002.png';
import png006 from './assets/006-Gmax.png';
import PokemonCard from './PokemonCard';
import Modal from './Modal';
import './App.css';

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
      <PokemonCard handleChange={setBulbasaur} pokemon={bulbasaur} name={bulbasaur.name} image={bulbasaur.image} pokemonClass={bulbasaur.pokemonClass} age={bulbasaur.age} />
      <PokemonCard handleChange={setIvysaur} pokemon={ivysaur} name={ivysaur.name} image={ivysaur.image} pokemonClass={ivysaur.pokemonClass} age={ivysaur.age} />
      <PokemonCard handleChange={setVenusaur} pokemon={venusaur} name={venusaur.name} image={venusaur.image} pokemonClass={venusaur.pokemonClass} age={venusaur.age} />
      <PokemonCard handleChange={setCharmander} pokemon={charmander} name={charmander.name} image={charmander.image} pokemonClass={charmander.pokemonClass} age={charmander.age} />
    </div>
  )
}

export default App
