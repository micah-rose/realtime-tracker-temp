import React, {Component} from "react";
import Moment from 'react-moment';

class CurrentDate extends Component {

  render() {
    return (
      <div>
        <Moment format="MMMM D, YYYY" />
      </div>
    );
  }
}

export default CurrentDate;