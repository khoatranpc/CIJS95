import { useState } from 'react';
import Modal from './Modal';
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
    const [showModal, setShowModal] = useState(false);
    const [tempPokemon, setTempokemon] = useState(props.pokemon);
    const handlePokemonSay = () => {
        alert(`${props.name} xin chào!`);
    }
    const handleChange = (e) => {
        setTempokemon({
            ...tempPokemon,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div className="bound">
            <div className="itemPokemonCard">
                <div className="imgPokemon">
                    <img src={props.image} alt="pokemon" onClick={() => {
                        setShowModal(true);
                    }}
                    />
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
            {showModal &&
                <Modal
                    handleClose={() => {
                        setShowModal(false);
                    }}
                >
                    <img src={tempPokemon.image} alt="" />
                    <p>Tên: <input type="text" value={tempPokemon.name} onChange={handleChange} name='name' /></p>
                    <p>Class: <input type="text" value={tempPokemon.pokemonClass} onChange={handleChange} name='pokemonClass' /></p>
                    <button onClick={() => {
                        props.handleChange({
                            ...tempPokemon
                        });
                        setShowModal(false);
                    }}>Lưu</button>
                </Modal>
            }
        </div>
    )
}

export default PokemonCard;