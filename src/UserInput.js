import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff4400',
        },
        secondary: {
            main:'#0066ff'
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

 //******COMMENTED OUT FOR REFACTORING******
//  handleClick(event){
//     var apiBaseUrl = "http://localhost:4000/api/";
//     var self = this;
//     var payload={
//     "eid":this.state.eid,
//     "policyNum":this.state.policyNum
//     }
//     axios.post(apiBaseUrl+'login', payload)
//     .then(function (response) {
//     console.log(response);

//     if(response.data.code == 200){
//     console.log("Display updated stats");
//     var uploadScreen=[];
//     uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//     }
//     else if(response.data.code == 204){
//     console.log("Not a valid policy number");
//     alert("Not a valid policy number")
//     }
//     else{
//     console.log("EID does not exist");
//     alert("EID does not exist");
//     }
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
//     }


render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
          <AppBar
             title="Travelex" //Will vary based on the addition of other stats
           />
           <TextField
             hintText="Enter your EID"
             floatingLabelText="EID"
             onChange = {(event,newValue) => this.setState({eid:newValue})}
             />
           <br/>
             <TextField
               hintText="Enter a Policy Number"
               floatingLabelText="Policy Number"
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