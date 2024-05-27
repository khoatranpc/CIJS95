import { useState } from 'react';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import NewRelease from './components/NewRelease';
import { data } from './store/data';
import './App.css';

function App() {
  const [listData] = useState(data.slice(1, data.length));
  const [activeMovie, setActiveMove] = useState(data[0]);
  const handleClickCardMovie = (index) => {
    setActiveMove(listData[index]);
  }
  return (
    <div className="containerApp">
      <Navbar />
      <Explore data={activeMovie} />
      <NewRelease listData={listData} onClickCardMovie={handleClickCardMovie} />
    </div>
  )
}

export default App
