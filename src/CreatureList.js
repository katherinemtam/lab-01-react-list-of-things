import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureList.css';

class CreatureList extends Component {
  render() {
    return (
      <ul className="CreatureList">
        <CreatureItem />
        <CreatureItem />
        <CreatureItem />
        <CreatureItem />
        <CreatureItem />
        <CreatureItem />
        <CreatureItem />
        <CreatureItem />
      </ul>
    );
  }
}

export default CreatureList;