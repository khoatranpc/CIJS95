import './Card.css';

// truyền tham số, truyền cái gì cũng được
// thậm chí chúng ta truyền vào cho nó 1 đoạn html được hoặc 1 element

// nếu như sử dụng theo html là lồng thẻ vào trong thẻ

// truyền element bình thường

const Card = (props) => {
    return (
        <div
            className="card"
            style={{
                color: 'red',
            }}
        >
            {props.sayHello}
            <div className="name">Name: {props.name}</div>
            <div className="age">Age: {props.age}</div>
            {props.children}
        </div>
    )
}

export default Card;