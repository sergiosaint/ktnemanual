import React from 'react';
import logo from './ktane-logo.png';
import ButtonComponent from './img/module/ButtonComponent.svg';
import KeypadComponent from './img/module/KeypadComponent.svg';
import MazeComponent from './img/module/MazeComponent.svg';
import MemoryComponent from './img/module/MemoryComponent.svg';
import PasswordComponent from './img/module/PasswordComponent.svg';
import WireComponent from './img/module/WireComponent.svg';
import SimonComponent from './img/module/SimonComponent.svg';
import WhosOnFirstComponent from './img/module/WhosOnFirstComponent.svg';
import VennWireComponent from './img/module/VennWireComponent.svg';
import WireSequenceComponent from './img/module/WireSequenceComponent.svg';
import MorseCodeComponent from './img/module/MorseCodeComponent.svg';
import NeedyKnobComponent from './img/module/NeedyKnobComponent.svg';
import './App.css';
import PasswordModule from './passwordModule/passwordModule';

function App() {
  return (
      <div className="App page page-bg-01">
          <img className="logo" src={logo} alt="Keep Talking and Nobody Explodes" />
          <p/>
          <div className="row">
            <div className="column">
              <img src={WireComponent} alt="Wire Module" width="120" height="120"/>
              <img src={ButtonComponent} alt="Button Module" width="120" height="120"/>
              <img src={MazeComponent} alt="Maze Module" width="120" height="120"/>
              <img src={KeypadComponent} alt="Keypad Module" width="120" height="120"/>
            </div>
            <div className="column">
              <img src={MemoryComponent} alt="Memory Module" width="120" height="120"/>
              <img src={PasswordComponent} alt="Password Module" width="120" height="120"/>
              <img src={SimonComponent} alt="Simon's said Module" width="120" height="120"/>
              <img src={WhosOnFirstComponent} alt="WhosOnFirst Module" width="120" height="120"/>
            </div>
            <div className="column">
              <img src={VennWireComponent} alt="VennWire Module" width="120" height="120"/>
              <img src={WireSequenceComponent} alt="Wire Sequence Module" width="120" height="120"/>
              <img src={MorseCodeComponent} alt="MorseCode Module" width="120" height="120"/>
              <img src={NeedyKnobComponent} alt="NeedyKnob Module" width="120" height="120"/>
            </div>
          </div>
          

          <PasswordModule />
    </div>
  );
}

export default App;
