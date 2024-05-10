import Card from './Card.jsx';

function App() {
  return (
    <div className="app">
      <h1>Hello mọi người!</h1>
      {/* vừa là thẻ mở, vừa là thẻ đóng */}
      <Card name="Khoa" age={10} sayHello={<h1>hello mindx!</h1>} >
        <p>hihi</p>
        <button >click</button>
      </Card>
      <Card name="Obito" age={14} sayHello={<h1>hello mindx!</h1>} />
      <Card name="Nobita" age={10} sayHello={<h1>hello mindx!</h1>} />
    </div>
  )
}

export default App;
