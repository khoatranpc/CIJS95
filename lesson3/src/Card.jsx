import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="name">Name: {props.name}</div>
            <div className="age">Age: {props.tuoi}</div>
        </div>
    )
}

export default Card;