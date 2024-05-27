import React from 'react';
import Card from './Card';
import './styles.css';

const NewRelease = (props) => {
    return (
        <div className="newReleaseContainer">
            <h1>NewRelease</h1>
            <div className="list">
                {props.listData.map((item, idx) => {
                    return <Card key={item.id} image={item.image} episode={item.episode} movieName={item.movieName} onClick={props.onClickCardMovie} index={idx} />
                })}
            </div>
        </div>
    )
}

export default NewRelease;