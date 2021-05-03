import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import request from 'superagent';
import './App.css';

class App extends Component {
  state = {
    creatures: [],
    hornOptions: [],
  }

  componentDidMount() {
    this.handleSearch({});
  }

  handleSearch = async ({ nameFilter, hornFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const response = await request.get('https://express-node-jest-heroku.herokuapp.com/api/creatures');
    const hornOptions = [...new Set(response.body.map(creature => creature.horns))];
    const searchedData = response.body

      .filter(creature => {
        return creature.title.match(nameRegex);
      })

      .filter(creature => {
        console.log(creature.horns);
        return !hornFilter || creature.horns === Number(hornFilter);
      })

      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });


    this.setState({ creatures: searchedData, hornOptions: hornOptions });

  }

  render() {

    //makes sure original data is shown when no inputs/sort is selected
    //referring to line 11 in initialized state
    const { creatures, hornOptions } = this.state;

    return (

      <div className="App">

        <Header />

        <CreatureSearch
          onSearch={this.handleSearch}
          horns={hornOptions} />

        <main>

          <CreatureList creaturesProp={creatures} />

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
