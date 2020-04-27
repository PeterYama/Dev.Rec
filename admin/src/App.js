import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import LoginForm from './pages/loginForm';
import UserList from './pages/userList';
import UserProfile from './pages/userProfile';
import jobRegistration from './pages/jobRegistration';
import { BrowserRouter, Route } from 'react-router-dom';
import {PythonShell} from 'python-shell';
 
PythonShell.run('ranking.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Route path='/loginForm' component={LoginForm}/>
        <Route path='/userList' component={UserList}/>
        <Route path='/userProfile' component={UserProfile}/>
        <Route path='/jobRegistration' component={jobRegistration}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
