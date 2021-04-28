import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import creaturesData from './creatures';
import './App.css';

class App extends Component {

  render() {

    return (

      <div className="App">

        <Header />

        <main>
          <CreatureList
            creaturesProp={creaturesData} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
