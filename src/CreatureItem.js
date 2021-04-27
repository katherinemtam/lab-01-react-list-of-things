import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {
  render() {

    const creature = this.props.creatureProp;
    // console.log(creature);
    return (
      <li className="CreatureItem">

        <h2>{creature.title}</h2>
        <img src={creature.url} alt={creature.title} />
        <p>{creature.description}</p>
        <p>Horns: {creature.horns}</p>

      </li>
    );
  }
}

export default CreatureItem;