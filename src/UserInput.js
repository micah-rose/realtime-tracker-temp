import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
// import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';


// const theme = createMuiTheme({
//     palette: {
//         background: {
//         default: "#303030"
//         },
//         primary: {
//             main: '#ff4400',
//         },
//         secondary: {
//             light:'#0066ff',
//             main: '#0044ff',
//             contrastText: '#ffcc00'
//         } 
//     }
// });

const UserInput = () => {

// constructor(props){
//   super(props);
//   this.state={
//   eid:'',
//   policyNum:'',
//   stat: ''
//   }
//  }

    return (
      <div>
        <MuiThemeProvider>
          <div>
           <h2>Associate Name</h2>
             {/* <Input
               hintText="Enter a Policy Number"
               floatingLabelText="Policy Number 1 "
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               />
             <br/>
             <Input
               hintText="Enter a Policy Number"
               floatingLabelText="Policy Number 2"
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               />
             <br/>
             <Input
               hintText="Enter a Policy Number"
               floatingLabelText="Policy Number 3"
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               />
             <br/>
             <Input
               hintText="Notes"
               multiLine={true}
               rows={4}
               size="small"
               floatingLabelText="Notes"
               onChange = {(event,newValue) => this.setState({policyNum:newValue})}
               /> */}
             <br/>
             <Button label="Submit" primary={true} style={style}>Submit</Button>
             {/* onClick={(event) => this.handleClick(event)} */}
         </div>
         </MuiThemeProvider>
      </div>
    );
  }


const style = {
 margin: 15,
};

export default UserInput;