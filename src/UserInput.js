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

 handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload={
    "eid":this.state.eid,
    "policyNum":this.state.policyNum
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);

    if(response.data.code == 200){
    console.log("Display new stats");
    var uploadScreen=[];
    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.data.code == 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
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