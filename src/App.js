import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import MyPoety from './components/MyPoety/MyPoety';
import Friends from './components/Friends/Friends';
import Lent from './components/Lent/Lent';
import Library from './components/Library/Library';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import state from './state/state';
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar userInfo = {state.userInfo}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile friends={state.friends} userInfo = {state.userInfo} />}  />
            <Route path='/profile' element={<Profile friends={state.friends} userInfo = {state.userInfo} />}  />
            <Route path='/messages' element={<Messages dialogsPage={state.dialogsPage}/>} />
            <Route path='/myPoety' element={<MyPoety />} />
            <Route path='/friends' element={<Friends friends={state.friends} recFriends={state.recFriends} />} />
            <Route path='/lent' element={<Lent />} />
            <Route path='/library' element={<Library />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;

