import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './createbutton.css';

export default class Createbutton extends React.Component {
  render() {
    return (
      <div>
        <Button className='create' >Create Startup</Button>
      </div>
    );
  }
}
