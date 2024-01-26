import React from 'react';
import logo from './ktane-logo.png';
import './App.css';
import PasswordModule from './passwordModule/passwordModule';

function App() {
  return (
    <div className="App">
          <img src={logo} alt="Keep Talking and Nobody Explodes" />
          <PasswordModule />
    </div>
  );
}

export default App;
