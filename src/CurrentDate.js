import React, {Component} from "react";
import Moment from 'react-moment';

const CurrentDate = () => {
    return (
      <div>
        <Moment format="MMMM D, YYYY" />
      </div>
    );
  }

export default CurrentDate;