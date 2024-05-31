import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Login from './screens/login';
import Header from './Header';
import Profile from './screens/profile';
import Setting from './screens/setting';
import './App.css';

function App() {

  return (
    <div className="reactApp">
      <Header />
      <h1>HELLO MỌI NGƯỜI</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} >
          <Route path='setting' element={<Setting />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
