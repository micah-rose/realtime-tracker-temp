import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './App.css';

const EID = () => {
    return (
      <div>
          <div>
           <input type="text" placeholder="Username"/>
           <br/>
             <Button style={btnStyle}>Submit</Button>
             <br/>
             <Link to="/create-user" style={{fontSize: '15px'}}>Don't have a username? Create one!</Link>
         </div>
      </div>
    );
  }

const btnStyle = {
 margin: 15,
 backgroundColor: 'teal',
 color: 'white'
};

export default EID;