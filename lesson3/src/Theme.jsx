import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import StoreContext from './store';
import Dic from './store/dictionaries';

function SwitchTheme() {
    const store = useContext(StoreContext);
    console.log(store);
    return (
        <Form>
            <Form.Check
                checked={store.theme}
                type="switch"
                id="custom-switch"
                label={`${Dic[store.lang]['A1']} ${store.theme ? Dic[store.lang]['A2'] : Dic[store.lang]['A3']}`}
                onChange={() => {
                    store.setTheme(!store.theme);
                }}
            />
        </Form>
    );
}

export default SwitchTheme;