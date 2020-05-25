import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import MainPage from './MainPage/MainPage';
import FooterPage from './Footer/FooterBar';
import Profile from './Profile/Profile';
import Chats from './Chats/Chats';
import {Route, BrowserRouter} from 'react-router-dom';
import SavedPosts from './SavedPosts/SavedPosts';
// import RegistrationPageJS from './Registration/RegistationPageJS';


// РОЗМІТКА(КОМПОНЕНТИ) ВІДОБРАЖАЄТЬСЯ НА СТОРІНЦІ
 function App(props) {

  return (
    <div style={{ paddingTop: '100px' }}>
      <BrowserRouter>
        <div className='app-bloom'>

          {/* <Route path='/login' component = {RegistrationPageJS}/>    */}

          <NavigationBar />
          <Route path='/home' render ={ () => <MainPage /> }/>
          <Route path='/profile' render ={ () => <Profile /> }/>
          <Route path='/saved' render ={ () => <SavedPosts /> }/>
          <Route path='/chats' render ={ () => <Chats state={props.state.chatsPage} dispatch={props.dispatch} newMsgText={props.state.chatsPage.newMsgText} /> }/>

          <FooterPage />

        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
