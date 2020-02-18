import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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

class EID extends Component {

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
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
           <TextField
             hintText="Enter your EID"
             floatingLabelText="EID"
             onChange = {(event,newValue) => this.setState({eid:newValue})}
             />
           <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={this.props.handleClick}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};

export default EID;