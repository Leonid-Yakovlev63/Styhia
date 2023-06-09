import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Lent from './components/Lent/Lent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import state from './redux/state';
import ScrollToTopButton from './components/UI/ScrollToTopButton/ScrollToTopButton';
import PoemId from './components/PoemId/PoemId';
import Registration from './components/UI/Registration/Registration';
import Authorisation from './components/UI/Authorisation/Authorisation';
import { useDispatch, useSelector } from 'react-redux';
import api from './service/api';
import { loaded, setUser } from './redux/redux';
import Poems from './components/Poems/Poems';
import EditProfile from './components/UI/EditProfile/EditProfile';
import NewPoem from './components/NewPoem/NewPoem';
import Requests from './components/Requests/Requests';
import Dialogs from './components/Dialogs/Dialogs';
import Chat from './components/Chat/Chat';
import CreateChat from './components/Dialogs/CreateChat/CreateChat';
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
          <Navbar userInfo={user} isRegistered={state.isRegistered} />
        <div id='main' className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile friends={state.friends} userInfo = {user} />}  />
            <Route path='/profile' element={<Profile friends={state.friends} userInfo = {user} />} >
              <Route path=':id' element={<Profile friends={state.friends} userInfo = {user} />} />
            </Route> 
            <Route path='/chats' element={<Dialogs />} />
              <Route path='/chat/new' element={<CreateChat />} />
              <Route path='/chat/:id' element={<Chat />} />
            <Route path='/newPoem' element={<NewPoem />} />
            <Route path='/poems' element={<Poems />} >
              <Route path=':id' element={<Poems />} />
            </Route>
            <Route path='/requests' element={<Requests />} />
            <Route path='/poem/:id' element={<PoemId />} />
            <Route path='/friends' element={<Friends friends={state.friends} recFriends={state.recFriends} />} />
            <Route path='/lent' element={<Lent />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Authorisation />} />
            <Route path='/edit' element={<EditProfile />} />
          </Routes>
        </div>
      </div>
   </BrowserRouter>
  );
};
export default App;

