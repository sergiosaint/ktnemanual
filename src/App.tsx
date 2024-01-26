import React from 'react';
import logo from './ktane-logo.png';
import './App.css';
import PasswordModule from './passwordModule/passwordModule';

function App() {
  return (
      <div className="App page page-bg-01">
          <img className="logo" src={logo} alt="Keep Talking and Nobody Explodes" />
          <PasswordModule />
    </div>
  );
}

export default App;
