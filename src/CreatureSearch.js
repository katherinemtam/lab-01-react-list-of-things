import React, { Component } from 'react';
import './CreatureSearch.css';

class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    hornFilter: '',
    sortField: ''
  }

  handleNameFilter = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleHornFilter = ({ target }) => {
    this.setState({ hornFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  //takes in props and state ==> update state according to field input
  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {

    const { nameFilter, hornFilter, sortField } = this.state;
    const { horns } = this.props;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>
        <p>Name:</p>
        <input
          name="nameFilter"
          value={nameFilter}
          onChange={this.handleNameFilter}
        />

        <p>Horns:</p>
        <select
          name="hornFilter"
          value={hornFilter}
          onChange={this.handleHornFilter}
        >
          <option value="">Sort</option>
          {horns.map(horn => (
            <option
              key={horn}
              value={horn}
            > {horn}
            </option>
          ))}
        </select>


        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">Sort</option>
          <option value="title">by title</option>
          <option value="horns">by horns</option>
        </select>

        <button>Search</button>

      </form>
    );
  }
}

export default CreatureSearch;