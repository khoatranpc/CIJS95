import './PokemonCard.css';

/**
 * 
 * Nhu cầu
 * 
 * Nhận đầu vào các giá trị: tên, hệ, id
 * 
 * Hiển thị style cho các class
 * 
 * nếu Grass -> style là chữ đen, nền xanh
 * nếu Fire -> style là chữ trắng, nền cam
 */
const PokemonCard = (props) => {
    const getLabelST = props.age < 20 ? 'Y' : 'M';

    const handlePokemonSay = () => {
        alert(`${props.name} xin chào!`);
    }
    return (
        <div className="bound">
            <div className="itemPokemonCard">
                <div className="imgPokemon">
                    <img src={props.image} alt="pokemon" />
                </div>
                <p className="idPokemon">#0001</p>
                <p className='namePokemon'>
                    {/* Code hiển thị tên */}
                    <b>{props.name}</b>
                </p>
                <div className="info">
                    <span className={props.pokemonClass}>{props.pokemonClass}</span>
                    <span>{getLabelST}</span>
                    <button onClick={handlePokemonSay}
                    >
                        Say
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;