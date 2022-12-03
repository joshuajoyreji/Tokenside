import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './startinvbutton.css';

export default class Startinvbutton extends React.Component {
  render() {
    return (
      <div>
        <Button className='start' >Start Invensting</Button>
      </div>
    );
  }
}
