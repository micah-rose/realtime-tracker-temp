import React, { Component } from 'react';
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
      <AppHeader />
         {(!this.state.isSubmit) ? <EID action={this.handleClick}/> : <UserInput  />}       
    </div>
  );
}

}

export default App;
