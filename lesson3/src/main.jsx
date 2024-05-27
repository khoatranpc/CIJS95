import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SwitchTheme from './Theme.jsx';
import Store from './store/Store.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Store>
    <SwitchTheme />
    <App />
  </Store>
)
