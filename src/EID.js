import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './App.css';

class EID extends Component {

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
           <Input
            style={inputStyle}
            placeholder="Enter your EID"
            onChange = {(event,newValue) => this.setState({eid:newValue})}
           />
           <br/>
             <Button style={btnStyle} onClick={this.props.action}>Submit</Button>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const inputStyle = {
  margin: 15
}

const btnStyle = {
 margin: 15,
 backgroundColor: 'teal',
 color: 'white'
};

export default EID;