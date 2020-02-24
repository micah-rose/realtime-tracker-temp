import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import EID from './EID';
import UserInput from './UserInput';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      isSubmit: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState=({
      isSubmit: true
    })
    console.log('Button clicked');
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
      </header>
      <AppHeader />
         {(!this.state.isSubmit) ? <EID action={this.handleClick}/> : <UserInput  />}       
    </div>
  );
}

}

export default App;
