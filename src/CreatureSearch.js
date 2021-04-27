import React, { Component } from 'react';
import './CreatureSearch.css';

class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    sortField: ''
  }

  handleNameFilter = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {

    const { nameFilter, sortField } = this.state;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <input
          name="nameFilter"
          value={nameFilter}
          onChange={this.handleNameFilter}
        />

        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
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