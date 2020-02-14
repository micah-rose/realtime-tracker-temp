import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import EID from './EID';
import UserInput from './UserInput';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
      background: {
      default: "#303030"
      },
      primary: {
          main: '#ff4400',
      },
      secondary: {
          light:'#0066ff',
          main: '#0044ff',
          contrastText: '#ffcc00'
      } 
  }
});

class App extends Component {

  constructor() {
    super();
    this.state={
      isSubmit: false,
      userInputCollapsed: false,
      eidCollapsed: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState=({
      userInputCollapsed: !this.state.userInputCollapsed,
      eidCollapsed: !this.state.eidCollapsed,
      isSubmit: true
    })
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
      </header>
      <AppHeader />
         {(!this.state.isSubmit) ? <EID id="eid"/> : <UserInput id="userInput" />}
         <EID handleClick={this.handleClick} 
               userInputCollapsed={this.state.userInputCollapsed}
               profileCollapsed={this.state.eidCollapsed}/>          
    </div>
  );
}

}

export default App;
