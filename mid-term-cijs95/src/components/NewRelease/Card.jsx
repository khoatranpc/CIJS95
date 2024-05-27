import React from 'react';
import './styles.css';

const Card = (props) => {
    return (
        <div className="cardItem" onClick={()=>{
            props.onClick(props.index);
        }}>
            <div className="image">
                <img src={props.image} />
                <div className="bg"></div>
                <p className="epo">Episode {props.episode}</p>
            </div>
            <p className="nameMovie">{props.movieName}</p>
        </div>
    )
}

export default Card;