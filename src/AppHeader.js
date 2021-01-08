import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Date from './CurrentDate';
import AppBar from 'material-ui/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';


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

class AppHeader extends Component {

render() {
    return (
        <div>
        <MuiThemeProvider theme={theme}>         
            <div>
                <AppBar title='Real Time Stat Tracker'/>
                <br/>
            </div>
        </MuiThemeProvider>  
        <Date  />
        </div>
    );
}
}

export default AppHeader;