import React from 'react';
import { data } from '../../store/data';
import './styles.css';

const Explore = (props) => {
    return (
        <div className="exploreContainer">
            <h2>Explore</h2>
            <p>What are you gonna watch today ?</p>
            <div className="carousel">
                <img src={props.data.image} />
                <div className="bgLinear"></div>
                <div className="content">
                    <h1>{props.data.movieName}</h1>
                    <p>{props.data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Explore;