import React, { useContext } from 'react';
import StoreContext from './store';

const Input = (props) => {
    const store = useContext(StoreContext);
    console.log(store);
    return (
        <div>
            <p>Tên: {props.fullName}</p>
            <input type="text" value={props.fullName} onChange={props.handleChange} />
        </div>
    )
}

export default Input;