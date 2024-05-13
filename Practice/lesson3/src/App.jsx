import PokemonCard from './PokemonCard';
import png001 from './assets/001.png';
import png002 from './assets/002.png';
import png006 from './assets/006-Gmax.png';
import './App.css';

function App() {

  return (
    <div className='listPokemonCard'>
      <PokemonCard name="Bulbasaur" image={png001} pokemonClass="Grass" age={10} />
      <PokemonCard name="Ivysaur" image={png002} pokemonClass="Grass" age={12} />
      <PokemonCard name="Venusaur" image={png002} pokemonClass="Grass" age={57} />
      <PokemonCard name="Charmander" image={png006} pokemonClass="Fire" age={30} />
    </div>
  )
}

export default App
