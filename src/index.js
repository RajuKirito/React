import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route,Link,Switch,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import User from './User';
import Visit from './Visit';
import Notfound from './NotFound';

const routing = (

  <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/user'>User</Link></li>
          <li><Link to='/visit'>Visit</Link></li>
        </ul>
      </div>
    <Routes>
      <Route exact path = "/" element={<App/>}/>
      <Route exact path = "/user" element={<User/>}/>
      <Route exact path = "/visit" element={<Visit/>}/>
      <Route path = '*' element={<Notfound/>}/>
    </Routes>
  </Router>
);

ReactDOM.render(routing,document.getElementById('root'));
