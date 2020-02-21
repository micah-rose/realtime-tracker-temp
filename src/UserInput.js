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

class UserInput extends Component {

constructor(props){
  super(props);
  this.state={
  eid:'',
  policyNum:'',
  stat: ''
  }
 }

render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
           <h2>Associate Name</h2>
             <TextField
               hintText="Enter a Policy Number"
               floatingLabelText="Policy Number 1 "
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter a Policy Number"
               floatingLabelText="Policy Number 2"
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter a Policy Number"
               floatingLabelText="Policy Number 3"
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               />
             <br/>
             <TextField
               hintText="Notes"
               multiLine={true}
               rows={4}
               size="small"
               floatingLabelText="Notes"
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};

export default UserInput;