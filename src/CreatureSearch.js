import React, { Component } from 'react';
import './CreatureSearch.css';

class CreatureSearch extends Component {
  state = {}
  render() {
    return (
      <form className="CreatureSearch">

        <input />

        <select>
          <option value="">Sort</option>
          <option value="name">by name</option>
          <option value="horns">by horns</option>
        </select>

        <button>Search</button>

      </form>
    );
  }
}

export default CreatureSearch;