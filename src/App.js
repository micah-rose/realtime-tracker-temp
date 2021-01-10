import React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import EID from './EID';
import CreateUser from './CreateUser';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route exact component={EID} path="/" />
          <Route exact component={CreateUser} path="/create-user" />
        </Switch>
      </Router>

    </div>
  );
}


export default App;
