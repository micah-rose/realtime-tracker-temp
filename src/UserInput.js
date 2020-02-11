import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UserInput extends Component {

constructor(props){
  super(props);
  this.state={
  eid:'',
  policyNum:''
  }
 }

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
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