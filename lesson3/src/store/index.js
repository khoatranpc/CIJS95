// khởi tạo kho
import { createContext } from 'react';

const initialStore = {
    theme: true,
    setTheme: (theme) => {

    },
    lang: 'VN',
    setLang(lang) {

    }

};
const StoreContext = createContext(initialStore);

export default StoreContext;