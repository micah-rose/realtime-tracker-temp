import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import UserInput from './UserInput';
import Date from './CurrentDate';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EID from './EID';
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

function App() {
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
         </div>
         </MuiThemeProvider>
         <EID />
    </div>
  );
}

export default App;
