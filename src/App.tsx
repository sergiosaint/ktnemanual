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
import WiresModule from './WiresModule/WiresModule';
import ButtonModule from './ButtonModule/ButtonModule';
import MazeModule from './MazeModule/MazeModule';
import KeypadModule from './KeypadModule/KeypadModule';
import MemoryModule from './MemoryModule/MemoryModule';
import PasswordModule from './PasswordModule/PasswordModule';
import SimonModule from './SimonModule/SimonModule';
import WhosOnFirstModule from './WhosOnFirstModule/WhosOnFirstModule';
import VennWireModule from './VennWireModule/VennWireModule';
import WireSequenceModule from './WireSequenceModule/WireSequenceModule';
import MorseCodeModule from './MorseCodeModule/MorseCodeModule';
import NeedyKnobModule from './NeedyKnobModule/NeedyKnobModule';

function App() {
    return (
        <>
            <div className="App page page-bg-01">
                <img className="logo" src={logo} alt="Keep Talking and Nobody Explodes" />
                <p />
                <div className="row" id="top">
                    <div className="column">
                        <a href='#WiresModule'><img src={WireComponent} alt="Wire Module" width="120" height="120" /></a>
                        <a href='#ButtonModule'><img src={ButtonComponent} alt="Button Module" width="120" height="120" /></a>
                        <a href='#MazeModule'><img src={MazeComponent} alt="Maze Module" width="120" height="120" /></a>
                        <a href='#KeypadModule'><img src={KeypadComponent} alt="Keypad Module" width="120" height="120" /></a>
                    </div>
                    <div className="column">
                        <a href='#MemoryModule'><img src={MemoryComponent} alt="Memory Module" width="120" height="120" /></a>
                        <a href='#PasswordModule'><img src={PasswordComponent} alt="Password Module" width="120" height="120" /></a>
                        <a href='#SimonModule'><img src={SimonComponent} alt="Simon's said Module" width="120" height="120" /></a>
                        <a href='#WhosOnFirstModule'><img src={WhosOnFirstComponent} alt="WhosOnFirst Module" width="120" height="120" /></a>
                    </div>
                    <div className="column">
                        <a href='#VennWireModule'><img src={VennWireComponent} alt="VennWire Module" width="120" height="120" /></a>
                        <a href='#WireSequenceModule'><img src={WireSequenceComponent} alt="Wire Sequence Module" width="120" height="120" /></a>
                        <a href='#MorseCodeModule'><img src={MorseCodeComponent} alt="MorseCode Module" width="120" height="120" /></a>
                        <a href='#NeedyKnobModule'><img src={NeedyKnobComponent} alt="NeedyKnob Module" width="120" height="120" /></a>
                    </div>
                </div>
            </div>

            <div className="page page-bg-01" id="WiresModule"><WiresModule /></div>
            <div className="page page-bg-02" id="ButtonModule"><ButtonModule /></div>
            <div className="page page-bg-03" id="MazeModule"><MazeModule /></div>
            <div className="page page-bg-04" id="KeypadModule"><KeypadModule /></div >

            <div className="page page-bg-05" id="MemoryModule"><MemoryModule /></div >
            <div className="page page-bg-06" id="PasswordModule"><PasswordModule /></div >
            <div className="page page-bg-07" id="SimonModule"><SimonModule /></div >
            <div className="page page-bg-01" id="WhosOnFirstModule"><WhosOnFirstModule /></div >

            <div className="page page-bg-02" id="VennWireModule"><VennWireModule /></div >
            <div className="page page-bg-03" id="WireSequenceModule"><WireSequenceModule /></div >
            <div className="page page-bg-04" id="MorseCodeModule"><MorseCodeModule /></div >
            <div className="page page-bg-05" id="NeedyKnobModule"><NeedyKnobModule /></div >
        </>
    );
}

export default App;
