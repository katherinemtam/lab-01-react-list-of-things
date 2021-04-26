import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureList.css';

class CreatureList extends Component {
  render() {
    const creatures = this.props.creaturesProp;
    // console.log(creatures);
    return (
      <ul className="CreatureList">
        {creatures.map((eachCreatureItem, index) => {
          return <CreatureItem key={index} creatureProp={eachCreatureItem} />;
        })}
      </ul>
    );
  }
}

export default CreatureList;