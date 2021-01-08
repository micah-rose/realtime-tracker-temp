import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Date from './CurrentDate';
import AppBar from 'material-ui/AppBar';

class AppHeader extends Component {

render() {
    return (
        <div>
        <MuiThemeProvider >         
            <div>
                <AppBar style={{backgroundColor: 'teal'}} title='Real Time Stat Tracker'/>
                <br/>
            </div>
        </MuiThemeProvider>  
        <Date  />
        </div>
    );
}
}

export default AppHeader;