import './PokemonCard.css';

const PokemonCard = () => {
    return (
        <div className="bound">
            <div className="itemPokemonCard">
                <div className="imgPokemon">
                    <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png" alt="pokemon" />
                </div>
                <p className="idPokemon">#0001</p>
                <p className='namePokemon'>
                    <b>Bulbasaur</b>
                </p>
                <div className="info">
                    <span>Grass</span>
                    <span>Poison</span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;