import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Card name="Khoa" age={10} sayHello={<h1>hello mindx!</h1>} >
        <p>hihi</p>
        <button >click</button>
      </Card>
      <Card name="Obito" age={14} sayHello={<h1>hello mindx!</h1>} />
      <Card name="Nobita" age={10} sayHello={<h1>hello mindx!</h1>} />
  </React.StrictMode>,
)
