import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

const CreateUser = () => {
    return (
      <div>
          <div>
           <input type="text" placeholder="Username"/>
           <br/>
             <Button style={btnStyle}>Create Username</Button>
         </div>
      </div>
    );
  }

const btnStyle = {
 margin: 15,
 backgroundColor: 'teal',
 color: 'white'
};

export default CreateUser;