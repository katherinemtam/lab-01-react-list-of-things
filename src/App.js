import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import creaturesData from './creatures';
import './App.css';

class App extends Component {

  handleSearch = (search) => {
    console.log(search);
  }

  render() {

    return (

      <div className="App">

        <Header />

        <CreatureSearch onSearch={this.handleSearch} />

        <main>

          <CreatureList creaturesProp={creaturesData} />

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
