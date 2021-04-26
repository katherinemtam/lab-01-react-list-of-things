import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {
  render() {
    return (
      <li className="CreatureItem">
        <h2>Creature's Name</h2>
        <img src="" alt="" />
        <p>Description</p>
      </li>
    );
  }
}

export default CreatureItem;