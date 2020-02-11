import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
      </header>
      <UserInput />
    </div>
  );
}

export default App;
