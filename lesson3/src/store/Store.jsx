import React from 'react'
import { useState } from 'react';
import StoreContext from '.';

const Store = (props) => {
    const [theme, setTheme] = useState(true);
    const [lang, setLang] = useState("VN");
    return (
        <StoreContext.Provider value={{ theme, setTheme, setLang, lang }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Store;