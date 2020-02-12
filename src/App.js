import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Date from './CurrentDate';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EID from './EID';
import UserInput from './UserInput';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
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
      <MuiThemeProvider theme={theme}>
            <CssBaseline />
          <div>
          <AppBar title='RealTime Stat Tracker'/>
          <br/>
           <Date format="MMMM D, YYYY" />
           <br/>
           {(!this.state.isSubmit) ? <EID id="eid"/> : <UserInput id="userInput" />}
           <RaisedButton label="Submit" primary={true} style={style} onClick={this.props.handleClick}/>
         </div>
         </MuiThemeProvider>
         <EID handleClick={this.handleClick} 
               userInputCollapsed={this.state.userInputCollapsed}
               profileCollapsed={this.state.profileCollapsed}/>
        
              
    </div>
  );
}

}

const style = {
  margin: 15,
 };

export default App;
