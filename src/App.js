import {useContext,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import firebase from 'firebase/compat/app'
import 'firebase/auth'

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import FirebaseConfig from './config/FirebaseConfig';

//init firebase
firebase.initializeApp(FirebaseConfig)

function App() {

  const [user,setUser] = useState(null);

  return (
    <Router>      
      <ToastContainer/>
      <UserContext.Provider value = {{user,setUser}}>
        <Header/>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route exact path = '/signin' element = {<SignIn/>}/>
          <Route exact path = '/signup' element = {<SignUp/>}/>
          <Route exact path = '*' element = {<PageNotFound/>}/>
        </Routes>
      </UserContext.Provider>    
    <Footer/>
    </Router>
    );
}

export default App;
