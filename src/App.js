import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import creaturesData from './creatures';
import './App.css';

const hornOptions = [...new Set(creaturesData.map(creature => creature.horns))];

class App extends Component {
  state = {
    creatures: creaturesData
  }

  handleSearch = ({ nameFilter, hornFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creaturesData

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


    this.setState({ creatures: searchedData });

  }

  render() {

    //makes sure original data is shown when no inputs/sort is selected
    //referring to line 11 in initialized state
    const { creatures } = this.state;

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
