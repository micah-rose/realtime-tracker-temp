import React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import EID from './EID';
// import UserInput from './UserInput';
import './App.css';

const App = () => {

  // constructor(props) {
  //   super(props);
  //   this.state={
  //     isSubmit: false,
  //   }
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(){
  //   this.setState=({
  //     isSubmit: true
  //   })
  //   console.log('Button clicked');
  // }

  return (
    <div className="App">
      <AppHeader />
      <br/>
      <EID />
         {/* {(!this.state.isSubmit) ? <EID action={this.handleClick}/> : <UserInput  />}        */}
    </div>
  );
}


export default App;
