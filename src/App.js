import React, { useEffect } from 'react';
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
import state from './redux/state';
import ScrollToTopButton from './components/UI/ScrollToTopButton/ScrollToTopButton';
import Registration from './components/UI/Registration/Registration';
import Authorisation from './components/UI/Authorisation/Authorisation';
import { useDispatch, useSelector } from 'react-redux';
import api from './service/api';
import { loaded, setUser } from './redux/redux';
import Poems from './components/Poems/Poems';
const App = () => {

const dispatch = useDispatch();
const initialState = useSelector(state => state.value);
  const user = useSelector(state=>state.userInfo);
  useEffect(()=>{
    api.getUserInfo().then(u=>dispatch(setUser(u))).catch(()=>dispatch(loaded()));
  }, [])

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar userInfo = {user} isRegistered = {state.isRegistered}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile friends={state.friends} userInfo = {user} />}  />
            <Route path='/profile' element={<Profile friends={state.friends} userInfo = {user} />} >
              <Route path=':id' element={<Profile friends={state.friends} userInfo = {user} />} />
            </Route> 
            <Route path='/messages' element={<Messages dialogsPage={state.dialogsPage}/>} />
            <Route path='/myPoety' element={<Poems />} />
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

