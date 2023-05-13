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
import ScrollToTopButton from './components/UI/ScrollToTopButton/ScrollToTopButton';
import Registration from './components/UI/Registration/Registration';
import Authorisation from './components/UI/Authorisation/Authorisation';
const App = () => { {/*
1. Переделываем в классовую компоненту
2. Метод который изменяет состояние
*/}
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar userInfo = {state.userInfo} isRegistered = {state.isRegistered}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile friends={state.friends} userInfo = {state.userInfo} />}  />
            <Route path='/profile' element={<Profile friends={state.friends} userInfo = {state.userInfo} />}  />
            <Route path='/messages' element={<Messages dialogsPage={state.dialogsPage}/>} />
            <Route path='/myPoety' element={<MyPoety />} />
            <Route path='/friends' element={<Friends friends={state.friends} recFriends={state.recFriends} />} />
            <Route path='/lent' element={<Lent />} />
            <Route path='/library' element={<Library friends={state.friends} />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Authorisation />} />
          </Routes>
        </div>
      </div>
   </BrowserRouter>
  );
};
export default App;

