import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel';
import Board from '../Board';
import {createTiles} from '../../misc/utils'

import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTitleIndex: null,
      tiles: [],
      toBeCleared: null
    }
  }

  
  startGame = (numTiles) => {
    // Inside the body of the method
    // Pass in an anonymous function that takes state as a parameter
    // Return an object literal as the only argument
    this.setState((state) => ({
      // Setting properties
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(state.numTiles)
    })) 
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={playing} numTitles={numTiles} />
        <Board numTiles={numTiles} tiles={tiles}/>
    </div>
  );

  }
}

export default App;
