import './App.css';

import Auth from './pages/auth/Auth';
import Profile from './pages/profile/Profile';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {Route,Routes,Navigate} from 'react-router-dom'
import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [user,setUser]=useState(null)
  return (
    <div className="App">
            <Nav/>
          <div className='mainContainer'>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile/:id' element={<Profile/>} />
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Login/>}/>
            </Routes>
          </div>
     {/* {
      user?
      <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      
    </Routes>
      </>
      :
      <Auth/>

     } */}
    </div>
  );
}

export default App;
